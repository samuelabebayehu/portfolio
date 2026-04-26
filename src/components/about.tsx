"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, MapPin, Briefcase, Code2, FolderOpen } from "lucide-react"

const stats = [
  { icon: Briefcase, label: "Years Experience", value: "9+" },
  { icon: FolderOpen, label: "Projects Shipped", value: "10+" },
  { icon: Code2, label: "Technologies", value: "20+" },
  { icon: MapPin, label: "Based In", value: "Ethiopia" },
]

export default function About() {
  return (
    <section id="about" className="bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-primary font-medium mb-2 text-sm tracking-wider uppercase">About Me</p>
          <h2 className="section-title">A Developer Who Builds With Purpose</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              I'm a full-stack developer based in Addis Ababa, Ethiopia, specializing in building
              robust web applications and data infrastructure. My work spans frontend interfaces,
              backend APIs, and the systems that connect them.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              I've contributed to projects ranging from a national talent marketplace to healthcare
              data pipelines used across East Africa — bringing the same focus to each: understand
              the problem deeply, then build a solution that lasts.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              My stack centers on{" "}
              <span className="text-foreground font-medium">React / Next.js</span>,{" "}
              <span className="text-foreground font-medium">Spring Boot</span>, and{" "}
              <span className="text-foreground font-medium">PostgreSQL</span>, with experience
              across Docker, AWS, and a range of data tooling. I care about clean code, clear
              system design, and software that solves real problems.
            </p>
            <div className="pt-2">
              <Button asChild>
                <a href="/cv.pdf" download="Samuel_Abebayehu_CV.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Avatar + stats column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-primary">SA</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Samuel Abebayehu</h3>
                <p className="text-muted-foreground">Full-Stack Developer</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5">
                  <MapPin className="h-3.5 w-3.5" />
                  Addis Ababa, Ethiopia
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                  className="bg-card border border-border rounded-lg p-4"
                >
                  <stat.icon className="h-5 w-5 text-primary mb-2" />
                  <div className="text-2xl font-bold mb-0.5">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
