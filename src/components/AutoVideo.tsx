"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  poster: string;
  label: string;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * A looping, silent thumbnail video. The `autoplay` attribute alone is
 * unreliable — browsers decline or quietly pause it for media that is
 * off-screen — so playback is driven by visibility instead, which also stops
 * cards decoding frames while scrolled past.
 */
export default function AutoVideo({ src, poster, label, className, style }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Rejected plays are not actionable here; the poster stays up.
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      style={style}
      src={src}
      poster={poster}
      aria-label={label}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      disablePictureInPicture
      disableRemotePlayback
    />
  );
}
