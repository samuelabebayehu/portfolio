export const profile = {
  name: "Samuel Abebayehu",
  role: "Software developer and technical lead",
  location: "Addis Ababa, Ethiopia",
  email: "samuelabebayehu@gmail.com",
  github: "https://github.com/samuelabebayehu",
  linkedin: "https://www.linkedin.com/in/samuel-abebayehu-a82807a6/",
}

export const experience = [
  {
    period: "2024-present",
    organisation: "ICAP International",
    role: "Software Developer",
    scope: [
      "OpenMRS modules and ETHIOHRI O3 deployment support",
      "MambaETL, CDC architecture, and observability",
      "PEPFAR/DATIM reporting pipelines and training",
    ],
    stack: ["Java", "MySQL", "OpenMRS", "Debezium", "Superset"],
    tag: "Enterprise",
  },
  {
    period: "2022-2024",
    organisation: "Tech Mahindra · Safaricom Ethiopia project",
    role: "Software Engineer",
    scope: [
      "Monitoring integrated telecom systems",
      "Incident ownership and root-cause analysis",
      "Recurring-incident improvement plans",
    ],
    stack: ["Splunk", "ELK", "Oracle Enterprise Manager", "Grafana", "BMC Helix"],
    tag: "Enterprise",
  },
  {
    period: "2021",
    organisation: "Ethiopian Airlines",
    role: "Acting Team Leader, CRM",
    scope: [
      "Led CRM platform implementation across sales, service, marketing",
      "Designed third-party and internal integration approaches",
      "Team adoption, mentoring, and performance follow-up",
    ],
    stack: ["Oracle CX", "Java", "Python"],
    tag: "Enterprise",
  },
  {
    period: "2015-2021",
    organisation: "Ethiopian Airlines",
    role: "Senior Developer",
    scope: [
      "Real-time extraction and integration pipelines",
      "Intelligence Exchange PaaS and NiFi flows",
      "SAP BI and Power BI reporting",
    ],
    stack: ["Java", "Python", "SQL", "NiFi", "Power BI"],
    tag: "Enterprise",
  },
]

export const deployments = [
  {
    number: "01",
    title: "Yesera",
    description: "Multi-service marketplace",
    purpose: "Talent discovery, asset rental, and Telegram commerce behind Keycloak single sign-on.",
    stack: ["Next.js", "Spring Boot", "Keycloak", "PostgreSQL", "Docker"],
    link: { label: "yesera.samuel.et", href: "https://yesera.samuel.et" },
  },
  {
    number: "02",
    title: "MambaETL",
    description: "National digital-health reporting",
    purpose: "OpenMRS modules, warehouse models, and PEPFAR/DATIM-ready reporting pipelines for Ethiopian health facilities.",
    stack: ["Java", "SQL", "MySQL", "OpenMRS", "Superset"],
    link: { label: "GitHub", href: "https://github.com/samuelabebayehu/openmrs-module-mamba-core" },
  },
  {
    number: "03",
    title: "CDC Platform",
    description: "Data platform modernization",
    purpose: "Embedded Debezium engine reading MySQL binlog changes into a real-time warehouse pipeline.",
    stack: ["Java", "Debezium", "Kafka", "MySQL", "Grafana"],
  },
  {
    number: "04",
    title: "Loyalty Sync",
    description: "Aviation systems integration",
    purpose: "Rules engine that validates qualifying purchases and synchronizes mileage across Sabre, Amadeus, and the loyalty platform.",
    stack: ["Java", "SOAP", "Sabre", "Amadeus", "NiFi"],
  },
  {
    number: "05",
    title: "Lane",
    description: "Ride-sharing backend",
    purpose: "Self-hosted routing, live tracking, chat, pricing negotiation, Telebirr payments, and Fayda verification.",
    stack: ["FastAPI", "PostGIS", "Redis", "WebSockets", "OSRM"],
  },
  {
    number: "06",
    title: "CRM Integration",
    description: "Sales, service & marketing platform",
    purpose: "Streaming integration and implementation support for a unified CRM platform at Ethiopian Airlines.",
    stack: ["Oracle CX", "Java", "Python"],
  },
]

// Years are approximate, derived from role start dates rather than tracked precisely.
export const skills = [
  { skill: "SQL", years: 11 },
  { skill: "Java", years: 11 },
  { skill: "REST & SOAP APIs", years: 9 },
  { skill: "ETL / NiFi", years: 9 },
  { skill: "Linux / AWS", years: 8 },
  { skill: "MySQL performance", years: 8 },
  { skill: "Python", years: 5 },
  { skill: "Docker / Kubernetes", years: 5 },
  { skill: "CI/CD", years: 5 },
  { skill: "Kafka", years: 4 },
  { skill: "Grafana / Prometheus", years: 4 },
  { skill: "Keycloak / OIDC", years: 3 },
  { skill: "Splunk / ELK", years: 3 },
  { skill: "Debezium CDC", years: 2 },
  { skill: "OpenMRS", years: 2 },
  { skill: "PEPFAR/DATIM reporting", years: 2 },
]

export const stats = [
  { value: "10+", label: "Years in production" },
  { value: "3", label: "Industries" },
  { value: `${skills.length}+`, label: "Technologies" },
]
