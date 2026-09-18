import { experience } from "@/data/portfolio"

export default function Experience() {
  return (
    <section id="experience" className="section section-tint">
      <div className="site-container experience-layout">
        <div className="section-heading"><p className="eyebrow">Experience</p><h2>A career in systems that cannot simply stop.</h2></div>
        <div className="experience-list">{experience.map((role) => <article className="experience-item" key={role.organisation + role.period}><p className="experience-period">{role.period}</p><div><h3>{role.role}</h3><p className="organisation">{role.organisation}</p><p>{role.description}</p><ul>{role.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div></article>)}</div>
      </div>
    </section>
  )
}
