import { clx } from "@lib/util/clx"
import React from "react"

interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: "green" | "red" | "orange" | "blue" | "grey"
}

const StatusBadge = React.forwardRef<HTMLSpanElement, StatusBadgeProps>(
  ({ className, color = "grey", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={clx(
          "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          // Map colors to shadcn-like styles (could be refined with specific status tokens later)
          color === "green" && "border-transparent bg-green-500/15 text-green-700 dark:text-green-400",
          color === "red" && "border-transparent bg-destructive/15 text-destructive",
          color === "orange" && "border-transparent bg-orange-500/15 text-orange-700 dark:text-orange-400",
          color === "blue" && "border-transparent bg-blue-500/15 text-blue-700 dark:text-blue-400",
          color === "grey" && "border-transparent bg-secondary text-secondary-foreground",
          className
        )}
        {...props}
      />
    )
  }
)
StatusBadge.displayName = "StatusBadge"

export { StatusBadge }
export default StatusBadge
