import Sidebar from "@/components/Sidebar";
import PlayCanvas from "@/components/PlayCanvas";

export default function Play() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      {/* Main content */}
      <div style={{ flex: 1, overflow: "hidden" }}>
        <PlayCanvas />
      </div>
    </div>
  );
}
