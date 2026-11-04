/**
 * Orange gradient label with decorative line, used as a section intro
 * across the homepage hero, about page, and careers page.
 */

interface SectionLabelProps {
  text: string;
  /** Additional/override classes for the wrapper `<p>`. Defaults to `"mb-4"`. */
  className?: string;
}

export default function SectionLabel({
  text,
  className = "mb-4",
}: SectionLabelProps) {
  return (
    <p
      className={`flex items-center gap-3 text-sm uppercase tracking-[0.2em] font-medium ${className}`}
    >
      <span className="w-10 sm:w-14 h-[2px] rounded-full bg-[linear-gradient(90deg,transparent,#fbbf24_40%,#f97316)] shadow-[0_0_8px_1px_rgba(251,191,36,0.4)]" />
      <span className="bg-gradient-to-r from-[#F97316] to-[#FBBF24] bg-clip-text text-transparent">
        {text}
      </span>
    </p>
  );
}
