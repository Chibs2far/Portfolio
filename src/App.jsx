import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experiences from './components/Experiences'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Lightning from './components/Lightning'

function App() {
  return (
    <div id="top" className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="relative isolate pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Lightning hue={260} xOffset={0} speed={0.9} intensity={1} size={1.1} />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/70 to-slate-950" />
        </div>
        <Header />
        <div className="mx-auto max-w-5xl px-6 pt-32">
          <Hero />
        </div>
      </div>
      <main className="mx-auto mt-40 flex max-w-5xl flex-col gap-32 px-6 pb-24">
        <About />
        <Experiences />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
