"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Monitor, Server, Database, Layers } from "lucide-react"

const skillCategories = [
  {
    icon: Monitor,
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML / CSS", "Framer Motion"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Java", "Spring Boot", "Node.js", "Python", "GraphQL", "REST APIs"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "Redis", "SQL"],
  },
  {
    icon: Layers,
    title: "DevOps & Tools",
    skills: ["Docker", "Git / GitHub", "AWS", "Linux", "CI/CD", "Keycloak", "Apache Superset"],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-primary font-medium mb-2 text-sm tracking-wider uppercase">Skills</p>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="text-muted-foreground max-w-2xl">
            A toolkit built across years of shipping web applications, data pipelines, and system integrations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm font-normal px-3 py-0.5">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
