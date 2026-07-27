type Tool = { label: string; icon: string };

type Category = {
  title: string;
  tools: Tool[];
};

const columns: Category[][] = [
  [
    {
      title: "Frontend",
      tools: [
        { label: "React", icon: "/images/tech-stack/react.png" },
        { label: "Next.js", icon: "/images/tech-stack/nextjs.png" },
        { label: "TypeScript", icon: "/images/tech-stack/typescript.png" },
      ],
    },
    {
      title: "Tools",
      tools: [
        { label: "Git & GitHub", icon: "/images/tech-stack/github.png" },
        { label: "Python", icon: "/images/tech-stack/python.png" },
        { label: "RStudio", icon: "/images/tech-stack/rstudio.png" },
      ],
    },
  ],
  [
    {
      title: "Backend",
      tools: [
        { label: "Supabase", icon: "/images/tech-stack/supabase.png" },
        { label: "Node.js", icon: "/images/tech-stack/nodejs.png" },
        { label: "APIs", icon: "/images/tech-stack/apis.png" },
      ],
    },
    {
      title: "Design & Workflow",
      tools: [
        { label: "Figma", icon: "/images/tech-stack/figma.png" },
        { label: "Notion", icon: "/images/tech-stack/notion.png" },
      ],
    },
  ],
];

const geist: React.CSSProperties = {
  fontFamily: "var(--font-geist-sans), 'Geist Fallback', sans-serif",
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: 1.4,
  letterSpacing: "0",
  color: "var(--foreground)",
};

export default function TechStack() {
  return (
    <div>
      <p
        style={{
          fontFamily: "var(--font-geist-sans), 'Geist Fallback', sans-serif",
          fontSize: "10px",
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--foreground)",
          opacity: 0.42,
          marginBottom: "4px",
        }}
      >
        Tech Stack
      </p>
      <h2
        style={{
          fontFamily: "var(--font-geist-sans), 'Geist Fallback', sans-serif",
          fontSize: "20px",
          fontWeight: 700,
          color: "var(--foreground)",
          lineHeight: 1.2,
          marginBottom: "24px",
        }}
      >
        What I use
      </h2>

      <div style={{ display: "flex", gap: "64px" }}>
        {columns.map((categories, i) => (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", gap: "40px" }}>
            {categories.map((category) => (
              <div key={category.title}>
                <p style={{ ...geist, marginBottom: "16px" }}>{category.title}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {category.tools.map((tool) => (
                    <div key={tool.label} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <img
                        src={tool.icon}
                        alt={tool.label}
                        style={{
                          width: "29px",
                          height: "29px",
                          objectFit: "contain",
                          borderRadius: "6px",
                          flexShrink: 0,
                        }}
                      />
                      <span style={geist}>{tool.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
