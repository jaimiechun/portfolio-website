"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type SidebarLink = { label: string; href: string; external?: boolean };

const navLinks: SidebarLink[] = [
  { label: "PROJECTS", href: "/" },
  { label: "PLAY", href: "/play" },
  { label: "ABOUT", href: "/about" },
];

const connectLinks: SidebarLink[] = [
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
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "America/Chicago",
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* Vertical divider spanning the full viewport height */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: "260px",
          width: "1px",
          height: "100vh",
          background: "rgba(0,0,0,0.08)",
          pointerEvents: "none",
          zIndex: 60,
        }}
      />
    <aside
      style={{
        width: "260px",
        flexShrink: 0,
        padding: "0 28px 32px 36px",
        display: "flex",
        flexDirection: "column",
        gap: "28px",
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
          letterSpacing: "0",
          color: "var(--foreground)",
        }}
      >
        Jaimie Chun is passionate about projects that apply technology to
        storytelling and problem solving. For Jaimie, product management is
        the perfect culmination of the communication skills of journalism,
        the technical skills of CS, and the leadership skills of business.
      </p>

      <div style={divider} />

      {/* Navigation */}
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <p
          style={{
            ...mono,
            fontSize: "14px",
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
            fontSize: "14px",
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

      {/* Footer */}
      <div
        style={{
          marginTop: "auto",
          display: "flex",
          flexDirection: "column",
          rowGap: "8px",
          fontFamily: "var(--font-geist-sans), 'Geist Fallback', sans-serif",
          fontSize: "10px",
          fontWeight: 400,
          letterSpacing: "0",
          color: "var(--foreground)",
        }}
      >
        <p style={{ display: "flex", alignItems: "baseline", gap: "6px", whiteSpace: "nowrap" }}>
          glad we could cross paths <span style={{ color: "var(--muted)" }}>✳</span>{" "}
          <span style={{ ...mono, fontSize: "10px" }}>{time}</span>
        </p>
        <p style={{ display: "flex", alignItems: "baseline", gap: "6px", whiteSpace: "nowrap" }}>
          2026 <span style={{ color: "var(--muted)" }}>✳</span> designed &amp; coded w/ ♡
        </p>
      </div>
    </aside>
    </>
  );
}
