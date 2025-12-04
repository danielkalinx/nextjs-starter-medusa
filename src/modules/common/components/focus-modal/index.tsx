import { clx } from "@lib/util/clx"
import React from "react"

// Simplified FocusModal implementation
// Similar to Drawer, this is a structural shell.

const FocusModal = ({ children }: { children: React.ReactNode }) => {
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">{children}</div>
}

const FocusModalTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button ref={ref} className={className} {...props} />
  )
)
FocusModalTrigger.displayName = "FocusModalTrigger"

const FocusModalContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
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
FocusModalContent.displayName = "FocusModalContent"

const FocusModalHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={clx("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
)
FocusModalHeader.displayName = "FocusModalHeader"

const FocusModalBody = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={clx("py-4", className)} {...props} />
)
FocusModalBody.displayName = "FocusModalBody"

export {
  FocusModal,
  FocusModalTrigger,
  FocusModalContent,
  FocusModalHeader,
  FocusModalBody,
}
export default FocusModal
