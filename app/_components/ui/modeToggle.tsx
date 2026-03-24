"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "./button"

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon">
        <Sun />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="group rounded-lg w-8 h-8 hover:bg-foreground/10 transition-all duration-300 "
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] text-text-main lg:text-text-sub rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 group-hover:text-text-main" />      
      <Moon className="absolute h-[1.2rem] w-[1.2rem] text-text-main lg:text-text-sub rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 group-hover:text-text-main" />
      
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
