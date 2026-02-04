import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin } from "lucide-react"
import { useState, useEffect } from "react"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const fullName = "Samuel Abebayehu"
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullName.length) {
        setDisplayText(fullName.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* TUI Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:2rem_2rem]" />
      </div>

      <div className="section-container flex flex-col items-center text-center relative z-10 font-mono">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="inline-block border-2 border-primary/30 bg-black/50 p-8 backdrop-blur-sm mb-8">
            <p className="text-xl md:text-2xl text-primary mb-4 font-bold tracking-widest">{">"} SOFTWARE_DEVELOPER</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              <span className="text-primary mr-4">$</span>
              {displayText}
              <span className="animate-pulse inline-block w-4 h-10 align-middle bg-primary ml-1" />
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button size="lg" onClick={() => scrollToSection("contact")} className="min-w-[180px]">
            [ GET_IN_TOUCH ]
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollToSection("projects")} className="min-w-[180px]">
            [ VIEW_WORK ]
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4"
        >
          <Button asChild variant="ghost" size="icon" className="border border-primary/20 hover:border-primary">
            <a
              href="https://github.com/samuelabebayehu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" className="border border-primary/20 hover:border-primary">
            <a
              href="https://www.linkedin.com/in/samuel-abebayehu-a82807a6/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10"
        >
          <Button variant="ghost" size="icon" onClick={() => scrollToSection("about")} className="hover:bg-transparent text-primary">
            <ArrowDown className="h-8 w-8 animate-bounce" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
