export default function SectionLabel({ label }) {
  return (
    <div
      style={{
        maxWidth: 1100,
        margin: '0 auto 28px',
        fontFamily: 'var(--font-mono)',
        fontSize: '.65rem',
        color: '#2d3748',
        letterSpacing: '.14em',
      }}
    >
      {label}
    </div>
  )
}
