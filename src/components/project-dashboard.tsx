import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Terminal } from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string;
  status: "running" | "stopped" | "building" | "crashed";
  pid: number;
  port: number;
  uptime: string;
  tags: string[];
  repoUrl: string;
  liveUrl: string;
  logs: string[];
  version: string;
}

const projectsData: Project[] = [
  {
    id: "yesera",
    name: "yesera-marketplace",
    description: "Ethiopian Talent Marketplace - Connecting talent with global opportunities.",
    status: "running",
    pid: 4120,
    port: 3000,
    uptime: "21d 4h 12m",
    tags: ["Next.js", "Spring Boot", "Keycloak", "Docker", "PostgreSQL"],
    repoUrl: "https://github.com/samuelabebayehu",
    liveUrl: "https://yesera.samuel.et",
    version: "v2.1.0",
    logs: [
      "[INFO] Starting Yesera Marketplace service...",
      "[INFO] Connected to Keycloak auth provider",
      "[INFO] Database connection established (PostgreSQL)",
      "[SUCCESS] Server listening on port 3000",
      "[INFO] worker-1: Processing user registrations",
    ]
  },
  {
    id: "mamba-etl",
    name: "mamba-etl-service",
    description: "OpenMRS Reporting Solution & ETL Tooling.",
    status: "running",
    pid: 8821,
    port: 8080,
    uptime: "45d 12h 30m",
    tags: ["MySQL", "Java", "Python", "Shell", "Apache Superset"],
    repoUrl: "https://github.com/samuelabebayehu",
    liveUrl: "https://github.com/samuelabebayehu",
    version: "v1.4.2",
    logs: [
      "[INFO] Initializing ETL Pipeline...",
      "[INFO] Extracting data from OpenMRS DB",
      "[WARN] Large dataset detected, optimizing batch size",
      "[SUCCESS] Transformation complete. 4500 records processed.",
      "[INFO] Loading data into Data Warehouse...",
    ]
  },
  {
    id: "hr-system",
    name: "hr-management-sys",
    description: "Digital HR system with biometric attendance tracking.",
    status: "stopped",
    pid: 0,
    port: 5000,
    uptime: "0d 0h 0m",
    tags: ["Python", "Postgres", "Cloud", "Ubuntu"],
    repoUrl: "https://github.com/samuelabebayehu",
    liveUrl: "https://github.com/samuelabebayehu",
    version: "v1.0.1",
    logs: [
      "[INFO] System shutdown requested.",
      "[INFO] Stopping background workers...",
      "[INFO] Closing database connections.",
      "[INFO] System halted.",
    ]
  },
  {
    id: "weather-dash",
    name: "weather-dashboard",
    description: "Real-time weather forecasting dashboard.",
    status: "running",
    pid: 1245,
    port: 3001,
    uptime: "5d 2h 15m",
    tags: ["React", "OpenWeather API", "Chart.js", "CSS"],
    repoUrl: "https://github.com/samuelabebayehu",
    liveUrl: "https://github.com/samuelabebayehu",
    version: "v1.1.0",
    logs: [
      "[INFO] Fetching weather data for Addis Ababa...",
      "[INFO] API response received: 200 OK",
      "[INFO] Rendering charts...",
    ]
  },
  {
    id: "portfolio",
    name: "portfolio-v1",
    description: "Personal portfolio website (this service).",
    status: "running",
    pid: 1001,
    port: 5173,
    uptime: "0d 0h 10m",
    tags: ["Vite", "React", "Tailwind CSS", "Framer Motion"],
    repoUrl: "https://github.com/samuelabebayehu",
    liveUrl: "https://github.com/samuelabebayehu",
    version: "v1.0.0",
    logs: [
      "[INFO] Vite dev server running...",
      "[INFO] HMR enabled",
      "[INFO] TUI Theme applied successfully",
    ]
  }
];

export default function ProjectDashboard() {
  const [selectedId, setSelectedId] = useState<string>(projectsData[0].id);
  
  const selectedProject = projectsData.find(p => p.id === selectedId) || projectsData[0];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent scrolling the page when using arrow keys
      if (["ArrowUp", "ArrowDown"].includes(e.key)) {
        e.preventDefault();
      }

      const currentIndex = projectsData.findIndex(p => p.id === selectedId);
      
      if (e.key === "ArrowUp") {
        const prevIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
        setSelectedId(projectsData[prevIndex].id);
      } else if (e.key === "ArrowDown") {
        const nextIndex = (currentIndex + 1) % projectsData.length;
        setSelectedId(projectsData[nextIndex].id);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedId]);

  return (
    <section id="projects" className="py-20 min-h-screen flex flex-col justify-center">
      <div className="section-container">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-10 text-center"
        >
             <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                <span className="text-primary mr-2">systemctl</span>
                <span className="text-white">status services</span>
            </h2>
            <p className="text-muted-foreground text-sm font-mono">
                Use <span className="text-primary px-1 border border-primary/20 bg-primary/10 rounded">↑</span> 
                and <span className="text-primary px-1 border border-primary/20 bg-primary/10 rounded">↓</span> 
                to navigate services.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[600px] font-mono">
           {/* Service List (Sidebar) */}
           <motion.div 
             className="lg:col-span-4 bg-black border-2 border-primary/30 flex flex-col p-2"
             initial={{ x: -20, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             viewport={{ once: true }}
           >
              {/* Header */}
              <div className="grid grid-cols-12 text-xs font-bold text-muted-foreground px-2 pb-2 border-b border-primary/20 mb-2">
                  <div className="col-span-6">SERVICE</div>
                  <div className="col-span-3 text-right">PID</div>
                  <div className="col-span-3 text-right">STATUS</div>
              </div>
              
              {/* List */}
              <div className="flex-grow overflow-y-auto space-y-1">
                  {projectsData.map((project) => (
                      <div 
                        key={project.id}
                        onClick={() => setSelectedId(project.id)}
                        className={`grid grid-cols-12 items-center px-2 py-3 text-sm cursor-pointer transition-all duration-100 ${
                            selectedId === project.id 
                            ? "bg-primary text-black font-bold" 
                            : "hover:bg-primary/10 text-primary"
                        }`}
                      >
                         <div className="col-span-6 truncate flex items-center">
                            {selectedId === project.id && <span className="mr-2 animate-pulse">▶</span>}
                            {project.name}
                         </div>
                         <div className="col-span-3 text-right opacity-70">{project.pid > 0 ? project.pid : "-"}</div>
                         <div className="col-span-3 text-right">
                            <span className={`inline-block w-2 h-2 rounded-full mr-1 ${
                                project.status === "running" ? "bg-green-500" : 
                                project.status === "stopped" ? "bg-red-500" : "bg-yellow-500"
                            }`} />
                         </div>
                      </div>
                  ))}
              </div>
           </motion.div>

           {/* Service Details (Main View) */}
           <motion.div 
             className="lg:col-span-8 bg-black border-2 border-primary flex flex-col relative overflow-hidden"
             initial={{ x: 20, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
           >
              {/* Top Bar */}
              <div className="bg-primary/10 p-3 border-b border-primary flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                       <Terminal className="w-4 h-4 text-primary" />
                       <span className="text-sm font-bold text-primary">root@portfolio:~/services/{selectedProject.name}</span>
                  </div>
                  <div className="flex space-x-2">
                       <div className="text-xs text-muted-foreground">Uptime: {selectedProject.uptime}</div>
                  </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-grow overflow-y-auto">
                   <div className="mb-6">
                       <div className="flex items-center justify-between mb-2">
                           <h3 className="text-2xl font-bold text-white">{selectedProject.name}</h3>
                           <Badge variant="outline" className={`
                                ${selectedProject.status === 'running' ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'}
                                capitalize rounded-none px-3
                           `}>
                               {selectedProject.status}
                           </Badge>
                       </div>
                       <p className="text-muted-foreground mb-4 border-l-2 border-primary/30 pl-3">
                           {selectedProject.description}
                       </p>
                       
                       <div className="flex flex-wrap gap-2 mb-6">
                           {selectedProject.tags.map(tag => (
                               <Badge key={tag} className="rounded-none bg-primary/20 text-primary hover:bg-primary hover:text-black border-none">
                                   {tag}
                               </Badge>
                           ))}
                       </div>
                   </div>

                   {/* Pseudo-Console */}
                   <div className="bg-black border border-primary/20 p-4 rounded-none font-mono text-xs md:text-sm mb-6 shadow-inner">
                       <div className="uppercase text-muted-foreground text-[10px] mb-2 border-b border-primary/10 pb-1">System Logs</div>
                       {selectedProject.logs.map((log, i) => (
                           <div key={i} className="mb-1">
                               <span className="text-primary/50 mr-2">{new Date().toISOString().split('T')[1].split('.')[0]}</span>
                               <span className="text-primary">{log}</span>
                           </div>
                       ))}
                       <div className="animate-pulse text-primary">_</div>
                   </div>
              </div>

              {/* Action Footer */}
              <div className="p-4 border-t border-primary/20 bg-primary/5 flex justify-end space-x-4">
                  <Button asChild variant="outline" className="rounded-none border-primary hover:bg-primary hover:text-black">
                      <a href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          VIEW SOURCE
                      </a>
                  </Button>
                  <Button asChild className="rounded-none bg-primary text-black hover:bg-primary/80">
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          OPEN SERVICE
                      </a>
                  </Button>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
