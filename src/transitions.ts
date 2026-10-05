// One transition per page turn: TRANSITIONS[i] is the turn from chapter i to chapter i+1.
// `out` animates the chapter being left, `in` the chapter arriving. Going backwards plays both in reverse.
export interface PageTurn { out: Keyframe[]; in: Keyframe[]; duration?: number; easing?: string }

export const DURATION = 950
export const EASING = "cubic-bezier(.77, 0, .18, 1)"

export const TRANSITIONS: PageTurn[] = [
  // Home -> Experience: sideways push
  {
    out: [{ transform: "translateX(0)", opacity: 1 }, { transform: "translateX(-30%)", opacity: .35 }],
    in: [{ transform: "translateX(100%)" }, { transform: "translateX(0)" }],
  },
  // Experience -> Work: scroll down
  {
    out: [{ transform: "translateY(0) scale(1)", opacity: 1 }, { transform: "translateY(-16%) scale(.96)", opacity: 0 }],
    in: [{ transform: "translateY(100%)" }, { transform: "translateY(0)" }],
  },
  // Work -> Work (continued): sideways push
  {
    out: [{ transform: "translateX(0)", opacity: 1 }, { transform: "translateX(-30%)", opacity: .35 }],
    in: [{ transform: "translateX(100%)" }, { transform: "translateX(0)" }],
  },
  // Work (continued) -> Skills: wipe from the right while the old page recedes
  {
    out: [{ transform: "scale(1)", filter: "brightness(1)" }, { transform: "scale(.93)", filter: "brightness(.78)" }],
    in: [{ clipPath: "inset(0 0 0 100%)" }, { clipPath: "inset(0 0 0 0)" }],
  },
  // Skills -> Contact: a quiet fade up, shorter than the other turns
  {
    duration: 520,
    easing: "cubic-bezier(.1, .7, .2, 1)",
    out: [{ opacity: 1 }, { opacity: 1 }],
    in: [{ opacity: 0, transform: "translateY(14px)" }, { opacity: 1, transform: "translateY(0)" }],
  },
]
