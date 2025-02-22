// src/app/(auth)/layout.tsx
"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { Box } from "@mui/material"
import { Theme } from "@mui/material/styles"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard")
    }
  }, [isAuthenticated, router])

  return (
    <Box
      sx={{
        height: 1,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: (theme: Theme) =>
          theme.palette.mode === "light"
            ? "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))"
            : "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
        padding: (theme: Theme) => ({
          xs: theme.spacing(2),
          sm: theme.spacing(4),
        }),
      }}
    >
      {children}
    </Box>
  )
}
