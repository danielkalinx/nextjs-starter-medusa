import { clx } from "@lib/util/clx"
import React from "react"

const Divider = React.forwardRef<HTMLHRElement, React.HTMLAttributes<HTMLHRElement>>(
  ({ className, ...props }, ref) => {
    return (
      <hr
        ref={ref}
        className={clx("shrink-0 border-border", className)}
        {...props}
      />
    )
  }
)
Divider.displayName = "Divider"

export { Divider }
export default Divider
