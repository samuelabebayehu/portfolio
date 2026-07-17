import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/theme-provider"
import Hero from "@/components/hero"
import Stats from "@/components/stats"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="relative min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
