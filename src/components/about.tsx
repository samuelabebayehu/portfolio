"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

const stack = [
  "Java", "Spring Boot", "Python", "SQL", "React", "Next.js", "Splunk", "ELK", "Grafana",
]

const stats = [
  { value: "10+", label: "years in production systems" },
  { value: "10+", label: "systems shipped" },
  { value: "3", label: "industries — aviation, telecom, health" },
]

export default function About() {
  return (
    <section id="about" className="bg-muted/30">
      <div className="section-container !py-20 md:!py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="font-mono text-sm text-primary mb-3">// about</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
            Systems that don't wake people up at 3am.
          </h2>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Backend &amp; data engineer based in Addis Ababa, Ethiopia. A decade inside
              systems that can't afford to fail quietly — airline ops pipelines, telecom
              observability, and now healthcare data pipelines for Ethiopia's national OpenMRS
              network.
            </p>
            <p>
              I'd rather ship something boring and observable than something clever that pages
              me at midnight.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-2.5 py-1 rounded-md border border-border bg-card text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-4 mt-10 pt-8 border-t border-border">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-mono text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5 max-w-[10rem]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button asChild>
              <a href="/cv.pdf" download="Samuel_Abebayehu_CV.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
