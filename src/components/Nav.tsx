"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "PROJECTS" },
  { href: "/about", label: "ABOUT" },
  { href: "/resume", label: "RESUME" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        padding: "20px 40px",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        position: "sticky",
        top: 0,
        background: "transparent",
        zIndex: 50,
      }}
    >
      {/* Left: name + role */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "14px",
            fontWeight: 500,
            letterSpacing: "0.05em",
            color: "var(--foreground)",
            textDecoration: "none",
          }}
        >
          JAIMIE CHUN
        </Link>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            fontWeight: 400,
            letterSpacing: "0.05em",
            color: "var(--muted)",
          }}
        >
          PRODUCT DESIGNER + ENGINEER
        </span>
      </div>

      {/* Center: nav links */}
      <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
        {links.map((link) => {
          const isActive =
            link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                fontWeight: 400,
                letterSpacing: "0.05em",
                color: isActive ? "var(--foreground)" : "var(--muted)",
                textDecoration: "none",
                position: "relative",
                padding: "2px 6px",
              }}
            >
              {isActive && (
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: "-4px -8px",
                    borderRadius: "50%",
                    background: "rgba(201,64,64,0.15)",
                    filter: "blur(6px)",
                    pointerEvents: "none",
                  }}
                />
              )}
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
