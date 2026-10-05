import { skills } from "@/data/portfolio"
import SkillIcons from "@/components/skill-icons"

const MAX_YEARS = Math.max(...skills.map((item) => item.years))
const MID = Math.ceil(skills.length / 2)
const delay = (i: number) => ({ "--i": i } as React.CSSProperties)

function SkillColumn({ items, start }: { items: typeof skills; start: number }) {
  return (
    <div className="skill-column rise" style={delay(start)}>
      {items.map((item) => <div className="skill-row" key={item.skill}>
        <SkillIcons skill={item.skill} />
        <span className="skill-name">{item.skill}</span>
        <span className="skill-years">{item.years} yr{item.years === 1 ? "" : "s"}</span>
        <span className="skill-bar"><span style={{ width: (item.years / MAX_YEARS) * 100 + "%" }} /></span>
      </div>)}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="capabilities" className="panel">
      <div className="site-container stacked">
        <div className="section-heading wide">
          <p className="chapter rise" style={delay(0)}>04 / Skills</p>
          <h2 className="rise" style={delay(1)}>Production stack.</h2>
          <p className="rise" style={delay(2)}>Technologies I've worked with, and roughly how long I've used each in production.</p>
        </div>
        <div className="skill-list">
          <SkillColumn items={skills.slice(0, MID)} start={3} />
          <SkillColumn items={skills.slice(MID)} start={4} />
        </div>
      </div>
    </section>
  )
}
