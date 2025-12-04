import { clx } from "@lib/util/clx"
import React from "react"

interface TooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  side?: "top" | "bottom" | "left" | "right"
}

const Tooltip = ({ content, children, side = "top" }: TooltipProps) => {
  return (
    <div className="group relative inline-block">
      {children}
      <div
        className={clx(
          "absolute z-50 hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 group-hover:block",
          side === "top" && "bottom-full left-1/2 mb-2 -translate-x-1/2",
          side === "bottom" && "top-full left-1/2 mt-2 -translate-x-1/2",
          side === "left" && "right-full top-1/2 mr-2 -translate-y-1/2",
          side === "right" && "left-full top-1/2 ml-2 -translate-y-1/2"
        )}
      >
        {content}
      </div>
    </div>
  )
}

// Provider wrapper for compatibility
const TooltipProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>

export { Tooltip, TooltipProvider }
export default Tooltip
