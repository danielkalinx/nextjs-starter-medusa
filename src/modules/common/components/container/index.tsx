import { clx } from "@lib/util/clx"
import React from "react"

const Container = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clx(
          "rounded-lg border border-border bg-card text-card-foreground shadow-sm",
          className
        )}
        {...props}
      />
    )
  }
)
Container.displayName = "Container"

export { Container }
