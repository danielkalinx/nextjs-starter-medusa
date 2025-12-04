import { clx } from "@lib/util/clx"
import React from "react"

const Code = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <code
        ref={ref}
        className={clx(
          "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-muted-foreground",
          className
        )}
        {...props}
      />
    )
  }
)
Code.displayName = "Code"

export { Code }
