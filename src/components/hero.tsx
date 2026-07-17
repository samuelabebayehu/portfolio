import { useState } from "react"

const RELATIONS: Record<string, number[]> = {
  s1: [1],
  s2: [2],
  s3: [3],
  s4: [4],
  o1: [5],
  o2: [6],
  o3: [7],
  t: [1, 2, 3, 4, 5, 6, 7],
}

const CAPTIONS: Record<string, string> = {
  s1: "Sabre & Amadeus — the loyalty ↔ reservation bridge at Ethiopian Airlines",
  s2: "OpenMRS EMRs — national health records feeding MambaETL warehousing",
  s3: "Oracle CRM — streaming integration unifying sales, service & marketing",
  s4: "Telecom systems — Splunk / ELK / Grafana observability at Safaricom Ethiopia",
  t: "the middle layer — NiFi flows, Java services, SQL ETL, Zookeeper-managed deploys",
  o1: "PEPFAR reports — compliance reporting for 100s of Ethiopian health facilities",
  o2: "BI dashboards — Superset, Power BI & SAP BI for operations and revenue",
  o3: "real-time APIs — departure/arrival notifications and event-driven services",
}

const SOURCE_NODES = [
  { id: "s1", y: 16, label: "Sabre / Amadeus" },
  { id: "s2", y: 89, label: "OpenMRS EMRs" },
  { id: "s3", y: 162, label: "Oracle CRM" },
  { id: "s4", y: 235, label: "Telecom systems" },
]

const OUTPUT_NODES = [
  { id: "o1", y: 41, label: "PEPFAR reports" },
  { id: "o2", y: 126, label: "BI dashboards" },
  { id: "o3", y: 211, label: "Real-time APIs" },
]

const SOURCE_PATHS = [
  { id: 1, d: "M 196 40 C 300 40 300 150 384 150", dur: "2.6s", begin: "0s" },
  { id: 2, d: "M 196 113 C 300 113 300 150 384 150", dur: "3.1s", begin: "0.6s" },
  { id: 3, d: "M 196 186 C 300 186 300 150 384 150", dur: "2.8s", begin: "1.2s" },
  { id: 4, d: "M 196 259 C 300 259 300 150 384 150", dur: "3.4s", begin: "1.8s" },
]

const OUTPUT_PATHS = [
  { id: 5, d: "M 600 150 C 690 150 690 65 788 65", dur: "2.4s", begin: "0.4s" },
  { id: 6, d: "M 600 150 C 690 150 690 150 788 150", dur: "2.9s", begin: "1s" },
  { id: 7, d: "M 600 150 C 690 150 690 235 788 235", dur: "2.6s", begin: "1.6s" },
]

function DataFlowDiagram() {
  const [hover, setHover] = useState<string | null>(null)

  const pathOpacity = (id: number) => (!hover || RELATIONS[hover].includes(id) ? 1 : 0.12)
  const nodeOpacity = (id: string) => (!hover || hover === id || id === "t" ? 1 : 0.3)

  return (
    <div>
      <div className="overflow-x-auto">
        <svg viewBox="0 0 984 300" className="block w-full min-w-[760px]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
          <g>
            {[...SOURCE_PATHS, ...OUTPUT_PATHS].map((p) => (
              <g key={p.id} style={{ opacity: pathOpacity(p.id), transition: "opacity .25s" }}>
                <path
                  id={`pl${p.id}`}
                  d={p.d}
                  fill="none"
                  stroke={p.id <= 4 ? "var(--green-line)" : "var(--amber-line)"}
                  strokeWidth={1.2}
                />
                <circle r={3.2} fill={p.id <= 4 ? "var(--green)" : "var(--amber)"}>
                  <animateMotion dur={p.dur} begin={p.begin} repeatCount="indefinite">
                    <mpath href={`#pl${p.id}`} />
                  </animateMotion>
                </circle>
              </g>
            ))}

            {SOURCE_NODES.map((n) => (
              <g
                key={n.id}
                onMouseEnter={() => setHover(n.id)}
                onMouseLeave={() => setHover(null)}
                className="cursor-pointer"
                style={{ opacity: nodeOpacity(n.id), transition: "opacity .25s" }}
              >
                <rect x={0} y={n.y} width={196} height={48} rx={6} fill="var(--green-bg)" stroke="var(--green-line)" />
                <text x={16} y={n.y + 20} fontSize={11} fill="var(--faint)">
                  source
                </text>
                <text x={16} y={n.y + 36} fontSize={12.5} fill="var(--text)" fontWeight={600}>
                  {n.label}
                </text>
              </g>
            ))}

            <g
              onMouseEnter={() => setHover("t")}
              onMouseLeave={() => setHover(null)}
              className="cursor-pointer"
              style={{ opacity: nodeOpacity("t"), transition: "opacity .25s" }}
            >
              <rect x={384} y={108} width={216} height={84} rx={8} fill="var(--blue-bg)" stroke="var(--blue)" strokeWidth={1.4} />
              <text x={416} y={143} fontSize={13} fill="var(--blue)" fontWeight={600}>
                TRANSFORM
              </text>
              <text x={416} y={164} fontSize={11} fill="var(--muted-txt)">
                ETL · NiFi · Java · SQL
              </text>
            </g>

            {OUTPUT_NODES.map((n) => (
              <g
                key={n.id}
                onMouseEnter={() => setHover(n.id)}
                onMouseLeave={() => setHover(null)}
                className="cursor-pointer"
                style={{ opacity: nodeOpacity(n.id), transition: "opacity .25s" }}
              >
                <rect x={788} y={n.y} width={196} height={48} rx={6} fill="var(--amber-bg)" stroke="var(--amber-line)" />
                <text x={804} y={n.y + 20} fontSize={11} fill="var(--faint)">
                  serve
                </text>
                <text x={804} y={n.y + 36} fontSize={12.5} fill="var(--text)" fontWeight={600}>
                  {n.label}
                </text>
              </g>
            ))}
          </g>
        </svg>
      </div>
      <div
        className="mt-3.5 min-h-[16px] text-center font-mono text-[11.5px] transition-colors duration-200"
        style={{ color: "var(--dim)" }}
      >
        {hover ? CAPTIONS[hover] : "a decade of moving data — aviation, telecom, public health · hover a node"}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(700px 420px at 78% 4%, var(--glow), transparent 70%), linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)",
        backgroundSize: "100% 100%, 56px 56px, 56px 56px",
      }}
    >
      <div id="top" className="section-container pb-10 pt-16 sm:pt-20 md:pb-10 md:pt-[88px]">
        <div
          className="mb-[18px] flex items-center gap-2.5 font-mono text-[13px]"
          style={{ color: "var(--green)" }}
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: "var(--green)", boxShadow: "0 0 8px var(--green)" }}
          />
          available for projects
        </div>
        <h1 className="m-0 text-[42px] font-semibold leading-[1.08] tracking-[-0.025em] sm:text-5xl md:text-[64px]">
          Samuel Abebayehu.
          <br />
          <span style={{ color: "var(--dim)" }}>Backend &amp; data engineer.</span>
        </h1>
        <div className="mt-8 flex flex-wrap gap-3.5">
          <a
            href="#projects"
            className="rounded-md px-[22px] py-3 font-sans text-[13.5px] font-semibold"
            style={{ background: "var(--blue)", color: "var(--btn-text)" }}
          >
            View work →
          </a>
          <a
            href="/cv.pdf"
            download="Samuel_Abebayehu_CV.pdf"
            className="rounded-md border px-[22px] py-3 font-sans text-[13.5px] font-medium"
            style={{ borderColor: "var(--line2)", color: "var(--muted-txt)" }}
          >
            ↓ Resume
          </a>
        </div>
      </div>

      <div className="section-container pb-16 pt-3 md:pb-[72px]">
        <DataFlowDiagram />
      </div>
    </div>
  )
}
