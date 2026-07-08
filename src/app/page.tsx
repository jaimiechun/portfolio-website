import ProjectCard from "@/components/ProjectCard";
import Sidebar from "@/components/Sidebar";

const projects = [
  {
    slug: "data-viz-water-security",
    title: "Data Visualization for Flagship Report on Global Water Security",
    category: "INTERNSHIP",
    date: "JUNE 2026–PRESENT",
    images: ["/images/wise-gender-map.jpg", "/images/wise-collection-map.jpg"],
    cursorLabel: "IN PROGRESS",
  },
  {
    slug: "synthetic-audience-auditing",
    title: "Perspective: Synthetic Audience Auditing",
    category: "KNIGHT LAB PROJECT",
    date: "FEB–JUNE 2026",
    embed: "/embeds/perspectives.html",
    cursorLabel: "VIEW PROJECT",
  },
  {
    slug: "cache-app",
    title: "Cache: A Collaborative List Note-taking App",
    category: "PERSONAL PROJECT",
    date: "MARCH–MAY 2026",
  },
  {
    slug: "journalism-web-story",
    title: "Journalism Web Story",
    category: "PERSONAL PROJECT",
    date: "MARCH–MAY 2026",
    video: "/videos/journalism-web-story.mp4",
    cursorLabel: "READ FULL STORY",
    externalUrl: "https://jaimiechun.github.io/morning-jay-s-story/",
  },
];


export default function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          minHeight: "calc(100vh - 50px)",
        }}
      >
        <Sidebar />

        {/* Main content */}
        <main style={{ flex: 1, padding: "16px 44px 80px" }}>
          <div style={{ display: "flex", gap: "32px", alignItems: "flex-start" }}>
            {/* Left column — starts at top, shorter images */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
              <ProjectCard {...projects[0]} imageAspect="17/12" />
              <ProjectCard {...projects[2]} imageAspect="17/12" />
            </div>
            {/* Right column — same top, slightly taller images */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <ProjectCard {...projects[1]} imageAspect="4/3" />
              <ProjectCard {...projects[3]} imageAspect="4/3" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
