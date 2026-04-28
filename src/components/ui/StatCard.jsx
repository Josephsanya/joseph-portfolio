import { useState } from 'react'
import { useInView } from '../../hooks/useInView'
import { useCounter } from '../../hooks/useCounter'

export default function StatCard({ value, suffix, label }) {
  const [ref, inView] = useInView()
  const count = useCounter(value, inView)
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg-card)',
        border: `1px solid ${hovered ? 'rgba(0,217,255,.35)' : 'var(--border)'}`,
        borderRadius: 12,
        padding: '24px 20px',
        textAlign: 'center',
        transition: 'border-color .3s',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2.2rem',
          fontWeight: 800,
          color: 'var(--cyan)',
          lineHeight: 1,
        }}
      >
        {count}{suffix}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '.78rem',
          color: 'var(--text-dim)',
          marginTop: 6,
        }}
      >
        {label}
      </div>
    </div>
  )
}
