import { clx } from "@lib/util/clx"
import React from "react"
import { Button } from "../button"

// Simplified Prompt (Dialog) implementation

const Prompt = ({ children }: { children: React.ReactNode }) => {
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">{children}</div>
}

const PromptContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={clx(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg",
        className
      )}
      {...props}
    />
  )
)
PromptContent.displayName = "PromptContent"

const PromptHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={clx("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
)
PromptHeader.displayName = "PromptHeader"

const PromptFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={clx("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
)
PromptFooter.displayName = "PromptFooter"

const PromptTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2 ref={ref} className={clx("text-lg font-semibold text-foreground", className)} {...props} />
  )
)
PromptTitle.displayName = "PromptTitle"

const PromptDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={clx("text-sm text-muted-foreground", className)} {...props} />
  )
)
PromptDescription.displayName = "PromptDescription"

const PromptAction = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, ...props }, ref) => (
    <Button ref={ref} className={className} {...props} />
  )
)
PromptAction.displayName = "PromptAction"

const PromptCancel = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, ...props }, ref) => (
    <Button ref={ref} variant="secondary" className={clx("mt-2 sm:mt-0", className)} {...props} />
  )
)
PromptCancel.displayName = "PromptCancel"

export {
  Prompt,
  PromptContent,
  PromptHeader,
  PromptFooter,
  PromptTitle,
  PromptDescription,
  PromptAction,
  PromptCancel,
}
export default Prompt
