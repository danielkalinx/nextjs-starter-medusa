import { clx } from "@lib/util/clx"
import React from "react"

interface HintProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "info" | "error"
}

const Hint = React.forwardRef<HTMLSpanElement, HintProps>(
  ({ className, variant = "info", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={clx(
          "text-xs",
          variant === "info" && "text-muted-foreground",
          variant === "error" && "text-destructive",
          className
        )}
        {...props}
      />
    )
  }
)
Hint.displayName = "Hint"

export { Hint }
export default Hint
