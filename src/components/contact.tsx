import { profile } from "@/data/portfolio"

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="site-container contact-layout">
        <div><p className="eyebrow">Contact</p><h2>Have a hard system problem?</h2></div>
        <div><p>I am based in Addis Ababa and open to thoughtful software, data, and systems-integration work.</p><a className="contact-email" href={"mailto:" + profile.email}>{profile.email}</a><div className="contact-links"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="/cv.pdf" download="Samuel_Abebayehu_CV.pdf">Download CV ↓</a></div></div>
      </div>
    </section>
  )
}
