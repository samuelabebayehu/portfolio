import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/theme-provider"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 block dark:hidden" />
      <Moon className="h-[1.2rem] w-[1.2rem] hidden dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
