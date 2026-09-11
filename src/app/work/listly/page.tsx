import type { Metadata } from "next";
import Link from "next/link";
import styles from "../case-study.module.css";

export const metadata: Metadata = {
  title: "Listly — Jaimie Chun",
};

// Hero board is 1242x601 in the frame (Figma node 150:196). Phones are placed
// as percentages of it so they hold position at any width; each export is 2x
// its slot, and all three overflow the bottom edge, which the hero clips.
const HERO_W = 1242;
const HERO_H = 601;
const pct = (n: number, of: number) => `${(n / of) * 100}%`;

const phones = [
  { src: "/images/listly/v2/phone-create.png", alt: "Listly start screen: create a shared list", x: 78, y: 28, w: 370 },
  { src: "/images/listly/v2/phone-join.png", alt: "Listly join screen: enter your name", x: 435, y: 120, w: 376 },
  { src: "/images/listly/v2/phone-list.png", alt: "A shared Listly list with tagged items", x: 795, y: 0, w: 368 },
];

const steps = [
  {
    title: "Create a List",
    body: "A user creates a list (or opens a shared link); Firestore autogenerates a unique document ID for that group and that ID becomes the list’s URL",
  },
  {
    title: "Say Who You Are",
    body: "The name you enter is saved to your browser’s local storage and synced into the group’s member list in Firestore.",
  },
  {
    title: "Add & Tag Items",
    body: "Each item you add — tagged read, watch, listen, visit, eat — is written straight into Firestore, timestamped and attributed to your name",
  },
];

export default function Listly() {
  return (
    <div
      className={styles.page}
      style={{ "--case-accent": "#0f9d8c", "--hero-h": String(HERO_H) } as React.CSSProperties}
    >
      <aside className={styles.sidebar}>
        <Link href="/" className={styles.home}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.arrow} src="/images/work/arrow-left.svg" alt="" aria-hidden />
          HOME
        </Link>
        <a href="#overview" className={styles.sectionLink}>
          OVERVIEW
        </a>
        <a href="#context" className={styles.sectionLink}>
          CONTEXT
        </a>
      </aside>

      <div className={styles.divider} aria-hidden />

      <div className={styles.hero}>
        {phones.map((p) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={p.src}
            src={p.src}
            alt={p.alt}
            style={{
              position: "absolute",
              left: pct(p.x, HERO_W),
              top: pct(p.y, HERO_H),
              width: pct(p.w, HERO_W),
              height: "auto",
            }}
          />
        ))}
      </div>

      <div className={styles.body}>
        <h1 className={styles.title} id="overview">
          Collaborative Bucket List Web App, Listly
        </h1>

        <div className={styles.metaRow}>
          <div className={styles.metaCol}>
            <p className={styles.label}>TIMELINE</p>
            <p className={styles.metaValue}>1 Week</p>
          </div>
          <div className={styles.metaCol}>
            <p className={styles.label}>ROLE</p>
            <p className={styles.metaValue}>
              Designer
              <br />
              Developer
            </p>
          </div>
          <div className={styles.metaCol}>
            <p className={styles.label}>TEAM</p>
            <p className={styles.metaValue}>Me!</p>
          </div>
          <div className={styles.metaCol}>
            <p className={styles.label}>TOOLS</p>
            <p className={styles.metaValue}>
              Figma
              <br />
              HTML
              <br />
              JavaScript
              <br />
              Supabase
            </p>
          </div>
        </div>

        <section className={styles.section} id="why">
          <p className={styles.label}>WHY BUILD THIS</p>
          <h2 className={styles.sectionHeading}>A link that remembers what we forgot</h2>
          <div className={styles.prose}>
            <p>
              Our to-do lists with family and close circle of friends are always
              growing. Oftentimes, such suggestions get texted into the group chat
              after we stumble across a enticing restaurant video on social media
              or hear a compelling movie review in conversation. &ldquo;We should
              ...,&rdquo; &ldquo;let&rsquo;s ...,&rdquo; &ldquo;we have to go
              here....&rdquo;
            </p>
            <p>
              Unfortunately, these places, restaurants and experiences that spark
              our interest in the moment get lost in the stream of subsequent
              messages. By the time we want to revisit one of those
              recommendations, it&rsquo;s near impossible to scroll back and find
              it.
            </p>
            <p>
              This repeating pattern and lack of organization when it came to
              experiences I wanted to share with people I care for is what led me
              to build with web app. I wanted something that turned scattered
              suggestions into a clean and curated shared to-do list &mdash; so I
              built it!
            </p>
          </div>
        </section>

        <section className={styles.section} id="context">
          <p className={styles.label}>CONTEXT</p>
          <h2 className={styles.sectionHeading}>Design-code collaboration</h2>
          <div className={styles.prose}>
            <p>
              Within a week and a half, I needed to finish my wireframes and
              explore for the first time how to leverage AI in the design process.
              I started building this web app with an AI-integrated approach.
              Rather than a linear design-to-code pipeline, I iterated fluidly
              between design and engineering: sketching layouts in Figma, then
              refining features as I saw how the screens looked like on my phone
              and computer.
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.media}
            src="/images/listly/v2/code-flow.jpg"
            alt="Listly screens in development alongside the code that drives them"
            width={671}
            height={379}
            style={{ width: "calc(671 * var(--u))" }}
          />
        </section>

        <section className={styles.section} id="how">
          <p className={styles.label}>HOW IT WORKS</p>
          <ol className={styles.steps}>
            {steps.map((s, i) => (
              <li key={s.title} className={styles.step}>
                <div className={styles.stepHead}>
                  <span className={styles.stepNum}>{i + 1}</span>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                </div>
                <p className={`${styles.prose} ${styles.stepBody}`}>{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.section} id="engineering">
          <p className={styles.label}>ENGINEERING HIGHLIGHTS</p>
          <div className={styles.prose}>
            <p>
              Listly is a static HTML/JS app deployed on Firebase Hosting, with
              Firestore as the entire backend. This project was a great
              introduction to learning how backend-as-a-service platforms operate
              where the &ldquo;server&rdquo; is a managed data layer users talk to
              directly instead of code I&rsquo;d have to write and host myself.
            </p>
          </div>

          <div className={styles.box}>
            <h3 className={styles.boxTitle}>Serverless by Design</h3>
            <div className={styles.prose}>
              <p>
                The frontend talks directly to Firestore. Because there&rsquo;s no
                server-side auth system to build, there was never a signup wall to
                design around. A UI/UX decision usually has to balance
                &ldquo;protect the data&rdquo; against &ldquo;make it easy to get
                in&rdquo; &mdash; going serverless meant that tradeoff barely
                existed. Anyone with the link is in instantly which matches how
                people actually behave in a group chat: they tap a link, they
                don&rsquo;t want to create a password first.
              </p>
            </div>
          </div>

          <div className={styles.box}>
            <h3 className={styles.boxTitle}>Local-first personalization layer</h3>
            <div className={styles.prose}>
              <p>
                Since there&rsquo;s no login, &ldquo;who you are&rdquo; and
                &ldquo;which lists are yours&rdquo; are reconstructed entirely
                client-side: localStorage tracks your display name per list, a
                rolling history of visited/bookmarked lists (with pinning and
                eviction once it hits a cap), while the actual member roster syncs
                back to Firestore so it&rsquo;s visible to the whole group, not
                just you.
              </p>
              <p className={styles.footnote}>
                <span aria-hidden>*</span>
                <span>
                  the tradeoff is that this identity is per-device, not per-person
                  &mdash; since there&rsquo;s no account tying you together across
                  browsers, opening a list you&rsquo;ve already joined on your
                  laptop from your phone won&rsquo;t recognize you, and you&rsquo;ll
                  be prompted to enter your name again, effectively
                  &ldquo;joining&rdquo; a second time on that device.
                </span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
