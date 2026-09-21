import { stats } from "@/data/portfolio"

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="site-container">
        <p className="eyebrow intro-reveal">Software developer and technical lead · Addis Ababa</p>
        <div className="hero-grid">
          <div>
            <h1 className="intro-reveal delay-one">I build systems people trust.</h1>
            <p className="hero-copy intro-reveal delay-two">For more than a decade, I have worked at the intersection of software, data, and operations - helping teams turn complicated, high-stakes workflows into dependable products.</p>
            <div className="hero-actions intro-reveal delay-three"><a className="button button-solid" href="#work">See selected work <span aria-hidden="true">↓</span></a><a className="button button-outline" href="/cv.pdf" download="Samuel_Abebayehu_CV.pdf">Download CV <span aria-hidden="true">↓</span></a><a className="text-link" href="mailto:samuelabebayehu@gmail.com">Start a conversation <span aria-hidden="true">↗</span></a></div>
          </div>
          <aside className="hero-note intro-reveal delay-two" aria-label="Professional focus">
            <p className="note-label">Current focus</p><p>National digital-health infrastructure, reporting systems, and resilient data pipelines at ICAP International.</p>
            <div className="stat-grid">{stats.map((stat) => <div key={stat.label}><span className="stat-value">{stat.value}</span><span className="stat-label">{stat.label}</span></div>)}</div>
          </aside>
        </div>
      </div>
    </section>
  )
}
