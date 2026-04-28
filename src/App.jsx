import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Skills     from './components/Skills'
import Projects   from './components/Projects'
import Experience from './components/Experience'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)', overflowX: 'hidden' }}>
      <Navbar     scrollTo={scrollTo} />
      <Hero       scrollTo={scrollTo} />
      <About      scrollTo={scrollTo} />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer     scrollTo={scrollTo} />
    </div>
  )
}
