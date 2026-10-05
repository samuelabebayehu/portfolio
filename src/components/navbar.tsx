import { useEffect, useState } from "react"
import { NAV, goTo, groupOf, pad, type SectionId } from "@/data/sections"

function getInitialTheme() {
  return localStorage.getItem("theme") === "dark" ? "dark" : "light"
}

function ThemeIcon({ theme }: { theme: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {theme === "light"
        ? <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
        : <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>}
    </svg>
  )
}

export default function Navbar({ active }: { active: SectionId }) {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  useEffect(() => {
    document.body.classList.toggle("menu-open", open)
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false) }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const go = (id: string) => (e: React.MouseEvent) => { e.preventDefault(); setOpen(false); goTo(id) }
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"))
  const themeLabel = theme === "light" ? "Switch to dark mode" : "Switch to light mode"

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" onClick={go("top")}>samuel<span>.et</span></a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {NAV.map((s, i) => (
          <a key={s.id} href={"#" + s.id} onClick={go(s.id)} className={groupOf(active) === s.id ? "is-current" : ""} aria-current={groupOf(active) === s.id ? "true" : undefined}>
            <span>{pad(i + 1)}</span>{s.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a className="nav-cv" href="/cv.pdf" download="Samuel_Abebayehu_CV.pdf">CV</a>
        <button className="icon-button" onClick={toggleTheme} aria-label={themeLabel} title={themeLabel}><ThemeIcon theme={theme} /></button>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu">{open ? "Close" : "Menu"}</button>
      </div>
      <nav id="mobile-menu" className={"mobile-menu" + (open ? " is-open" : "")} aria-label="Mobile navigation" aria-hidden={!open}>
        {NAV.map((s, i) => (
          <a key={s.id} href={"#" + s.id} onClick={go(s.id)} tabIndex={open ? 0 : -1}><span>{pad(i + 1)}</span>{s.label}</a>
        ))}
        <a href="/cv.pdf" download="Samuel_Abebayehu_CV.pdf" tabIndex={open ? 0 : -1}><span>↓</span>Download CV</a>
      </nav>
    </header>
  )
}
