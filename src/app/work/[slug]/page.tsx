import type { Metadata } from "next";
import Link from "next/link";
import styles from "../case-study.module.css";

// Catch-all for projects whose case study hasn't been written yet — today that
// is only the Live Map. Each one graduates to its own route with a Figma frame
// behind it.
const titles: Record<string, string> = {
  "data-viz-water-security": "Live Map for Data Collection",
};

function titleFor(slug: string) {
  return (
    titles[slug] ?? slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return { title: `${titleFor(slug)} — Jaimie Chun` };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className={styles.page} style={{ "--case-accent": "#ff3e00" } as React.CSSProperties}>
      <aside className={styles.sidebar}>
        <Link href="/" className={styles.home}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.arrow} src="/images/work/arrow-left.svg" alt="" aria-hidden />
          HOME
        </Link>
        <a href="#overview" className={styles.sectionLink}>
          OVERVIEW
        </a>
      </aside>

      <div className={styles.divider} aria-hidden />

      <div className={styles.body}>
        <h1 className={styles.title} id="overview">
          {titleFor(slug)}
        </h1>

        <section className={styles.section}>
          <p className={styles.label}>CURRENTLY BUILDING</p>
          <h2 className={styles.sectionHeading}>This case study is in progress</h2>
          <div className={styles.prose}>
            <p>
              I&rsquo;m still building this one. Check back soon &mdash; or{" "}
              <Link href="/about">say hello</Link> if you&rsquo;d like to hear
              about it sooner.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
