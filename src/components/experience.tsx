const LEGEND = [
  { label: "aviation", color: "#4a6b8a" },
  { label: "telecom", color: "#7a5d3a" },
  { label: "health", color: "#3f7a5a" },
]

const TIMELINE_BARS = [
  {
    left: "0.5%",
    width: "54%",
    color: "#4a6b8a",
    title: "Ethiopian Airlines — Senior Developer",
    subtitle: "ingestion · IX PaaS · NiFi · BI",
    textColor: "#cfe2f3",
    subColor: "rgba(207,226,243,.6)",
  },
]

const YEARS = ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"]

const ROLES = [
  {
    title: "ICAP International — Software Developer",
    period: "2024 →",
    periodColor: "var(--green)",
    description:
      "MambaETL pipelines turning OpenMRS records into PEPFAR-compliant analytics, deployed nationwide. Module customizations, integrations, deployment tooling.",
    stack: "Java · Python · SQL · MySQL · Superset",
  },
  {
    title: "Tech Mahindra · Safaricom — Software Engineer",
    period: "2022 — 24",
    periodColor: "var(--faint)",
    description:
      "Monitored integrated telecom systems; incident management on BMC Helix with RCCA on recurring issues; weekly performance reporting driving error-rate reduction.",
    stack: "Splunk · ELK · Grafana · BMC Helix",
  },
  {
    title: "Ethiopian Airlines — A/Team Leader, CRM",
    period: "2021",
    periodColor: "var(--faint)",
    description:
      "Led the CRM implementation team; designed the streaming integration architecture feeding Oracle CRM; unified siloed sales, service and marketing systems.",
    stack: "Oracle CX · Java · Python · Leadership",
  },
  {
    title: "Ethiopian Airlines — Senior Developer",
    period: "2015 — 21",
    periodColor: "var(--faint)",
    description:
      "Real-time ingestion pipelines, Intelligence Exchange PaaS in Zookeeper-managed environments, the Sabre↔Amadeus loyalty bridge, SAP BI & Power BI reporting.",
    stack: "Java · NiFi · Zookeeper · SAP BI · Power BI",
  },
]

export default function Experience() {
  return (
    <div id="work" className="section-container scroll-mt-[70px] py-16 md:py-[72px]">
      <div className="mb-1.5 font-mono text-[10px] tracking-[0.2em]" style={{ color: "var(--faint)" }}>
        EXPERIENCE
      </div>
      <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-baseline">
        <span className="text-[26px] font-semibold tracking-[-0.02em] sm:text-[30px]">Where I've built things</span>
        <div className="flex gap-5 font-mono text-[11px]" style={{ color: "var(--dim)" }}>
          {LEGEND.map((item) => (
            <span key={item.label} className="flex items-center">
              <span className="mr-1.5 inline-block h-[9px] w-[9px] rounded-sm" style={{ background: item.color }} />
              {item.label}
            </span>
          ))}
        </div>
      </div>

      <div className="relative overflow-x-auto pb-1">
        <div className="min-w-[560px]">
          <div className="grid gap-3.5">
            <div className="relative h-[34px]">
              <div
                className="absolute flex h-[34px] items-center justify-between rounded-[5px] px-3.5"
                style={{ left: TIMELINE_BARS[0].left, width: TIMELINE_BARS[0].width, background: TIMELINE_BARS[0].color }}
              >
                <span className="font-mono text-xs font-semibold" style={{ color: TIMELINE_BARS[0].textColor }}>
                  {TIMELINE_BARS[0].title}
                </span>
                <span className="ml-2 hidden font-mono text-[10.5px] sm:inline" style={{ color: TIMELINE_BARS[0].subColor }}>
                  {TIMELINE_BARS[0].subtitle}
                </span>
              </div>
            </div>
            <div className="relative h-[34px]">
              <div className="absolute h-[34px] rounded-[5px]" style={{ left: "55%", width: "5%", background: "#5d84a8" }} />
              <span
                className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[11px] font-semibold"
                style={{ left: "61%", color: "var(--muted-txt)" }}
              >
                CRM Team Lead
              </span>
            </div>
            <div className="relative h-[34px]">
              <div
                className="absolute flex h-[34px] items-center overflow-hidden rounded-[5px] px-3.5"
                style={{ left: "64.5%", width: "17.5%", background: "#7a5d3a" }}
              >
                <span className="whitespace-nowrap font-mono text-[11.5px] font-semibold" style={{ color: "#f3e6cf" }}>
                  Tech Mahindra
                </span>
              </div>
            </div>
            <div className="relative h-[34px]">
              <div
                className="absolute flex h-[34px] items-center justify-between rounded-l-[5px] px-3.5"
                style={{ left: "82%", width: "18%", background: "#3f7a5a", boxShadow: "0 0 16px rgba(110,231,160,.25)" }}
              >
                <span className="font-mono text-xs font-semibold" style={{ color: "#d3f0de" }}>
                  ICAP Intl.
                </span>
                <span className="ml-2 font-mono text-[10.5px]" style={{ color: "var(--green)" }}>
                  now ▸
                </span>
              </div>
            </div>
          </div>
          <div
            className="mt-[18px] flex justify-between border-t pt-3 font-mono text-[10px]"
            style={{ borderColor: "var(--line)", color: "var(--faint)" }}
          >
            {YEARS.map((year) => (
              <span key={year}>{year}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-9 grid gap-4 md:grid-cols-2">
        {ROLES.map((role) => (
          <div
            key={role.title}
            className="rounded-lg border p-6 transition-colors hover:border-[var(--blue-line)]"
            style={{ borderColor: "var(--line)", background: "var(--site-card)", boxShadow: "var(--site-shadow)" }}
          >
            <div className="mb-2.5 flex flex-wrap items-baseline justify-between gap-2">
              <span className="font-sans text-[15px] font-semibold">{role.title}</span>
              <span className="font-mono text-[11px]" style={{ color: role.periodColor }}>
                {role.period}
              </span>
            </div>
            <div className="font-sans text-[13px] leading-[1.65]" style={{ color: "var(--muted-txt)" }}>
              {role.description}
            </div>
            <div className="mt-3 font-mono text-[11px]" style={{ color: "var(--blue)" }}>
              {role.stack}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
