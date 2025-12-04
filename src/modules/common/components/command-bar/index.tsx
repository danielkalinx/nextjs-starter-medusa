import { clx } from "@lib/util/clx"
import React from "react"
import { Command } from "../command"

// Simplified CommandBar
// Just an alias or wrapper around Command for now.

const CommandBar = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Command>>(
  ({ className, ...props }, ref) => {
    return (
      <div className="fixed bottom-4 left-1/2 w-full max-w-xl -translate-x-1/2 px-4">
        <Command
          ref={ref}
          className={clx(
            "border shadow-lg",
            className
          )}
          {...props}
        />
      </div>
    )
  }
)
CommandBar.displayName = "CommandBar"

// Helper subcomponents that might be expected by Medusa
const CommandBarTrigger = ({ children }: { children: React.ReactNode }) => <>{children}</>
const CommandBarValue = ({ children }: { children: React.ReactNode }) => <>{children}</>
const CommandBarSeperator = ({ children }: { children: React.ReactNode }) => <>{children}</>
const CommandBarCommand = ({ children }: { children: React.ReactNode }) => <>{children}</>

export { CommandBar, CommandBarTrigger, CommandBarValue, CommandBarSeperator, CommandBarCommand }
export default CommandBar
