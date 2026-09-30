import Link from "next/link";
import AutoVideo from "@/components/AutoVideo";
import GradientThumb from "@/components/GradientThumb";
import styles from "./home.module.css";

type Project = {
  meta: string;
  title: string;
  desc: string;
  src?: string;
  /** When set, the thumbnail plays this on loop instead of showing `src`,
   *  which becomes its poster. */
  video?: string;
  /** When set, the thumbnail is drawn rather than loaded — a live gradient. */
  gradient?: boolean;
  /**
   * Thumbnail box, taken position-for-position from the matching card on
   * emmiwu.com — not the native size of the artwork. The image is cover-fit
   * into it, so each Figma frame should be redesigned to this ratio.
   */
  w: number;
  h: number;
  href?: string;
  external?: boolean;
  /** Turns the cursor into a labelled pill over this card, as on the About page. */
  cursorTag?: string;
};

/* One list in reading order, dealt alternately into the two columns: item 1
   heads the left column, item 2 the right, item 3 sits under item 1, and so
   on. Inserting a project therefore slides every later card one place along
   rather than pushing a whole column down. */
const projects: Project[] = [
  {
    meta: "INTUIT - FALL 2026",
    title: "CreditKarma for Gen Z",
    desc: "Financial habits for younger generations",
    gradient: true,
    // Nothing constrains a drawn thumbnail's box, so it takes the reference
    // recording's 1358x766 proportions — which also keeps it off WISE Scale's
    // height, so the two columns stay staggered rather than squaring up.
    w: 729,
    h: 412,
    cursorTag: "CURRENTLY LEADING",
  },
  {
    meta: "WISE SCALE - SUMMER 2026",
    title: "Live Map for Data Collection",
    desc: "Visualizing and understanding data on water insecurity across the globe",
    src: "/images/work/live-map.jpg",
    w: 729,
    h: 583,
    // No href on purpose — the case study isn't written, so the card is a
    // static image that only reports "CURRENTLY BUILDING" on hover.
    cursorTag: "CURRENTLY BUILDING",
  },
  {
    meta: "KNIGHT LAB - SPRING 2026",
    title: "Digital Twins in Journalism",
    desc: "Deeply trained AI personalities helping identify blinds spots before publication",
    src: "/images/work/digital-twins.png",
    video: "/videos/digital-twins.mp4",
    w: 729,
    h: 502,
    href: "/work/synthetic-audience-auditing",
  },
  {
    meta: "APP DEVELOPMENT - SPRING 2026",
    title: "Collaborative Bucket List Concept",
    desc: "Building a simple web app to make sure we never miss out of things we want to do with loved ones",
    src: "/images/work/bucket-list.jpg",
    w: 729,
    h: 641,
    href: "/work/listly",
  },
  {
    meta: "STORYTELLING FOR THE WEB - SPRING 2026",
    title: "A Chicago Food Business Story",
    desc: "Writing, photographing and designing a Chicago story for the web",
    src: "/images/work/chicago-food.png",
    video: "/videos/chicago-food.mp4",
    w: 729,
    h: 858,
    href: "https://jaimiechun.github.io/morning-jay-s-story/",
    external: true,
  },
  {
    meta: "VARIOUS PUBLICATIONS - ONGOING",
    title: "Editorial Design",
    desc: "Creating editorial illustrations to translate narratives into visual storytelling.",
    src: "/images/work/editorial-design.jpg",
    w: 729,
    h: 641,
    href: "/work/editorial-design",
  },
];

const left = projects.filter((_, i) => i % 2 === 0);
const right = projects.filter((_, i) => i % 2 === 1);

function Card({ project, order }: { project: Project; order: number }) {
  const body = (
    <>
      {project.gradient ? (
        <GradientThumb
          className={styles.thumb}
          style={{ aspectRatio: `${project.w} / ${project.h}` }}
        />
      ) : project.video ? (
        <AutoVideo
          className={styles.thumb}
          src={project.video}
          poster={project.src}
          label={project.title}
          style={{ aspectRatio: `${project.w} / ${project.h}` }}
        />
      ) : (
        <img
          className={styles.thumb}
          src={project.src}
          alt={project.title}
          width={project.w}
          height={project.h}
          style={{ aspectRatio: `${project.w} / ${project.h}` }}
        />
      )}
      <p className={styles.meta}>{project.meta}</p>
      <h2 className={styles.title}>{project.title}</h2>
      <p className={styles.desc}>{project.desc}</p>
    </>
  );

  // A card with no destination is plain content — not focusable, not clickable
  // — but still carries its cursor tag so hovering explains why.
  if (!project.href) {
    return (
      <div
        className={styles.card}
        style={{ order }}
        data-cursor={project.cursorTag ? "tag" : undefined}
        data-cursor-label={project.cursorTag}
      >
        {body}
      </div>
    );
  }

  return (
    <Link
      href={project.href}
      target={project.external ? "_blank" : undefined}
      rel={project.external ? "noopener noreferrer" : undefined}
      className={styles.card}
      style={{ order }}
      data-cursor={project.cursorTag ? "tag" : undefined}
      data-cursor-label={project.cursorTag}
    >
      {body}
    </Link>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.hero}>
        I&rsquo;m Jaimie, an engineer who builds with the curiosity and rigor of
        a journalist.
      </h1>

      <div className={styles.grid}>
        <div className={styles.col}>
          {left.map((p) => (
            <Card key={p.title} project={p} order={projects.indexOf(p)} />
          ))}
        </div>
        <div className={styles.col}>
          {right.map((p) => (
            <Card key={p.title} project={p} order={projects.indexOf(p)} />
          ))}
        </div>
      </div>
    </div>
  );
}
