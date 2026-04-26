"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  id: string
  number: string
  title: string
  name: string
  description: string
  tags: string[]
  repoUrl: string
  liveUrl?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: "yesera",
    number: "01",
    title: "Talent Marketplace",
    name: "Yesera Marketplace",
    description:
      "A full-stack marketplace platform connecting Ethiopian professionals with global opportunities. Supports talent discovery, profile management, job matching, and secure SSO authentication through Keycloak.",
    tags: ["Next.js", "Spring Boot", "Keycloak", "Docker", "PostgreSQL"],
    repoUrl: "https://github.com/samuelabebayehu",
    liveUrl: "https://yesera.samuel.et",
    featured: true,
  },
  {
    id: "mamba-etl",
    number: "02",
    title: "Healthcare Data Pipeline",
    name: "MaMBA ETL Service",
    description:
      "An automated ETL pipeline for OpenMRS healthcare data, powering reporting and analytics for medical facilities across East Africa. Processes thousands of patient records daily into a data warehouse for Apache Superset dashboards.",
    tags: ["Java", "Python", "MySQL", "Shell", "Apache Superset"],
    repoUrl: "https://github.com/samuelabebayehu",
    featured: true,
  },
  {
    id: "hr-system",
    number: "03",
    title: "HR Management System",
    name: "Digital HR & Biometrics",
    description:
      "A digital HR platform with biometric attendance integration, leave management, and payroll processing. Deployed on Ubuntu cloud infrastructure with automated backups and role-based access control.",
    tags: ["Python", "PostgreSQL", "Cloud", "Ubuntu"],
    repoUrl: "https://github.com/samuelabebayehu",
  },
  {
    id: "weather-dash",
    number: "04",
    title: "Weather Dashboard",
    name: "Real-Time Forecasting",
    description:
      "A real-time weather forecasting interface pulling live data from the OpenWeather API. Features interactive charts, 7-day forecasts, and location-based weather tracking.",
    tags: ["React", "OpenWeather API", "Chart.js", "CSS"],
    repoUrl: "https://github.com/samuelabebayehu",
    liveUrl: "https://github.com/samuelabebayehu",
  },
  {
    id: "portfolio",
    number: "05",
    title: "Developer Portfolio",
    name: "This Website",
    description:
      "A modern, responsive portfolio built with React and TypeScript. Features smooth animations, dark/light theming, and a clean professional design.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    repoUrl: "https://github.com/samuelabebayehu",
  },
]

export default function ProjectDashboard() {
  return (
    <section id="projects" className="bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-primary font-medium mb-2 text-sm tracking-wider uppercase">Work</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl">
            A selection of projects I've built — from marketplaces to data infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-md transition-all ${
                project.featured && index === 0 ? "md:col-span-2" : ""
              }`}
            >
              {/* Top accent bar */}
              <div className="h-1 bg-gradient-to-r from-primary to-primary/40" />

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-mono text-primary/60 mb-1 block">{project.number}</span>
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">{project.title}</p>
                  </div>
                  {project.featured && (
                    <Badge className="bg-primary/10 text-primary border-0 text-xs shrink-0 ml-3">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button asChild variant="outline" size="sm" className="gap-1.5">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button asChild size="sm" className="gap-1.5">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
