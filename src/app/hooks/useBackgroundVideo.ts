"use client";

import { useRef, useEffect } from "react";
import { BG_VIDEOS } from "../lib/constants";

/**
 * Custom hook that selects a random background video on mount.
 *
 * @param videos  Array of video URLs to pick from. Defaults to `BG_VIDEOS`.
 * @param loop    Whether the video should loop. Defaults to `true` for all
 *                except the first video in the standard set (index 0).
 *                Pass `true` to always loop (used by the 404 page).
 */
export function useBackgroundVideo(
  videos: readonly string[] = BG_VIDEOS,
  alwaysLoop = false,
) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const index = Math.floor(Math.random() * videos.length);
      videoRef.current.src = videos[index];
      videoRef.current.loop = alwaysLoop || index !== 0;
    }
  }, [videos, alwaysLoop]);

  return videoRef;
}
