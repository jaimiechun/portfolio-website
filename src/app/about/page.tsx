import Sidebar from "@/components/Sidebar";

const geist: React.CSSProperties = {
  fontFamily: "var(--font-geist-sans), 'Geist Fallback', sans-serif",
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: 1.6,
};

const mono: React.CSSProperties = {
  fontFamily: "var(--font-geist-mono), monospace",
  fontSize: "11px",
  fontWeight: 400,
  letterSpacing: "0.05em",
};

const experience = [
  { org: "WISE Scales", role: "Data Visualization Intern", date: "SUMMER 2026" },
];

const orgs = [
  { org: "ISBE Mark", role: "Project Manager (Marketing)", date: "2025–PRESENT" },
  { org: "Knight Lab at NU Medill", role: "Student Fellow", date: "2026–PRESENT" },
];

export default function About() {
  return (
    <div style={{ display: "flex", minHeight: "calc(100vh - 51px)" }}>
      <Sidebar />

      {/* Main content */}
      <div style={{ flex: 1, padding: "48px 40px 100px 44px" }}>
        <div style={{ display: "flex", gap: "32px", alignItems: "flex-start" }}>

          {/* Left col: photo + experience */}
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "24px", width: "413px" }}>
            {/* Photo */}
            <div
              style={{
                width: "288px",
                height: "273px",
                background: "#e0ddd8",
                borderRadius: "2px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ ...mono, color: "#aaa" }}>Headshot</span>
            </div>

            {/* Experience + Orgs */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div>
                <p style={{ ...mono, marginBottom: "6px" }}>Experience</p>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {experience.map((e) => (
                    <div key={e.org} style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
                      <span style={{ ...geist, minWidth: "90px", flexShrink: 0 }}>{e.org}</span>
                      <span style={{ ...geist, flex: 1 }}>{e.role}</span>
                      <span style={{ ...mono, color: "var(--muted)", whiteSpace: "nowrap" }}>{e.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p style={{ ...mono, marginBottom: "6px" }}>Orgs &amp; Leadership</p>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {orgs.map((o) => (
                    <div key={o.org} style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
                      <span style={{ ...geist, minWidth: "130px", flexShrink: 0 }}>{o.org}</span>
                      <span style={{ ...geist, flex: 1 }}>{o.role}</span>
                      <span style={{ ...mono, color: "var(--muted)", whiteSpace: "nowrap" }}>{o.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
            <h1
              style={{
                fontFamily: "var(--font-geist-sans), 'Geist Fallback', sans-serif",
                fontSize: "20px",
                fontWeight: 400,
                color: "var(--foreground)",
                lineHeight: 1.2,
              }}
            >
              Hi, I&apos;m Jaimie!
            </h1>

            <div>
              <p style={{ ...geist, color: "var(--muted)" }}>Northwestern University</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <p style={{ ...geist }}>BS Computer Science, Journalism &amp; Data Science</p>
                <p style={{ ...geist, color: "var(--muted)" }}>Chicago / LA</p>
              </div>
            </div>

            <p style={{ ...geist }}>
              I initially entered college with an itch to become a reporter. However, I quickly fell in love with
              exploring how design and technology can transform the ways stories are told and experienced.
              Studying computer science and design methods, I discovered a passion for working across
              everything between product, design and &lt;dev&gt;.
            </p>
            <p style={{ ...geist }}>
              I&apos;m energized by projects that launch products from 0 →1 and figuring out what people actually want. Outside of work, I&apos;m:
            </p>

            <ul style={{ ...geist, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "2px" }}>
              <li>developing news &amp; media products for journalism at Medill</li>
              <li>indulging in a good books</li>
              <li>finding new restaurants, eating well and repeat</li>
            </ul>
            <p style={{ ...geist }}>
              Say hi at jaimiechun2028@u.northwestern.edu, and I hope you enjoy my website!
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
