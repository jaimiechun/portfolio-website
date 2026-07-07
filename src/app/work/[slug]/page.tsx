import Link from "next/link";
import { SketchArrow } from "@/components/SketchAccents";

export default function WorkPage({ params }: { params: { slug: string } }) {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
      <section style={{ padding: "64px 0 100px" }}>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "var(--font-sans)",
            fontSize: "12px",
            letterSpacing: "0.1em",
            color: "var(--muted)",
            textDecoration: "none",
            marginBottom: "48px",
          }}
        >
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" style={{ transform: "scaleX(-1)" }}>
            <path d="M1 5H13M9 1L13 5L9 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          BACK TO WORK
        </Link>

        {/* Project header */}
        <div style={{ maxWidth: "720px", marginBottom: "64px" }}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "11px",
              letterSpacing: "0.15em",
              color: "var(--muted)",
              marginBottom: "16px",
            }}
          >
            PRODUCT DESIGN · 2025
          </p>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(36px, 4vw, 52px)",
              fontWeight: 500,
              lineHeight: 1.2,
              color: "var(--foreground)",
              letterSpacing: "-0.01em",
              marginBottom: "24px",
            }}
          >
            {params.slug
              .replace(/-/g, " ")
              .replace(/\b\w/g, (l) => l.toUpperCase())}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "var(--muted)",
              fontWeight: 300,
            }}
          >
            A brief overview of the project, the problem it solves, and the approach taken.
            This section will be replaced with the actual project description.
          </p>
        </div>

        {/* Cover */}
        <div
          style={{
            width: "100%",
            aspectRatio: "16/9",
            background: "#f0ede8",
            borderRadius: "4px",
            marginBottom: "80px",
          }}
        />

        {/* Content placeholder */}
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px",
              marginBottom: "64px",
              paddingBottom: "48px",
              borderBottom: "1px solid var(--border)",
            }}
          >
            {[
              { label: "ROLE", value: "Product Designer + Engineer" },
              { label: "TIMELINE", value: "3 months, 2025" },
              { label: "TEAM", value: "Solo project" },
              { label: "TOOLS", value: "Figma, React, TypeScript" },
            ].map((item) => (
              <div key={item.label}>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    color: "var(--muted)",
                    marginBottom: "6px",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "var(--foreground)",
                  }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "15px",
              lineHeight: 1.85,
              color: "var(--foreground)",
              fontWeight: 300,
            }}
          >
            Project case study content goes here. Replace this placeholder text
            with the actual writeup detailing the process, research, design decisions,
            and outcomes.
          </p>
        </div>
      </section>
    </div>
  );
}
