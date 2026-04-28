import { useState } from "react";
import FadeIn from "./ui/FadeIn";
import { SOCIALS, PERSONAL } from "../data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/mojyobbw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%",
    background: "var(--bg-card)",
    border: "1px solid var(--border)",
    borderRadius: 8,
    padding: "12px 16px",
    color: "var(--text)",
    fontFamily: "var(--font-body)",
    fontSize: ".9rem",
    outline: "none",
    transition: "border-color .2s",
  };

  return (
    <section id="contact" style={{ padding: "100px clamp(20px,6vw,80px)" }}>
      <div style={{ maxWidth: 920, margin: "0 auto" }}>
        <FadeIn>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: ".72rem",
              color: "var(--cyan)",
              letterSpacing: ".14em",
              marginBottom: 16,
            }}
          >
            05 / CONTACT
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem,5vw,3.4rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            Let's build something
            <br />
            <span style={{ color: "var(--cyan)" }}>remarkable.</span>
          </h2>
          <p
            style={{
              color: "var(--text-dim)",
              fontSize: ".96rem",
              lineHeight: 1.8,
              marginBottom: 52,
              maxWidth: 500,
            }}
          >
            Open to full-time roles, freelance contracts, and interesting
            collaboration. If you have a project or position in mind — let's
            talk.
          </p>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 48,
            alignItems: "start",
          }}
        >
          {/* ── Contact Form ── */}
          <FadeIn delay={80}>
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              <div>
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: ".68rem",
                    color: "var(--text-dim)",
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  // name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(0,217,255,.5)")
                  }
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>

              <div>
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: ".68rem",
                    color: "var(--text-dim)",
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  // email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(0,217,255,.5)")
                  }
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>

              <div>
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: ".68rem",
                    color: "var(--text-dim)",
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  // message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(0,217,255,.5)")
                  }
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>

              <button
                type="submit"
                className="btn-s"
                disabled={status === "sending"}
                style={{
                  opacity: status === "sending" ? 0.7 : 1,
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                }}
              >
                {status === "sending" ? "Sending..." : "Send Message →"}
              </button>

              {status === "sent" && (
                <div
                  style={{
                    padding: "10px 16px",
                    borderRadius: 8,
                    background: "rgba(57,255,159,.08)",
                    border: "1px solid rgba(57,255,159,.25)",
                    color: "var(--green)",
                    fontFamily: "var(--font-mono)",
                    fontSize: ".75rem",
                  }}
                >
                  ✓ Message sent! I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div
                  style={{
                    padding: "10px 16px",
                    borderRadius: 8,
                    background: "rgba(239,68,68,.08)",
                    border: "1px solid rgba(239,68,68,.25)",
                    color: "#f87171",
                    fontFamily: "var(--font-mono)",
                    fontSize: ".75rem",
                  }}
                >
                  ✕ Something went wrong. Email me directly instead.
                </div>
              )}

              {/* Direct email */}
              <a
                href={`mailto:${PERSONAL.email}`}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: ".72rem",
                  color: "var(--text-dim)",
                  textDecoration: "none",
                  textAlign: "center",
                  transition: "color .2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--cyan)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-dim)")
                }
              >
                or email me directly → {PERSONAL.email}
              </a>
            </form>
          </FadeIn>

          {/* ── Social links ── */}
          <FadeIn delay={160}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: ".65rem",
                  color: "var(--text-dim)",
                  letterSpacing: ".1em",
                  marginBottom: 6,
                }}
              >
                // FIND_ME_ON
              </div>

              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "16px 20px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    textDecoration: "none",
                    transition: "all .25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${s.color}50`;
                    e.currentTarget.style.boxShadow = `0 0 18px ${s.color}14`;
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <span
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      background: `${s.color}12`,
                      border: `1px solid ${s.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1rem",
                      color: s.color,
                      flexShrink: 0,
                    }}
                  >
                    {s.icon}
                  </span>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                        fontSize: ".9rem",
                        color: s.color,
                      }}
                    >
                      {s.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: ".65rem",
                        color: "var(--text-dim)",
                        marginTop: 2,
                      }}
                    >
                      {s.sub}
                    </div>
                  </div>
                  <span
                    style={{
                      marginLeft: "auto",
                      color: "var(--text-dim)",
                      fontSize: ".8rem",
                    }}
                  >
                    →
                  </span>
                </a>
              ))}

              {/* Availability note */}
              <div
                style={{
                  marginTop: 8,
                  padding: "16px 20px",
                  background: "rgba(57,255,159,.04)",
                  border: "1px solid rgba(57,255,159,.18)",
                  borderRadius: 12,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: ".7rem",
                    color: "var(--green)",
                    marginBottom: 6,
                  }}
                >
                  ● Currently Available
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: ".82rem",
                    color: "var(--text-dim)",
                    lineHeight: 1.6,
                  }}
                >
                  Open to full-time roles, contract work, and freelance
                  projects. Based in Lagos & Ibadan, Nigeria —{" "}
                  <span style={{ color: "var(--text-muted)" }}>
                    remote or hybrid preferred.
                  </span>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
