// src/services/auth.ts
import { apiClient } from "@/lib/api"

interface LoginCredentials {
  email: string
  password: string
}

interface LoginResponse {
  user: {
    id: number
    name: string
    email: string
  }
  token: string
}

export const authService = {
  async login(credentials: { email: string; password: string }) {
    try {
      const response = await fetch("https://dummy-1.hiublue.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      })

      if (!response.ok) throw new Error("Login failed")

      const data = await response.json()
      return { success: true, data }
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : "Login failed",
      }
    }
  },
}
