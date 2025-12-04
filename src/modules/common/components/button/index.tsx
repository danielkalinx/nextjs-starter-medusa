import { Button as MedusaButton } from "@medusajs/ui"
import { forwardRef } from "react"
import { clx } from "@lib/util/clx"

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary" | "transparent" | "danger"
  size?: "small" | "base" | "large" | "xlarge"
  isLoading?: boolean
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <MedusaButton
        ref={ref}
        variant={variant}
        className={clx(
          variant === "primary" && "bg-primary text-primary-foreground hover:bg-primary/90",
          variant === "secondary" && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          variant === "transparent" && "hover:bg-accent hover:text-accent-foreground",
          variant === "danger" && "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          className
        )}
        {...props as any}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }
export default Button
