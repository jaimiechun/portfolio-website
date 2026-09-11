import type { Metadata } from "next";
import Link from "next/link";
import styles from "../case-study.module.css";

export const metadata: Metadata = {
  title: "Perspective — Jaimie Chun",
};

// Hero is a 1242x601 sage field (frame 171:461) with the demo video floated on
// top of it, 659 wide and centred — roughly 53% of the hero's width.
const HERO_H = 601;
const HERO_FILL = "#97ad87";
const VIDEO_W = `${(659 / 1242) * 100}%`;

// Testing gallery. Flex ratios match each image's aspect ratio so all three
// render at the same height, tops and bottoms aligned.
const gallery = [
  {
    src: "/images/perspective/sticky-testing.jpg",
    alt: "Sticky notes from temperature and model testing sessions",
    caption: "temperature/model testing",
    ratio: 0.755,
    bordered: false,
  },
  {
    src: "/images/perspective/doc-feedback.png",
    alt: "Annotated feedback document from iterative persona testing",
    caption: "iterative testing & modifications",
    ratio: 1.112,
    bordered: true,
  },
  {
    src: "/images/perspective/mirror-personas.png",
    alt: "Persona stances on the best ice cream flavor, each holding their opinion",
    caption: "capable of holding opinions",
    ratio: 1.643,
    bordered: true,
  },
];

export default function PerspectiveCaseStudy() {
  return (
    <div
      className={styles.page}
      style={
        {
          "--case-accent": "#873134",
          "--hero-h": String(HERO_H),
        } as React.CSSProperties
      }
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
        <a href="#opportunity" className={styles.sectionLink}>
          OPPORTUNITY
        </a>
        <a href="#strategy" className={styles.sectionLink}>
          STRATEGY
        </a>
      </aside>

      <div className={styles.divider} aria-hidden />

      <div className={styles.hero} style={{ background: HERO_FILL }}>
        <video
          className={styles.heroInset}
          src="/videos/perspective-demo.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          style={{ width: VIDEO_W, pointerEvents: "none" }}
        />
      </div>

      <div className={styles.body}>
        <h1 className={styles.title} id="overview">
          AI Product to Simulate Diverse Perspectives
        </h1>

        <div className={styles.metaRow}>
          <div className={styles.metaCol}>
            <p className={styles.label}>TIMELINE</p>
            <p className={styles.metaValue}>April &ndash; May</p>
          </div>
          <div className={styles.metaCol}>
            <p className={styles.label}>ROLE</p>
            <p className={styles.metaValue}>Product Manager</p>
          </div>
          <div className={styles.metaCol}>
            <p className={styles.label}>TEAM</p>
            <p className={styles.metaValue}>
              Dasha Dubinina
              <br />
              Kevin Redfern
            </p>
          </div>
          <div className={styles.metaCol}>
            <p className={styles.label}>TOOLS / SKILLS</p>
            <p className={styles.metaValue}>
              Claude
              <br />
              A/B Testing
              <br />
              API
              <br />
              LLM
            </p>
          </div>
        </div>

        <section className={styles.section}>
          <p className={styles.label}>OVERVIEW</p>
          <h2 className={styles.sectionHeading}>Humanizing AI</h2>
          <div className={styles.prose}>
            <p>
              As newsrooms face shrinking resources and increasing pressure to
              build public trust, understanding how different communities
              perceive reporting has become more important than ever.
              Traditional audience research methods such as focus groups and
              interviews provide valuable insight but are expensive,
              time-intensive and difficult to incorporate into everyday
              editorial workflows.
            </p>
            <p>
              Recognizing this unmet need, our team of three student journalists
              set out to build Perspective, an AI-powered editorial auditing
              tool designed to help journalists identify coverage blind spots
              before publication. Instead of replacing community engagement,
              Perspective uses LLM-generated &ldquo;digital twins,&rdquo;
              synthetic audience personas modeled after real community
              perspectives, to simulate how different groups might interpret a
              story. The goal is to give reporters an additional layer of
              feedback that encourages more thoughtful reporting while making
              audience listening more scalable.
            </p>
            <p>We set out to accomplish this by humanizing AI.</p>
          </div>
        </section>

        <section className={styles.section} id="opportunity">
          <p className={styles.label}>THE PRODUCT OPPORTUNITY</p>
          <h2 className={styles.sectionHeading}>Our user problem</h2>
          <div className={styles.prose}>
            <p>
              As a team of student journalists, we had personally experienced
              the challenges of reporting with limited resources and
              opportunities to gather meaningful audience feedback before
              publication. While our experiences highlighted the problem, we
              wanted to validate that these pain points extended beyond our
              newsroom.
            </p>
            <p>
              We began approaching the project more intentionally with this
              broader product question: how might we make audience feedback
              accessible, instantaneous and diverse before people commit
              significant time or resources?
            </p>
            <p>
              To do this, we conducted user interviews with journalists, both
              professional and those part of on-campus publications, to
              understand their editorial workflows and existing methods for
              gathering audience insight. Across these conversations, we found:
            </p>
          </div>
          <ul className={`${styles.prose} ${styles.bullets}`}>
            <li>
              audience feedback came after publication and primarily from an
              established, highly engaged readership
            </li>
            <li>
              journalism organizations relied on letters to the editor, comments
              or surveys completed by loyal readers, which are certainly
              valuable sources of feedback but one representing only a
              self-selected portion of their audience
            </li>
            <li>
              in fast paced environments like that of a journalism organization,
              traditional user research is often too slow to perform
              continuously
            </li>
            <li>
              we also identified a key business challenge:
              journalists&rsquo; reluctance to adopt AI. There was a general
              wariness toward AI tools in journalism, driven by concerns about
              trust and editorial integrity.
            </li>
          </ul>

          <div className={styles.gallery}>
            {gallery.map((g) => (
              <figure key={g.src} className={styles.galleryItem} style={{ flexGrow: g.ratio }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={g.bordered ? styles.bordered : undefined}
                  src={g.src}
                  alt={g.alt}
                />
                <figcaption className={`${styles.prose} ${styles.caption}`}>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className={styles.section} id="strategy">
          <p className={styles.label}>PRODUCT STRATEGY</p>
          <h2 className={styles.sectionHeading}>Making personas hold an opinion</h2>
          <div className={styles.split}>
            <div>
              <div className={styles.prose}>
                <p>
                  Early prototypes surfaced several issues common to
                  LLM-generated responses. Personas often converged on similar
                  opinions, produced overly agreeable feedback, relied on
                  external web knowledge instead of their intended identities,
                  or offered generic suggestions that weren&rsquo;t actionable.
                </p>
                <p>
                  One challenge we encountered early in development was that
                  evaluating AI personas manually was slow, inconsistent and
                  difficult to scale. Every prompt change required recreating
                  personas and comparing responses one conversation at a time.
                  To solve this, I helped design and build an internal testing
                  tool connected to the Anthropic API that streamlined our
                  evaluation workflow. The tool allowed us to:
                </p>
              </div>
              <ul className={`${styles.prose} ${styles.bullets}`}>
                <li>
                  generate synthetic personas on demand by inputting demographic
                  attributes and background information
                </li>
                <li>
                  rapidly batch test dozens of personas without manually
                  recreating prompts for each experiment
                </li>
                <li>
                  pair selected personas in structured debates to evaluate how
                  consistently they maintained their assigned identities when
                  challenged by opposing viewpoints
                </li>
                <li>
                  quickly compare prompt variations across multiple scenarios,
                  dramatically reducing iteration time
                </li>
              </ul>
              <div className={styles.prose}>
                <p>
                  This internal tool enabled us to create a repeatable framework
                  that allowed us to iterate faster, validate assumptions more
                  rigorously and ultimately deliver a more trustworthy
                  experience. We continued to iterate on our prompts through
                  dozens of testing cycles, refining both the prompts themselves
                  and the underlying model parameters. We experimented with
                  factors such as temperature, response length, and system
                  instructions to strike the right balance between consistency
                  and authenticity.
                </p>
                <p>
                  Our ultimate goal became ensuring that our personalities were
                  able to hold an opinion firmly.
                </p>
              </div>
            </div>

            <figure className={styles.galleryItem}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={styles.bordered}
                src="/images/perspective/mirror-tool.png"
                alt="The internal Mirror testing tool interface"
              />
              <figcaption className={`${styles.prose} ${styles.caption}`}>
                prior to being called Perspective, this project&rsquo;s name was
                Mirror!
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
    </div>
  );
}
