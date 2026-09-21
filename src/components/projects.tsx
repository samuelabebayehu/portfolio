import { deployments } from "@/data/portfolio"

export default function Projects() {
  return (
    <section id="work" className="section site-container">
      <div className="section-heading"><p className="eyebrow">02 / Deployments</p><h2>Systems I've designed, integrated, or shipped.</h2><p>I enjoy work where technical decisions need to hold up in the real world - across people, systems, and imperfect operating conditions.</p></div>
      <div className="deployment-grid">{deployments.map((project) => <article className="deployment-card" key={project.title}>
        <span className="deployment-number">{project.number}</span>
        <h3>{project.title}</h3>
        <p className="deployment-description">{project.description}</p>
        <p className="col-label">Purpose</p>
        <p className="deployment-purpose">{project.purpose}</p>
        <p className="col-label">Stack</p>
        <div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        {project.link && <a className="text-link deployment-link" href={project.link.href} target="_blank" rel="noopener noreferrer">{project.link.label} <span aria-hidden="true">↗</span></a>}
      </article>)}</div>
    </section>
  )
}
