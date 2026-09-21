import { experience } from "@/data/portfolio"

export default function Experience() {
  return (
    <section id="experience" className="section section-tint">
      <div className="site-container">
        <div className="section-heading"><p className="eyebrow">01 / Experience</p><h2>A career in systems that cannot simply stop.</h2><p>Roles, teams, and impact across aviation, telecom, and healthcare industries.</p></div>
        <div className="experience-list">{experience.map((role) => <article className="experience-item" key={role.organisation + role.period}>
          <span className="timeline-dot" aria-hidden="true" />
          <div className="experience-lead"><p className="experience-period">{role.period}</p><h3>{role.role}</h3><p className="organisation">{role.organisation}</p></div>
          <div className="experience-col"><p className="col-label">Scope</p><ul>{role.scope.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div className="experience-col"><p className="col-label">Stack</p><div className="stack-list">{role.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
          <span className="badge">{role.tag}</span>
        </article>)}</div>
      </div>
    </section>
  )
}
