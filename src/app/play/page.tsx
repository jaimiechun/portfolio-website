import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "And? — Jaimie Chun",
};

// Intentionally blank for now — the v1 draggable canvas still lives in
// src/components/PlayCanvas.tsx when this page gets designed.
export default function Play() {
  return <div style={{ minHeight: "100vh" }} />;
}
