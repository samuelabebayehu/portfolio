const FEATURED = [
  {
    number: "01",
    title: "Yesera — multi-service marketplace",
    status: "● LIVE",
    description:
      "Cooperating services behind Keycloak SSO: talent discovery and job matching, asset rental with live GPS tracking, and a Telegram commerce bot for order flows.",
    stack: "Next.js · Spring Boot · Keycloak · PostgreSQL · Docker",
    link: { label: "yesera.samuel.et →", href: "https://yesera.samuel.et" },
  },
  {
    number: "02",
    title: "Lane — ride-sharing platform",
    status: "● BACKEND LIVE",
    description:
      "Self-hosted OSRM routing over PostGIS, WebSocket live tracking, chat and price negotiation, Telebirr payments, Fayda national-ID verification.",
    stack: "Flutter · FastAPI · PostGIS · WebSockets · Redis · OSRM",
    link: null,
  },
]

const OTHER_PROJECTS = [
  {
    number: "03",
    title: "MambaETL reporting pipeline",
    description:
      "ETL + warehousing for OpenMRS → PEPFAR reporting, deployed at facility level across Ethiopia, feeding Superset dashboards.",
    stack: "Java · Python · SQL · Superset",
    tag: { label: "open source →", href: "https://github.com/samuelabebayehu/openmrs-module-mamba-core", color: "var(--green)" },
  },
  {
    number: "04",
    title: "Airline CRM integration",
    description:
      "Streaming data integration into Oracle CRM for Ethiopian Airlines — one platform out of siloed sales, service and marketing.",
    stack: "Oracle CX · Java · Python",
    tag: { label: "enterprise", href: null, color: "var(--faint)" },
  },
  {
    number: "05",
    title: "Sabre / Amadeus loyalty bridge",
    description:
      "Rules analyzer triggering SOAP calls to sync mileage purchases across two vendor reservation systems — no vendor enhancement needed.",
    stack: "Java · NiFi · SOAP",
    tag: { label: "enterprise", href: null, color: "var(--faint)" },
  },
  {
    number: "06",
    title: "Biometrics-enabled HR platform",
    description:
      "Biometric attendance, leave management and payroll on Ubuntu cloud infrastructure with automated backups and RBAC.",
    stack: "Python · PostgreSQL · Cloud",
    tag: { label: "private", href: null, color: "var(--faint)" },
  },
]

export default function Projects() {
  return (
    <div id="projects" className="section-container scroll-mt-[70px] py-16 md:py-[72px]">
      <div className="mb-1.5 font-mono text-[10px] tracking-[0.2em]" style={{ color: "var(--faint)" }}>
        DEPLOYMENTS
      </div>
      <div className="mb-8 text-[26px] font-semibold tracking-[-0.02em] sm:text-[30px]">Featured projects</div>

      <div className="grid gap-4 md:grid-cols-2">
        {FEATURED.map((project) => (
          <div
            key={project.number}
            className="grid grid-cols-1 gap-6 rounded-lg border p-7 transition-colors hover:border-[var(--blue)] md:col-span-2 md:grid-cols-[1fr_auto]"
            style={{ borderColor: "var(--blue-line)", background: "var(--blue-bg)" }}
          >
            <div>
              <div className="mb-2.5 flex flex-wrap items-center gap-2.5">
                <span className="font-mono text-[11px]" style={{ color: "var(--faint)" }}>
                  {project.number}
                </span>
                <span className="text-[19px] font-semibold">{project.title}</span>
                <span
                  className="rounded border px-[7px] py-0.5 font-mono text-[10px] font-medium"
                  style={{ color: "var(--green)", borderColor: "var(--green-line)" }}
                >
                  {project.status}
                </span>
              </div>
              <div className="max-w-[640px] font-sans text-[13.5px] leading-[1.65]" style={{ color: "var(--muted-txt)" }}>
                {project.description}
              </div>
              <div className="mt-3.5 font-mono text-[11px]" style={{ color: "var(--blue)" }}>
                {project.stack}
              </div>
            </div>
            {project.link ? (
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="self-center font-mono text-xs"
                style={{ color: "var(--blue)" }}
              >
                {project.link.label}
              </a>
            ) : (
              <span className="self-center font-mono text-xs" style={{ color: "var(--faint)" }}>
                private repo
              </span>
            )}
          </div>
        ))}

        {OTHER_PROJECTS.map((project) => (
          <div
            key={project.number}
            className="rounded-lg border p-6 transition-colors hover:border-[var(--blue-line)]"
            style={{ borderColor: "var(--line)", background: "var(--site-card)", boxShadow: "var(--site-shadow)" }}
          >
            <div className="mb-2.5 flex items-center gap-2.5">
              <span className="font-mono text-[11px]" style={{ color: "var(--faint)" }}>
                {project.number}
              </span>
              <span className="text-base font-semibold">{project.title}</span>
            </div>
            <div className="font-sans text-[13px] leading-[1.6]" style={{ color: "var(--muted-txt)" }}>
              {project.description}
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-[11px]" style={{ color: "var(--blue)" }}>
                {project.stack}
              </span>
              {project.tag.href ? (
                <a
                  href={project.tag.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px]"
                  style={{ color: project.tag.color }}
                >
                  {project.tag.label}
                </a>
              ) : (
                <span className="font-mono text-[11px]" style={{ color: project.tag.color }}>
                  {project.tag.label}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
