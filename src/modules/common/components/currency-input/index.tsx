import { clx } from "@lib/util/clx"
import React from "react"
import { Input, InputProps } from "../input"

interface CurrencyInputProps extends InputProps {
  symbol?: string
  code?: string
}

const CurrencyInput = React.forwardRef<HTMLInputElement, CurrencyInputProps>(
  ({ className, symbol, code, ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        {symbol && (
          <span className="absolute left-3 text-sm text-muted-foreground">
            {symbol}
          </span>
        )}
        <Input
          ref={ref}
          className={clx(
            symbol && "pl-8",
            code && "pr-12",
            "text-right", // Currency inputs often align right
            className
          )}
          {...props}
        />
        {code && (
          <span className="absolute right-3 text-sm text-muted-foreground">
            {code}
          </span>
        )}
      </div>
    )
  }
)
CurrencyInput.displayName = "CurrencyInput"

export { CurrencyInput }
export default CurrencyInput
