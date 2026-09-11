import Link from "next/link";
import styles from "./Nav.module.css";

const links = [
  { label: "WORK", href: "/" },
  { label: "AND?", href: "/play" },
  { label: "ABOUT", href: "/about" },
];

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.wordmark}>
          JAIMIE CHUN
        </Link>
        {links.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className={`${styles.link} ${styles.navLink}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
