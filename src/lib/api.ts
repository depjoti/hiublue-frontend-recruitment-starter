interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

export async function apiClient<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const baseUrl = "https://dummy-1.hiublue.com/api"

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  }

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      ...options,
      headers,
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || "Invalid credentials")
    }

    return {
      data,
      success: true,
    }
  } catch (error) {
    return {
      data: null as T,
      success: false,
      message: error instanceof Error ? error.message : "An error occurred",
    }
  }
}
