import { useEffect, useState } from "react"
import { NAV, SECTIONS, goTo, groupOf, pad, type SectionId } from "@/data/sections"

function addisTime() {
  return new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Africa/Addis_Ababa" }).format(new Date())
}

export default function Chrome({ active }: { active: SectionId }) {
  const [time, setTime] = useState(addisTime)
  useEffect(() => {
    const id = setInterval(() => setTime(addisTime()), 20_000)
    return () => clearInterval(id)
  }, [])

  const index = SECTIONS.findIndex((s) => s.id === active)
  const last = index === SECTIONS.length - 1
  const next = SECTIONS[Math.min(index + 1, SECTIONS.length - 1)]
  const group = NAV.findIndex((s) => s.id === groupOf(active))

  return (
    <>
      <div className="chrome" aria-label="Page status">
        <span className="chrome-time"><i aria-hidden="true" />Addis Ababa · {time} EAT</span>
        <button className={"scroll-hint" + (last ? " is-up" : "")} onClick={() => goTo(last ? "top" : next.id)}>
          {last ? "Back to top" : "Scroll"}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6" /></svg>
        </button>
        <span className="chrome-count"><b>{pad(group + 1)}</b> / {pad(NAV.length)}</span>
      </div>
      <nav className="dots" aria-label="Chapters">
        {NAV.map((s) => (
          <button key={s.id} className={groupOf(active) === s.id ? "is-current" : ""} onClick={() => goTo(s.id)} aria-label={"Go to " + s.label}>
            <span>{s.label}</span><i aria-hidden="true" />
          </button>
        ))}
      </nav>
    </>
  )
}
