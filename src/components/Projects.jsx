import FadeIn from "./ui/FadeIn";
import ProjectCard from "./ui/ProjectCard";
import SectionLabel from "./ui/SectionLabel";
import { PROJECTS, PERSONAL } from "../data";

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "100px clamp(20px,6vw,80px)" }}>
      <SectionLabel label="03 / PROJECTS" />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem,4vw,2.8rem)",
              fontWeight: 800,
              marginBottom: 12,
            }}
          >
            Things I've <span style={{ color: "var(--cyan)" }}>built.</span>
          </h2>
          <p
            style={{
              color: "var(--text-dim)",
              marginBottom: 48,
              fontSize: ".9rem",
            }}
          >
            End-to-end ownership & valid contribution — from architecture to
            deployment.
          </p>
        </FadeIn>

        {/* Projects grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
            gap: 22,
          }}
        >
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        {/* GitHub CTA */}
        <FadeIn delay={200}>
          <div style={{ textAlign: "center", marginTop: 52 }}>
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-c"
            >
              View All on GitHub →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
