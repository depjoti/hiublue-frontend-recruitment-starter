"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material"
import {
  Menu,
  Dashboard,
  People,
  ChevronLeft,
  AccountCircle,
} from "@mui/icons-material"
import { usePathname } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import Link from "next/link"

const drawerWidth = 240

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const isMobile = useMediaQuery("(max-width: 900px)")
  const { logout, user } = useAuth()

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)
  // In your dashboard layout component
  const handleProfileClick = () => {
    // Clear auth token if needed
    document.cookie =
      "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    router.push("/login")
  }

  const navItems = [
    { text: "Dashboard", icon: <Dashboard />, path: "/dashboard" },
    { text: "Onboarding", icon: <People />, path: "/onboarding" },
  ]

  const drawer = (
    <div>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6">HB Overview</Typography>
        {!isMobile && (
          <IconButton onClick={handleDrawerToggle}>
            <ChevronLeft />
          </IconButton>
        )}
      </Toolbar>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              href={item.path}
              selected={pathname === item.path}
              sx={{
                "&.Mui-selected": {
                  bgcolor: (theme) => theme.palette.action.selected,
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          boxShadow: (theme) => theme.customShadows.primary,
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {navItems.find((item) => item.path === pathname)?.text ||
              "HB Dashboard"}
          </Typography>
          {/* <IconButton onClick={handleProfileClick} sx={{ p: 0 }}>
            <Avatar sx={{ bgcolor: (theme) => theme.palette.primary.main }}>
              <AccountCircle />
            </Avatar>
          </IconButton> */}
          <IconButton onClick={logout} sx={{ p: 0 }}>
            <Avatar>{user?.name?.[0] || <AccountCircle />}</Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxShadow: (theme) => theme.customShadows.card,
          },
        }}
      >
        {drawer}
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          mt: "64px",
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
