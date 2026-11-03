import Footer from "./Footer";

/**
 * Standard footer layout wrapper used by every page.
 * Provides the max-width container and consistent padding.
 */
export default function FooterWrapper() {
  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
      <Footer />
    </div>
  );
}
