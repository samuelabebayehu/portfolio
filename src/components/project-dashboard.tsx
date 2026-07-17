"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Lock } from "lucide-react"

interface Project {
  id: string
  number: string
  title: string
  name: string
  description: string
  tags: string[]
  repoUrl?: string
  liveUrl?: string
  featured?: boolean
  access?: "enterprise" | "private"
}

const accessCopy: Record<NonNullable<Project["access"]>, { badge: string; note: string }> = {
  enterprise: {
    badge: "Enterprise",
    note: "Enterprise system — case study details available on request.",
  },
  private: {
    badge: "Private",
    note: "Private repo — code walkthrough available on request.",
  },
}

const projects: Project[] = [
  {
    id: "yesera",
    number: "01",
    title: "Multi-Service Marketplace Platform",
    name: "Yesera",
    description:
      "A marketplace platform for Ethiopian professionals, built as a set of cooperating services behind Keycloak SSO: talent discovery and job matching, an asset rental module with live GPS tracking, and a Telegram commerce bot for order flows.",
    tags: ["Next.js", "Spring Boot", "Keycloak", "PostgreSQL", "GPS Tracking", "Docker"],
    featured: true,
    access: "private",
  },
  {
    id: "lane",
    number: "02",
    title: "Ride-Sharing Platform",
    name: "Lane",
    description:
      "A location-based ride-sharing platform for Ethiopia connecting drivers and passengers. Self-hosted OSRM routing over PostGIS geospatial queries, WebSocket-based live tracking, chat, and price negotiation, Telebirr mobile-money payments, and Fayda national ID verification for trust and safety. Backend is live in production.",
    tags: ["Flutter", "FastAPI", "PostGIS", "WebSockets", "Redis", "OSRM"],
    featured: true,
    access: "private",
  },
  {
    id: "mamba-etl",
    number: "03",
    title: "Healthcare Data Pipeline",
    name: "MambaETL Reporting Pipeline",
    description:
      "ETL and data warehousing pipeline for OpenMRS, turning patient records into PEPFAR-compliant reporting. Packaged with Ethiopia's national OpenMRS implementation and deployed at facility level across the country, feeding Apache Superset dashboards.",
    tags: ["Java", "Python", "SQL", "MySQL", "Apache Superset", "OpenMRS"],
    repoUrl: "https://github.com/samuelabebayehu/openmrs-module-mamba-core",
  },
  {
    id: "crm-integration",
    number: "04",
    title: "Enterprise CRM Integration",
    name: "Airline CRM Platform",
    description:
      "Design and delivery lead for integrating a new Oracle CRM platform into Ethiopian Airlines, unifying previously siloed sales, service, and marketing systems. Built the streaming data integration that identified, structured, and delivered data to the Oracle endpoint.",
    tags: ["Oracle CX", "Java", "Python", "Streaming Integration"],
    access: "enterprise",
  },
  {
    id: "loyalty-integration",
    number: "05",
    title: "Loyalty & Reservation Integration",
    name: "Sabre / Amadeus Bridge",
    description:
      "Integration bridging two vendor reservation systems for loyalty use cases — validating and syncing mileage-purchase requests across both platforms. Built a rules analyzer that triggers SOAP requests to the loyalty service without requiring a platform enhancement from either vendor.",
    tags: ["Java", "Apache NiFi", "SOAP", "Sabre", "Amadeus"],
    access: "enterprise",
  },
  {
    id: "hr-system",
    number: "06",
    title: "HR Management System",
    name: "Digital Biometrics-Enabled HR",
    description:
      "A digital HR platform with biometric attendance integration, leave management, and payroll processing. Deployed on Ubuntu cloud infrastructure with automated backups and role-based access control.",
    tags: ["Python", "PostgreSQL", "Cloud", "Ubuntu"],
    access: "private",
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
            Personal builds and professional systems — from a self-hosted ride-sharing platform to
            healthcare data infrastructure used nationwide.
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
                project.featured ? "md:col-span-2" : ""
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
                  <div className="flex flex-col items-end gap-1.5 shrink-0 ml-3">
                    {project.featured && (
                      <Badge className="bg-primary/10 text-primary border-0 text-xs">
                        Featured
                      </Badge>
                    )}
                    {project.access && (
                      <Badge variant="outline" className="text-xs gap-1">
                        <Lock className="h-3 w-3" />
                        {accessCopy[project.access].badge}
                      </Badge>
                    )}
                  </div>
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
                {project.access ? (
                  <p className="text-xs text-muted-foreground italic">
                    {accessCopy[project.access].note}
                  </p>
                ) : (
                  <div className="flex gap-3">
                    {project.repoUrl && (
                      <Button asChild variant="outline" size="sm" className="gap-1.5">
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3.5 w-3.5" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button asChild size="sm" className="gap-1.5">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3.5 w-3.5" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
