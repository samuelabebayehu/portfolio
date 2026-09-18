import { useEffect, useState } from "react"

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#contact", label: "Contact" },
]

function getInitialTheme() {
  const stored = localStorage.getItem("theme")
  return stored === "light" ? "light" : "dark"
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => setTheme((current) => (current === "light" ? "dark" : "light"))

  return (
    <header className="site-header">
      <div className="site-container nav-row">
        <a className="wordmark" href="#top" onClick={() => setOpen(false)}>Samuel <span>Abebayehu</span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {LINKS.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          <a className="nav-cv" href="/cv.pdf" download="Samuel_Abebayehu_CV.pdf">CV</a>
          <button className="theme-toggle" onClick={toggleTheme} aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}>{theme === "light" ? "🌙" : "☀️"}</button>
        </nav>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav">{open ? "Close" : "Menu"}</button>
      </div>
      {open && <nav id="mobile-nav" className="mobile-nav site-container" aria-label="Mobile navigation">
        {LINKS.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
        <a href="/cv.pdf" download="Samuel_Abebayehu_CV.pdf" onClick={() => setOpen(false)}>Download CV</a>
        <button className="theme-toggle" onClick={toggleTheme} aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}>{theme === "light" ? "🌙 Dark mode" : "☀️ Light mode"}</button>
      </nav>}
    </header>
  )
}
