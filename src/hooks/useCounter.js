import { useState, useEffect } from 'react'

export function useCounter(target, inView, duration = 1400) {
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    let v = 0
    const step = target / (duration / 16)
    const t = setInterval(() => {
      v += step
      if (v >= target) { setVal(target); clearInterval(t) }
      else setVal(Math.floor(v))
    }, 16)
    return () => clearInterval(t)
  }, [inView, target, duration])

  return val
}
