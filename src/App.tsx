import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/theme-provider"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import ProjectDashboard from "@/components/project-dashboard"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="relative min-h-screen">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <ProjectDashboard />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
      </div>
    </ThemeProvider>
  )
}

export default App
