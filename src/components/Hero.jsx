import { useTyping } from "../hooks/useTyping";
import { TITLES, BIO_SHORT, FLOATING_CODE, SOCIALS } from "../data";
import profileImg from "../assets/profile.jpg";

export default function Hero({ scrollTo }) {
  const typed = useTyping(TITLES);

  return (
    <section
      id="home"
      className="grid-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "100px clamp(20px,5vw,80px) 60px",
      }}
    >
      {/* Ambient blobs */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(0,217,255,.07) 0%,transparent 70%)",
          top: "-10%",
          right: "-8%",
          animation: "float 11s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(139,92,246,.09) 0%,transparent 70%)",
          bottom: "5%",
          left: "-6%",
          animation: "float 14s ease-in-out infinite 2s",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 220,
          height: 220,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(57,255,159,.06) 0%,transparent 70%)",
          top: "45%",
          left: "38%",
          animation: "float 8s ease-in-out infinite 1s",
          pointerEvents: "none",
        }}
      />

      {/* Floating code labels */}
      {FLOATING_CODE.map((txt, i) => (
        <span
          key={i}
          className="tag-float"
          style={{
            top: `${[12, 22, 65, 75, 82, 38][i]}%`,
            left: `${[5, 80, 3, 75, 15, 85][i]}%`,
            animation: `float ${7 + i}s ease-in-out infinite ${i * 0.8}s`,
          }}
        >
          {txt}
        </span>
      ))}

      {/* Main content — two-column on desktop */}
      <div
        style={{
          maxWidth: 1050,
          width: "100%",
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(40px,6vw,80px)",
        }}
      >
        {/* ── Text column ── */}
        <div style={{ flex: "1 1 340px", minWidth: 0 }}>
          {/* Status pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "6px 16px",
              border: "1px solid rgba(57,255,159,.3)",
              borderRadius: 20,
              marginBottom: 32,
              background: "rgba(57,255,159,.04)",
            }}
          >
            <div style={{ position: "relative", width: 8, height: 8 }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  background: "var(--green)",
                  animation: "pulse-ring 2s infinite",
                }}
              />
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--green)",
                  boxShadow: "0 0 8px var(--green)",
                  position: "relative",
                }}
              />
            </div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: ".72rem",
                color: "var(--green)",
              }}
            >
              Open to opportunities · Remote / Hybrid
            </span>
          </div>

          {/* Glitch name */}
          <h1
            className="glitch"
            data-text="Joseph Sanyaolu"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem,7vw,4.8rem)",
              fontWeight: 800,
              lineHeight: 1.06,
              color: "#f1f5f9",
              letterSpacing: "-.025em",
              marginBottom: 18,
            }}
          >
            Joseph Sanyaolu
          </h1>

          {/* Typing subtitle */}
          <div
            style={{
              height: 36,
              marginBottom: 24,
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(.9rem,2.2vw,1.2rem)",
                color: "var(--cyan)",
              }}
            >
              {typed}
              <span style={{ animation: "blink .85s infinite" }}>|</span>
            </span>
          </div>

          {/* Bio */}
          <p
            style={{
              maxWidth: 500,
              marginBottom: 40,
              fontSize: "clamp(.88rem,1.8vw,1rem)",
              color: "var(--text-muted)",
              lineHeight: 1.8,
            }}
          >
            {BIO_SHORT.split("—")[0]}—
            <span style={{ color: "var(--cyan)", fontStyle: "italic" }}>
              {BIO_SHORT.split("—")[1]}
            </span>
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              marginBottom: 40,
            }}
          >
            <button className="btn-s" onClick={() => scrollTo("projects")}>
              View My Work →
            </button>
            <a href="/resume.pdf" className="btn-c" download>
              Download CV
            </a>
          </div>

          {/* Socials */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "7px 14px",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  color: "var(--text-dim)",
                  textDecoration: "none",
                  fontFamily: "var(--font-mono)",
                  fontSize: ".7rem",
                  transition: "all .2s",
                  background: "rgba(255,255,255,.015)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${s.color}60`;
                  e.currentTarget.style.color = s.color;
                  e.currentTarget.style.background = `${s.color}08`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--text-dim)";
                  e.currentTarget.style.background = "rgba(255,255,255,.015)";
                }}
              >
                {s.icon} {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Avatar column ── */}
        <div
          style={{
            flex: "0 0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          {/* Outer glow ring */}
          <div
            style={{
              position: "relative",
              width: "clamp(200px, 26vw, 290px)",
              height: "clamp(200px, 26vw, 290px)",
            }}
          >
            {/* Spinning dashed orbit */}
            <div
              style={{
                position: "absolute",
                inset: -14,
                borderRadius: "50%",
                border: "1px dashed rgba(0,217,255,.2)",
                animation: "spin-slow 18s linear infinite",
              }}
            />
            {/* Static glow ring */}
            <div
              className="avatar-ring"
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "2px solid rgba(0,217,255,.4)",
              }}
            />
            {/* Profile photo */}
            <img
              src={profileImg}
              alt="Joseph Sanyaolu"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
                position: "relative",
                zIndex: 1,
                filter: "contrast(1.05) brightness(1.02)",
              }}
            />

            {/* Corner badge */}
            <div
              style={{
                position: "absolute",
                bottom: 8,
                right: 8,
                zIndex: 2,
                background: "var(--bg-card)",
                border: "1px solid rgba(57,255,159,.4)",
                borderRadius: 20,
                padding: "4px 12px",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--green)",
                  boxShadow: "0 0 6px var(--green)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: ".6rem",
                  color: "var(--green)",
                }}
              >
                Available
              </span>
            </div>
          </div>

          {/* Quick stats under avatar */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 10,
              width: "100%",
            }}
          >
            {[
              { val: "4+", lbl: "Years Exp." },
              { val: "10+", lbl: "Projects" },
              { val: "MERN", lbl: "Stack" },
              { val: "🌍", lbl: "Remote" },
            ].map((item) => (
              <div
                key={item.lbl}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  padding: "10px 12px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: ".95rem",
                    color: "var(--cyan)",
                  }}
                >
                  {item.val}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: ".6rem",
                    color: "var(--text-dim)",
                    marginTop: 2,
                  }}
                >
                  {item.lbl}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: ".6rem",
            color: "#2d3748",
            letterSpacing: ".12em",
          }}
        >
          SCROLL_DOWN
        </span>
        <div
          style={{
            width: 1,
            height: 44,
            background: "linear-gradient(to bottom, var(--cyan), transparent)",
            animation: "float 2.2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
