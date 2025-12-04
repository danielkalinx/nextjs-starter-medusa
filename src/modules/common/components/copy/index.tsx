import { clx } from "@lib/util/clx"
import React, { useState } from "react"
import { IconButton } from "../icon-button"

interface CopyProps extends React.HTMLAttributes<HTMLButtonElement> {
  content: string
}

const Copy = React.forwardRef<HTMLButtonElement, CopyProps>(
  ({ className, content, children, ...props }, ref) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
      navigator.clipboard.writeText(content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }

    return (
      <IconButton
        ref={ref}
        variant="transparent"
        onClick={handleCopy}
        className={clx("h-8 w-8", className)}
        {...props}
      >
        {children ? children : (copied ? "✓" : "📋")}
      </IconButton>
    )
  }
)
Copy.displayName = "Copy"

export { Copy }
export default Copy
