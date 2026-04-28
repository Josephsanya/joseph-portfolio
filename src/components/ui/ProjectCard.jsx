import { useState } from 'react'
import { useInView } from '../../hooks/useInView'

export default function ProjectCard({ project: p }) {
  const [ref, inView] = useInView(0.05)
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg-card)',
        border: `1px solid ${hovered ? `${p.accent}55` : 'var(--border)'}`,
        borderRadius: 14,
        padding: 28,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        opacity: inView ? 1 : 0,
        transform: inView ? (hovered ? 'translateY(-6px)' : 'translateY(0)') : 'translateY(28px)',
        boxShadow: hovered ? `0 20px 40px rgba(0,0,0,.45), 0 0 20px ${p.accent}18` : 'none',
        transition: 'opacity .6s ease, transform .4s ease, border-color .3s, box-shadow .3s',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: '1.5rem', color: p.accent }}>{p.icon}</span>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.15rem',
              fontWeight: 700,
              color: '#f1f5f9',
            }}
          >
            {p.title}
          </h3>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '.65rem',
            padding: '3px 10px',
            borderRadius: 20,
            background: `${p.accent}12`,
            border: `1px solid ${p.accent}35`,
            color: p.accent,
            whiteSpace: 'nowrap',
          }}
        >
          {p.status}
        </span>
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '.875rem',
          color: 'var(--text-muted)',
          lineHeight: 1.7,
          flexGrow: 1,
        }}
      >
        {p.desc}
      </p>

      {/* Highlights */}
      <ul style={{ paddingLeft: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 5 }}>
        {p.highlights.map(h => (
          <li
            key={h}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'var(--font-body)',
              fontSize: '.8rem',
              color: 'var(--text-dim)',
            }}
          >
            <span style={{ color: p.accent, fontSize: '.6rem' }}>▸</span>
            {h}
          </li>
        ))}
      </ul>

      {/* Tech badges */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {p.tech.map(t => (
          <span
            key={t}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '.65rem',
              padding: '3px 9px',
              borderRadius: 4,
              background: 'rgba(255,255,255,.04)',
              border: '1px solid #2a2a40',
              color: 'var(--text-muted)',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: 16, paddingTop: 4 }}>
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '.75rem',
            color: 'var(--text-dim)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            transition: 'color .2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dim)')}
        >
          ⌨ GitHub
        </a>
        {p.live && (
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '.75rem',
              color: 'var(--text-dim)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              transition: 'color .2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--green)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dim)')}
          >
            ↗ Live Demo
          </a>
        )}
      </div>
    </div>
  )
}
