import { SketchSparkle, HandUnderline } from "@/components/SketchAccents";

const funItems = [
  {
    category: "Making",
    items: ["Ceramics", "Watercolor painting", "Crochet"],
  },
  {
    category: "Consuming",
    items: ["Film photography", "Architecture blogs", "90s sci-fi novels"],
  },
  {
    category: "Exploring",
    items: ["Coffee shop hopping", "Secondhand bookstores", "Night walks"],
  },
];

export default function Fun() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
      <section style={{ padding: "80px 0 100px" }}>
        <div style={{ marginBottom: "64px" }}>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(36px, 4vw, 52px)",
              fontWeight: 500,
              lineHeight: 1.2,
              color: "var(--foreground)",
              letterSpacing: "-0.01em",
              marginBottom: "4px",
            }}
          >
            Outside the screen
          </h1>
          <div style={{ maxWidth: "280px" }}>
            <HandUnderline />
          </div>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "15px",
              color: "var(--muted)",
              fontWeight: 300,
              lineHeight: 1.7,
              marginTop: "20px",
              maxWidth: "480px",
            }}
          >
            Things I love when I&apos;m not designing or building things on a computer —
            or at least, things that{" "}
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
              feel
            </span>{" "}
            like they&apos;re off the screen.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          {funItems.map((section) => (
            <div
              key={section.category}
              style={{
                background: "var(--background)",
                padding: "40px 36px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
                <SketchSparkle />
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    color: "var(--muted)",
                  }}
                >
                  {section.category.toUpperCase()}
                </span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                {section.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "20px",
                      fontWeight: 400,
                      color: "var(--foreground)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
