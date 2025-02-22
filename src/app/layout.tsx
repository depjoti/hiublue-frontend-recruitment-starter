import * as React from "react"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"
import CssBaseline from "@mui/material/CssBaseline"
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript"
import ThemeProvider from "@/theme/index"
import { AuthProvider } from "@/contexts/auth-context"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AuthProvider>
          <InitColorSchemeScript attribute="class" />
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
