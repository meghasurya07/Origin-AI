import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { validateEmail } from "../../lib/email-validator";

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) throw new Error("Missing Supabase env vars");
  return createClient(url, key);
}

interface ParsedUA {
  deviceType: "mobile" | "tablet" | "desktop" | "bot";
  os: string | null;
  osVersion: string | null;
  browser: string | null;
  browserVersion: string | null;
}

function parseUserAgent(ua: string): ParsedUA {
  if (!ua) {
    return {
      deviceType: "desktop",
      os: null,
      osVersion: null,
      browser: null,
      browserVersion: null,
    };
  }

  // Bot detection
  if (/bot|crawler|spider|slurp|bingbot|googlebot|yandex|duckduckbot/i.test(ua)) {
    return {
      deviceType: "bot",
      os: null,
      osVersion: null,
      browser: "Bot/Crawler",
      browserVersion: null,
    };
  }

  // Device type
  let deviceType: "mobile" | "tablet" | "desktop" = "desktop";
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    deviceType = "tablet";
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated/i.test(
      ua
    )
  ) {
    deviceType = "mobile";
  }

  // Operating System
  let os: string | null = null;
  let osVersion: string | null = null;

  if (/Windows NT/i.test(ua)) {
    os = "Windows";
    const match = ua.match(/Windows NT ([0-9._]+)/i);
    if (match) {
      const ver = match[1];
      if (ver === "10.0") osVersion = "10/11";
      else if (ver === "6.3") osVersion = "8.1";
      else if (ver === "6.2") osVersion = "8";
      else if (ver === "6.1") osVersion = "7";
      else osVersion = ver;
    }
  } else if (/iPad/i.test(ua)) {
    os = "iPadOS";
    const match = ua.match(/OS ([0-9._]+)/i);
    if (match) osVersion = match[1].replace(/_/g, ".");
  } else if (/iPhone|iPod/i.test(ua)) {
    os = "iOS";
    const match = ua.match(/OS ([0-9._]+)/i);
    if (match) osVersion = match[1].replace(/_/g, ".");
  } else if (/Mac OS X/i.test(ua)) {
    os = "macOS";
    const match = ua.match(/Mac OS X ([0-9._]+)/i);
    if (match) osVersion = match[1].replace(/_/g, ".");
  } else if (/Android/i.test(ua)) {
    os = "Android";
    const match = ua.match(/Android ([0-9._]+)/i);
    if (match) osVersion = match[1];
  } else if (/CrOS/i.test(ua)) {
    os = "Chrome OS";
  } else if (/Linux/i.test(ua)) {
    os = "Linux";
  }

  // Browser
  let browser: string | null = null;
  let browserVersion: string | null = null;

  if (/Edg(?:e|A|iOS)?\/([0-9.]+)/i.test(ua)) {
    browser = "Edge";
    browserVersion = ua.match(/Edg(?:e|A|iOS)?\/([0-9.]+)/i)?.[1] || null;
  } else if (/OPR\/([0-9.]+)|Opera\/([0-9.]+)/i.test(ua)) {
    browser = "Opera";
    browserVersion = ua.match(/(?:OPR|Opera)\/([0-9.]+)/i)?.[1] || null;
  } else if (/SamsungBrowser\/([0-9.]+)/i.test(ua)) {
    browser = "Samsung Internet";
    browserVersion = ua.match(/SamsungBrowser\/([0-9.]+)/i)?.[1] || null;
  } else if (/Firefox\/([0-9.]+)/i.test(ua)) {
    browser = "Firefox";
    browserVersion = ua.match(/Firefox\/([0-9.]+)/i)?.[1] || null;
  } else if (/Chrome\/([0-9.]+)/i.test(ua)) {
    browser = "Chrome";
    browserVersion = ua.match(/Chrome\/([0-9.]+)/i)?.[1] || null;
  } else if (/Version\/([0-9.]+).*Safari/i.test(ua)) {
    browser = "Safari";
    browserVersion = ua.match(/Version\/([0-9.]+)/i)?.[1] || null;
  }

  return { deviceType, os, osVersion, browser, browserVersion };
}

function extractDomain(urlStr: string | null | undefined): string | null {
  if (!urlStr) return null;
  try {
    const parsed = new URL(urlStr);
    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

function extractClientIp(request: Request): string | null {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const first = forwardedFor.split(",")[0]?.trim();
    if (first) return first;
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  const cfIp = request.headers.get("cf-connecting-ip");
  if (cfIp) return cfIp.trim();
  return null;
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const email = body.email;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Multi-layered email validation (syntax, test/placeholder blacklist, disposable domain, provider rules, DNS MX check)
    const validation = await validateEmail(email, { checkDns: true });
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.reason || "Please enter a valid, active email address." },
        { status: 400 }
      );
    }

    const cleanEmail = email.toLowerCase().trim();

    // ── Server-side telemetry extraction ─────────────────────────────
    const headers = request.headers;
    const ip = extractClientIp(request);
    const userAgent = headers.get("user-agent") || "";
    const uaInfo = parseUserAgent(userAgent);

    // Geolocation from Vercel edge headers
    const country = headers.get("x-vercel-ip-country") || null;
    const region = headers.get("x-vercel-ip-country-region") || null;
    const rawCity = headers.get("x-vercel-ip-city");
    let city: string | null = null;
    if (rawCity) {
      try {
        city = decodeURIComponent(rawCity);
      } catch {
        city = rawCity;
      }
    }
    const postalCode = headers.get("x-vercel-ip-postal-code") || null;
    const timezone =
      headers.get("x-vercel-ip-timezone") || body.timezone || null;

    const rawLat = headers.get("x-vercel-ip-latitude");
    const rawLng = headers.get("x-vercel-ip-longitude");
    const latitude = rawLat && !isNaN(Number(rawLat)) ? Number(rawLat) : null;
    const longitude = rawLng && !isNaN(Number(rawLng)) ? Number(rawLng) : null;

    // Language & Referrer
    const language =
      body.language ||
      headers.get("accept-language")?.split(",")[0]?.trim() ||
      null;
    const finalReferrer = body.referrer || headers.get("referer") || null;
    const referrerDomain = extractDomain(finalReferrer);

    // Metadata JSONB combining client stats & server flags
    const metadata = {
      ...(body.clientMetadata && typeof body.clientMetadata === "object"
        ? body.clientMetadata
        : {}),
      request_headers: {
        sec_ch_ua: headers.get("sec-ch-ua") || undefined,
        sec_ch_ua_mobile: headers.get("sec-ch-ua-mobile") || undefined,
        sec_ch_ua_platform: headers.get("sec-ch-ua-platform") || undefined,
        accept_language: headers.get("accept-language") || undefined,
        host: headers.get("host") || undefined,
      },
      collected_at: new Date().toISOString(),
    };

    // Full enterprise record
    const subscriberRecord = {
      email: cleanEmail,
      status: "active",
      source: "cta_waitlist",
      ip_address: ip,
      country,
      region,
      city,
      postal_code: postalCode,
      timezone,
      latitude,
      longitude,
      user_agent: userAgent || null,
      device_type: uaInfo.deviceType,
      browser: uaInfo.browser,
      browser_version: uaInfo.browserVersion,
      os: uaInfo.os,
      os_version: uaInfo.osVersion,
      screen_resolution: body.screenResolution || null,
      viewport: body.viewport || null,
      language,
      referrer: finalReferrer,
      referrer_domain: referrerDomain,
      landing_page: body.landingPage || null,
      utm_source: body.utmSource || null,
      utm_medium: body.utmMedium || null,
      utm_campaign: body.utmCampaign || null,
      utm_term: body.utmTerm || null,
      utm_content: body.utmContent || null,
      metadata,
    };

    const supabase = getSupabase();

    let { error } = await supabase
      .from("subscribers")
      .insert(subscriberRecord);

    // Fail-safe: if full schema insert fails for any unexpected schema reason,
    // fallback to minimal email insert so no lead is ever lost
    if (error && error.code !== "23505") {
      console.warn("Retrying with minimal payload due to error:", error);
      const fallbackResult = await supabase
        .from("subscribers")
        .insert({ email: cleanEmail });
      error = fallbackResult.error;
    }

    if (error) {
      // Unique constraint violation = already subscribed
      if (error.code === "23505") {
        return NextResponse.json(
          { message: "You're already subscribed!" },
          { status: 200 }
        );
      }
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Successfully subscribed!" },
      { status: 201 }
    );
  } catch (err) {
    console.error("Subscription API handler error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
