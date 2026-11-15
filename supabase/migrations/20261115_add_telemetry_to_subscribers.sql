-- Migration: Add enterprise telemetry, fraud scoring, and CDP ingestion
-- Applied at: 2026-11-15
-- Purpose: Capture comprehensive device, network, geolocation, marketing attribution,
--          deliverability risk scoring, and atomic upsert capabilities (Stripe/OpenAI style)

ALTER TABLE subscribers
  -- Network & Identity
  ADD COLUMN IF NOT EXISTS ip_address text,
  
  -- Geolocation (via Vercel Edge Headers & Client)
  ADD COLUMN IF NOT EXISTS country text,
  ADD COLUMN IF NOT EXISTS region text,
  ADD COLUMN IF NOT EXISTS city text,
  ADD COLUMN IF NOT EXISTS postal_code text,
  ADD COLUMN IF NOT EXISTS timezone text,
  ADD COLUMN IF NOT EXISTS latitude numeric,
  ADD COLUMN IF NOT EXISTS longitude numeric,

  -- Device & Environment
  ADD COLUMN IF NOT EXISTS user_agent text,
  ADD COLUMN IF NOT EXISTS device_type text,
  ADD COLUMN IF NOT EXISTS browser text,
  ADD COLUMN IF NOT EXISTS browser_version text,
  ADD COLUMN IF NOT EXISTS os text,
  ADD COLUMN IF NOT EXISTS os_version text,
  ADD COLUMN IF NOT EXISTS screen_resolution text,
  ADD COLUMN IF NOT EXISTS viewport text,
  ADD COLUMN IF NOT EXISTS language text,

  -- Marketing & Attribution (UTM & Referrer)
  ADD COLUMN IF NOT EXISTS referrer text,
  ADD COLUMN IF NOT EXISTS referrer_domain text,
  ADD COLUMN IF NOT EXISTS landing_page text,
  ADD COLUMN IF NOT EXISTS utm_source text,
  ADD COLUMN IF NOT EXISTS utm_medium text,
  ADD COLUMN IF NOT EXISTS utm_campaign text,
  ADD COLUMN IF NOT EXISTS utm_term text,
  ADD COLUMN IF NOT EXISTS utm_content text,

  -- Enterprise Auditing & Extensibility
  ADD COLUMN IF NOT EXISTS source text DEFAULT 'cta_waitlist',
  ADD COLUMN IF NOT EXISTS metadata jsonb DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT now(),

  -- Deliverability & Fraud Classification (CDP Suite)
  ADD COLUMN IF NOT EXISTS deliverability_score numeric DEFAULT 100,
  ADD COLUMN IF NOT EXISTS risk_level text DEFAULT 'low',
  ADD COLUMN IF NOT EXISTS is_corporate_email boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS domain_reputation text,
  ADD COLUMN IF NOT EXISTS submission_count integer DEFAULT 1,
  ADD COLUMN IF NOT EXISTS interaction_time_ms integer,
  ADD COLUMN IF NOT EXISTS mx_records jsonb DEFAULT '[]'::jsonb;

-- Helpful indexes for admin dashboard & analytics
CREATE INDEX IF NOT EXISTS idx_subscribers_country ON subscribers(country);
CREATE INDEX IF NOT EXISTS idx_subscribers_source ON subscribers(source);
CREATE INDEX IF NOT EXISTS idx_subscribers_subscribed_at ON subscribers(subscribed_at DESC);
CREATE INDEX IF NOT EXISTS idx_subscribers_risk_level ON subscribers(risk_level);
CREATE INDEX IF NOT EXISTS idx_subscribers_is_corporate ON subscribers(is_corporate_email);

-- Atomic Stored Procedure: Handles new signups + re-engagements seamlessly
CREATE OR REPLACE FUNCTION upsert_subscriber(
  p_email text,
  p_status text,
  p_source text,
  p_ip_address text,
  p_country text,
  p_region text,
  p_city text,
  p_postal_code text,
  p_timezone text,
  p_latitude numeric,
  p_longitude numeric,
  p_user_agent text,
  p_device_type text,
  p_browser text,
  p_browser_version text,
  p_os text,
  p_os_version text,
  p_screen_resolution text,
  p_viewport text,
  p_language text,
  p_referrer text,
  p_referrer_domain text,
  p_landing_page text,
  p_utm_source text,
  p_utm_medium text,
  p_utm_campaign text,
  p_utm_term text,
  p_utm_content text,
  p_metadata jsonb,
  p_deliverability_score numeric,
  p_risk_level text,
  p_is_corporate_email boolean,
  p_domain_reputation text,
  p_interaction_time_ms integer,
  p_mx_records jsonb
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_id uuid;
  v_is_new boolean;
  v_count integer;
BEGIN
  INSERT INTO subscribers (
    email,
    status,
    source,
    ip_address,
    country,
    region,
    city,
    postal_code,
    timezone,
    latitude,
    longitude,
    user_agent,
    device_type,
    browser,
    browser_version,
    os,
    os_version,
    screen_resolution,
    viewport,
    language,
    referrer,
    referrer_domain,
    landing_page,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_term,
    utm_content,
    metadata,
    deliverability_score,
    risk_level,
    is_corporate_email,
    domain_reputation,
    interaction_time_ms,
    mx_records,
    submission_count,
    subscribed_at,
    updated_at
  ) VALUES (
    p_email,
    COALESCE(p_status, 'active'),
    COALESCE(p_source, 'cta_waitlist'),
    p_ip_address,
    p_country,
    p_region,
    p_city,
    p_postal_code,
    p_timezone,
    p_latitude,
    p_longitude,
    p_user_agent,
    p_device_type,
    p_browser,
    p_browser_version,
    p_os,
    p_os_version,
    p_screen_resolution,
    p_viewport,
    p_language,
    p_referrer,
    p_referrer_domain,
    p_landing_page,
    p_utm_source,
    p_utm_medium,
    p_utm_campaign,
    p_utm_term,
    p_utm_content,
    COALESCE(p_metadata, '{}'::jsonb),
    p_deliverability_score,
    p_risk_level,
    p_is_corporate_email,
    p_domain_reputation,
    p_interaction_time_ms,
    COALESCE(p_mx_records, '[]'::jsonb),
    1,
    now(),
    now()
  )
  ON CONFLICT (email) DO UPDATE SET
    updated_at = now(),
    submission_count = subscribers.submission_count + 1,
    ip_address = COALESCE(EXCLUDED.ip_address, subscribers.ip_address),
    country = COALESCE(EXCLUDED.country, subscribers.country),
    region = COALESCE(EXCLUDED.region, subscribers.region),
    city = COALESCE(EXCLUDED.city, subscribers.city),
    user_agent = COALESCE(EXCLUDED.user_agent, subscribers.user_agent),
    device_type = COALESCE(EXCLUDED.device_type, subscribers.device_type),
    browser = COALESCE(EXCLUDED.browser, subscribers.browser),
    os = COALESCE(EXCLUDED.os, subscribers.os),
    landing_page = COALESCE(EXCLUDED.landing_page, subscribers.landing_page),
    utm_source = COALESCE(EXCLUDED.utm_source, subscribers.utm_source),
    utm_medium = COALESCE(EXCLUDED.utm_medium, subscribers.utm_medium),
    utm_campaign = COALESCE(EXCLUDED.utm_campaign, subscribers.utm_campaign),
    metadata = subscribers.metadata || jsonb_build_object(
      'last_reengagement', now(),
      'latest_submission_telemetry', EXCLUDED.metadata
    )
  RETURNING id, (xmax = 0) INTO v_id, v_is_new;

  SELECT submission_count INTO v_count FROM subscribers WHERE id = v_id;

  RETURN jsonb_build_object(
    'id', v_id,
    'is_new', v_is_new,
    'submission_count', v_count
  );
END;
$$;

GRANT EXECUTE ON FUNCTION upsert_subscriber TO anon, authenticated, service_role;
