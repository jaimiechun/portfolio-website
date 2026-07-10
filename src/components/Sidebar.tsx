"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "PROJECTS", href: "/" },
  { label: "PLAY", href: "/play" },
  { label: "ABOUT", href: "/about" },
];

const connectLinks = [
  { label: "EMAIL", href: "mailto:jaimiechun2028@u.northwestern.edu" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/jaimiekchun", external: true },
  { label: "GITHUB", href: "https://github.com/jaimiechun", external: true },
  { label: "RESUME", href: "/resume.pdf", external: true },
];

const mono: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  letterSpacing: "0.05em",
};

const divider: React.CSSProperties = {
  width: "100%",
  height: "1px",
  background: "rgba(0,0,0,0.12)",
  flexShrink: 0,
};

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      style={{
        width: "260px",
        flexShrink: 0,
        padding: "0 28px 48px 36px",
        display: "flex",
        flexDirection: "column",
        gap: "28px",
        borderRight: "1px solid rgba(0,0,0,0.08)",
        position: "sticky",
        top: "50px",
        height: "calc(100vh - 50px)",
        overflowY: "auto",
      }}
    >
      {/* Bio */}
      <p
        style={{
          fontFamily: "var(--font-geist-sans), 'Geist Fallback', sans-serif",
          fontSize: "13px",
          fontWeight: 400,
          lineHeight: 1.75,
          color: "var(--foreground)",
        }}
      >
        Jaimie Chun is passionate about projects that apply technology to
        storytelling and creative expression. She thinks deeply about people
        and products, bringing an interdisciplinary skillset to every project
        she undertakes.
      </p>

      <div style={divider} />

      {/* Navigation */}
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <p
          style={{
            ...mono,
            fontSize: "11px",
            fontWeight: 400,
            color: "var(--muted)",
            letterSpacing: "0.1em",
          }}
        >
          NAVIGATION
        </p>
        {navLinks.map((link) => {
          const isActive =
            !link.external &&
            (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href));
          return (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              style={{
                ...mono,
                fontSize: "14px",
                fontWeight: 400,
                color: isActive ? "var(--foreground)" : "var(--muted)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ color: "var(--muted)", fontSize: "12px" }}>✦</span>
              {link.label}
            </Link>
          );
        })}
      </div>

      <div style={divider} />

      {/* Connect */}
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <p
          style={{
            ...mono,
            fontSize: "11px",
            fontWeight: 400,
            color: "var(--muted)",
            letterSpacing: "0.1em",
          }}
        >
          CONNECT
        </p>
        {connectLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            style={{
              ...mono,
              fontSize: "14px",
              fontWeight: 400,
              color: "var(--foreground)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span style={{ color: "var(--muted)", fontSize: "12px" }}>✦</span>
            {link.label}
            <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--muted)" }}>↗</span>
          </a>
        ))}
      </div>
    </aside>
  );
}
