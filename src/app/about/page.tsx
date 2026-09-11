import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.stage}>
      <h1 className={styles.headline}>
        I&rsquo;m a builder and storyteller who loves the art of{" "}
        <em>creation</em>.
      </h1>

      <div className={styles.column}>
        <div className={styles.bio}>
          <p>Hi there, I&rsquo;m Jaimie.</p>
          <p>
            I initially entered college with an itch to become a reporter.
            However, I quickly fell in love with exploring how technology can
            transform the ways stories are told and experienced.
          </p>
          <p>
            For me, product management is the perfect culmination of the
            communication skills of journalism, the technical skills of CS, and
            the leadership skills of business.
          </p>
          <p>
            I&rsquo;m energized by projects that launch products from 0 &rarr;1
            and figuring out what people actually want. Currently, I&rsquo;m
            having the most fun in exploring novel AI interactions.
          </p>
          <p>Outside of creating, I&rsquo;m:</p>
          <ul>
            <li>
              developing news &amp; media products for journalism at Medill
            </li>
            <li>indulging in good books &amp; movies</li>
            <li>finding new restaurants and eating well!</li>
          </ul>
          <p>
            Say hello at{" "}
            <a
              className={styles.inlineLink}
              href="mailto:jaimiechun78@gmail.com"
            >
              jaimiechun78@gmail.com
            </a>{" "}
            or via{" "}
            <a
              className={styles.inlineLink}
              href="https://www.linkedin.com/in/jaimiekchun"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>

        <section className={styles.experience}>
          <h2 className={styles.sectionLabel}>Experience</h2>

          <div className={styles.row}>
            <p className={styles.title}>
              <a
                className={styles.link}
                href="https://www.ipr.northwestern.edu/wise-scales/"
                target="_blank"
                rel="noopener noreferrer"
              >
                WISE Scales
              </a>
              <span className={styles.sub}>
                {" "}
                / Data Science &amp; UX Intern
              </span>
            </p>
            <p className={styles.year}>2026</p>
          </div>

          <span className={styles.rule} aria-hidden />

          <div className={styles.row}>
            <p className={styles.title}>
              Urban Creator
              <span className={styles.sub}> / Marketing Intern</span>
            </p>
            <p className={styles.year}>2025</p>
          </div>

          <span className={styles.rule} aria-hidden />

          <div className={styles.row}>
            <p className={styles.title}>
              OC District Attorney&rsquo;s Office
              <span className={styles.sub}> / Public Affairs Intern</span>
            </p>
            <p className={styles.year}>2025</p>
          </div>
        </section>

        <section className={styles.education}>
          <h2 className={styles.sectionLabel}>
            Education &amp; Org Leadership
          </h2>

          <div className={styles.row}>
            <p className={styles.title}>
              Northwestern University
              <span className={styles.sub}>
                {" "}
                / CS &amp; Journalism, Data Science Minor
              </span>
            </p>
            <p className={styles.year}>2028</p>
          </div>

          <span className={styles.rule} aria-hidden />

          <div className={styles.row}>
            <p className={styles.title}>
              Spoon Magazine
              <span className={styles.sub}> / Head of Design</span>
            </p>
            <p className={styles.year}>2026</p>
          </div>

          <span className={styles.rule} aria-hidden />

          <div className={styles.row}>
            <p className={styles.title}>
              ISBE Mark
              <span className={styles.sub}> / Project Manager</span>
            </p>
            <p className={styles.year}>2025</p>
          </div>

          <span className={styles.rule} aria-hidden />

          <div className={styles.row}>
            <p className={styles.title}>
              Books &amp; Breakfast
              <span className={styles.sub}> / Paid Tutor</span>
            </p>
            <p className={styles.year}>2025</p>
          </div>
        </section>
      </div>

      <figure className={`${styles.photo} ${styles.daisies}`}>
        <img
          src="/images/about/daisies.jpg"
          alt="Daisies against an open sky"
        />
      </figure>

      <figure
        className={`${styles.photo} ${styles.headshot}`}
        data-cursor="tag"
        data-cursor-label="Hi!"
      >
        <img
          src="/images/about/headshot-sky.jpg"
          alt="Jaimie Chun smiling behind a laptop at sunset"
        />
      </figure>

      <figure
        className={`${styles.photo} ${styles.coffee}`}
        data-cursor="tag"
        data-cursor-label="Made with <3 & lots of coffee"
      >
        <img
          src="/images/about/coffee.jpg"
          alt="Three lattes with heart-shaped foam art"
        />
      </figure>
    </div>
  );
}
