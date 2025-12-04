import { clx } from "@lib/util/clx"
import React from "react"

// Simplified Accordion implementation

const ProgressAccordion = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full space-y-2">{children}</div>
}

const ProgressAccordionItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={clx("border-b", className)} {...props} />
  )
)
ProgressAccordionItem.displayName = "ProgressAccordionItem"

const ProgressAccordionTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => (
    <div className="flex">
      <button
        ref={ref}
        className={clx(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 shrink-0 transition-transform duration-200"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </div>
  )
)
ProgressAccordionTrigger.displayName = "ProgressAccordionTrigger"

const ProgressAccordionContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={clx(
        "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
      )}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </div>
  )
)
ProgressAccordionContent.displayName = "ProgressAccordionContent"

const ProgressAccordionHeader = ({ children }: { children: React.ReactNode }) => <>{children}</>

export {
  ProgressAccordion,
  ProgressAccordionItem,
  ProgressAccordionTrigger,
  ProgressAccordionContent,
  ProgressAccordionHeader,
}
export default ProgressAccordion
