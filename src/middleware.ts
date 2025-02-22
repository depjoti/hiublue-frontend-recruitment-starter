// // src/middleware.ts
// import { NextResponse } from "next/server"
// import type { NextRequest } from "next/server"

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get("auth-token")
//   const { pathname } = request.nextUrl

//   if (!token && !pathname.startsWith("/login")) {
//     return NextResponse.redirect(new URL("/login", request.url))
//   }

//   if (token && pathname.startsWith("/login")) {
//     return NextResponse.redirect(new URL("/dashboard", request.url))
//   }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// }
// src/middleware.ts
// import { NextResponse } from "next/server"
// import type { NextRequest } from "next/server"

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get("token")
//   const { pathname } = request.nextUrl

//   const isAuthPage = pathname.startsWith("/login")
//   const isProtectedRoute = !pathname.startsWith("/api") && !isAuthPage

//   if (!token && isProtectedRoute) {
//     return NextResponse.redirect(new URL("/login", request.url))
//   }

//   if (token && isAuthPage) {
//     return NextResponse.redirect(new URL("/dashboard", request.url))
//   }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// }
// src/middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isAuthRoute = pathname.startsWith("/login")
  const isPublicRoute = pathname === "/"

  // Get token from cookies
  const authToken = request.cookies.get("token")?.value

  // If no token and trying to access protected route
  if (!authToken && !isAuthRoute && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // If has token and trying to access auth route
  if (authToken && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
