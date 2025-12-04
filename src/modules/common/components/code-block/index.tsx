import { clx } from "@lib/util/clx"
import React from "react"

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  snippets: { label?: string; code: string; language?: string }[]
}

const CodeBlock = React.forwardRef<HTMLPreElement, CodeBlockProps>(
  ({ className, snippets, ...props }, ref) => {
    // Simplified implementation: just showing the first snippet
    const snippet = snippets[0]
    
    return (
      <div className={clx("relative overflow-hidden rounded-lg border bg-muted", className)}>
        {snippet.label && (
          <div className="flex items-center border-b px-4 py-2 text-xs font-medium text-muted-foreground">
            {snippet.label}
          </div>
        )}
        <div className="p-4 overflow-x-auto">
          <pre ref={ref} {...props} className="font-mono text-sm">
            <code>{snippet.code}</code>
          </pre>
        </div>
      </div>
    )
  }
)
CodeBlock.displayName = "CodeBlock"

export { CodeBlock }
export default CodeBlock
