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

export default function Projects() {
  const projects = [
    {
      title: "Yesera - Ethiopian Talent Marketplace",
      description: "A comprehensive platform connecting Ethiopian talent with global opportunities. Features include talent profiles, job listings, and real-time messaging.",
      image: "/yesera.png", 
      tags: ["Next.js", "Spring Boot", "Keycloak", "Docker", "PostgreSQL"],
      githubUrl: "https://github.com/samuelabebayehu",
      liveUrl: "https://yesera.samuel.et",
    },
    {
      title: "MambaETL: OpenMRS Reporting Solution",
      description:
        "ETL (Extract, Transform, Load) tooling and designed reports for OpenMRS, an open-source Electronic Medical Record (EMR) system. This project facilitated data-driven insights within the healthcare domain.",
      image: "/Chart.jpg?height=300&width=500",
      tags: ["Mysql", "Java", "Python", "Shell", "Apache Superset"],
      githubUrl: "https://github.com/samuelabebayehu",
      liveUrl: "https://github.com/samuelabebayehu",
    },
    {
      title: "Modernizing HR Management",
      description:
        "A digital HR management system incorporating biometric timesheet and attendance tracking. The project emphasized automated integration to facilitate data-driven insights and improve HR operational efficiency.",
      image: "/People.jpg?height=300&width=500",
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
      tags: ["Vite", "React", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/samuelabebayehu",
      liveUrl: "https://github.com/samuelabebayehu",
    },
  ];

  return (
    <section id="projects" className="bg-muted/30 py-20">
      <div className="section-container relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/20" />
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-primary/20" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block border-2 border-primary px-4 py-1 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-primary">=== Projects ===</h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col group hover:border-primary transition-colors duration-300">
                <CardHeader className="border-b border-primary/20 bg-muted/50 py-3 relative">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg font-mono truncate mr-2">{project.title}</CardTitle>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 border border-primary/50" />
                      <div className="w-3 h-3 border border-primary/50" />
                      <div className="w-3 h-3 bg-primary" />
                    </div>
                  </div>
                </CardHeader>
                
                <div className="relative h-48 w-full overflow-hidden border-b border-primary/20 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent z-10 transition-colors" />
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                
                <CardContent className="flex-grow pt-6">
                  <CardDescription className="mb-4 font-mono text-xs md:text-sm">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="rounded-none border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t border-primary/20 pt-4 bg-muted/20">
                  <Button asChild variant="ghost" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" /> [ SRC ]
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> [ DOM ]
                    </a>
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
