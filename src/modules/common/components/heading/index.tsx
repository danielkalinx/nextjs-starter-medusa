import { clx } from "@lib/util/clx"
import React from "react"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: "h1" | "h2" | "h3" | "h4"
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = "h1", ...props }, ref) => {
    const Component = level
    return (
      <Component
        ref={ref}
        className={clx(
          "scroll-m-20 tracking-tight text-foreground",
          level === "h1" && "text-4xl font-extrabold lg:text-5xl",
          level === "h2" && "text-3xl font-semibold first:mt-0",
          level === "h3" && "text-2xl font-semibold",
          level === "h4" && "text-xl font-semibold",
          className
        )}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"

export { Heading }
