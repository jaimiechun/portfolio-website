"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type ImageTile = {
  kind: "image";
  src: string;
  alt: string;
  caption?: string;
  x: number;
  y: number;
  width: number;
  rotate?: number;
};

type StoryTile = {
  kind: "story";
  headline: string;
  section: string;
  date: string;
  href: string;
  x: number;
  y: number;
  width: number;
  rotate?: number;
};

type Tile = ImageTile | StoryTile;

// Fixed positions on a canvas larger than the viewport — freely rearrange,
// resize, or add tiles here. Reuses images already in the project.
// Journalism clippings — stories written for The Accolade
const tiles: Tile[] = [
  {
    kind: "story",
    headline: "UPHILL JOURNEY: Sophomore with muscular myopathy advocates for herself",
    section: "FEATURE",
    date: "OCT 2023",
    href: "https://shhsaccolade.com/14155/feature/uphill-journey-sophomore-with-muscular-myopathy-advocates-for-herself/",
    x: 60, y: 60, width: 260, rotate: -2,
  },
  {
    kind: "story",
    headline: "SAYING 'ADIOS': Spanish teacher retires from alma mater after 22-year teaching career",
    section: "FEATURE",
    date: "MAY 2023",
    href: "https://shhsaccolade.com/13462/feature/spanish-teacher-rolls-closing-credits-with-a-22-year-teaching-career-at-sh/",
    x: 400, y: 200, width: 250, rotate: 3,
  },
  {
    kind: "story",
    headline: "LGBTQ+ LOVE: Queer couples come forth with their relationships",
    section: "SPECIAL SECTIONS",
    date: "FEB 2023",
    href: "https://shhsaccolade.com/12446/special-sections/lgbtq-love-queer-couples-come-forth-with-their-relationships/",
    x: 100, y: 380, width: 250, rotate: 2,
  },
  {
    kind: "story",
    headline: "SUNNY OR SHADY?: Students, staff reflect on AI's impact within education",
    section: "SPECIAL SECTIONS",
    date: "DEC 2022",
    href: "https://shhsaccolade.com/12106/special-sections/sunny-or-shady-students-staff-reflect-on-ais-impact-within-education/",
    x: 440, y: 480, width: 250, rotate: -3,
  },
  {
    kind: "story",
    headline: "The Accolade tapped national Pacemaker finalist — only journalism program in Orange County given such an honor",
    section: "NEWS",
    date: "OCT 2021",
    href: "https://shhsaccolade.com/9166/news/the-accolade-newspaper-pdf-issues-from-2020-2021-tapped-national-pacemaker-finalist-only-journalism-program-in-orange-county-given-such-an-honor/",
    x: 720, y: 60, width: 270, rotate: 1,
  },
  {
    kind: "story",
    headline: "Finding my identity through the pandemic",
    section: "OPINION",
    date: "MAY 2021",
    href: "https://shhsaccolade.com/7150/opinion/finding-my-identity-through-the-pandemic/",
    x: 760, y: 320, width: 240, rotate: -2,
  },
];

const BOARD_WIDTH = 1100;
const BOARD_HEIGHT = 640;

// Below this speed (px/frame) an inertia glide is considered finished.
const INERTIA_STOP_THRESHOLD = 0.05;
// Fraction of velocity retained each frame — lower = more friction, quicker stop.
const FRICTION = 0.94;

export default function PlayCanvas() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [pan, setPan] = useState({ x: -80, y: -40 });
  const panRef = useRef(pan);
  const dragState = useRef<{ dragging: boolean; startX: number; startY: number; startPanX: number; startPanY: number }>({
    dragging: false,
    startX: 0,
    startY: 0,
    startPanX: 0,
    startPanY: 0,
  });
  // Rolling history of recent pointer positions, used to estimate release velocity.
  const moveHistory = useRef<{ t: number; x: number; y: number }[]>([]);
  const velocity = useRef({ x: 0, y: 0 });
  const inertiaFrame = useRef(0);

  const clamp = useCallback((next: { x: number; y: number }) => {
    const vp = viewportRef.current;
    if (!vp) return next;
    const vw = vp.clientWidth;
    const vh = vp.clientHeight;
    const minX = Math.min(0, vw - BOARD_WIDTH);
    const minY = Math.min(0, vh - BOARD_HEIGHT);
    const pad = 80; // let content overshoot slightly for a looser feel
    return {
      x: Math.max(minX - pad, Math.min(pad, next.x)),
      y: Math.max(minY - pad, Math.min(pad, next.y)),
    };
  }, []);

  const applyPan = useCallback(
    (next: { x: number; y: number }) => {
      const clamped = clamp(next);
      panRef.current = clamped;
      setPan(clamped);
      return clamped;
    },
    [clamp]
  );

  const stopInertia = useCallback(() => {
    if (inertiaFrame.current) {
      cancelAnimationFrame(inertiaFrame.current);
      inertiaFrame.current = 0;
    }
  }, []);

  const runInertia = useCallback(() => {
    const step = () => {
      velocity.current.x *= FRICTION;
      velocity.current.y *= FRICTION;
      const before = panRef.current;
      const after = applyPan({ x: before.x + velocity.current.x, y: before.y + velocity.current.y });
      // Hitting a clamped edge kills momentum on that axis instead of pushing against it.
      if (after.x === before.x) velocity.current.x = 0;
      if (after.y === before.y) velocity.current.y = 0;

      const speed = Math.hypot(velocity.current.x, velocity.current.y);
      if (speed > INERTIA_STOP_THRESHOLD) {
        inertiaFrame.current = requestAnimationFrame(step);
      } else {
        inertiaFrame.current = 0;
      }
    };
    inertiaFrame.current = requestAnimationFrame(step);
  }, [applyPan]);

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      if (!dragState.current.dragging) return;
      const now = performance.now();
      moveHistory.current.push({ t: now, x: e.clientX, y: e.clientY });
      // Only need a short recent window to estimate velocity at release.
      moveHistory.current = moveHistory.current.filter((p) => now - p.t < 100);
      applyPan({
        x: dragState.current.startPanX + (e.clientX - dragState.current.startX),
        y: dragState.current.startPanY + (e.clientY - dragState.current.startY),
      });
    };
    const onPointerUp = (e: PointerEvent) => {
      if (!dragState.current.dragging) return;
      dragState.current.dragging = false;
      const vp = viewportRef.current;
      if (vp) vp.style.cursor = "";

      // Estimate release velocity (px/frame at ~60fps) from the recent move history.
      // Require at least ~one frame of elapsed time so near-simultaneous events
      // (fast real flicks, or synthetic/programmatic dispatch) can't produce a
      // division-by-tiny-dt velocity spike.
      const MIN_DT = 8;
      const MAX_SPEED = 60; // px/frame safety cap, well above any real flick
      const history = moveHistory.current;
      const oldest = history[0];
      if (oldest) {
        const dt = performance.now() - oldest.t;
        if (dt >= MIN_DT) {
          let vx = ((e.clientX - oldest.x) / dt) * (1000 / 60);
          let vy = ((e.clientY - oldest.y) / dt) * (1000 / 60);
          const speed = Math.hypot(vx, vy);
          if (speed > MAX_SPEED) {
            const scale = MAX_SPEED / speed;
            vx *= scale;
            vy *= scale;
          }
          velocity.current = { x: vx, y: vy };
          if (speed > INERTIA_STOP_THRESHOLD) {
            stopInertia();
            runInertia();
          }
        }
      }
      moveHistory.current = [];
    };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [applyPan, runInertia, stopInertia]);

  useEffect(() => stopInertia, [stopInertia]);

  const onPointerDown = (e: React.PointerEvent) => {
    stopInertia();
    moveHistory.current = [{ t: performance.now(), x: e.clientX, y: e.clientY }];
    dragState.current = {
      dragging: true,
      startX: e.clientX,
      startY: e.clientY,
      startPanX: panRef.current.x,
      startPanY: panRef.current.y,
    };
  };

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    stopInertia();
    applyPan({
      x: panRef.current.x - e.deltaX,
      y: panRef.current.y - e.deltaY,
    });
  };

  return (
    <div
      ref={viewportRef}
      data-cursor="drag"
      onPointerDown={onPointerDown}
      onWheel={onWheel}
      style={{
        width: "100%",
        height: "calc(100vh - 50px)",
        overflow: "hidden",
        position: "relative",
        touchAction: "none",
        userSelect: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${BOARD_WIDTH}px`,
          height: `${BOARD_HEIGHT}px`,
          transform: `translate(${pan.x}px, ${pan.y}px)`,
        }}
      >
        {tiles.map((tile) =>
          tile.kind === "image" ? (
            <figure
              key={tile.src}
              style={{
                position: "absolute",
                left: `${tile.x}px`,
                top: `${tile.y}px`,
                width: `${tile.width}px`,
                margin: 0,
                transform: `rotate(${tile.rotate ?? 0}deg)`,
                pointerEvents: "none",
              }}
            >
              <img
                src={tile.src}
                alt={tile.alt}
                draggable={false}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  border: "1px solid rgba(0,0,0,0.15)",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
                  background: "#fff",
                }}
              />
              {tile.caption && (
                <figcaption
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.05em",
                    color: "var(--muted)",
                    marginTop: "6px",
                  }}
                >
                  {tile.caption}
                </figcaption>
              )}
            </figure>
          ) : (
            <a
              key={tile.href}
              href={tile.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="view"
              data-cursor-label="READ STORY"
              style={{
                position: "absolute",
                left: `${tile.x}px`,
                top: `${tile.y}px`,
                width: `${tile.width}px`,
                transform: `rotate(${tile.rotate ?? 0}deg)`,
                display: "block",
                textDecoration: "none",
                color: "inherit",
                background: "#fdfcfa",
                border: "1px solid rgba(0,0,0,0.2)",
                boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
                padding: "14px 16px 16px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  letterSpacing: "0.08em",
                  color: "var(--muted)",
                  marginBottom: "8px",
                }}
              >
                THE ACCOLADE · {tile.section} · {tile.date}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: 1.3,
                  color: "var(--foreground)",
                }}
              >
                {tile.headline}
              </p>
            </a>
          )
        )}
      </div>
    </div>
  );
}
