"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight, Github, Linkedin, Mail } from "lucide-react"

// Syntax-highlighted code card — always dark regardless of site theme
function CodeCard() {
  const k = "#bb9af7"   // keyword   (purple)
  const s = "#9ece6a"   // string    (green)
  const p = "#7dcfff"   // property  (blue)
  const op = "#89ddff"  // operator  (cyan)
  const num = "#ff9e64" // number/bool (orange)
  const dim = "#565f89" // comment / dim
  const base = "#c0caf5" // base text

  return (
    <motion.div
      initial={{ opacity: 0, x: 30, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
      className="w-full max-w-[420px] select-none"
    >
      <div
        className="rounded-xl overflow-hidden shadow-2xl"
        style={{ background: "#11131d", border: "1px solid rgba(255,255,255,0.07)" }}
      >
        {/* Window bar */}
        <div
          className="flex items-center gap-3 px-4 py-3 border-b"
          style={{ background: "#0d0f19", borderColor: "rgba(255,255,255,0.06)" }}
        >
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
          </div>
          <span className="font-mono text-xs ml-1" style={{ color: dim }}>profile.ts</span>
        </div>

        {/* Code */}
        <div className="px-5 py-5 font-mono text-[0.82rem] leading-[1.85] overflow-x-auto">
          <div>
            <span style={{ color: k }}>const </span>
            <span style={{ color: base }}>samuel </span>
            <span style={{ color: op }}>= </span>
            <span style={{ color: base }}>{"{"}</span>
          </div>

          <div className="pl-5">
            <span style={{ color: p }}>role</span>
            <span style={{ color: op }}>: </span>
            <span style={{ color: s }}>"Full-Stack Developer"</span>
            <span style={{ color: base }}>,</span>
          </div>

          <div className="pl-5">
            <span style={{ color: p }}>location</span>
            <span style={{ color: op }}>: </span>
            <span style={{ color: s }}>"Addis Ababa, Ethiopia 🇪🇹"</span>
            <span style={{ color: base }}>,</span>
          </div>

          <div className="pl-5">
            <span style={{ color: p }}>experience</span>
            <span style={{ color: op }}>: </span>
            <span style={{ color: s }}>"9+ years"</span>
            <span style={{ color: base }}>,</span>
          </div>

          <div className="pl-5">
            <span style={{ color: p }}>stack</span>
            <span style={{ color: op }}>: </span>
            <span style={{ color: base }}>{"{"}</span>
          </div>

          <div className="pl-10">
            <span style={{ color: p }}>frontend</span>
            <span style={{ color: op }}>: </span>
            <span style={{ color: base }}>["</span>
            <span style={{ color: s }}>React</span>
            <span style={{ color: base }}>"</span>
            <span style={{ color: base }}>, "</span>
            <span style={{ color: s }}>Next.js</span>
            <span style={{ color: base }}>"</span>
            <span style={{ color: base }}>, "</span>
            <span style={{ color: s }}>TypeScript</span>
            <span style={{ color: base }}>"],</span>
          </div>

          <div className="pl-10">
            <span style={{ color: p }}>backend</span>
            <span style={{ color: op }}>: </span>
            <span style={{ color: base }}>["</span>
            <span style={{ color: s }}>Spring Boot</span>
            <span style={{ color: base }}>"</span>
            <span style={{ color: base }}>, "</span>
            <span style={{ color: s }}>Node.js</span>
            <span style={{ color: base }}>"</span>
            <span style={{ color: base }}>, "</span>
            <span style={{ color: s }}>Python</span>
            <span style={{ color: base }}>"],</span>
          </div>

          <div className="pl-10">
            <span style={{ color: p }}>infra</span>
            <span style={{ color: op }}>: </span>
            <span style={{ color: base }}>["</span>
            <span style={{ color: s }}>Docker</span>
            <span style={{ color: base }}>"</span>
            <span style={{ color: base }}>, "</span>
            <span style={{ color: s }}>PostgreSQL</span>
            <span style={{ color: base }}>"</span>
            <span style={{ color: base }}>, "</span>
            <span style={{ color: s }}>AWS</span>
            <span style={{ color: base }}>"],</span>
          </div>

          <div className="pl-5">
            <span style={{ color: base }}>{"  },"}</span>
          </div>

          <div className="pl-5">
            <span style={{ color: p }}>openToWork</span>
            <span style={{ color: op }}>: </span>
            <span style={{ color: num }}>true</span>
            <span style={{ color: base }}>,</span>
          </div>

          <div>
            <span style={{ color: base }}>{"}"}</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1.1, ease: "steps(1)" }}
              style={{ color: p }}
              className="ml-0.5"
            >
              ▌
            </motion.span>
          </div>
        </div>
      </div>

      {/* Floating label below card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-3 flex items-center gap-2 px-1"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        <span className="text-xs text-muted-foreground font-mono">open to new projects</span>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: offsetTop, behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
          opacity: 0.35,
        }}
      />
      {/* Warm glow top-right */}
      <div className="absolute -top-32 right-0 w-[700px] h-[600px] rounded-full bg-primary/10 blur-3xl pointer-events-none opacity-60" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-14 xl:gap-20 items-center">

          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex items-center gap-2.5 mb-7"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm font-medium text-muted-foreground tracking-wide">
                Available for work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-5xl md:text-[4.25rem] xl:text-[4.75rem] font-extrabold tracking-tight leading-[1.08] mb-6"
            >
              Hi, I'm Samuel.
              <br />
              <span className="text-primary">I build software</span>
              <br />
              that works.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.22 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              Full-stack developer based in Addis Ababa, Ethiopia. I specialize in web
              applications and data pipelines — from marketplace platforms to healthcare
              infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.32 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group font-semibold"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" asChild className="font-semibold">
                <a href="/cv.pdf" download="Samuel_Abebayehu_CV.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex items-center gap-5"
            >
              <a
                href="https://github.com/samuelabebayehu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/samuel-abebayehu-a82807a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:samuelabebayehu@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          {/* Right — code card (desktop only) */}
          <div className="hidden lg:flex items-center justify-end">
            <CodeCard />
          </div>

        </div>
      </div>
    </section>
  )
}
