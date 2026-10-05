import { useCallback, useEffect, useRef, useState } from "react"
import Navbar from "@/components/navbar"
import Chrome from "@/components/chrome"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import { SECTIONS } from "@/data/sections"
import { DURATION, EASING, TRANSITIONS } from "@/transitions"

const panelAt = (i: number) => document.getElementById(SECTIONS[i].id) as HTMLElement
const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
const atEdge = (p: HTMLElement, dir: number) =>
  dir > 0 ? p.scrollTop + p.clientHeight >= p.scrollHeight - 2 : p.scrollTop <= 1

function initialIndex() {
  const i = SECTIONS.findIndex((s) => s.id === location.hash.slice(1))
  return i < 0 ? 0 : i
}

const toneFor = (i: number) => (i === 0 ? "hero" : i === SECTIONS.length - 1 ? "contact" : "light")

function App() {
  const [index, setIndex] = useState(initialIndex)
  const indexRef = useRef(index)
  const busy = useRef(false)
  const [tone, setTone] = useState(() => toneFor(initialIndex()))

  const go = useCallback((to: number) => {
    const from = indexRef.current
    if (busy.current || to === from || to < 0 || to >= SECTIONS.length) return
    busy.current = true
    indexRef.current = to
    setIndex(to)
    history.replaceState(null, "", to === 0 ? location.pathname : "#" + SECTIONS[to].id)

    const fromEl = panelAt(from)
    const toEl = panelAt(to)
    toEl.scrollTop = 0
    toEl.classList.add("is-active")

    // Flip header/status ink halfway through the turn, when the new page covers them.
    setTimeout(() => setTone(toneFor(to)), reduceMotion() ? 0 : DURATION * 0.45)

    const finish = () => {
      fromEl.classList.remove("is-active")
      setTimeout(() => { busy.current = false }, 250)
    }
    if (reduceMotion()) return finish()

    const forward = to > from
    const turn = TRANSITIONS[forward ? to - 1 : from - 1]
    const opts = (reverse: boolean): KeyframeAnimationOptions => ({ duration: turn.duration ?? DURATION, easing: turn.easing ?? EASING, fill: "both", direction: reverse ? "reverse" : "normal" })
    const animations = [
      fromEl.animate(forward ? turn.out : turn.in, opts(!forward)),
      toEl.animate(forward ? turn.in : turn.out, opts(!forward)),
    ]
    Promise.all(animations.map((a) => a.finished)).then(() => { animations.forEach((a) => a.cancel()); finish() })
  }, [])

  const goById = useCallback((id: string) => go(SECTIONS.findIndex((s) => s.id === id)), [go])

  useEffect(() => {
    panelAt(indexRef.current).classList.add("is-active")
    const onGoto = (e: Event) => goById((e as CustomEvent<string>).detail)
    window.addEventListener("goto", onGoto)
    return () => window.removeEventListener("goto", onGoto)
  }, [goById])

  // Wheel / trackpad: one gesture = one page turn, unless the page itself still has content to scroll.
  useEffect(() => {
    let acc = 0
    let lastEvent = 0
    let lastNative = 0
    const onWheel = (e: WheelEvent) => {
      const vertical = Math.abs(e.deltaY) >= Math.abs(e.deltaX)
      const delta = vertical ? e.deltaY : e.deltaX
      if (!delta) return
      if (busy.current) { e.preventDefault(); return }
      const now = performance.now()
      const panel = panelAt(indexRef.current)
      if (vertical && panel.scrollHeight > panel.clientHeight + 2 && !atEdge(panel, Math.sign(delta))) { lastNative = now; return }
      e.preventDefault()
      if (now - lastNative < 160) return
      if (now - lastEvent > 180) acc = 0
      lastEvent = now
      acc += delta
      if (Math.abs(acc) > 50) { go(indexRef.current + Math.sign(acc)); acc = 0 }
    }
    window.addEventListener("wheel", onWheel, { passive: false })
    return () => window.removeEventListener("wheel", onWheel)
  }, [go])

  // Touch swipes: vertical (only from a page edge) or horizontal.
  useEffect(() => {
    let start: { x: number; y: number; top: boolean; bottom: boolean } | null = null
    const onStart = (e: TouchEvent) => {
      const panel = panelAt(indexRef.current)
      start = { x: e.touches[0].clientX, y: e.touches[0].clientY, top: atEdge(panel, -1), bottom: atEdge(panel, 1) }
    }
    const onEnd = (e: TouchEvent) => {
      if (!start) return
      const dx = start.x - e.changedTouches[0].clientX
      const dy = start.y - e.changedTouches[0].clientY
      if (Math.abs(dy) > 60 && Math.abs(dy) > Math.abs(dx)) {
        if (dy > 0 && start.bottom) go(indexRef.current + 1)
        if (dy < 0 && start.top) go(indexRef.current - 1)
      } else if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy)) go(indexRef.current + Math.sign(dx))
      start = null
    }
    window.addEventListener("touchstart", onStart, { passive: true })
    window.addEventListener("touchend", onEnd, { passive: true })
    return () => { window.removeEventListener("touchstart", onStart); window.removeEventListener("touchend", onEnd) }
  }, [go])

  // Keyboard: arrows / paging keys turn the page; tall pages scroll first.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey) return
      const target = e.target as HTMLElement
      if (target.closest("input, textarea, select")) return
      if ((e.key === " " || e.key === "Enter") && target.closest("button, a")) return
      const forward = ["ArrowDown", "ArrowRight", "PageDown"].includes(e.key) || (e.key === " " && !e.shiftKey)
      const back = ["ArrowUp", "ArrowLeft", "PageUp"].includes(e.key) || (e.key === " " && e.shiftKey)
      if (!forward && !back && e.key !== "Home" && e.key !== "End") return
      e.preventDefault()
      if (e.key === "Home") return go(0)
      if (e.key === "End") return go(SECTIONS.length - 1)
      const dir = forward ? 1 : -1
      // Left/right arrows always turn the page; the others scroll tall pages first.
      const horizontal = e.key === "ArrowLeft" || e.key === "ArrowRight"
      const panel = panelAt(indexRef.current)
      if (!horizontal && panel.scrollHeight > panel.clientHeight + 8 && !atEdge(panel, dir)) {
        return panel.scrollBy({ top: dir * panel.clientHeight * 0.8, behavior: "smooth" })
      }
      go(indexRef.current + dir)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [go])

  return (
    <div className="site-shell" data-tone={tone}>
      <Navbar active={SECTIONS[index].id} />
      <main className="pager">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Chrome active={SECTIONS[index].id} />
    </div>
  )
}

export default App
