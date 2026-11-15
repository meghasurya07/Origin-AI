export interface ClientTelemetry {
  screenResolution: string | null;
  viewport: string | null;
  language: string | null;
  timezone: string | null;
  referrer: string | null;
  landingPage: string | null;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmTerm: string | null;
  utmContent: string | null;
  clientMetadata: Record<string, unknown>;
}

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

/**
 * Capture and persist UTM tags from URL search params into sessionStorage
 * so attribution is preserved even if the user navigates across pages.
 */
export function captureUtmParams(): void {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    for (const key of UTM_KEYS) {
      const val = params.get(key);
      if (val) {
        sessionStorage.setItem(`origin_${key}`, val);
      }
    }
  } catch {
    // sessionStorage may be blocked in strict private browsing modes
  }
}

/**
 * Safely extract client-side telemetry (screen resolution, viewport,
 * language, timezone, attribution, hardware capabilities) without blocking the UI.
 */
export function getClientTelemetry(): ClientTelemetry {
  if (typeof window === "undefined") {
    return {
      screenResolution: null,
      viewport: null,
      language: null,
      timezone: null,
      referrer: null,
      landingPage: null,
      utmSource: null,
      utmMedium: null,
      utmCampaign: null,
      utmTerm: null,
      utmContent: null,
      clientMetadata: {},
    };
  }

  let urlParams: URLSearchParams | null = null;
  try {
    urlParams = new URLSearchParams(window.location.search);
  } catch {
    urlParams = null;
  }

  const getUtm = (key: (typeof UTM_KEYS)[number]): string | null => {
    const fromUrl = urlParams?.get(key);
    if (fromUrl) return fromUrl;
    try {
      return sessionStorage.getItem(`origin_${key}`) || null;
    } catch {
      return null;
    }
  };

  const nav = typeof navigator !== "undefined" ? (navigator as unknown as Record<string, unknown>) : null;
  const connection = (nav?.connection ||
    nav?.mozConnection ||
    nav?.webkitConnection) as Record<string, unknown> | undefined;

  let timezone: string | null = null;
  try {
    timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || null;
  } catch {
    timezone = null;
  }

  let prefersColorScheme: "dark" | "light" | null = null;
  try {
    if (window.matchMedia) {
      prefersColorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
  } catch {
    prefersColorScheme = null;
  }

  return {
    screenResolution: window.screen ? `${window.screen.width}x${window.screen.height}` : null,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    language: (typeof navigator !== "undefined" && navigator.language) || null,
    timezone,
    referrer: typeof document !== "undefined" && document.referrer ? document.referrer : null,
    landingPage: window.location ? `${window.location.pathname}${window.location.search}` : null,
    utmSource: getUtm("utm_source"),
    utmMedium: getUtm("utm_medium"),
    utmCampaign: getUtm("utm_campaign"),
    utmTerm: getUtm("utm_term"),
    utmContent: getUtm("utm_content"),
    clientMetadata: {
      client_timestamp: new Date().toISOString(),
      pixel_ratio: window.devicePixelRatio || 1,
      color_depth: window.screen?.colorDepth ?? null,
      hardware_concurrency: typeof navigator !== "undefined" ? navigator.hardwareConcurrency ?? null : null,
      device_memory_gb: (nav?.deviceMemory as number) ?? null,
      touch_points: typeof navigator !== "undefined" ? navigator.maxTouchPoints ?? 0 : 0,
      prefers_color_scheme: prefersColorScheme,
      connection: connection
        ? {
            effective_type: connection.effectiveType,
            save_data: connection.saveData,
            downlink: connection.downlink,
            rtt: connection.rtt,
          }
        : null,
    },
  };
}
