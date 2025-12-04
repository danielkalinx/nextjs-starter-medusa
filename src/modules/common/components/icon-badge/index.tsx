import { clx } from "@lib/util/clx"
import React from "react"

interface IconBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: "base" | "large"
}

const IconBadge = React.forwardRef<HTMLSpanElement, IconBadgeProps>(
  ({ className, size = "base", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={clx(
          "flex items-center justify-center rounded-md border border-border bg-muted text-muted-foreground",
          size === "base" && "h-6 w-6",
          size === "large" && "h-8 w-8",
          className
        )}
        {...props}
      />
    )
  }
)
IconBadge.displayName = "IconBadge"

export { IconBadge }
export default IconBadge
