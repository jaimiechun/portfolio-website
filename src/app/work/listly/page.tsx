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

const body: React.CSSProperties = {
  ...geist,
  fontSize: "14px",
  lineHeight: 1.75,
};

const sectionLabel: React.CSSProperties = {
  ...geist,
  fontSize: "18px",
  fontWeight: 600,
};

const infoCards = [
  { label: "MY ROLE", value: "Full-Stack Engineer & Product Designer" },
  { label: "TIMELINE", value: "July - August 2026" },
  { label: "TEAM", value: "Me!" },
  { label: "TOOLS", value: "HTML, JavaScript, Figma, Firebase, Claude" },
];

const phones = [
  { src: "/images/listly/phone1-start-list.png", alt: "Start a shared list screen", left: 1.51, top: 4.99, width: 32.95 },
  { src: "/images/listly/phone2-join-list.png", alt: "Join this list screen", left: 33.3, top: 21.39, width: 33.48 },
  { src: "/images/listly/phone3-add-item.png", alt: "Add something to the list screen", left: 65.36, top: 0, width: 32.77 },
];

const steps = [
  {
    n: 1,
    title: "Create a List",
    caption:
      "A user creates a list (or opens a shared link); Firestore autogenerates a unique document ID for that group and that ID becomes the list's URL",
  },
  {
    n: 2,
    title: "Say Who You Are",
    caption:
      "The name you enter is saved to your browser's local storage and synced into the group's member list in Firestore.",
  },
  {
    n: 3,
    title: "Add & Tag Items",
    caption:
      "Each item you add — tagged read, watch, listen, visit, eat — is written straight into Firestore, timestamped and attributed to your name",
  },
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
          href="https://list-app-87.web.app/"
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

        {/* Why Build This? */}
        <div style={{ marginTop: "56px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <h2 style={sectionLabel}>Why Build This?</h2>
          <p style={body}>
            Our to-do lists with family and close circle of friends are always growing. Oftentimes, such
            suggestions get texted into the group chat after we stumble across a enticing restaurant video on
            social media or hear a compelling movie review in conversation. &ldquo;We should ...,&rdquo; &ldquo;let&rsquo;s
            ...,&rdquo; &ldquo;we have to go here....&rdquo;
          </p>
          <p style={body}>
            Unfortunately, these places, restaurants and experiences that spark our interest in the moment get
            lost in the stream of subsequent messages. By the time we want to revisit one of those
            recommendations, it&rsquo;s near impossible to scroll back and find it.
          </p>
          <p style={body}>
            This repeating pattern and lack of organization when it came to experiences I wanted to share with
            people I care for is what led me to build with web app. I wanted something that turned scattered
            suggestions into a clean and curated shared to-do list — so I built it!
          </p>
        </div>

        {/* Design-Code Collaboration */}
        <div style={{ marginTop: "56px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <h2 style={sectionLabel}>Design-Code Collaboration</h2>
          <p style={body}>
            I started building this web app with an AI-integrated approach. Rather than a linear design-to-code
            pipeline, I iterated fluidly between design and engineering: sketching layouts in Figma, then
            refining features as I saw how the screens looked like on my phone and computer.
          </p>
          <div style={{ display: "flex", gap: "24px", marginTop: "8px", alignItems: "stretch" }}>
            <img
              src="/images/listly/app-mockups.png"
              alt="Three iPhone mockups of the Listly app screens"
              style={{ flex: "0.8 1 0%", minWidth: 0, width: "100%", maxWidth: "100%", height: "420px", objectFit: "cover", objectPosition: "top", display: "block" }}
            />
            <img
              src="/images/listly/code-editor.png"
              alt="Code editor screenshot showing the renderItems function"
              style={{ flex: "1.4 1 0%", minWidth: 0, width: "100%", maxWidth: "100%", height: "420px", objectFit: "cover", objectPosition: "top", display: "block" }}
            />
          </div>
        </div>

        {/* How It Works */}
        <div style={{ marginTop: "56px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <h2 style={sectionLabel}>How It Works</h2>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {steps.map((step) => (
              <div
                key={step.n}
                style={{
                  flex: "1 1 220px",
                  minWidth: "200px",
                  border: "1px solid var(--foreground)",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      border: "1px solid var(--foreground)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ ...geist, fontWeight: 600, fontSize: "14px" }}>{step.n}</span>
                  </div>
                  <p style={{ ...geist, fontWeight: 600, fontSize: "16px" }}>{step.title}</p>
                </div>
                <p style={{ ...body, fontSize: "12px" }}>{step.caption}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <p style={{ ...body, fontSize: "12px", flex: "1 1 220px", minWidth: "200px", display: "flex", gap: "6px" }}>
              <span aria-hidden>*</span>
              <span>
                The unique-link model wasn&rsquo;t chosen only for its simplicity. It was a deliberate bet on how
                people actually behave in group chats. Most chats won&rsquo;t let you pin a message, but they will
                let you pin a link, so a single, shareable URL means it can be anchored and easily accessible.
              </span>
            </p>
            <div style={{ flex: "1 1 220px", minWidth: "200px" }} aria-hidden />
            <div style={{ flex: "1 1 220px", minWidth: "200px" }} aria-hidden />
          </div>
        </div>

        {/* Engineering Highlights */}
        <div style={{ marginTop: "56px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <h2 style={sectionLabel}>Engineering Highlights</h2>
          <p style={body}>
            Listly is a static HTML/JS app deployed on Firebase Hosting, with Firestore as the entire backend.
            This project was a great introduction to learning how backend-as-a-service platforms operate where
            the &ldquo;server&rdquo; is a managed data layer users talk to directly instead of code I&rsquo;d have to
            write and host myself.
          </p>

          <div style={{ border: "1px solid var(--foreground)", padding: "20px", marginTop: "8px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <p style={{ ...geist, fontWeight: 600, fontSize: "16px" }}>Serverless by Design</p>
            <p style={body}>
              The frontend talks directly to Firestore. Because there&rsquo;s no server-side auth system to
              build, there was never a signup wall to design around. A UI/UX decision usually has to balance
              &ldquo;protect the data&rdquo; against &ldquo;make it easy to get in&rdquo; — going serverless meant that
              tradeoff barely existed. Anyone with the link is in instantly which matches how people actually
              behave in a group chat: they tap a link, they don&rsquo;t want to create a password first.
            </p>
          </div>

          <div style={{ border: "1px solid var(--foreground)", padding: "20px", marginTop: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <p style={{ ...geist, fontWeight: 600, fontSize: "16px" }}>Local-first personalization layer</p>
            <p style={body}>
              Since there&rsquo;s no login, &ldquo;who you are&rdquo; and &ldquo;which lists are yours&rdquo; are
              reconstructed entirely client-side: localStorage tracks your display name per list, a rolling
              history of visited/bookmarked lists (with pinning and eviction once it hits a cap), while the
              actual member roster syncs back to Firestore so it&rsquo;s visible to the whole group, not just
              you.
            </p>
            <p style={{ ...body, fontSize: "12px", display: "flex", gap: "6px", paddingLeft: "16px" }}>
              <span aria-hidden>*</span>
              <span>
                the tradeoff is that this identity is per-device, not per-person — since there&rsquo;s no account
                tying you together across browsers, opening a list you&rsquo;ve already joined on your laptop
                from your phone won&rsquo;t recognize you, and you&rsquo;ll be prompted to enter your name again,
                effectively &ldquo;joining&rdquo; a second time on that device.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
