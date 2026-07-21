import Link from "next/link";
import Sidebar from "@/components/Sidebar";

const body: React.CSSProperties = {
  fontFamily: "var(--font-geist-sans), 'Geist Fallback', sans-serif",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: 1.75,
  letterSpacing: "0",
  color: "var(--foreground)",
};

const heading: React.CSSProperties = {
  fontFamily: "var(--font-geist-sans), 'Geist Fallback', sans-serif",
  fontSize: "18px",
  fontWeight: 600,
  lineHeight: 1.3,
  letterSpacing: "0",
  color: "var(--foreground)",
};

const bold: React.CSSProperties = { fontWeight: 600 };

const section: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  maxWidth: "100%",
};

export default function PerspectiveCaseStudy() {
  return (
    <div style={{ display: "flex", minHeight: "calc(100vh - 50px)" }}>
      <Sidebar />

      {/* Main content */}
      <div style={{ flex: 1, padding: "16px 96px 100px 96px" }}>
        {/* Back link */}
        <Link
          href="/"
          style={{
            ...body,
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
        <h1 style={{ ...heading, fontSize: "20px", marginTop: "28px" }}>Perspective</h1>

        {/* Hero demo video */}
        <video
          src="/videos/perspective-demo.mp4"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          style={{
            width: "100%",
            marginTop: "24px",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: "2px",
            display: "block",
            pointerEvents: "none",
          }}
        />

        {/* Divider */}
        <div style={{ width: "100%", height: "1px", background: "rgba(0,0,0,0.15)", margin: "48px 0" }} />

        {/* Overview */}
        <div style={section}>
          <h2 style={heading}>Overview</h2>
          <p style={body}>
            As newsrooms face shrinking resources and increasing pressure to build public trust, understanding how
            different communities perceive reporting has become more important than ever. Traditional audience research
            methods such as focus groups and interviews provide valuable insight but are expensive, time-intensive and
            difficult to incorporate into everyday editorial workflows.
          </p>
          <p style={body}>
            Recognizing this unmet need, our team of three student journalists set out to build Perspective, an
            AI-powered editorial auditing tool designed to help journalists identify coverage blind spots before
            publication. Instead of replacing community engagement, Perspective uses LLM-generated &ldquo;digital
            twins,&rdquo; synthetic audience personas modeled after real community perspectives, to simulate how
            different groups might interpret a story. The goal is to give reporters an additional layer of feedback that
            encourages more thoughtful reporting while making audience listening more scalable.
          </p>
          <p style={body}>
            We set out to accomplish this by <span style={bold}>humanizing AI.</span>
          </p>
        </div>

        {/* The Product Opportunity */}
        <div style={{ ...section, marginTop: "56px" }}>
          <h2 style={heading}>The Product Opportunity - Our User Problem</h2>
          <p style={body}>
            As a team of student journalists, we had personally experienced the challenges of reporting with limited
            resources and opportunities to gather meaningful audience feedback before publication. While our experiences
            highlighted the problem, we wanted to validate that these pain points extended beyond our newsroom.
          </p>
          <p style={body}>
            We began approaching the project more intentionally with this broader product question:
            <br />
            <span style={bold}>
              How might we make audience feedback accessible, instantaneous and diverse before people commit significant
              time or resources?
            </span>
          </p>
          <p style={body}>
            To do this, we conducted user interviews with journalists, both professional and those part of on-campus
            publications, to understand their editorial workflows and existing methods for gathering audience insight.
            Across these conversation, we found:
          </p>
          <ul style={{ ...body, listStyle: "disc", paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <li>
              audience feedback came after publication and primarily from an established, highly engaged readership
            </li>
            <li>
              journalism organizations relied on letters to the editor, comments or surveys completed by loyal readers,
              which are certainly valuable sources of feedback but one representing only a self-selected portion of
              their audience
            </li>
            <li>
              In fast paced environments like that of a journalism organization, traditional user research is often too
              slow to perform continuously
            </li>
            <li>
              We also identified a key business challenge: journalists&rsquo; reluctance to adopt AI. There was a
              general wariness toward AI tools in journalism, driven by concerns about trust and editorial integrity.
            </li>
          </ul>
        </div>

        {/* Testing process gallery — flex ratios match image aspect ratios so all
            three render at the same height with tops and bottoms aligned */}
        <div
          style={{
            display: "flex",
            gap: "32px",
            marginTop: "104px",
            alignItems: "flex-start",
          }}
        >
          {/* Sticky notes (604x800 → 0.755) */}
          <div style={{ flex: "0.755 1 0%", display: "flex", flexDirection: "column", gap: "14px" }}>
            <img
              src="/images/perspective/sticky-testing.jpg"
              alt="Sticky notes from temperature and model testing sessions"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <p style={{ ...body, textAlign: "center" }}>temperature/model testing</p>
          </div>

          {/* Feedback document (900x809 → 1.112) */}
          <div style={{ flex: "1.112 1 0%", display: "flex", flexDirection: "column", gap: "14px" }}>
            <img
              src="/images/perspective/doc-feedback.png"
              alt="Annotated feedback document from iterative persona testing"
              style={{ width: "100%", height: "auto", display: "block", border: "1px solid rgba(0,0,0,0.08)" }}
            />
            <p style={{ ...body, textAlign: "center" }}>iterative testing &amp; modifications</p>
          </div>

          {/* Persona stances (874x532 → 1.643) */}
          <div style={{ flex: "1.643 1 0%", position: "relative", display: "flex", flexDirection: "column", gap: "14px" }}>
            <p
              style={{
                ...body,
                ...bold,
                fontSize: "16px",
                textAlign: "center",
                position: "absolute",
                bottom: "calc(100% + 14px)",
                left: 0,
                right: 0,
              }}
            >
              &ldquo;what is the best ice cream flavor?&rdquo;
            </p>
            <img
              src="/images/perspective/mirror-personas.png"
              alt="Persona stances on the best ice cream flavor, each holding their opinion"
              style={{ width: "100%", height: "auto", display: "block", border: "1px solid rgba(0,0,0,0.08)" }}
            />
            <p style={{ ...body, textAlign: "center" }}>capable of holding opinions</p>
          </div>
        </div>

        {/* Product Strategy — text left, Mirror screenshot right */}
        <div style={{ display: "flex", gap: "56px", marginTop: "56px", alignItems: "flex-start" }}>
        <div style={{ ...section, flex: "1 1 0%" }}>
          <h2 style={heading}>Product Strategy</h2>
          <p style={body}>
            Early prototypes surfaced several issues common to LLM-generated responses. Personas often converged on
            similar opinions, produced overly agreeable feedback, relied on external web knowledge instead of their
            intended feedback, instead of their intended identities or offered generic suggestions that weren&rsquo;t
            actionable.
          </p>
          <p style={body}>
            One challenge we encountered early in development was that evaluating AI personas manually was slow,
            inconsistent and difficult to scale. Every prompt change required recreating personas and comparing
            responses one conversation. To solve this, I helped design and build an internal testing tool connected to
            the Anthropic API that streamlined our evaluation workflow. The tool allowed us to:
          </p>
          <ul style={{ ...body, listStyle: "disc", paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <li>Generate synthetic personas on demand by inputting demographic attributes and background information.</li>
            <li>Rapidly batch test dozens of personas without manually recreating prompts for each experiment.</li>
            <li>
              Pair selected personas in structured debates to evaluate how consistently they maintained their assigned
              identities when challenged by opposing viewpoints.
            </li>
            <li>Quickly compare prompt variations across multiple scenarios, dramatically reducing iteration time.</li>
          </ul>
          <p style={body}>
            This internal tool that enabled us to create a repeatable framework that allowed us to iterate faster,
            validate assumptions more rigorously and ultimately deliver a more trustworthy experience. We continued to
            iterate on our prompts through dozens of testing cycles, refining both the prompts themselves and the
            underlying model parameters. We experimented with factors such as temperature, response length, and system
            instructions to strike the right balance between consistency and authenticity.
          </p>
          <p style={body}>Our ultimate goal became ensuring that our personalities were able to hold an opinion firmly.</p>
        </div>

        {/* Mirror screenshot beside the text */}
        <div style={{ flex: "1 1 0%", display: "flex", flexDirection: "column", gap: "8px", paddingTop: "38px" }}>
          <img
            src="/images/perspective/mirror-tool.png"
            alt="The internal Mirror testing tool interface"
            style={{ width: "100%", height: "auto", display: "block", border: "1px solid rgba(0,0,0,0.08)" }}
          />
          <p style={{ ...body, textAlign: "right" }}>
            prior to being called Perspective, this project&rsquo;s name was Mirror!
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
