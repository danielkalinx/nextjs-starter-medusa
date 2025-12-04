import { clx } from "@lib/util/clx"
import React from "react"

interface DatePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {}

const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type="date"
          ref={ref}
          className={clx(
            "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-foreground",
            // Native date picker styling overrides for dark mode consistency
            "[&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert",
            className
          )}
          {...props}
        />
      </div>
    )
  }
)
DatePicker.displayName = "DatePicker"

// Calendar component as a simple wrapper or alias if needed separately
const Calendar = DatePicker

export { DatePicker, Calendar }
export default DatePicker
