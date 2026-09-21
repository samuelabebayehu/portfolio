import { skills } from "@/data/portfolio"

const MAX_YEARS = Math.max(...skills.map((item) => item.years))
const MID = Math.ceil(skills.length / 2)

function SkillColumn({ items }: { items: typeof skills }) {
  return (
    <div className="skill-column">
      <div className="skill-column-head"><span>Skill</span><span>Experience</span></div>
      {items.map((item) => <div className="skill-row" key={item.skill}>
        <span className="skill-name">{item.skill}</span>
        <span className="skill-years">{item.years} year{item.years === 1 ? "" : "s"}</span>
        <span className="skill-bar"><span style={{ width: (item.years / MAX_YEARS) * 100 + "%" }} /></span>
      </div>)}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="capabilities" className="section site-container capabilities">
      <div className="section-heading"><p className="eyebrow">03 / Skills</p><h2>Production stack.</h2><p>Technologies I've worked with, and roughly how long I've used each in production.</p></div>
      <div className="skill-list">
        <SkillColumn items={skills.slice(0, MID)} />
        <SkillColumn items={skills.slice(MID)} />
      </div>
    </section>
  )
}
