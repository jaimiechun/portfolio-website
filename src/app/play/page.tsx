import Sidebar from "@/components/Sidebar";

export default function Play() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      {/* Main content */}
      <div style={{ flex: 1, padding: "16px 32px 100px 44px" }}>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            letterSpacing: "0.05em",
            color: "var(--muted)",
          }}
        >
          COMING SOON ✦
        </p>
      </div>
    </div>
  );
}
