"use client";

export function HandUnderline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: "100%", height: "10px", display: "block" }}
      aria-hidden
    >
      <path
        d="M2 8 C20 5, 50 9, 80 7 C110 5, 140 9, 170 7 C185 6, 195 8, 198 7"
        stroke="var(--accent-red)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function SketchCircleNumber({ n }: { n: number }) {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "32px", height: "32px", flexShrink: 0 }}
      aria-hidden
    >
      <path
        d="M22 4 C34 4.5, 40 12, 39.5 22 C39 33, 31 40, 21 39.5 C10 39, 4 31, 4.5 21 C5 10.5, 12 3.5, 22 4 Z"
        stroke="#111111"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <text
        x="22"
        y="27"
        textAnchor="middle"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "13px",
          fontWeight: 400,
          fill: "#111111",
        }}
      >
        {n}
      </text>
    </svg>
  );
}

export function SketchArrow({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 32 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "28px", height: "18px", ...style }}
      aria-hidden
    >
      <path
        d="M2 10 C8 9, 18 10, 26 10"
        stroke="var(--accent-red)"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M20 4 C23 7, 26 9.5, 20 16"
        stroke="var(--accent-red)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function SketchSparkle({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "16px", height: "16px", ...style }}
      aria-hidden
    >
      <path
        d="M10 2 L10.5 8.5 L17 9 L10.5 10.5 L10 17 L9 10.5 L2 9 L9 8.5 Z"
        stroke="var(--accent-red)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function WatercolorBackground() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="wc-blur-1" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="80" />
          </filter>
          <filter id="wc-blur-2" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="100" />
          </filter>
          <filter id="wc-blur-3" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="60" />
          </filter>
        </defs>

        {/* Dusty blue — top left */}
        <ellipse
          cx="100" cy="120" rx="260" ry="200"
          fill="#A3BFDB"
          opacity="0.55"
          filter="url(#wc-blur-1)"
        />

        {/* Terracotta/salmon — top right */}
        <ellipse
          cx="1300" cy="100" rx="240" ry="180"
          fill="#D97F76"
          opacity="0.45"
          filter="url(#wc-blur-1)"
        />

        {/* Warm cream — bottom center */}
        <ellipse
          cx="720" cy="850" rx="280" ry="160"
          fill="#F2E5CA"
          opacity="0.60"
          filter="url(#wc-blur-2)"
        />

        {/* Salmon — bottom left */}
        <ellipse
          cx="80" cy="820" rx="180" ry="140"
          fill="#D97F76"
          opacity="0.30"
          filter="url(#wc-blur-3)"
        />

        {/* Dusty blue — right mid */}
        <ellipse
          cx="1380" cy="700" rx="160" ry="130"
          fill="#A3BFDB"
          opacity="0.35"
          filter="url(#wc-blur-3)"
        />
      </svg>
    </div>
  );
}
