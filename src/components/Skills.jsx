import { useState } from "react";
import FadeIn from "./ui/FadeIn";
import SkillBar from "./ui/SkillBar";
import SectionLabel from "./ui/SectionLabel";
import { SKILL_CATS, TECH_CLOUD } from "../data";

export default function Skills() {
  const [activeCat, setActiveCat] = useState("Frontend");

  return (
    <section
      id="skills"
      style={{
        padding: "100px clamp(20px,6vw,80px)",
        background: "rgba(0,217,255,.015)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <SectionLabel label="02 / SKILLS" />

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
            The tech I work with{" "}
            <span style={{ color: "var(--cyan)" }}>daily.</span>
          </h2>
          <p
            style={{
              color: "var(--text-dim)",
              marginBottom: 44,
              fontSize: ".9rem",
            }}
          >
            Full-stack competency across frontend, backend, database, and
            DevOps.
          </p>
        </FadeIn>

        {/* Tech cloud */}
        <FadeIn delay={100}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              marginBottom: 56,
            }}
          >
            {TECH_CLOUD.map((t, i) => {
              const colors = [
                "var(--cyan)",
                "var(--green)",
                "var(--purple)",
                "var(--text-muted)",
              ];
              return (
                <span
                  key={t}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: ".74rem",
                    padding: "6px 14px",
                    borderRadius: 6,
                    background: "rgba(255,255,255,.03)",
                    border: "1px solid #242436",
                    color: colors[i % 4],
                    transition: "all .2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(0,217,255,.06)";
                    e.currentTarget.style.borderColor = "rgba(0,217,255,.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,.03)";
                    e.currentTarget.style.borderColor = "#242436";
                  }}
                >
                  {t}
                </span>
              );
            })}
          </div>
        </FadeIn>

        {/* Category tabs */}
        <div
          style={{
            display: "flex",
            gap: 10,
            marginBottom: 36,
            flexWrap: "wrap",
          }}
        >
          {Object.keys(SKILL_CATS).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: ".75rem",
                padding: "8px 18px",
                borderRadius: 6,
                cursor: "pointer",
                transition: "all .25s",
                background: activeCat === cat ? "var(--cyan)" : "transparent",
                color: activeCat === cat ? "#000" : "var(--text-dim)",
                border: `1px solid ${activeCat === cat ? "var(--cyan)" : "#242436"}`,
                fontWeight: activeCat === cat ? 600 : 400,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill bars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "0 60px",
          }}
        >
          {SKILL_CATS[activeCat].map((sk, i) => (
            <SkillBar
              key={sk.name + activeCat}
              name={sk.name}
              level={sk.level}
              delay={i * 80}
            />
          ))}
        </div>

        {/* Tools strip */}
        <FadeIn delay={200}>
          <div
            style={{
              marginTop: 56,
              padding: "24px 28px",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              display: "flex",
              flexWrap: "wrap",
              gap: 24,
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: ".65rem",
                color: "var(--cyan)",
                letterSpacing: ".1em",
                whiteSpace: "nowrap",
              }}
            >
              // TOOLS & ENV
            </span>
            {[
              "VS Code",
              "Postman",
              "GitHub",
              "Docker",
              "Netlify",
              "cPanel",
              "Linux (Ubuntu)",
              "Nginx",
              "PM2",
              "Shell Scripting",
            ].map((tool) => (
              <span
                key={tool}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: ".8rem",
                  color: "var(--text-muted)",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span style={{ color: "var(--purple)", fontSize: ".55rem" }}>
                  ◆
                </span>
                {tool}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
