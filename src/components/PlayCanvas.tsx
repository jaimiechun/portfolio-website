"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Tile = {
  src: string;
  alt: string;
  caption?: string;
  x: number;
  y: number;
  width: number;
  rotate?: number;
};

// Fixed positions on a canvas larger than the viewport — freely rearrange,
// resize, or add tiles here. Reuses images already in the project.
const tiles: Tile[] = [
  { src: "/images/headshot.jpg", alt: "Headshot", x: 60, y: 80, width: 220, rotate: -3 },
  { src: "/images/books/empire-of-ai.jpg", alt: "Empire of AI book cover", caption: "currently reading", x: 340, y: 40, width: 160, rotate: 2 },
  { src: "/images/books/wind-up-bird.jpg", alt: "The Wind-Up Bird Chronicle book cover", x: 560, y: 160, width: 160, rotate: -4 },
  { src: "/images/films/inception.jpg", alt: "Inception poster", caption: "a favorite", x: 820, y: 60, width: 180, rotate: 3 },
  { src: "/images/films/a-beautiful-mind.jpg", alt: "A Beautiful Mind poster", x: 1060, y: 220, width: 170, rotate: -2 },
  { src: "/images/wise-gender-map.jpg", alt: "WISE gender gap map", caption: "data viz", x: 100, y: 400, width: 320, rotate: -1 },
  { src: "/images/wise-collection-map.jpg", alt: "WISE data collection map", x: 480, y: 460, width: 300, rotate: 2 },
  { src: "/images/cache-thumbnail.png", alt: "Listly phone mockups", caption: "listly", x: 840, y: 420, width: 320, rotate: -2 },
  { src: "/images/books/the-idiot.jpg", alt: "The Idiot book cover", x: 1240, y: 60, width: 160, rotate: 4 },
  { src: "/images/films/stepmom.jpg", alt: "Stepmom poster", x: 1220, y: 340, width: 170, rotate: -3 },
  { src: "/images/films/schindlers-list.jpg", alt: "Schindler's List poster", caption: "films i love", x: 1460, y: 160, width: 170, rotate: 2 },
  { src: "/images/books/my-beloved-world.jpg", alt: "My Beloved World book cover", x: 1460, y: 440, width: 160, rotate: -2 },
];

const BOARD_WIDTH = 1720;
const BOARD_HEIGHT = 700;

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
    },
    [clamp]
  );

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      if (!dragState.current.dragging) return;
      applyPan({
        x: dragState.current.startPanX + (e.clientX - dragState.current.startX),
        y: dragState.current.startPanY + (e.clientY - dragState.current.startY),
      });
    };
    const onPointerUp = () => {
      dragState.current.dragging = false;
      const vp = viewportRef.current;
      if (vp) vp.style.cursor = "";
    };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [applyPan]);

  const onPointerDown = (e: React.PointerEvent) => {
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
        {tiles.map((tile) => (
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
        ))}
      </div>
    </div>
  );
}
