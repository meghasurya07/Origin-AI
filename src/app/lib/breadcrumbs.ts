/**
 * Utility to generate BreadcrumbList JSON-LD structured data.
 * Eliminates the repeated breadcrumb boilerplate across route layouts.
 */

const BASE_URL = "https://www.originai.in";

interface BreadcrumbItem {
  name: string;
  /** Path relative to the base URL, e.g. `"/about"`. */
  path: string;
}

/**
 * Builds a Schema.org `BreadcrumbList` object.
 * The "Home" crumb is always prepended automatically.
 *
 * @example
 * ```ts
 * makeBreadcrumbJsonLd([{ name: "About", path: "/about" }]);
 * ```
 */
export function makeBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: `${BASE_URL}${item.path}`,
      })),
    ],
  };
}
