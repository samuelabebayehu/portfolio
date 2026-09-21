import { profile } from "@/data/portfolio"

const icons = {
  mail: { filled: false, path: <path d="M3 5h18v14H3zM3 7l9 6 9-6" /> },
  github: { filled: true, path: <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.36-3.37-1.36-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" /> },
  linkedin: { filled: true, path: <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.6v1.7h.05c.5-.9 1.8-1.9 3.6-1.9 3.9 0 4.6 2.4 4.6 5.6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21H9z" /> },
  download: { filled: false, path: <path d="M12 3v10m0 0-3.5-3.5M12 13l3.5-3.5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" /> },
}

function Icon({ name }: { name: keyof typeof icons }) {
  const { filled, path } = icons[name]
  return filled
    ? <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{path}</svg>
    : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{path}</svg>
}

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="site-container contact-layout">
        <div><p className="eyebrow">04 / Contact</p><span className="warm-badge">● Open to new work</span><h2>Have a hard system problem?</h2></div>
        <div className="contact-panel">
          <div className="terminal-box">
            <p className="terminal-prompt">samuel@portfolio:~$</p>
            <p>I am based in Addis Ababa and open to thoughtful software, data, and systems-integration work.</p>
          </div>
          <ul className="contact-list">
            <li><span className="contact-icon"><Icon name="mail" /></span><div><span className="contact-label">Email</span><a href={"mailto:" + profile.email}>{profile.email}</a></div></li>
            <li><span className="contact-icon"><Icon name="github" /></span><div><span className="contact-label">GitHub</span><a href={profile.github} target="_blank" rel="noopener noreferrer">{profile.github.replace("https://", "")} ↗</a></div></li>
            <li><span className="contact-icon"><Icon name="linkedin" /></span><div><span className="contact-label">LinkedIn</span><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">{profile.name} ↗</a></div></li>
            <li><span className="contact-icon"><Icon name="download" /></span><div><span className="contact-label">Resume</span><a href="/cv.pdf" download="Samuel_Abebayehu_CV.pdf">Download CV ↓</a></div></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
