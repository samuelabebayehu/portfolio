import { stats } from "@/data/portfolio"
import { goTo } from "@/data/sections"

const delay = (i: number) => ({ "--i": i } as React.CSSProperties)

export default function Hero() {
  return (
    <section id="top" className="panel hero">
      <div className="hero-decor" aria-hidden="true">
        <svg className="hero-rings" viewBox="0 0 800 800" fill="none" aria-hidden="true">
          {[120, 200, 280, 360, 440, 520].map((r) => <circle key={r} cx="400" cy="400" r={r} />)}
        </svg>
      </div>
      <div className="site-container hero-grid">
        <div>
          <p className="eyebrow rise" style={delay(0)}>Software developer and technical lead</p>
          <h1 className="rise" style={delay(1)}>I build systems people trust.</h1>
          <p className="hero-copy rise" style={delay(2)}>For more than a decade, I have worked at the intersection of software, data, and operations, helping teams turn complicated, high-stakes workflows into dependable products.</p>
          <div className="hero-actions rise" style={delay(3)}>
            <a className="button button-solid" href="#work" onClick={(e) => { e.preventDefault(); goTo("work") }}>See selected work <span aria-hidden="true">→</span></a>
            <a className="text-link" href="mailto:samuelabebayehu@gmail.com">Start a conversation <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <aside className="hero-note rise" style={delay(3)} aria-label="Professional focus">
          <p className="note-label">Current focus</p>
          <p className="note-body">National digital-health infrastructure, reporting systems, and resilient data pipelines at ICAP International.</p>
          <div className="stat-grid">{stats.map((stat) => <div key={stat.label}><span className="stat-value">{stat.value}</span><span className="stat-label">{stat.label}</span></div>)}</div>
        </aside>
      </div>
    </section>
  )
}
