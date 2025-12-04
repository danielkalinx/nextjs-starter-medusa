import { clx } from "@lib/util/clx"
import React from "react"

// Simplified Drawer/Sheet implementation
// For a real app, use a portal and state management.
// This is a placeholder structure to allow compilation and basic styling if implemented with state.

const Drawer = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative z-50">{children}</div>
}

const DrawerTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button ref={ref} className={className} {...props} />
  )
)
DrawerTrigger.displayName = "DrawerTrigger"

const DrawerContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={clx(
        "fixed inset-y-0 right-0 z-50 h-full w-3/4 border-l border-border bg-background p-6 shadow-lg transition-transform sm:max-w-sm",
        className
      )}
      {...props}
    />
  )
)
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={clx("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={clx("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2 ref={ref} className={clx("text-lg font-semibold text-foreground", className)} {...props} />
  )
)
DrawerTitle.displayName = "DrawerTitle"

const DrawerDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={clx("text-sm text-muted-foreground", className)} {...props} />
  )
)
DrawerDescription.displayName = "DrawerDescription"

export {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
export default Drawer
