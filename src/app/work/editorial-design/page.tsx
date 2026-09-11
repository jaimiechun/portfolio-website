import type { Metadata } from "next";
import Link from "next/link";
import styles from "../case-study.module.css";

export const metadata: Metadata = {
  title: "Editorial Design — Jaimie Chun",
};

export default function EditorialDesign() {
  return (
    <div
      className={styles.page}
      style={{ "--case-accent": "#7d83ee", "--hero-h": "480" } as React.CSSProperties}
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
      </aside>

      <div className={styles.divider} aria-hidden />

      {/* Solid fill stands in until the hero artwork is placed in the frame. */}
      <div className={styles.hero} />

      <div className={styles.body}>
        <h1 className={styles.title} id="overview">
          Leading an award-winning publication&rsquo;s transition into magazine
          writing and design
        </h1>

        <div className={styles.metaRow}>
          <div className={styles.metaCol}>
            <p className={styles.label}>TIMELINE</p>
            <p className={styles.metaValue}>2020&ndash;2024</p>
          </div>

          <div className={styles.metaCol}>
            <p className={styles.label}>ROLE</p>
            <p className={styles.metaValue}>
              Editor-in-chief / <span className={styles.dim}>&lsquo;23&ndash;&rsquo;24</span>
              <br />
              Managing Editor / <span className={styles.dim}>&lsquo;22&ndash;&rsquo;23</span>
              <br />
              Copy Editor / <span className={styles.dim}>&lsquo;21&ndash;&rsquo;22</span>
            </p>
          </div>

          <div className={styles.metaCol}>
            <p className={styles.label}>TEAM</p>
            <p className={styles.metaValue}>
              <em>The Accolade</em> @ Sunny Hills
              <br />
              Me!
            </p>
          </div>

          <div className={styles.metaCol}>
            <p className={styles.label}>TOOLS</p>
            <p className={styles.metaValue}>
              InDesign
              <br />
              Illustrator
              <br />
              Photoshop
              <br />
              Lots of Writing!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
