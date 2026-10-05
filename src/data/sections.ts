export const SECTIONS = [
  { id: "top", label: "Home", nav: true },
  { id: "experience", label: "Experience", nav: true },
  { id: "work", label: "Deployments", nav: true },
  { id: "work-more", label: "Deployments", nav: false },
  { id: "capabilities", label: "Skills", nav: true },
  { id: "contact", label: "Contact", nav: true },
] as const

export type SectionId = (typeof SECTIONS)[number]["id"]

// Pages shown in the nav; "work-more" is the second page of Work.
export const NAV = SECTIONS.filter((s) => s.nav)
export const groupOf = (id: string) => (id === "work-more" ? "work" : id)

export const pad = (n: number) => String(n).padStart(2, "0")

// The pager in App listens for this; keeps navigation callable from any component.
export function goTo(id: string) {
  window.dispatchEvent(new CustomEvent("goto", { detail: id }))
}
