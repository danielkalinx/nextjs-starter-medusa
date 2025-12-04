import React from "react"

// Simplified I18nProvider
// In a real app, this would handle translations.
// For now, it's a pass-through to satisfy imports.

const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export { I18nProvider }
export default I18nProvider
