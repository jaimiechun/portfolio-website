"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<"dot" | "view" | "link" | "drag" | "tag">("dot");
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
      const tagEl = target.closest?.('[data-cursor="tag"]') as HTMLElement | null;
      const dragEl = target.closest?.('[data-cursor="drag"]') as HTMLElement | null;
      if (viewEl) {
        setLabel(viewEl.dataset.cursorLabel || "VIEW CASE STUDY");
        setMode("view");
      } else if (tagEl) {
        setLabel(tagEl.dataset.cursorLabel || "");
        setMode("tag");
      } else if (dragEl) {
        setLabel(dragEl.dataset.cursorLabel || "SCROLL/DRAG TO MOVE");
        setMode("drag");
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

  // Every labelled mode renders as a pill; only the bare "dot" stays a circle.
  const isPill = mode === "view" || mode === "drag" || mode === "tag";

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
          background: "#FF3E00",
          color: "#fff",
          borderRadius: "999px",
          // Tag padding is tuned so "Hi!" lands on the frame's 36x22 pill and
          // the coffee tag on its 144x33 one.
          padding: isPill ? (mode === "tag" ? "5px 10px" : "9px 16px") : 0,
          width: isPill ? "auto" : "14px",
          height: isPill ? "auto" : "14px",
          // Photo tags wrap to two lines the way they do in the Figma frame.
          whiteSpace: mode === "tag" ? "normal" : "nowrap",
          maxWidth: mode === "tag" ? "144px" : undefined,
          textAlign: "center",
          fontFamily: mode === "tag" ? "var(--font-plex-mono)" : "var(--font-mono)",
          fontSize: mode === "tag" ? "13px" : "11px",
          lineHeight: mode === "tag" ? 1.15 : undefined,
          fontWeight: mode === "tag" ? 400 : 500,
          letterSpacing: mode === "tag" ? 0 : "0.08em",
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
        {mode === "tag" && label}
        {mode === "drag" && (
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
              <path d="M12 2v20M2 12h20M6 6l-4 6 4 6M18 6l4 6-4 6" />
            </svg>
            {label}
          </>
        )}
      </div>
    </div>
  );
}
