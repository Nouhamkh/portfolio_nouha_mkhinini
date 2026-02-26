import './App.css'
import About from './sections/About'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Footer from './sections/Footer'
import Navbar from './sections/Navbar'

function App() {
  return (
    <div className="relative min-h-screen bg-transparent text-slate-100">
      <div className="noise-overlay" />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
