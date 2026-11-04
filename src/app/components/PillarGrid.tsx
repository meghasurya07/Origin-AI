/**
 * Renders a grid of pillar/highlight cards with a top border accent.
 * Used on the homepage ("What is Origin AI?") and about page ("Our Mission").
 */

interface Pillar {
  /** Card heading displayed in uppercase. Uses `label` or `title` key. */
  label?: string;
  title?: string;
  /** Card body text. Uses `value` or `description` key. */
  value?: string;
  description?: string;
}

interface PillarGridProps {
  items: readonly Pillar[];
}

export default function PillarGrid({ items }: PillarGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
      {items.map((item) => {
        const heading = item.label ?? item.title ?? "";
        const body = item.value ?? item.description ?? "";
        return (
          <div key={heading} className="border-t border-white/10 pt-4">
            <p className="text-white text-sm font-semibold uppercase tracking-wider mb-2">
              {heading}
            </p>
            <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
              {body}
            </p>
          </div>
        );
      })}
    </div>
  );
}
