import type { Metadata } from "next";
import styles from "./play.module.css";

export const metadata: Metadata = {
  title: "And? — Jaimie Chun",
};

// A holding page for now — the v1 draggable canvas still lives in
// src/components/PlayCanvas.tsx when this page gets designed.
export default function Play() {
  return (
    <div className={styles.page}>
      <p className={styles.label}>coming soon!</p>
    </div>
  );
}
