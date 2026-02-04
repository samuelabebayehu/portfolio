"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", usage: 90, pid: 1024 },
        { name: "Next.js", usage: 85, pid: 1025 },
        { name: "TypeScript", usage: 88, pid: 1026 },
        { name: "Tailwind CSS", usage: 95, pid: 1027 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", usage: 80, pid: 2048 },
        { name: "Spring Boot", usage: 75, pid: 2049 },
        { name: "PostgreSQL", usage: 82, pid: 2050 },
        { name: "GraphQL", usage: 70, pid: 2051 },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", usage: 85, pid: 3072 },
        { name: "Git/GitHub", usage: 92, pid: 3073 },
        { name: "AWS", usage: 65, pid: 3074 },
        { name: "Linux", usage: 78, pid: 3075 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
           <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center tracking-tight">
            <span className="text-primary mr-2">top</span>
            <span className="text-white">- 13:37:00 up 21 days, 4 users, load average: 0.15, 0.08, 0.05</span>
           </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 font-mono text-sm">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-2 border-primary/30 p-4 bg-muted/10"
            >
              <div className="border-b border-white/20 pb-2 mb-4 flex justify-between uppercase font-bold text-primary">
                <span>PID</span>
                <span>{category.title}</span>
                <span>%MEM</span>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-1">
                      <span className="text-muted-foreground">{skill.pid}</span>
                      <span className="text-white group-hover:text-primary transition-colors">{skill.name}</span>
                      <span className={skill.usage > 80 ? "text-green-500" : skill.usage > 70 ? "text-yellow-500" : "text-blue-500"}>
                        {skill.usage.toFixed(1)}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-secondary/30">
                       <motion.div 
                          className={`h-full ${skill.usage > 80 ? 'bg-green-500' : skill.usage > 70 ? 'bg-yellow-500' : 'bg-blue-500'}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.usage}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                       />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
