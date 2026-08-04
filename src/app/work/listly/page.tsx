import Link from "next/link";
import Sidebar from "@/components/Sidebar";

const mono: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  letterSpacing: "0.05em",
};

const geist: React.CSSProperties = {
  fontFamily: "var(--font-geist-sans), 'Geist Fallback', sans-serif",
  fontWeight: 400,
  letterSpacing: "0",
  color: "var(--foreground)",
};

const infoCards = [
  { label: "MY ROLE", value: "Full-Stack Engineer & Product Designer" },
  { label: "TIMELINE", value: "July - August 2026" },
  { label: "TEAM", value: "Me!" },
  { label: "TOOLS", value: "Next.js (Typescript, Tailwind, Motion.dev), Figma" },
];

const phones = [
  { src: "/images/listly/phone1-start-list.png", alt: "Start a shared list screen", left: 1.51, top: 4.99, width: 32.95 },
  { src: "/images/listly/phone2-join-list.png", alt: "Join this list screen", left: 33.3, top: 21.39, width: 33.48 },
  { src: "/images/listly/phone3-add-item.png", alt: "Add something to the list screen", left: 65.36, top: 0, width: 32.77 },
];

export default function ListlyCaseStudy() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      {/* Main content */}
      <div style={{ flex: 1, padding: "16px 96px 100px 96px" }}>
        {/* Back link */}
        <Link
          href="/"
          style={{
            ...geist,
            fontSize: "13px",
            color: "var(--muted)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span aria-hidden>←</span> back to projects
        </Link>

        {/* Title */}
        <h1
          style={{
            ...geist,
            fontSize: "36px",
            fontWeight: 700,
            marginTop: "28px",
          }}
        >
          LISTLY
        </h1>

        {/* Tagline + live link */}
        <p style={{ ...geist, fontSize: "18px", marginTop: "16px" }}>
          Creating a way to never forget what you want to do with your loved ones.
        </p>
        <a
          href="https://list-app-87.web.app"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="link"
          style={{
            ...mono,
            fontSize: "13px",
            color: "var(--foreground)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            marginTop: "8px",
          }}
        >
          VIEW LIVE APP <span aria-hidden>↗</span>
        </a>

        {/* Teal phone showcase */}
        <div
          style={{
            marginTop: "32px",
            width: "100%",
            aspectRatio: "1123 / 561",
            background: "#0F9D8C",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {phones.map((phone) => (
            <img
              key={phone.src}
              src={phone.src}
              alt={phone.alt}
              style={{
                position: "absolute",
                left: `${phone.left}%`,
                top: `${phone.top}%`,
                width: `${phone.width}%`,
                height: "auto",
                display: "block",
                pointerEvents: "none",
              }}
            />
          ))}
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: "1px", background: "rgba(0,0,0,0.15)", margin: "32px 0" }} />

        {/* Info cards */}
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {infoCards.map((card) => (
            <div
              key={card.label}
              style={{
                flex: "1 1 220px",
                minWidth: "200px",
                border: "1px solid #7ebcd6",
                boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
                padding: "12px 16px 16px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <p style={{ ...mono, fontSize: "13px" }}>{card.label}</p>
              <p style={{ ...geist, fontSize: "12px", lineHeight: 1.4 }}>{card.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
