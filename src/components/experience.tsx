"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface Role {
  company: string
  title: string
  period: string
  location: string
  focus: string
  highlights: string[]
  stack: string[]
}

const roles: Role[] = [
  {
    company: "ICAP International",
    title: "Software Developer",
    period: "Jun 2024 — Present",
    location: "Addis Ababa, ET",
    focus: "Health data systems",
    highlights: [
      "Build MambaETL reporting pipelines turning OpenMRS patient records into PEPFAR-compliant analytics, deployed to health facilities nationwide",
      "Develop OpenMRS module customizations and integrations with external health systems",
      "Own deployment tooling and train facility teams on new reporting workflows",
    ],
    stack: ["Java", "Python", "SQL", "MySQL", "Apache Superset", "OpenMRS"],
  },
  {
    company: "Tech Mahindra · Safaricom Ethiopia",
    title: "Software Engineer",
    period: "Jul 2022 — Jun 2024",
    location: "Addis Ababa, ET",
    focus: "Observability & reliability",
    highlights: [
      "Monitored integrated telecom systems across Splunk, ELK, Oracle Enterprise Manager, and Grafana",
      "Ran incident management on BMC Helix, driving root-cause analysis (RCCA) on recurring issues",
      "Delivered weekly performance reports that fed targeted error-rate reduction plans",
    ],
    stack: ["Splunk", "ELK Stack", "Grafana", "BMC Helix", "Incident Response"],
  },
  {
    company: "Ethiopian Airlines",
    title: "A/Team Leader, CRM",
    period: "Jun 2021 — Dec 2021",
    location: "Addis Ababa, ET",
    focus: "Integration architecture & leadership",
    highlights: [
      "Led the team implementing a new CRM service module, unifying previously siloed sales, service, and marketing systems",
      "Designed the streaming data integration architecture feeding structured data to the Oracle CRM endpoint",
      "Mentored engineers and owned third-party integration architecture decisions",
    ],
    stack: ["Oracle CX", "Java", "Python", "Team Leadership"],
  },
  {
    company: "Ethiopian Airlines",
    title: "Senior Developer",
    period: "Jun 2015 — Jun 2021",
    location: "Addis Ababa, ET",
    focus: "Data pipelines & systems integration",
    highlights: [
      "Built extraction, transformation, and transfer pipelines for real-time operational data ingestion",
      "Developed Intelligence Exchange PaaS use cases in Java, deploying artifacts to a Zookeeper-managed environment",
      "Built a loyalty-system integration bridging Sabre and Amadeus via Apache NiFi and SOAP services",
      "Delivered SAP BI and Power BI reporting for revenue and performance visibility",
    ],
    stack: ["Java", "Apache NiFi", "Zookeeper", "SAP BI", "Power BI", "SOAP"],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-primary font-medium mb-2 text-sm tracking-wider uppercase">Experience</p>
          <h2 className="section-title">Where I've Built Things</h2>
          <p className="text-muted-foreground max-w-2xl">
            10+ years shipping backend systems, data pipelines, and integrations — from airline
            operations and telecom reliability to national healthcare infrastructure.
          </p>
        </motion.div>

        <div className="relative pl-7 md:pl-9 space-y-8 border-l-2 border-border">
          {roles.map((role, index) => (
            <motion.div
              key={`${role.company}-${role.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[calc(1.75rem+1px)] md:-left-[calc(2.25rem+1px)] top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />

              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2 mb-1">
                  <div>
                    <h3 className="font-semibold text-lg leading-tight">{role.title}</h3>
                    <p className="text-sm text-primary/90 font-medium">{role.company}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-mono text-xs text-muted-foreground whitespace-nowrap">{role.period}</p>
                    <p className="text-xs text-muted-foreground">{role.location}</p>
                  </div>
                </div>

                <Badge variant="secondary" className="text-xs font-normal mb-4">
                  {role.focus}
                </Badge>

                <ul className="space-y-1.5 mb-4">
                  {role.highlights.map((line) => (
                    <li key={line} className="text-sm text-muted-foreground leading-relaxed pl-4 relative">
                      <span className="absolute left-0 text-primary/60">›</span>
                      {line}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {role.stack.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
