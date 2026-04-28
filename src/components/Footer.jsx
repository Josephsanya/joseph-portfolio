export default function Footer({ scrollTo }) {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '28px clamp(20px,5vw,64px)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12,
      }}
    >
      {/* Logo */}
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.72rem' }}>
        <span style={{ color: 'var(--cyan)' }}>&lt;</span>
        <span style={{ color: 'var(--text-dim)' }}>joseph.dev</span>
        <span style={{ color: 'var(--cyan)' }}>/&gt;</span>
      </div>

      {/* Copyright */}
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '.68rem',
          color: '#374151',
        }}
      >
        © {new Date().getFullYear()} Joseph Sanyaolu · Lagos, Nigeria
      </span>

      {/* Back to top */}
      <button
        onClick={() => scrollTo('home')}
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '.68rem',
          color: 'var(--cyan)',
          background: 'none',
          border: '1px solid var(--border)',
          borderRadius: 4,
          padding: '5px 12px',
          cursor: 'pointer',
          transition: 'border-color .2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(0,217,255,.4)')}
        onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
      >
        ↑ back_to_top()
      </button>
    </footer>
  )
}
