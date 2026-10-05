import { experience } from "@/data/portfolio"

const delay = (i: number) => ({ "--i": i } as React.CSSProperties)

// Oldest first, so the timeline reads left to right and ends on the current role.
const timeline = [...experience].reverse()

export default function Experience() {
  return (
    <section id="experience" className="panel">
      <div className="site-container stacked">
        <div className="section-heading wide">
          <p className="chapter rise" style={delay(0)}>02 / Experience</p>
          <h2 className="rise" style={delay(1)}>A career in systems that cannot simply stop.</h2>
        </div>
        <ol className="timeline">{timeline.map((role, i) => (
          <li className={"timeline-item rise" + (i === timeline.length - 1 ? " is-current" : "")} style={delay(i + 2)} key={role.organisation + role.period}>
            <span className="timeline-dot" aria-hidden="true" />
            <div className="timeline-top"><p className="experience-period">{role.period}</p><span className="badge">{role.tag}</span></div>
            <h3>{role.role}</h3>
            <p className="organisation">{role.organisation}</p>
            <p className="col-label">Scope</p>
            <ul className="experience-scope">{role.scope.map((item) => <li key={item}>{item}</li>)}</ul>
            <p className="col-label">Stack</p>
            <div className="stack-list">{role.stack.map((item) => <span key={item}>{item}</span>)}</div>
          </li>
        ))}</ol>
      </div>
    </section>
  )
}
