export const profile = {
  name: "Samuel Abebayehu",
  role: "Software developer and technical lead",
  location: "Addis Ababa, Ethiopia",
  email: "samuelabebayehu@gmail.com",
  github: "https://github.com/samuelabebayehu",
  linkedin: "https://www.linkedin.com/in/samuel-abebayehu-a82807a6/",
}

export const proofPoints = [
  "10+ years in production systems",
  "Health, aviation, and telecom",
  "From architecture through operations",
]

export const featuredWork = [
  {
    id: "mambaetl",
    number: "01",
    label: "National digital health",
    title: "Turning clinical records into reporting that teams can use",
    client: "ICAP International · 2024-present",
    summary: "I build and maintain the OpenMRS modules, warehouse models, and reporting pipelines behind Ethiopian health-facility deployments. The work turns operational EMR data into PEPFAR/DATIM-ready analytics without making reporting teams depend on manual extracts.",
    contribution: "OpenMRS modules, MambaETL warehouse design, reporting SQL, deployment tooling, and training.",
    flow: ["OpenMRS EMR", "MambaETL", "Warehouse", "PEPFAR reporting"],
    outcomes: ["Packaged as a self-contained part of the Ethiopian OpenMRS distribution.", "Built Ethiopian-calendar cohort logic for 12-month reporting cycles.", "Supports facility-level reporting and Superset-based analysis."],
    stack: ["Java", "SQL", "MySQL", "OpenMRS", "Superset"],
    link: { label: "Explore Mamba core on GitHub", href: "https://github.com/samuelabebayehu/openmrs-module-mamba-core" },
  },
  {
    id: "cdc",
    number: "02",
    label: "Data platform modernization",
    title: "Replacing fragile polling with a production-ready CDC path",
    client: "ICAP International · 2026",
    summary: "For OpenMRS reporting workloads, I designed an embedded Debezium engine that reads MySQL binlog changes and publishes them to a warehouse pipeline. The design gives teams a real-time path while retaining a practical deployment profile for environments where Kafka is not always available.",
    contribution: "CDC architecture, embedded Java implementation, warehouse schemas, retries, and pipeline observability.",
    flow: ["MySQL binlog", "Debezium engine", "Transforms", "Serving layer"],
    outcomes: ["Replaced timestamp-based polling with a dirty-set queue approach.", "Defined raw, ETL, and marts schemas for traceable transformations.", "Added Grafana, Prometheus, and JMX visibility for pipeline health."],
    stack: ["Java", "Debezium", "Kafka", "MySQL", "Grafana"],
  },
  {
    id: "loyalty",
    number: "03",
    label: "Aviation systems integration",
    title: "Keeping loyalty purchases in sync across reservation systems",
    client: "Ethiopian Airlines · 2020",
    summary: "I built the integration logic that detected qualifying purchase events in the reservation flow, validated them, and synchronized mileage across Sabre, Amadeus, and the loyalty platform. It solved the business need without asking agents to leave the reservation system or waiting for a vendor enhancement.",
    contribution: "Integration analysis, rules engine, Java services, SOAP orchestration, and production support.",
    flow: ["Reservation event", "Rules analyzer", "SOAP validation", "Loyalty sync"],
    outcomes: ["Kept the reservation workflow uninterrupted for agents.", "Connected vendor platforms through a focused integration layer.", "Delivered a solution around the constraints of an enterprise vendor stack."],
    stack: ["Java", "SOAP", "Sabre", "Amadeus", "NiFi"],
  },
]

export const independentWork = [
  { title: "Yesera", description: "A multi-service marketplace bringing talent discovery, asset rental, and Telegram commerce behind Keycloak single sign-on.", stack: "Next.js · Spring Boot · Keycloak · PostgreSQL · Docker", href: "https://yesera.samuel.et", linkLabel: "Visit Yesera" },
  { title: "Lane", description: "A ride-sharing backend with self-hosted routing, live tracking, chat, pricing negotiation, Telebirr payments, and Fayda verification.", stack: "FastAPI · PostGIS · Redis · WebSockets · OSRM" },
  { title: "CRM integration", description: "Streaming integration and implementation support for a unified sales, service, and marketing platform at Ethiopian Airlines.", stack: "Oracle CX · Java · Python" },
]

export const experience = [
  { period: "2024-present", organisation: "ICAP International", role: "Software Developer", description: "Builds national digital-health tooling and the data pipelines behind operational and PEPFAR reporting.", details: ["OpenMRS modules and ETHIOHRI O3 deployment support", "MambaETL, CDC architecture, observability, and reporting training"] },
  { period: "2022-2024", organisation: "Tech Mahindra · Safaricom Ethiopia project", role: "Software Engineer", description: "Supported integrated telecom systems through monitoring, incident ownership, root-cause work, and performance reporting.", details: ["Splunk, ELK, Oracle Enterprise Manager, Grafana, and BMC Helix", "Regular health checks and recurring-incident improvement plans"] },
  { period: "2021", organisation: "Ethiopian Airlines", role: "Acting Team Leader, CRM", description: "Led a team implementing and integrating a new CRM platform across sales, service, and marketing.", details: ["Designed third-party and internal integration approaches", "Supported team adoption, mentoring, and performance follow-up"] },
  { period: "2015-2021", organisation: "Ethiopian Airlines", role: "Senior Developer", description: "Built real-time extraction, integration, and BI capabilities across airline systems.", details: ["Intelligence Exchange PaaS, NiFi flows, API migrations, and Zookeeper-managed deployments", "SAP BI and Power BI reporting for revenue and operational needs"] },
]

export const capabilities = [
  { title: "Data systems", items: ["ETL and warehouse design", "MySQL performance", "Debezium CDC", "Kafka", "PEPFAR/DATIM reporting"] },
  { title: "Backend and integration", items: ["Java", "Python", "SQL", "REST and SOAP APIs", "OpenMRS", "Keycloak/OIDC"] },
  { title: "Reliable operations", items: ["Docker and Kubernetes", "Grafana and Prometheus", "Splunk and ELK", "CI/CD", "Linux and AWS"] },
]
