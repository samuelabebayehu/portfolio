"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="aspect-square rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto max-w-[250px]">
                  <span className="text-6xl">SA</span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Samuel Abebayehu</h3>
                  <p className="text-muted-foreground">Software Developer</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <p>
              I am a passionate software developer with experience in building web applications and solving complex
              problems. My journey in software development has equipped me with a strong foundation in various
              technologies and frameworks.
            </p>
            <p>
              I enjoy creating efficient, scalable, and user-friendly applications. My approach to development focuses
              on writing clean, maintainable code while staying up-to-date with the latest industry trends and best
              practices.
            </p>
            <p>
              When I'm not coding, I enjoy learning new technologies, contributing to open-source projects, and
              collaborating with other developers to create innovative solutions.
            </p>
            <div className="pt-4">
              <Button>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
