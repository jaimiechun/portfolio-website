import Sidebar from "@/components/Sidebar";

const geist: React.CSSProperties = {
  fontFamily: "var(--font-geist-sans), 'Geist Fallback', sans-serif",
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: 1.6,
};

export default function About() {
  return (
    <div style={{ display: "flex", minHeight: "calc(100vh - 50px)" }}>
      <Sidebar />

      {/* Main content */}
      <div style={{ flex: 1, padding: "48px 32px 100px 44px" }}>
        <div style={{ display: "flex", gap: "32px", alignItems: "flex-start" }}>

          {/* Photo */}
          <img
            src="/images/headshot.jpg"
            alt="Jaimie Chun"
            style={{
              width: "288px",
              height: "273px",
              borderRadius: "50%",
              objectFit: "cover",
              flexShrink: 0,
            }}
          />

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
