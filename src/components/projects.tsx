import { deployments } from "@/data/portfolio"

const delay = (i: number) => ({ "--i": i } as React.CSSProperties)

const PAGES = [
  { id: "work", chapter: "03 / Deployments", title: "Systems I've designed, integrated, or shipped.", intro: "I enjoy work where technical decisions need to hold up in the real world, across people, systems, and imperfect operating conditions.", items: deployments.slice(0, 3) },
  { id: "work-more", chapter: "03 / Deployments · cont.", title: "More deployments, same standard.", items: deployments.slice(3) },
]

export default function Projects() {
  return (
    <>
      {PAGES.map((page) => (
        <section id={page.id} className="panel" key={page.id}>
          <div className="site-container stacked">
            <div className="section-heading wide">
              <p className="chapter rise" style={delay(0)}>{page.chapter}</p>
              <h2 className="rise" style={delay(1)}>{page.title}</h2>
              {page.intro && <p className="rise" style={delay(2)}>{page.intro}</p>}
            </div>
            <div className="deployment-grid">{page.items.map((project, i) => (
              <article className="deployment-card rise" style={delay(i + 2)} key={project.title}>
                <span className="deployment-number">{project.number}</span>
                <h3>{project.title}</h3>
                <p className="deployment-description">{project.description}</p>
                <p className="col-label">Purpose</p>
                <p className="deployment-purpose">{project.purpose}</p>
                <p className="col-label">Stack</p>
                <div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                {project.link ? <a className="text-link deployment-link" href={project.link.href} target="_blank" rel="noopener noreferrer">{project.link.label} <span aria-hidden="true">↗</span></a> : <span />}
              </article>
            ))}</div>
          </div>
        </section>
      ))}
    </>
  )
}
