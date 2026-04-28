import { useInView } from '../../hooks/useInView'

export default function FadeIn({ children, delay = 0, threshold = 0.1 }) {
  const [ref, inView] = useInView(threshold)

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity .7s ease ${delay}ms, transform .7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
