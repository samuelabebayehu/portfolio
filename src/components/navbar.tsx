

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Update active section
      const sections = ["home", "about", "skills", "projects", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const navLinks = [
    { name: "/root", href: "home" },
    { name: "/usr/bin/whoami", href: "about" },
    { name: "/etc/profile", href: "skills" },
    { name: "/var/www/html", href: "projects" },
    { name: "/dev/tcp/connect", href: "contact" },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        isScrolled ? "bg-background border-primary" : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-2 group text-primary font-bold text-xl tracking-tighter"
            aria-label="Go to home"
          >
            <span className="mr-2 text-2xl">/</span>
            <span className="w-2.5 h-5 bg-primary animate-pulse ml-1 inline-block" />
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === link.href
                      ? "text-primary before:content-['['] before:mr-2 after:content-[']'] after:ml-2"
                      : "text-muted-foreground hover:before:content-['>_'] hover:before:mr-1 hover:before:text-primary"
                  }`}
                >
                  {activeSection === link.href ? (
                    <span className="text-primary font-bold">* {link.name.toLowerCase()}</span>
                  ) : (
                    link.name.toLowerCase()
                  )}
                </button>
              ))}
            </div>
            <ModeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="rounded-none border border-primary hover:bg-primary hover:text-background"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-primary">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${
                  activeSection === link.href
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {activeSection === link.href ? "[ * " + link.name.toLowerCase() + " ]" : "> " + link.name.toLowerCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
