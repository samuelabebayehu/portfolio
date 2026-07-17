const BARS = [
  { label: "SQL", width: "100%", years: "11y", color: "var(--blue)" },
  { label: "Java", width: "82%", years: "9y", color: "var(--blue)" },
  { label: "Python", width: "64%", years: "7y", color: "var(--blue)" },
  { label: "ETL / NiFi", width: "55%", years: "6y", color: "var(--green)" },
  { label: "BI tools", width: "55%", years: "6y", color: "var(--green)" },
  { label: "React / Next", width: "36%", years: "4y", color: "var(--amber)" },
  { label: "Observability", width: "36%", years: "4y", color: "var(--amber)" },
]

const CATEGORIES = [
  {
    title: "BACKEND & INTEGRATION",
    color: "var(--blue)",
    items: "Java · Spring Boot · Python · Node.js · REST / SOAP · NiFi · Zookeeper",
  },
  {
    title: "DATA ENGINEERING",
    color: "var(--green)",
    items: "PostgreSQL · MySQL · ETL · Warehousing · Superset · Power BI · SAP BI",
  },
  {
    title: "OBSERVABILITY & OPS",
    color: "var(--amber)",
    items: "Splunk · ELK · Grafana · BMC Helix · Docker · AWS · Linux · Keycloak",
  },
]

export default function Skills() {
  return (
    <div id="skills" className="section-container scroll-mt-[70px] py-16 md:py-[72px]">
      <div className="mb-1.5 font-mono text-[10px] tracking-[0.2em]" style={{ color: "var(--faint)" }}>
        SKILLS
      </div>
      <div className="mb-8 text-[26px] font-semibold tracking-[-0.02em] sm:text-[30px]">Stack, by years in production</div>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="grid content-start gap-3.5">
          {BARS.map((bar) => (
            <div key={bar.label} className="grid grid-cols-[80px_1fr_34px] items-center gap-3 sm:grid-cols-[100px_1fr_34px]">
              <span className="font-mono text-xs font-medium">{bar.label}</span>
              <div className="h-[18px] rounded-[3px]" style={{ background: "var(--bar-track)" }}>
                <div className="h-[18px] rounded-[3px]" style={{ width: bar.width, background: bar.color }} />
              </div>
              <span className="font-mono text-[11px]" style={{ color: "var(--faint)" }}>
                {bar.years}
              </span>
            </div>
          ))}
        </div>
        <div className="grid content-start gap-3.5">
          {CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="rounded-lg border px-5 py-[18px]"
              style={{ borderColor: "var(--line)", background: "var(--site-card)", boxShadow: "var(--site-shadow)" }}
            >
              <div className="mb-2 font-mono text-xs font-semibold" style={{ color: category.color }}>
                {category.title}
              </div>
              <div className="font-mono text-[12.5px] leading-[1.8]" style={{ color: "var(--muted-txt)" }}>
                {category.items}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
