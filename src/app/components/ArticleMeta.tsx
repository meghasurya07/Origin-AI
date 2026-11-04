/**
 * Displays an article's date and tag in the consistent meta row style
 * used on the news listing page and individual article pages.
 */

interface ArticleMetaProps {
  /** ISO date string for the `<time>` element, e.g. `"2026-08"`. */
  dateTime: string;
  /** Human-readable date, e.g. `"August 2026"`. */
  dateLabel: string;
  /** Category tag, e.g. `"Partnership"`. */
  tag: string;
}

export default function ArticleMeta({
  dateTime,
  dateLabel,
  tag,
}: ArticleMetaProps) {
  return (
    <div className="flex items-center gap-3">
      <time
        dateTime={dateTime}
        className="text-[10px] sm:text-xs uppercase tracking-widest text-white/40"
      >
        {dateLabel}
      </time>
      <span className="w-1 h-1 rounded-full bg-white/20" />
      <span className="bg-gradient-to-r from-[#F97316] to-[#FBBF24] bg-clip-text text-transparent text-[10px] sm:text-xs uppercase tracking-widest font-medium">
        {tag}
      </span>
    </div>
  );
}
