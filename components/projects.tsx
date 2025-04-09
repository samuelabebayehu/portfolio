"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "MambaETL: OpenMRS Reporting Solution",
      description:
        "ETL (Extract, Transform, Load) tooling and designed reports for OpenMRS, an open-source Electronic Medical Record (EMR) system. This project facilitated data-driven insights within the healthcare domain.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Mysql", "Java", "Python", "Shell", "Apache Superset"],
      githubUrl: "https://github.com/samuelabebayehu",
      liveUrl: "https://github.com/samuelabebayehu",
    },
    {
      title:
        "Modernizing HR Management with Biometric Data and Automated Workflows",
      description:
        "A digital HR management system incorporating biometric timesheet and attendance tracking. The project emphasized automated integration to facilitate data-driven insights and improve HR operational efficiency.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Python", "Postgres", "Cloud", "Ubuntu"],
      githubUrl: "https://github.com/samuelabebayehu",
      liveUrl: "https://github.com/samuelabebayehu",
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather dashboard that displays current and forecasted weather data for multiple locations.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "OpenWeather API", "Chart.js", "CSS"],
      githubUrl: "https://github.com/samuelabebayehu",
      liveUrl: "https://github.com/samuelabebayehu",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects and skills (this website).",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/samuelabebayehu",
      liveUrl: "https://github.com/samuelabebayehu",
    },
  ];

  return (
    <section id="projects" className="bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">My Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
