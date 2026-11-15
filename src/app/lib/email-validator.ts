/**
 * Production Email Validator
 * Multi-layered validation:
 * 1. RFC 5322 syntax & structural rules
 * 2. Typo detection & "Did you mean" suggestions
 * 3. Known test/fake/placeholder localpart blacklist
 * 4. Comprehensive disposable / temporary email domain blacklist
 * 5. Provider-specific username rules (Gmail 6-30 chars, Yahoo 4-32, etc.)
 * 6. Live DNS MX record verification (via DNS-over-HTTPS with fail-open fallback)
 */

export interface EmailValidationResult {
  valid: boolean;
  reason?: string;
  suggestion?: string;
}

// ── 1. Common Domain Typos ───────────────────────────────────────────

const COMMON_TYPOS: Record<string, string> = {
  "gmai.com": "gmail.com",
  "gamil.com": "gmail.com",
  "gmal.com": "gmail.com",
  "gmaill.com": "gmail.com",
  "gmial.com": "gmail.com",
  "gmaik.com": "gmail.com",
  "gmaul.com": "gmail.com",
  "gmeil.com": "gmail.com",
  "yaho.com": "yahoo.com",
  "yahooo.com": "yahoo.com",
  "yhaoo.com": "yahoo.com",
  "yaho.co.in": "yahoo.co.in",
  "hotmial.com": "hotmail.com",
  "hotmaill.com": "hotmail.com",
  "hotmali.com": "hotmail.com",
  "hotmai.com": "hotmail.com",
  "outlok.com": "outlook.com",
  "outloo.com": "outlook.com",
  "outllok.com": "outlook.com",
  "outlock.com": "outlook.com",
  "iclud.com": "icloud.com",
  "iclou.com": "icloud.com",
  "protonmaill.com": "protonmail.com",
};

// ── 2. Fake / Placeholder Localparts ──────────────────────────────────

const PLACEHOLDER_USERS = new Set([
  // Obvious test names
  "test",
  "testing",
  "tester",
  "test1",
  "test2",
  "test12",
  "test123",
  "testemail",
  "testaccount",
  "mytest",
  "demo",
  "trial",

  // Fake indicators
  "fake",
  "fakemail",
  "fakeemail",
  "dummy",
  "sample",
  "example",

  // Keyboard smashes
  "asdf",
  "asdfg",
  "asdfgh",
  "asdfghjkl",
  "qwerty",
  "qwertyuiop",
  "zxcv",
  "zxcvbnm",
  "12345",
  "123456",
  "1234567",
  "12345678",
  "123456789",

  // Null / empty / nobody
  "null",
  "undefined",
  "none",
  "nobody",
  "noemail",
  "no-reply",
  "noreply",
  "donotreply",
  "do-not-reply",
  "temp",
  "temporary",
  "trash",
  "spam",
  "junk",
  "throwaway",

  // Generic / dismissive
  "user",
  "username",
  "someone",
  "anyone",
  "me",
  "anonymous",
  "nothanks",
  "idontcare",
  "whatever",
  "email",
  "mail",
  "myemail",
]);

// Roles that are never individual people on consumer webmail (Gmail, Yahoo, Outlook)
const CONSUMER_RESERVED_ROLES = new Set([
  "admin",
  "administrator",
  "root",
  "postmaster",
  "hostmaster",
  "webmaster",
  "abuse",
  "security",
  "noc",
  "info",
  "contact",
  "support",
  "help",
  "sales",
  "marketing",
  "billing",
  "office",
  "service",
  "team",
  "press",
  "media",
  "hr",
  "jobs",
  "careers",
]);

// ── 3. Disposable / Temporary Email Domains ───────────────────────────

const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "mailinator.net",
  "mailinator.org",
  "mailinator2.com",
  "guerrillamail.com",
  "guerrillamailblock.com",
  "guerrillamail.biz",
  "guerrillamail.de",
  "guerrillamail.net",
  "guerrillamail.org",
  "sharklasers.com",
  "grr.la",
  "tempmail.com",
  "temp-mail.org",
  "temp-mail.io",
  "tempmail.net",
  "tempmail.io",
  "tempail.com",
  "10minutemail.com",
  "10minutemail.net",
  "10minute.email",
  "yopmail.com",
  "yopmail.fr",
  "yopmail.net",
  "cool.fr.nf",
  "jetable.fr.nf",
  "throwawaymail.com",
  "trashmail.com",
  "trashmail.net",
  "trashmail.me",
  "trashmail.org",
  "trash-mail.com",
  "trash-mail.at",
  "trash-me.com",
  "dispostable.com",
  "fakemailgenerator.com",
  "burnermail.io",
  "getnada.com",
  "nada.ltd",
  "nada.email",
  "abckiss.com",
  "cmail.club",
  "dropmail.me",
  "inboxkitten.com",
  "mytemp.email",
  "mytempemail.com",
  "generator.email",
  "mohmal.com",
  "mohmal.in",
  "crazymailing.com",
  "fakeinbox.com",
  "tempinbox.com",
  "tempinbox.co",
  "throwawayemailaddress.com",
  "emailondeck.com",
  "tmailor.com",
  "luxusmail.com",
  "minuteinbox.com",
  "byom.de",
  "fakemail.net",
  "maildrop.cc",
  "harakirimail.com",
  "meltmail.com",
  "spambox.us",
  "discard.email",
  "mailcatch.com",
  "e4ward.com",
  "gishpuppy.com",
  "hidemyass.com",
  "mailnesia.com",
  "spamex.com",
  "spamgourmet.com",
  "tempemail.co",
  "anonymbox.com",
  "deadfake.com",
  "disposeamail.com",
  "filzmail.com",
  "incognitomail.org",
  "jetable.org",
  "kasmail.com",
  "mailfreeonline.com",
  "mailimate.com",
  "mytrashmail.com",
  "nomail.xl.cx",
  "nospam.ze.tc",
  "safetymail.info",
  "sneakemail.com",
  "sofort-mail.de",
  "spamfree24.org",
  "spaml.com",
  "temporaryemail.net",
  "tempsky.com",
  "whyspam.me",
  "zoemail.org",
  "chacuo.net",
  "0-mail.com",
  "0815.ru",
  "0clickemail.com",
  "10mail.org",
  "20minutemail.com",
  "33mail.com",
  "boun.cr",
  "boximail.com",
  "drdrb.net",
  "fastmail.fm",
  "guerrillamail.info",
  "inboxproxy.com",
  "koszmail.pl",
  "mailseal.de",
  "mailslurp.com",
  "nowmymail.com",
  "oneoffmail.com",
  "pookmail.com",
  "privatemail.com",
  "rootfest.net",
  "shortmail.com",
  "slopsbox.com",
  "spambob.com",
  "spamday.com",
  "spamevader.com",
  "superrito.com",
  "suremail.info",
  "tafmail.com",
  "teleworm.us",
  "trbvm.com",
  "armyspy.com",
  "cuvox.de",
  "dayrep.com",
  "fleckens.hu",
  "gustr.com",
  "jourrapide.com",
  "rhyta.com",
  "tinypm.com",
]);

// ── 4. DNS MX Lookup via DoH ──────────────────────────────────────────

async function verifyDomainMx(domain: string): Promise<boolean> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 2000);

  try {
    // Primary: Google Public DNS DoH
    const res = await fetch(
      `https://dns.google/resolve?name=${encodeURIComponent(domain)}&type=MX`,
      { signal: controller.signal }
    );
    clearTimeout(timer);

    if (!res.ok) return true; // Fail open if API issue

    const data = await res.json();

    // Status 3 = NXDOMAIN (domain does not exist)
    if (data.Status === 3) {
      return false;
    }

    // Check if MX records are present
    if (
      Array.isArray(data.Answer) &&
      data.Answer.some((ans: { type: number }) => ans.type === 15)
    ) {
      return true;
    }

    // Fallback: Check if A record exists (RFC 5321 fallback)
    const resA = await fetch(
      `https://dns.google/resolve?name=${encodeURIComponent(domain)}&type=A`,
      { signal: AbortSignal.timeout(1500) }
    ).catch(() => null);

    if (resA && resA.ok) {
      const dataA = await resA.json();
      if (
        Array.isArray(dataA.Answer) &&
        dataA.Answer.some((ans: { type: number }) => ans.type === 1)
      ) {
        return true;
      }
    }

    // Neither MX nor A record found
    return false;
  } catch {
    // If network or DNS resolution times out, fail open so legitimate users aren't blocked
    return true;
  }
}

// ── 5. Main Validation Function ───────────────────────────────────────

/**
 * Validates an email address synchronously for syntax, placeholders,
 * and disposable domains, and asynchronously for DNS MX verification.
 */
export async function validateEmail(
  rawEmail: unknown,
  options: { checkDns?: boolean } = { checkDns: true }
): Promise<EmailValidationResult> {
  if (!rawEmail || typeof rawEmail !== "string") {
    return { valid: false, reason: "Email is required." };
  }

  const email = rawEmail.toLowerCase().trim();

  // Basic length constraints
  if (email.length < 5 || email.length > 254) {
    return { valid: false, reason: "Please enter a valid email address." };
  }

  // RFC 5322 format check
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, reason: "Invalid email format." };
  }

  const parts = email.split("@");
  if (parts.length !== 2) {
    return { valid: false, reason: "Invalid email format." };
  }

  const [localPart, domain] = parts;

  // Check consecutive dots
  if (localPart.includes("..") || domain.includes("..")) {
    return { valid: false, reason: "Email cannot contain consecutive dots." };
  }

  // Check top-level domain
  const domainParts = domain.split(".");
  const tld = domainParts[domainParts.length - 1];
  if (!tld || tld.length < 2 || !/^[a-z]+$/.test(tld)) {
    return { valid: false, reason: "Please enter a valid email domain." };
  }

  // Check common typos (e.g., user@gmai.com)
  const typoSuggestion = COMMON_TYPOS[domain];
  if (typoSuggestion) {
    const suggestedEmail = `${localPart}@${typoSuggestion}`;
    return {
      valid: false,
      reason: `Did you mean ${suggestedEmail}? Please check for typos.`,
      suggestion: suggestedEmail,
    };
  }

  // Check disposable email domains
  if (DISPOSABLE_DOMAINS.has(domain)) {
    return {
      valid: false,
      reason: "Temporary or disposable email addresses are not accepted.",
    };
  }

  // Check known placeholder / test usernames
  if (PLACEHOLDER_USERS.has(localPart)) {
    return {
      valid: false,
      reason: "Please enter a real email address (test addresses are not allowed).",
    };
  }

  // Check repetitive single characters (e.g. aaaa@..., 11111@...)
  if (/^(.)\1{2,}$/.test(localPart)) {
    return {
      valid: false,
      reason: "Please enter a valid email address.",
    };
  }

  // Check minimum localpart length
  if (localPart.length < 2) {
    return {
      valid: false,
      reason: "Please enter a valid email address.",
    };
  }

  // Provider-specific validation
  const isGmail = domain === "gmail.com" || domain === "googlemail.com";
  const isYahoo = domain === "yahoo.com" || domain === "ymail.com" || domain.startsWith("yahoo.");
  const isMicrosoft =
    domain === "outlook.com" ||
    domain === "hotmail.com" ||
    domain === "live.com" ||
    domain === "msn.com";
  const isApple = domain === "icloud.com" || domain === "me.com" || domain === "mac.com";

  if (isGmail || isYahoo || isMicrosoft || isApple) {
    // Check consumer reserved roles (e.g. admin@gmail.com, info@gmail.com)
    if (CONSUMER_RESERVED_ROLES.has(localPart)) {
      return {
        valid: false,
        reason: "Please enter your personal or company work email.",
      };
    }
  }

  // Gmail strict username constraints: Google strictly requires 6-30 characters (excluding dots)
  if (isGmail) {
    const normalizedGmailUser = localPart.replace(/\./g, "");
    if (normalizedGmailUser.length < 6) {
      return {
        valid: false,
        reason: "Gmail addresses must be at least 6 characters long.",
      };
    }
    if (normalizedGmailUser.length > 30) {
      return {
        valid: false,
        reason: "Gmail addresses cannot exceed 30 characters.",
      };
    }
    if (!/^[a-z0-9]+$/.test(normalizedGmailUser)) {
      return {
        valid: false,
        reason: "Gmail addresses can only contain letters, numbers, and periods.",
      };
    }
  }

  // Yahoo constraints: 4-32 characters
  if (isYahoo) {
    if (localPart.length < 4 || localPart.length > 32) {
      return {
        valid: false,
        reason: "Yahoo addresses must be between 4 and 32 characters.",
      };
    }
  }

  // Microsoft constraints: 3-64 characters
  if (isMicrosoft) {
    if (localPart.length < 3 || localPart.length > 64) {
      return {
        valid: false,
        reason: "Outlook/Hotmail addresses must be between 3 and 64 characters.",
      };
    }
  }

  // Live DNS MX check
  if (options.checkDns) {
    const hasMx = await verifyDomainMx(domain);
    if (!hasMx) {
      return {
        valid: false,
        reason: "This email domain does not appear to exist or cannot receive mail.",
      };
    }
  }

  return { valid: true };
}
