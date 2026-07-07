"use client";

import { SketchArrow } from "@/components/SketchAccents";

const connectLinks = [
  { label: "EMAIL", href: "mailto:jaimiechun78@gmail.com" },
  { label: "LINKEDIN", href: "#" },
  { label: "GITHUB", href: "#" },
  { label: "RESUME", href: "/resume" },
];

export default function ConnectLinks() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
      {connectLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "14px 0",
            borderBottom: "1px solid var(--border)",
            textDecoration: "none",
            fontFamily: "var(--font-sans)",
            fontSize: "14px",
            fontWeight: 400,
            letterSpacing: "0.1em",
            color: "var(--foreground)",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-red)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground)";
          }}
        >
          <SketchArrow />
          {link.label}
        </a>
      ))}
    </div>
  );
}
