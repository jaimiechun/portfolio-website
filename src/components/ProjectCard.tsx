"use client";

import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  date: string;
  color?: string;
  imageAspect?: string;
  video?: string;
}

export default function ProjectCard({ slug, title, category, date, imageAspect = "4/3", video }: ProjectCardProps) {
  return (
    <Link href={`/work/${slug}`} style={{ textDecoration: "none", color: "inherit" }}>
      <article>
        {/* Thumbnail */}
        <div
          style={{
            width: "100%",
            aspectRatio: imageAspect,
            border: "1px solid #c8c8c8",
            borderRadius: "2px",
            background: "rgba(255,255,255,0.45)",
            transition: "background 0.2s",
            marginBottom: "12px",
            overflow: "hidden",
            position: "relative",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.65)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.45)";
          }}
        >
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              disableRemotePlayback
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                pointerEvents: "none",
              }}
            />
          )}
        </div>

        {/* Meta line 1: category + date */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "0.05em",
            color: "var(--muted)",
            textTransform: "uppercase",
            marginBottom: "4px",
          }}
        >
          {category}&nbsp;&nbsp;&nbsp;{date}
        </p>

        {/* Title line 2 */}
        <h2
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: 1.55,
            color: "var(--foreground)",
            letterSpacing: "0.02em",
          }}
        >
          {title}
        </h2>
      </article>
    </Link>
  );
}
