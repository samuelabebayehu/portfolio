"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Layout, Server, Terminal, GitBranch, Smartphone } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="h-8 w-8 mb-4 text-primary" />,
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-8 w-8 mb-4 text-primary" />,
      skills: ["Node.js", "Express", "RESTful APIs", "GraphQL"],
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8 mb-4 text-primary" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    },
    {
      title: "Programming Languages",
      icon: <Code className="h-8 w-8 mb-4 text-primary" />,
      skills: ["JavaScript", "TypeScript", "Python", "Java"],
    },
    {
      title: "Tools & DevOps",
      icon: <Terminal className="h-8 w-8 mb-4 text-primary" />,
      skills: ["Git", "GitHub", "Docker", "CI/CD", "AWS", "Vercel"],
    },
    {
      title: "Version Control",
      icon: <GitBranch className="h-8 w-8 mb-4 text-primary" />,
      skills: ["Git", "GitHub", "GitLab", "Bitbucket"],
    },
    {
      title: "Web Technologies",
      icon: <Globe className="h-8 w-8 mb-4 text-primary" />,
      skills: ["RESTful APIs", "GraphQL", "WebSockets", "OAuth"],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-8 w-8 mb-4 text-primary" />,
      skills: ["React Native", "Responsive Design"],
    },
  ]

  return (
    <section id="skills">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center">{category.icon}</div>
                  <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
