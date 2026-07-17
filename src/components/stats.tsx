const STATS = [
  { value: "10+", label: "years in production systems", color: "var(--blue)" },
  { value: "3", label: "industries — aviation, telecom, health", color: "var(--blue)" },
  { value: "100s", label: "of health facilities running my pipelines", color: "var(--blue)" },
  { value: "10+", label: "systems shipped end to end", color: "var(--green)" },
]

export default function Stats() {
  return (
    <div className="border-y" style={{ borderColor: "var(--line)" }}>
      <div className="section-container grid grid-cols-2 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={[
              "py-6 pr-4",
              i % 2 === 0 ? "border-r" : "",
              i < 2 ? "border-b md:border-b-0" : "",
              i === STATS.length - 1 ? "md:border-r-0" : "md:border-r",
            ].join(" ")}
            style={{ borderColor: "var(--line)" }}
          >
            <div className="font-mono text-[28px] font-semibold" style={{ color: stat.color }}>
              {stat.value}
            </div>
            <div className="mt-1 text-xs" style={{ color: "var(--dim)" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
