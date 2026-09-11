import Link from "next/link";
import AutoVideo from "@/components/AutoVideo";
import styles from "./home.module.css";

type Project = {
  meta: string;
  title: string;
  desc: string;
  src: string;
  /** When set, the thumbnail plays this on loop instead of showing `src`,
   *  which becomes its poster. */
  video?: string;
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

// Left and right stacks, in the order the frame lays them out.
const left: Project[] = [
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
    meta: "APP DEVELOPMENT - SPRING 2026",
    title: "Collaborative Bucket List Concept",
    desc: "Building a simple web app to make sure we never miss out of things we want to do with loved ones",
    src: "/images/work/bucket-list.jpg",
    w: 729,
    h: 641,
    href: "/work/listly",
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

const right: Project[] = [
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
];

function Card({ project }: { project: Project }) {
  const body = (
    <>
      {project.video ? (
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
            <Card key={p.title} project={p} />
          ))}
        </div>
        <div className={styles.col}>
          {right.map((p) => (
            <Card key={p.title} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
