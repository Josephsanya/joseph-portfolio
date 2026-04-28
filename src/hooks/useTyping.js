import { useState, useEffect } from 'react'

export function useTyping(texts, speed = 75, pause = 2200) {
  const [displayed, setDisplayed] = useState('')
  const [ti, setTi] = useState(0)
  const [ci, setCi] = useState(0)
  const [del, setDel] = useState(false)

  useEffect(() => {
    const cur = texts[ti]
    let t
    if (!del && ci < cur.length)       t = setTimeout(() => setCi(c => c + 1), speed)
    else if (!del && ci === cur.length) t = setTimeout(() => setDel(true), pause)
    else if (del && ci > 0)            t = setTimeout(() => setCi(c => c - 1), speed / 2.2)
    else { setDel(false); setTi(i => (i + 1) % texts.length) }
    setDisplayed(cur.slice(0, ci))
    return () => clearTimeout(t)
  }, [ci, del, ti, texts, speed, pause])

  return displayed
}
