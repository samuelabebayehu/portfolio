import { capabilities } from "@/data/portfolio"

export default function Skills() {
  return (
    <section id="capabilities" className="section site-container capabilities">
      <div className="section-heading"><p className="eyebrow">Capabilities</p><h2>Useful technical depth.</h2><p>Tools matter when they help a team understand, operate, and evolve a system with confidence.</p></div>
      <div className="capability-list">{capabilities.map((group) => <article key={group.title}><h3>{group.title}</h3><div>{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
    </section>
  )
}
