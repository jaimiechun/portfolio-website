"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<"dot" | "view" | "link">("dot");
  const [label, setLabel] = useState("VIEW CASE STUDY");
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse/trackpad)
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...target };
    let raf = 0;

    const loop = () => {
      // Ease toward the mouse for a soft trailing feel
      pos.x += (target.x - pos.x) * 0.22;
      pos.y += (target.y - pos.y) * 0.22;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element;
      const viewEl = target.closest?.('[data-cursor="view"]') as HTMLElement | null;
      if (viewEl) {
        setLabel(viewEl.dataset.cursorLabel || "VIEW CASE STUDY");
        setMode("view");
      } else if (target.closest?.('a, button, [data-cursor="link"]')) {
        setMode("link");
      } else {
        setMode("dot");
      }
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.2s",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "#DA4E22",
          color: "#fff",
          borderRadius: "999px",
          padding: mode === "view" ? "9px 16px" : 0,
          width: mode === "view" ? "auto" : "14px",
          height: mode === "view" ? "auto" : "14px",
          whiteSpace: "nowrap",
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.08em",
          opacity: mode === "link" ? 0.55 : 1,
          transition: "padding 0.15s ease, opacity 0.15s ease",
        }}
      >
        {mode === "view" && (
          <>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            {label}
          </>
        )}
      </div>
    </div>
  );
}
