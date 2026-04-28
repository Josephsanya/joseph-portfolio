import { useInView } from '../../hooks/useInView'

export default function SkillBar({ name, level, delay = 0 }) {
  const [ref, inView] = useInView(0.1)

  return (
    <div ref={ref} style={{ marginBottom: 18 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 7 }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '.875rem', color: '#cbd5e1' }}>
          {name}
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.72rem', color: 'var(--cyan)' }}>
          {level}%
        </span>
      </div>
      <div style={{ height: 3, background: '#1a1a2e', borderRadius: 4, overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            borderRadius: 4,
            background: 'linear-gradient(90deg, var(--cyan), var(--green))',
            boxShadow: '0 0 8px rgba(0,217,255,0.5)',
            width: inView ? `${level}%` : '0%',
            transition: `width 1.4s cubic-bezier(.22,1,.36,1) ${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}
