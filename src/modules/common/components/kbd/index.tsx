import { clx } from "@lib/util/clx"
import React from "react"

const Kbd = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <kbd
        ref={ref}
        className={clx(
          "pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100",
          className
        )}
        {...props}
      />
    )
  }
)
Kbd.displayName = "Kbd"

export { Kbd }
export default Kbd
