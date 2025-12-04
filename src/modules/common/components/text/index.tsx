import { clx } from "@lib/util/clx"
import React from "react"

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "small" | "base" | "large" | "xlarge"
  variant?: "regular" | "muted"
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size = "base", variant = "regular", ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={clx(
          "leading-7",
          size === "small" && "text-sm",
          size === "base" && "text-base",
          size === "large" && "text-lg",
          size === "xlarge" && "text-xl",
          variant === "regular" && "text-foreground",
          variant === "muted" && "text-muted-foreground",
          className
        )}
        {...props}
      />
    )
  }
)
Text.displayName = "Text"

export { Text }
