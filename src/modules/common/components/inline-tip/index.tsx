import { clx } from "@lib/util/clx"
import React from "react"

interface InlineTipProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "info" | "warning" | "error" | "success"
}

const InlineTip = React.forwardRef<HTMLDivElement, InlineTipProps>(
  ({ className, variant = "info", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clx(
          "flex items-center gap-2 rounded-md border px-3 py-2 text-sm",
          variant === "info" && "border-border bg-muted/50 text-foreground",
          variant === "warning" && "border-orange-500/20 bg-orange-500/10 text-orange-600 dark:text-orange-400",
          variant === "error" && "border-destructive/20 bg-destructive/10 text-destructive",
          variant === "success" && "border-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400",
          className
        )}
        {...props}
      />
    )
  }
)
InlineTip.displayName = "InlineTip"

export { InlineTip }
export default InlineTip
