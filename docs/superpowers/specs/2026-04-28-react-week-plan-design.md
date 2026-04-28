# React Week Plan — From Fuzzy to Intentional

**Goal:** Build a solid mental model of React hooks, TypeScript in React, and state management patterns — applied directly to the portfolio project.

**Stack:** React 18 + TypeScript + Vite + Tailwind + Radix UI + Framer Motion + react-hook-form

**Schedule:** 3–4 hours/day | Learning style: short concept → build immediately

---

## Daily Rhythm

Every day follows the same 3-phase structure:

| Phase | Time | What |
|---|---|---|
| **Concept** | ~45 min | Read and understand the mental model — no skipping this |
| **Exercise** | ~60 min | One focused component to lock in the concept |
| **Portfolio** | ~90 min | Apply what you learned to the real codebase |

The concept section is not optional. The exercise is not a tutorial — write it from scratch without copying. The portfolio application is where it becomes permanent.

---

## Week Overview

| Day | Focus |
|---|---|
| 1 | React mental model — how React actually works |
| 2 | TypeScript in React — stop copy-pasting types |
| 3 | `useState` + `useRef` — deeply understood |
| 4 | `useEffect` — the most misused hook |
| 5 | `useContext` + custom hooks — composition and reuse |
| 6 | `useMemo` + `useCallback` + performance |
| 7 | State management patterns + `react-hook-form` |

---

## Day 1 — React Mental Model

### Concept

Before any hook makes sense, you need to understand what React actually is and what it does. Most confusion with hooks comes from a wrong mental model at this level.

**React is a description engine, not a DOM mutator.**

You don't tell React "add this element" or "change this text." You describe what the UI should look like *given some data*, and React figures out the minimum changes needed to make the DOM match your description. This is the entire premise.

**A component is a function.**

```tsx
function Counter() {
  return <div>0</div>
}
```

That's it. React calls this function, gets back JSX (a description of some DOM), and renders it. Every time React needs to update the UI, it calls the function again. This is called a **re-render** — the function runs again from top to bottom, producing a new description, and React diffs it against the previous one.

This has a critical implication: **every variable, every value, every expression inside your component gets recreated on every render.** There are no "persistent variables" inside a component function — unless you use a hook.

**What causes a re-render?**

Only three things trigger a component to re-render:
1. Its own **state** changes
2. Its **parent** re-renders (and passes it as a child)
3. A **context** it consumes changes

Nothing else. Not props changing on their own (props changing is a consequence of a parent re-render). Not time passing. Not an API call finishing (unless you put the result in state).

**What state actually is.**

State is not a variable. When you call `useState`, you're telling React: "I need a value that persists between renders, and when it changes, re-render this component." React stores the state value outside your function. When you call the setter, React schedules a re-render and gives the function the new value on the next call.

```tsx
// This does NOT work:
let count = 0
function increment() { count++ } // React has no idea this changed

// This works:
const [count, setCount] = useState(0)
function increment() { setCount(count + 1) } // React knows, re-renders
```

**React 18 batches all state updates** — even in async code. If you call `setA`, `setB`, `setC` in sequence, React will batch them into a single re-render instead of three.

**JSX is not HTML.**

JSX compiles to `React.createElement(...)` calls. It looks like HTML but it's JavaScript. This means:
- `class` → `className`
- `for` → `htmlFor`
- event handlers are camelCase: `onClick`, `onChange`, `onSubmit`
- you can embed any JS expression inside `{}`

### Exercise

Build a counter with three buttons: **Increment**, **Decrement**, **Reset**.

Add `console.log("rendered")` at the very top of the component body. Watch when it fires. Click a button — you'll see it. Now add a second independent counter on the same page. Each has its own state. Clicking one counter's button does not cause the other to log.

This makes two things real:
1. The function runs again on every state change
2. Each component instance has its own isolated state

```tsx
// Build this from scratch. No Radix, no Tailwind — just plain JSX.
function Counter() {
  console.log("rendered")
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
```

### Portfolio Application

Don't change any code today. Read the following files and trace the mental model:

- `src/theme-provider.tsx` — where does state live? What triggers a re-render?
- `src/components/navbar.tsx` — is there any state? What re-renders it?
- `src/components/scroll-to-top.tsx` — what determines whether the button is visible?

For each one, answer in your head: "What state does this component own? What causes it to re-render? What does it render?"

---

## Day 2 — TypeScript in React

### Concept

TypeScript in React is not about memorizing types. It's about understanding 5 patterns that cover 90% of what you'll write. Right now you copy-paste types — by the end of today you'll understand what you're writing.

**Pattern 1 — Typing props with an interface**

```tsx
interface CardProps {
  title: string
  count: number
  isActive: boolean
  onSelect: () => void
}

function Card({ title, count, isActive, onSelect }: CardProps) {
  return <div onClick={onSelect}>{title}: {count}</div>
}
```

The interface defines the contract. TypeScript will catch you if you pass the wrong type or forget a required prop. Optional props use `?`:

```tsx
interface CardProps {
  title: string
  subtitle?: string  // optional — may be undefined
}
```

**Pattern 2 — Typing state**

```tsx
const [name, setName] = useState("")           // inferred as string
const [count, setCount] = useState(0)          // inferred as number
const [items, setItems] = useState<string[]>([]) // needs explicit generic
const [user, setUser] = useState<User | null>(null) // union type
```

When the initial value is enough to infer the type (empty string → string, 0 → number), TypeScript figures it out. When the initial value is empty (`[]`, `null`), you need the generic `<T>`.

**Pattern 3 — Event types**

```tsx
function handleClick(e: React.MouseEvent<HTMLButtonElement>) { ... }
function handleChange(e: React.ChangeEvent<HTMLInputElement>) { ... }
function handleSubmit(e: React.FormEvent<HTMLFormElement>) { ... }
```

The pattern is always `React.EventType<HTMLElementType>`. The `e.target` and `e.currentTarget` will be properly typed.

**Pattern 4 — Children types**

```tsx
interface WrapperProps {
  children: React.ReactNode       // anything React can render (most common)
}

interface IconProps {
  icon: React.ReactElement        // a specific JSX element
}
```

Use `ReactNode` by default for children. Use `ReactElement` only when you need to clone/manipulate the child element.

**Pattern 5 — Reading Radix UI / third-party types**

Your project uses Radix UI heavily. When you need to know what props a component accepts:
1. Hover over the component in VS Code — the tooltip shows the type
2. Cmd/Ctrl+click to jump to the type definition
3. Look for `ComponentPropsWithoutRef<'button'>` — this means it accepts all native button props

```tsx
// Extending native element props — a pattern you'll see in your ui/ folder
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
}
```

### Exercise

Build a typed `ProjectCard` component from scratch. It accepts:
- `id: string`
- `title: string`
- `tags: string[]`
- `description?: string` (optional)
- `onSelect: (id: string) => void`
- `children: React.ReactNode`

Type everything explicitly. Use it three times with different props. Handle the click with a properly typed event handler. Make TypeScript catch you intentionally — pass a number where a string is expected, see the error, understand it.

### Portfolio Application

Open these files and find every type you don't fully understand:
- `src/components/hero.tsx`
- `src/components/navbar.tsx`
- `src/components/contact.tsx`

For each implicit or unclear type, look it up (hover in VS Code or Cmd+click). Fix any `any` types or implicit `any` that you now understand how to type correctly. This is your TypeScript baseline — you won't need to revisit basics after today.

---

## Day 3 — `useState` + `useRef`

### Concept

**`useState` — deeply understood**

You already know `useState` exists. What you may not know is what it actually does and where the traps are.

When React calls your component function, it processes hooks in order. `useState` on the first call creates a state slot and returns `[initialValue, setter]`. On subsequent calls (re-renders), it returns the *current* value of that slot, not the initial value. This is why hooks must always be called in the same order — React uses call order to know which slot belongs to which hook.

**The stale closure trap** is the most common `useState` bug:

```tsx
const [count, setCount] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setCount(count + 1) // BUG: count is always 0 here
  }, 1000)
  return () => clearInterval(interval)
}, []) // empty deps — the effect captures count=0 and never updates
```

Fix: use the **functional update form** when new state depends on old state:

```tsx
setCount(prev => prev + 1) // always has the latest value
```

**The setter doesn't update state immediately:**

```tsx
setCount(count + 1)
console.log(count) // still the old value — state updates on next render
```

State is updated on the *next render*, not the current one.

---

**`useRef` — a persistent box**

`useRef` returns an object `{ current: value }` that:
1. Persists across renders (not recreated each time)
2. Does **not** cause a re-render when `.current` changes

This gives it two distinct uses:

**Use 1 — Accessing DOM nodes directly:**

```tsx
const inputRef = useRef<HTMLInputElement>(null)

// Later:
inputRef.current?.focus()

// In JSX:
<input ref={inputRef} />
```

React sets `inputRef.current` to the DOM element after mount, and `null` after unmount.

**Use 2 — Storing values that should persist but not trigger re-renders:**

```tsx
const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

// Store the interval ID without triggering a re-render:
intervalRef.current = setInterval(tick, 1000)

// Clear it later:
clearInterval(intervalRef.current!)
```

If you stored the interval ID in `useState` instead, each `setInterval` call would trigger a re-render. `useRef` is the right tool.

**The key distinction:**
- Need to re-render when the value changes? → `useState`
- Need to remember a value across renders but don't need to re-render? → `useRef`

### Exercise

Build two things:

1. A controlled text input that tracks character count in real time. The count updates as you type. Use `useState` for the input value. Observe the re-render on every keystroke.

2. A stopwatch with Start/Stop/Reset buttons. Store the interval ID in a `useRef` (not state). Display elapsed seconds using `useState`. Observe that storing the interval ID in a ref does not cause extra renders.

### Portfolio Application

Look at these files with your new understanding:
- `src/components/scroll-to-top.tsx` — find the state that controls visibility. Trace when it changes.
- `src/components/navbar.tsx` — find any mobile menu toggle. Is it `useState` or something else?
- `src/components/terminal-hero.tsx` — look for any refs being used for animation targets.

If you find a `useState` being used where a `useRef` would be more appropriate (a value that doesn't need to trigger a re-render), refactor it intentionally.

---

## Day 4 — `useEffect`

### Concept

`useEffect` is the most misunderstood hook in React. Most bugs come from treating it like a lifecycle method (`componentDidMount`, `componentDidUpdate`) when it isn't one.

**What `useEffect` actually is:**

> After every render where the dependencies changed, run this function. Optionally, return a cleanup function that runs before the next effect and on unmount.

That's it. It's a synchronization mechanism — a way to keep some external system (the DOM, a timer, a subscription, localStorage, a WebSocket) in sync with your React state.

**The anatomy:**

```tsx
useEffect(() => {
  // 1. side effect goes here
  const subscription = someAPI.subscribe(handler)

  // 2. cleanup goes here (runs before next effect, and on unmount)
  return () => {
    subscription.unsubscribe()
  }
}, [dependency1, dependency2]) // 3. deps: re-run when these change
```

**The dependency array is a contract, not an optimization.**

React will warn you (and ESLint will too) if you use a reactive value inside an effect but don't include it in the deps array. This is not a stylistic preference — it's a correctness requirement. If you lie about deps, you get stale values inside your effect.

| Deps | Behavior |
|---|---|
| No array | Runs after every render |
| `[]` | Runs once after mount |
| `[a, b]` | Runs after mount, and whenever `a` or `b` change |

**When NOT to use `useEffect`:**

This is equally important. `useEffect` is commonly overused. Do not use it for:

- **Derived state:** If a value can be computed from existing state/props, compute it inline during render. Don't sync it with an effect.
  ```tsx
  // Wrong:
  const [fullName, setFullName] = useState("")
  useEffect(() => { setFullName(`${first} ${last}`) }, [first, last])

  // Right:
  const fullName = `${first} ${last}` // just compute it
  ```

- **Event-driven state changes:** If state should change because the user did something, put the logic in the event handler, not an effect.

- **Fetching on mount with no cleanup:** At minimum, always handle the case where the component unmounts before the fetch finishes (use an `ignore` flag or AbortController).

**Cleanup is not optional:**

Anything that starts something needs to stop it. Interval → clearInterval. Subscription → unsubscribe. Event listener → removeEventListener. Failing to clean up causes memory leaks and stale callbacks on unmounted components.

```tsx
useEffect(() => {
  const handleResize = () => setWidth(window.innerWidth)
  window.addEventListener("resize", handleResize)
  return () => window.removeEventListener("resize", handleResize) // required
}, [])
```

### Exercise

Build two components:

1. A component that syncs a text input value to `localStorage`. On mount, read the saved value. On change, write it. Test by typing, refreshing the page — your text should persist.

2. A component that listens to `window.scroll` and displays the current scroll position. First build it without a cleanup function and observe the behavior when the component unmounts (add a toggle to hide/show it). Then add the cleanup and observe the difference.

Break the deps array intentionally — remove a dep, observe the stale value bug, fix it.

### Portfolio Application

Read and understand these files with your new `useEffect` knowledge:
- `src/components/scroll-to-top.tsx` — there should be a scroll listener effect. Does it clean up properly?
- `src/theme-provider.tsx` — is `localStorage` interaction done in an effect or inline?

Fix any effect in the portfolio that is missing cleanup or has incorrect dependencies.

---

## Day 5 — `useContext` + Custom Hooks

### Concept

**`useContext` — a teleporter for values**

Context solves one specific problem: prop drilling. When a value needs to be available deep in the component tree and passing it through every intermediate component is impractical, context provides a way to make it available to any descendant without explicit passing.

**How it works:**

```tsx
// 1. Create the context with a default value
const ThemeContext = createContext<"light" | "dark">("light")

// 2. Provide it somewhere in the tree
function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  return (
    <ThemeContext.Provider value={theme}>
      <DeepTree />
    </ThemeContext.Provider>
  )
}

// 3. Consume it anywhere below the provider
function DeepButton() {
  const theme = useContext(ThemeContext) // no prop drilling needed
  return <button className={theme}>Click</button>
}
```

**Context is not a state manager.** It doesn't manage state — `useState` does. Context just *teleports* a value. The state still lives in a component; context makes it accessible without prop chains.

**The performance cost:** Every component that consumes a context re-renders when the context value changes. If the context value is an object that gets recreated on every render, all consumers re-render constantly. Wrap the value in `useMemo` if this matters.

**When to use context vs. props:**
- Value needed in 1–2 levels? → props
- Value needed in many unrelated components across the tree? → context
- Value changes frequently and many components consume it? → think carefully, consider alternatives

---

**Custom hooks — extracting stateful logic**

A custom hook is any function whose name starts with `use` and which calls other hooks. That's the only rule.

The `use` prefix matters because React's rules of hooks (only call hooks at the top level, only call in React functions) are enforced by convention and by ESLint's hooks lint plugin. Naming your function `useX` opts it into those rules.

**Why custom hooks exist:**

They let you extract stateful logic out of components so it can be reused and understood independently. Not just utility functions — *stateful* logic.

```tsx
// Without custom hook — logic mixed into component:
function Navbar() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])
  // ... rest of navbar
}

// With custom hook — logic extracted, reusable:
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [breakpoint])
  return isMobile
}

function Navbar() {
  const isMobile = useIsMobile()
  // ... clean
}
```

The hook is now reusable, testable, and the component is readable. This is the design pattern behind every hook in your `src/hooks/` folder.

### Exercise

Build two custom hooks from scratch:

1. `useWindowSize()` — returns `{ width: number, height: number }` and updates on resize. Add cleanup.

2. `useLocalStorage<T>(key: string, initialValue: T)` — returns `[value, setValue]` just like `useState`, but persisted to localStorage. Reading on mount, writing on change.

Use both hooks in a single demo component that displays window size and a persisted counter.

### Portfolio Application

Read these files with your new understanding:
- `src/theme-provider.tsx` — understand the full context creation, provider, and how the custom `useTheme` hook is built and exported
- `src/hooks/use-mobile.tsx` — this is a custom hook already in your codebase. Read it. Does it match the pattern you built today?
- `src/hooks/use-toast.ts` — more complex custom hook. Read it and trace the state.
- `src/components/mode-toggle.tsx` — see how it consumes the theme context

Then add one custom hook to the portfolio. Choose one:
- `useScrollPosition()` — returns current scroll Y position
- `useIntersectionObserver(ref, options)` — returns whether an element is visible in the viewport (useful for scroll-in animations in About/Skills sections)

---

## Day 6 — `useMemo` + `useCallback` + Performance

### Concept

**The rule: don't optimize prematurely.**

`useMemo` and `useCallback` add overhead — they allocate memory, check dependencies on every render, and add cognitive complexity. Wrapping everything in them by default makes your code harder to read and can actually be slower for simple cases. Use them only when you have a measured reason.

---

**`React.memo` — skip re-rendering a component**

```tsx
const ExpensiveList = React.memo(function ExpensiveList({ items }: Props) {
  return <ul>{items.map(i => <li key={i.id}>{i.name}</li>)}</ul>
})
```

`React.memo` wraps a component. If the parent re-renders but the component's props haven't changed (shallow equality check), React skips re-rendering the component entirely.

**When to use:** A component that renders a large list, does heavy DOM work, or is a pure function of its props — and its parent re-renders often without changing those props.

---

**`useMemo` — cache a computed value**

```tsx
const filteredItems = useMemo(
  () => items.filter(i => i.category === activeCategory),
  [items, activeCategory]
)
```

`useMemo` runs the function on mount and whenever deps change. Between renders (when deps are the same), it returns the cached value without recomputing.

**When to use:** The computation is genuinely expensive (processing large arrays, complex transforms). Not for simple lookups or single-value filters on small arrays.

---

**`useCallback` — cache a function reference**

```tsx
const handleSelect = useCallback((id: string) => {
  setSelectedId(id)
}, []) // stable reference — doesn't change between renders
```

Every time a component re-renders, functions defined inside it are recreated. This creates a new reference — meaning a child that receives it as a prop will see it as a "new prop" even if the logic is identical. `useCallback` returns the same function reference as long as deps don't change.

**When to use:** You're passing a callback to a `React.memo`-wrapped child. Without `useCallback`, the memo has no effect because the prop reference always changes. Almost never needed otherwise.

**The trio in practice:**

```
Parent re-renders
  → Child receives new function prop (new reference)
  → React.memo's shallow check fails (new reference ≠ old reference)
  → Child re-renders anyway
  → memo was pointless

Fix:
  → Wrap the function in useCallback in the parent
  → Now the reference is stable
  → React.memo's check passes
  → Child skips re-render ✓
```

---

**How to actually find performance issues:**

Install React DevTools browser extension. In the Components tab, enable "Highlight updates when components render." This shows you visually which components re-render and how often. Use the Profiler tab to record and see exactly which renders were caused by what.

Profile before you optimize. Fix what DevTools shows, not what you assume.

### Exercise

Build a filterable list:
1. Create an array of 500 items (`Array.from({ length: 500 }, (_, i) => ({ id: i, name: \`Item ${i}\`, category: i % 5 }))`)
2. Add a filter input — filter by category number
3. First version: no optimization. Open React DevTools and observe what re-renders when you type.
4. Wrap the filter logic in `useMemo`. Observe the change.
5. Extract a `ListItem` component and wrap it in `React.memo`. Observe.

The goal is to *see* the difference, not just apply the API.

### Portfolio Application

Install React DevTools if you haven't. Open your portfolio in dev mode. Enable "Highlight updates." Scroll, click, toggle the theme — watch what re-renders.

Look at:
- `src/components/project-dashboard.tsx` — does it re-render unnecessarily?
- `src/components/skills.tsx` — same question.

Apply `React.memo`, `useMemo`, or `useCallback` only where DevTools shows a real problem. Document what you fixed and why in a comment (this is one of the rare cases where a comment is worth it — the "why I optimized this" is not obvious from the code).

---

## Day 7 — State Management Patterns + `react-hook-form`

### Concept

**How to decide where state lives**

This is the most important architectural skill in React. State in the wrong place causes bugs, re-render problems, and components that are hard to reuse.

**Decision tree:**

```
Does only one component need this value?
  → useState inside that component (local state)

Do two sibling components need the same value?
  → Lift state to their common parent, pass down as props

Do many unrelated components across the tree need the same value?
  → Put it in context (useContext)

Is the state complex, shared globally, needs middleware, or updated from many places?
  → External store (Zustand, Redux Toolkit, Jotai)
  → Your portfolio does NOT need this
```

**Lifting state — the most common pattern:**

When two siblings need to share state, the state moves up to their parent. The parent owns it and passes values down as props and setters as callback props.

```tsx
// Wrong: each child owns its own state, they can't sync
function Parent() {
  return (
    <>
      <TabList />     // owns activeTab
      <TabContent />  // doesn't know about activeTab
    </>
  )
}

// Right: parent owns state, passes to both
function Parent() {
  const [activeTab, setActiveTab] = useState("overview")
  return (
    <>
      <TabList activeTab={activeTab} onSelect={setActiveTab} />
      <TabContent activeTab={activeTab} />
    </>
  )
}
```

**Colocation — keep state as close as possible:**

A common mistake is putting everything in a top-level context or global store because "it might be needed later." This causes unnecessary re-renders and tight coupling. Put state in the component that needs it, and only lift it when you have an actual reason.

---

**`react-hook-form` — why it exists**

Form state is special. If you use `useState` for a form:
- Every keystroke → state update → component re-render
- For a 10-field form, this is 10 re-renders per second as the user types

`react-hook-form` uses **uncontrolled inputs** with refs instead of controlled state. The form values live in the DOM (the native input's value), not in React state. React only re-renders when validation errors need to be shown or on submit. This is significantly faster for forms.

**Core API:**

```tsx
import { useForm } from "react-hook-form"

interface FormData {
  name: string
  email: string
  message: string
}

function ContactForm() {
  const {
    register,      // connects an input to the form
    handleSubmit,  // wraps your submit handler with validation
    formState: { errors }, // validation errors
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data) // typed, validated data
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("name", { required: "Name is required" })}
      />
      {errors.name && <span>{errors.name.message}</span>}

      <input
        {...register("email", {
          required: "Email is required",
          pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" }
        })}
      />
      {errors.email && <span>{errors.email.message}</span>}

      <button type="submit">Send</button>
    </form>
  )
}
```

`register` spreads `{ name, ref, onChange, onBlur }` onto the input. `handleSubmit` runs validation before calling your handler. `formState.errors` contains messages you define.

### Exercise

Build a contact form with:
- Name field (required, min 2 characters)
- Email field (required, valid email format)
- Message field (required, min 10 characters)

Show inline error messages below each field. On successful submit, log the typed data. Test the validation paths: submit empty, submit invalid email, submit too-short message. Fix each error and watch it clear.

### Portfolio Application

Open `src/components/contact.tsx`. This is the form in your actual portfolio.

1. Identify how it currently handles form state (is it controlled with `useState`? uncontrolled? something else?)
2. Refactor it to use `react-hook-form` with proper validation.
3. Add meaningful validation: name required, valid email format, message minimum length.
4. Show inline error messages using your existing Radix UI / shadcn components.

Then do a **final intentional pass** through the entire portfolio:
- For each component, ask: "Where does state live? Why there? Is there a better place?"
- For each hook call, ask: "Do I understand why this hook is here and what would break if I removed it?"
- Fix anything that now feels wrong with your week of context.

---

## Reference — Hook Decision Guide

Use this when writing any new component:

| Question | Answer |
|---|---|
| I need a value that causes a re-render when it changes | `useState` |
| I need a value that persists across renders but doesn't cause re-renders | `useRef` |
| I need to access a DOM element | `useRef` |
| I need to sync with something external (DOM, timer, API, localStorage) | `useEffect` |
| I need a value available deep in the tree without prop drilling | `useContext` |
| I need to reuse stateful logic across components | custom hook |
| I have an expensive computation and the deps don't change often | `useMemo` |
| I'm passing a callback to a `React.memo` child | `useCallback` |
| I'm passing a callback and the child is NOT memoized | plain function, no `useCallback` |

## Reference — State Placement Guide

| Scenario | Solution |
|---|---|
| Only one component needs it | `useState` inside that component |
| Two siblings need the same value | Lift to common parent |
| Many unrelated components need it | `useContext` |
| Complex global state with many updaters | Zustand / Redux (not needed for this project) |
| Form data | `react-hook-form` |
| Server data (fetched) | React Query / SWR (future consideration) |
