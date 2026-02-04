import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  }

  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-lg bg-primary/10 overflow-hidden",
        sizeClasses[size],
        className,
      )}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="p-1"
      >
        <rect
          x="10"
          y="10"
          width="20"
          height="20"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          className="text-primary"
        />
        <path
          d="M15 10V5M25 10V5M20 10V2M10 15H5M10 25H5M10 20H2M25 30V35M15 30V35M20 30V38M30 25H35M30 15H35M30 20H38"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-primary"
        />
        <circle cx="20" cy="20" r="3" fill="currentColor" className="text-primary" />
      </svg>
    </div>
  )
}
