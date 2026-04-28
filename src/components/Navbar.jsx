import { useState } from 'react'
import { useScrolled } from '../hooks/useScrolled'
import { NAV_LINKS } from '../data'

export default function Navbar({ scrollTo }) {
  const scrolled = useScrolled(50)
  const [menuOpen, setMenuOpen] = useState(false)

  const go = (id) => { scrollTo(id); setMenuOpen(false) }

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 200,
          padding: '14px clamp(20px,5vw,64px)',
          background: scrolled ? 'rgba(5,5,10,.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,217,255,.08)' : 'none',
          transition: 'all .35s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 500 }}>
          <span style={{ color: 'var(--cyan)' }}>&lt;</span>
          <span style={{ color: 'var(--text)' }}>joseph</span>
          <span style={{ color: 'var(--green)' }}>.</span>
          <span style={{ color: 'var(--purple)' }}>dev</span>
          <span style={{ color: 'var(--cyan)' }}>/&gt;</span>
        </div>

        {/* Desktop links */}
        <div className="dsk" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {NAV_LINKS.map(id => (
            <button key={id} className="nav-a" onClick={() => go(id)}>
              <span style={{ color: 'var(--cyan)' }}>./</span>{id}
            </button>
          ))}
          <a
            href="mailto:sanyaoluj1@gmail.com"
            className="btn-c"
            style={{ padding: '7px 18px', fontSize: '.74rem' }}
          >
            hire_me()
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="mob-btn"
          onClick={() => setMenuOpen(o => !o)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--cyan)',
            fontSize: '1.5rem',
            lineHeight: 1,
          }}
        >
          {menuOpen ? '✕' : '≡'}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${menuOpen ? 'open' : 'closed'}`}>
        {NAV_LINKS.map(id => (
          <button
            key={id}
            onClick={() => go(id)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              fontFamily: 'var(--font-mono)',
              fontSize: '.95rem',
              color: 'var(--text)',
            }}
          >
            <span style={{ color: 'var(--cyan)' }}>./</span>{id}
          </button>
        ))}
        <a
          href="mailto:sanyaoluj1@gmail.com"
          className="btn-s"
          style={{ textAlign: 'center', marginTop: 12 }}
        >
          hire_me()
        </a>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,.55)',
            zIndex: 198,
          }}
        />
      )}
    </>
  )
}
