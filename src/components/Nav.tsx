import Link from "next/link";

export default function Nav() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        padding: "20px 40px 16px",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: "transparent",
        zIndex: 70,
        pointerEvents: "none",
      }}
    >
      {/* Name */}
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "14px",
          fontWeight: 500,
          letterSpacing: "0.05em",
          color: "var(--foreground)",
          textDecoration: "none",
          lineHeight: 1,
          display: "block",
          pointerEvents: "auto",
        }}
      >
        JAIMIE CHUN
      </Link>
    </nav>
  );
}
