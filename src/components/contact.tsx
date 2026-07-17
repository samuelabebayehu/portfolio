export default function Contact() {
  return (
    <div id="contact" className="section-container scroll-mt-[70px] pb-6">
      <div
        className="rounded-lg border p-7 font-mono text-sm leading-[1.9] sm:p-8"
        style={{ borderColor: "rgba(110,231,160,.3)", background: "#0d1218", color: "#dce6ee" }}
      >
        <div style={{ color: "rgba(220,230,238,.4)" }}># reach me — Addis Ababa · UTC+3</div>
        <div>
          <span style={{ color: "#6ee7a0" }}>$</span> mail{" "}
          <a href="mailto:samuelabebayehu@gmail.com" style={{ color: "#5fb4e8" }}>
            samuelabebayehu@gmail.com
          </a>
        </div>
        <div className="break-words">
          <span style={{ color: "#6ee7a0" }}>$</span> open{" "}
          <a href="https://github.com/samuelabebayehu" style={{ color: "#5fb4e8" }}>
            github.com/samuelabebayehu
          </a>{" "}
          ·{" "}
          <a href="https://www.linkedin.com/in/samuel-abebayehu-a82807a6/" style={{ color: "#5fb4e8" }}>
            linkedin/samuel-abebayehu
          </a>
          <span style={{ color: "#6ee7a0" }}>▌</span>
        </div>
      </div>
    </div>
  )
}
