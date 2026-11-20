"use client";

import { useBackgroundVideo } from "../hooks/useBackgroundVideo";
import { BG_VIDEOS } from "../lib/constants";

interface BackgroundVideoProps {
  /** Video URL list. Defaults to the standard `BG_VIDEOS`. */
  videos?: readonly string[];
  /** Force all videos to loop. Default `false` (index-0 doesn't loop). */
  alwaysLoop?: boolean;
  /**
   * CSS position class. Defaults to `"fixed"` for standard pages.
   * The 404 page uses `"absolute"`.
   */
  position?: "fixed" | "absolute";
}

/**
 * Full-viewport background video that randomly selects a source on mount.
 * Renders a `<video>` element covering the full viewport.
 */
export default function BackgroundVideo({
  videos = BG_VIDEOS,
  alwaysLoop = false,
  position = "fixed",
}: BackgroundVideoProps) {
  const videoRef = useBackgroundVideo(videos, alwaysLoop);

  return (
    <video
      ref={videoRef}
      className={`${position} inset-0 w-full h-full object-cover z-[0]`}
      autoPlay
      muted
      playsInline
      aria-hidden="true"
    />
  );
}
