// src/app/(dashboard)/page.tsx
import DashboardView from "@/sections/dashboard/views/dashboard-view"

export const metadata = {
  title: "Dashboard", // Fixed typo in title
}

export default function Page() {
  return <DashboardView />
}
