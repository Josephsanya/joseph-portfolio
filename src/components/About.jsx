import FadeIn from './ui/FadeIn'
import StatCard from './ui/StatCard'
import SectionLabel from './ui/SectionLabel'
import { STATS, EDUCATION } from '../data'

export default function About({ scrollTo }) {
  return (
    <section
      id="about"
      style={{ padding: '100px clamp(20px,6vw,80px)' }}
    >
      <SectionLabel label="01 / ABOUT" />

      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 60,
          alignItems: 'start',
        }}
      >
        {/* ── Text ── */}
        <FadeIn>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem,4vw,2.8rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            Building the full picture,<br />
            <span style={{ color: 'var(--cyan)' }}>front to back.</span>
          </h2>

          <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '.96rem', marginBottom: 18 }}>
            I'm a self-taught Full-stack Developer and Software Engineer with over 4 years of experience
            building dynamic, scalable, and secure web applications across the entire stack. I thrive in
            JavaScript and its ecosystem — Node.js, React, Express — and love crafting robust APIs,
            intuitive UIs, and seamless database integrations.
          </p>

          <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '.96rem', marginBottom: 18 }}>
            I love optimizing cloud infrastructure, writing clean, secure code and solving real-world
            problems with scalable solutions. With a Computer Science degree and hands-on project
            experience, I thrive in fast-paced, product-driven environments.
          </p>

          <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '.96rem', marginBottom: 32 }}>
            I enjoy turning ideas into{' '}
            <span style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>reliable, production-ready systems</span>{' '}
            — from architecture to deployment. End-to-end ownership isn't just a preference; it's how I work.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="mailto:sanyaoluj1@gmail.com" className="btn-s">
              Let's Work Together
            </a>
            <button className="btn-c" onClick={() => scrollTo('projects')}>
              See Projects
            </button>
          </div>
        </FadeIn>

        {/* ── Stats + Education ── */}
        <FadeIn delay={150}>
          {/* Stats grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 14,
              marginBottom: 28,
            }}
          >
            {STATS.map(s => (
              <StatCard key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>

          {/* Education card */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: '22px 24px',
              marginBottom: 20,
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '.65rem',
                color: 'var(--cyan)',
                marginBottom: 10,
                letterSpacing: '.08em',
              }}
            >
              // EDUCATION
            </div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1rem',
                color: '#f1f5f9',
                marginBottom: 4,
              }}
            >
              {EDUCATION.degree}
            </div>
            <div style={{ color: 'var(--text-dim)', fontSize: '.85rem', marginBottom: 4 }}>
              {EDUCATION.school}
            </div>
            <div style={{ color: 'var(--text-dim)', fontSize: '.82rem', marginBottom: 12 }}>
              {EDUCATION.period}
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '.68rem',
                padding: '3px 10px',
                borderRadius: 4,
                background: 'rgba(57,255,159,.08)',
                border: '1px solid rgba(57,255,159,.25)',
                color: 'var(--green)',
              }}
            >
              {EDUCATION.grade}
            </span>
          </div>

          {/* Location + availability badges */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[
              { icon: '📍', text: 'Lagos / Ibadan, Nigeria', color: '#f59e0b' },
              { icon: '🌍', text: 'Remote Ready',            color: 'var(--green)' },
              { icon: '⚡', text: 'Open to Opportunities',   color: 'var(--cyan)' },
            ].map(b => (
              <div
                key={b.text}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 7,
                  padding: '7px 14px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 8,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '.7rem',
                  color: b.color,
                }}
              >
                {b.icon} {b.text}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
