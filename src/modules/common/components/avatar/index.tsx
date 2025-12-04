import { clx } from "@lib/util/clx"
import React from "react"

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string | null
  fallback?: string
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, fallback, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clx(
          "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
          className
        )}
        {...props}
      >
        {src ? (
          <img
            src={src}
            alt={fallback}
            className="aspect-square h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground">
            {fallback}
          </div>
        )}
      </div>
    )
  }
)
Avatar.displayName = "Avatar"

export { Avatar }
export default Avatar
