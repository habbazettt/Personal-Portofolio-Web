import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./layouts/About"
import Contact from "./layouts/Contact"
import Hero from "./layouts/Hero"
import Projects from "./layouts/Projects"

const App = () => {
  return (
    <div className="w-full h-full scroll-smooth">
      <Navbar />
      <div className="w-full bg-primary border-b-4 border-secondary" id="hero">
        <Hero />
      </div>
      <div className="border-b-4 border-secondary">
        <About />
      </div>
      <div className="border-b-4 border-secondary">
        <Projects />
      </div>
      <div className="border-b-4 border-secondary">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App