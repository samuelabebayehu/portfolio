import { useTheme } from "@/theme-provider"

const LINKS = [
  { href: "#work", label: "/work" },
  { href: "#projects", label: "/projects" },
  { href: "#skills", label: "/skills" },
  { href: "#contact", label: "/contact" },
]

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <div
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{ background: "var(--nav-bg)", borderColor: "var(--line)" }}
    >
      <div className="section-container flex items-center justify-between py-4 font-mono text-xs">
        <a href="#top" style={{ color: "var(--blue)" }}>
          samuel.et<span style={{ color: "var(--faint)" }}> ~ v2.0</span>
        </a>
        <div className="flex items-center gap-4 sm:gap-6" style={{ color: "var(--dim)" }}>
          <div className="hidden items-center gap-6 sm:flex">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} style={{ color: "var(--dim)" }}>
                {link.label}
              </a>
            ))}
          </div>
          <span className="hidden sm:inline" style={{ color: "var(--green)" }}>
            ● online
          </span>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            title="Toggle theme"
            className="flex h-5 w-[34px] select-none items-center justify-center rounded-full border text-xs transition-colors"
            style={{ borderColor: "var(--line2)", color: "var(--text)" }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
        </div>
      </div>
    </div>
  )
}
