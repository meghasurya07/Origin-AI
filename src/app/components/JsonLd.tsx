/**
 * Renders a `<script type="application/ld+json">` block for structured data.
 * Replaces the verbose `dangerouslySetInnerHTML` pattern used across layouts.
 */

interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
