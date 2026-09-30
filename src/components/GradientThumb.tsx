import styles from "./GradientThumb.module.css";

/* Palette for the CreditKarma card. #008600 is the base field, so it dominates
   whatever the blobs are doing; the rest drift across it. */
const palette = {
  "--g-base": "#008600",
  "--g-1": "#008600",
  "--g-2": "#809958",
  "--g-3": "#ca9285",
  "--g-4": "#145763",
  "--g-5": "#eee9cb",
} as React.CSSProperties;

export default function GradientThumb({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`${styles.wrap} ${className ?? ""}`} style={{ ...palette, ...style }}>
      <div className={styles.field} aria-hidden>
        <span className={`${styles.blob} ${styles.b1}`} />
        <span className={`${styles.blob} ${styles.b2}`} />
        <span className={`${styles.blob} ${styles.b3}`} />
        <span className={`${styles.blob} ${styles.b4}`} />
        <span className={`${styles.blob} ${styles.b5}`} />
        <span className={`${styles.blob} ${styles.b6}`} />
      </div>

      <div className={styles.mark}>
        <p className={styles.lockup}>intuit creditkarma</p>
      </div>
    </div>
  );
}
