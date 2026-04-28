import FadeIn from './ui/FadeIn'
import SectionLabel from './ui/SectionLabel'
import { EXPERIENCE, SOFT_SKILLS } from '../data'

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: '100px clamp(20px,6vw,80px)',
        background: 'rgba(0,217,255,.015)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <SectionLabel label="04 / EXPERIENCE" />

      <div style={{ maxWidth: 780, margin: '0 auto' }}>
        <FadeIn>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem,4vw,2.8rem)',
              fontWeight: 800,
              marginBottom: 52,
            }}
          >
            Where I've <span style={{ color: 'var(--cyan)' }}>worked.</span>
          </h2>
        </FadeIn>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: 40 }}>
          {/* Spine */}
          <div
            style={{
              position: 'absolute',
              left: 14,
              top: 8,
              bottom: 8,
              width: 1,
              background: 'linear-gradient(to bottom, var(--cyan), var(--purple), transparent)',
            }}
          />

          {EXPERIENCE.map((ex, i) => (
            <FadeIn key={ex.title} delay={i * 120}>
              <div style={{ position: 'relative', marginBottom: 48 }}>
                {/* Timeline dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: -32,
                    top: 6,
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    background: ex.color,
                    boxShadow: `0 0 12px ${ex.color}`,
                    border: '2px solid var(--bg)',
                  }}
                />

                {/* Card */}
                <div
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 12,
                    padding: '24px 28px',
                    transition: 'border-color .3s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = `${ex.color}40`)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                >
                  {/* Header row */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: 8,
                      marginBottom: 16,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 700,
                          fontSize: '1.05rem',
                          color: '#f1f5f9',
                        }}
                      >
                        {ex.title}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '.73rem',
                          color: ex.color,
                          marginTop: 3,
                        }}
                      >
                        {ex.company}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '.72rem',
                          color: 'var(--text-dim)',
                        }}
                      >
                        {ex.period}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '.78rem',
                          color: '#4b5563',
                          marginTop: 2,
                        }}
                      >
                        {ex.type}
                      </div>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul
                    style={{
                      paddingLeft: 0,
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 8,
                    }}
                  >
                    {ex.points.map(pt => (
                      <li
                        key={pt}
                        style={{
                          display: 'flex',
                          gap: 10,
                          color: 'var(--text-muted)',
                          fontSize: '.875rem',
                          lineHeight: 1.65,
                        }}
                      >
                        <span
                          style={{
                            color: ex.color,
                            marginTop: 5,
                            fontSize: '.5rem',
                            flexShrink: 0,
                          }}
                        >
                          ◆
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}

          {/* Soft skills card */}
          <FadeIn delay={280}>
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: '22px 28px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '.65rem',
                  color: 'var(--purple)',
                  marginBottom: 14,
                  letterSpacing: '.08em',
                }}
              >
                // SOFT_SKILLS
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {SOFT_SKILLS.map(s => (
                  <span
                    key={s}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '.8rem',
                      padding: '5px 14px',
                      borderRadius: 20,
                      background: 'rgba(139,92,246,.07)',
                      border: '1px solid rgba(139,92,246,.2)',
                      color: '#a78bfa',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
