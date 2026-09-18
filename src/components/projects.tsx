import { featuredWork, independentWork } from "@/data/portfolio"

export default function Projects() {
  return (
    <section id="work" className="section site-container">
      <div className="section-heading"><p className="eyebrow">Selected work</p><h2>Complex work, made clear.</h2><p>I enjoy work where technical decisions need to hold up in the real world - across people, systems, and imperfect operating conditions.</p></div>
      <div className="case-list">{featuredWork.map((project) => <article className="case-study" key={project.id}>
        <div className="case-meta"><span>{project.number}</span><span>{project.label}</span></div>
        <div className="case-main"><p className="case-client">{project.client}</p><h3>{project.title}</h3><p className="case-summary">{project.summary}</p><p className="contribution"><strong>My contribution:</strong> {project.contribution}</p>
          <div className="system-sketch" aria-label={project.title + " system sketch"}>{project.flow.map((step, index) => <span key={step}>{step}{index < project.flow.length - 1 && <i aria-hidden="true">→</i>}</span>)}</div>
          <ul className="outcome-list">{project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
          <div className="case-footer"><div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>{project.link && <a className="text-link" href={project.link.href} target="_blank" rel="noopener noreferrer">{project.link.label} <span aria-hidden="true">↗</span></a>}</div>
        </div>
      </article>)}</div>
      <div className="independent-work"><p className="eyebrow">Independent builds</p><div className="independent-grid">{independentWork.map((project) => <article key={project.title}><h3>{project.title}</h3><p>{project.description}</p><small>{project.stack}</small>{project.href && <a className="text-link" href={project.href} target="_blank" rel="noopener noreferrer">{project.linkLabel} <span aria-hidden="true">↗</span></a>}</article>)}</div></div>
    </section>
  )
}
