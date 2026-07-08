import Link from "next/link";

export default function Nav() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        padding: "20px 40px 16px",
        position: "sticky",
        top: 0,
        background: "transparent",
        zIndex: 50,
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
        }}
      >
        JAIMIE CHUN
      </Link>
    </nav>
  );
}
