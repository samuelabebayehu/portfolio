import { siApachekafka, siApachenifi, siDocker, siElasticsearch, siGrafana, siKeycloak, siKubernetes, siLinux, siPrometheus, siPython } from "simple-icons"

type Glyph = { d: string; brand?: boolean; hex?: string }

const brand = (icon: { path: string; hex: string }): Glyph => ({ d: icon.path, brand: true, hex: icon.hex })

// Relative luminance of a hex colour, to spot brand colours that vanish on one theme.
function luminance(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

// Brand marks where one exists; Lucide-style line symbols for the rest.
const G = {
  database: { d: "M3 5a9 3 0 1 0 18 0 9 3 0 1 0-18 0 M3 5v14a9 3 0 0 0 18 0V5 M3 12a9 3 0 0 0 18 0" },
  api: { d: "M8 3 4 7l4 4 M4 7h16 M16 21l4-4-4-4 M20 17H4" },
  cloud: { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" },
  cicd: { d: "M3 12a9 9 0 0 1 15.5-6.2L21 8 M21 3v5h-5 M21 12a9 9 0 0 1-15.5 6.2L3 16 M3 21v-5h5" },
  stream: { d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9 M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5 M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5 M19.1 4.9C23 8.8 23 15.1 19.1 19 M10 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0" },
  health: { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" },
  java: { d: "M10 2v2 M14 2v2 M6 2v2 M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" },
  gauge: { d: "m12 14 4-4 M3.34 19a10 10 0 1 1 17.32 0" },
  search: { d: "m21 21-4.34-4.34 M3 11a8 8 0 1 0 16 0 8 8 0 0 0-16 0" },
  chart: { d: "M3 3v18h18 M18 17V9 M13 17V5 M8 17v-3" },
} satisfies Record<string, Glyph>

const SKILL_ICONS: Record<string, Glyph[]> = {
  "SQL": [G.database],
  "Java": [G.java],
  "REST & SOAP APIs": [G.api],
  "ETL / NiFi": [brand(siApachenifi)],
  "Linux / AWS": [brand(siLinux), G.cloud],
  "MySQL performance": [G.gauge],
  "Python": [brand(siPython)],
  "Docker / Kubernetes": [brand(siDocker), brand(siKubernetes)],
  "CI/CD": [G.cicd],
  "Kafka": [brand(siApachekafka)],
  "Grafana / Prometheus": [brand(siGrafana), brand(siPrometheus)],
  "Keycloak / OIDC": [brand(siKeycloak)],
  "Splunk / ELK": [G.search, brand(siElasticsearch)],
  "Debezium CDC": [G.stream],
  "OpenMRS": [G.health],
  "PEPFAR/DATIM reporting": [G.chart],
}

const tone = (hex: string) => { const l = luminance(hex); return l < 0.12 ? "dim" : l > 0.45 ? "bright" : l > 0.22 ? "mid" : undefined }

export default function SkillIcons({ skill }: { skill: string }) {
  const glyphs = SKILL_ICONS[skill] ?? []
  return (
    <span className="skill-icon" aria-hidden="true">
      {glyphs.map((g, i) => g.brand
        ? <svg key={i} className="brand" viewBox="0 0 24 24" fill="currentColor" data-tone={tone(g.hex!)} style={{ "--brand": "#" + g.hex } as React.CSSProperties}><path d={g.d} /></svg>
        : <svg key={i} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={g.d} /></svg>)}
    </span>
  )
}
