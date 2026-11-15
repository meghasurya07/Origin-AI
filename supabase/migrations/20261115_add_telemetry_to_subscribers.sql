-- Migration: Add enterprise telemetry columns to subscribers table
-- Applied at: 2026-11-15
-- Purpose: Capture comprehensive device, network, geolocation, and marketing attribution data (Stripe/OpenAI style)

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
  ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT now();

-- Helpful indexes for admin dashboard & analytics
CREATE INDEX IF NOT EXISTS idx_subscribers_country ON subscribers(country);
CREATE INDEX IF NOT EXISTS idx_subscribers_source ON subscribers(source);
CREATE INDEX IF NOT EXISTS idx_subscribers_subscribed_at ON subscribers(subscribed_at DESC);
