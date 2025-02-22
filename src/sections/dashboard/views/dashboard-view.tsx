"use client"

import { useState } from "react"
import {
  Card,
  Box,
  Typography,
  Stack,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material"

// Import your components with proper typing
import { StatsCard } from "@/components/dashboard/stats-card"
import { WebsiteVisitsChart } from "@/components/dashboard/website-visits-chart"
import { OffersSentChart } from "@/components/dashboard/offers-sent-chart"
import OfferList from "@/components/dashboard/offer-list"

export default function DashboardView() {
  const [timeRange, setTimeRange] = useState<string>("This Week")

  const handleTimeRangeChange = (event: SelectChangeEvent<string>) => {
    setTimeRange(event.target.value)
  }

  return (
    <Box sx={{ p: 3 }}>
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 3,
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1">
          Dashboard
        </Typography>

        <Select
          value={timeRange}
          onChange={handleTimeRangeChange}
          size="small"
          sx={{ minWidth: 120 }}
        >
          <MenuItem value="This Week">This Week</MenuItem>
          <MenuItem value="Last Week">Last Week</MenuItem>
          <MenuItem value="Last Month">Last Month</MenuItem>
        </Select>
      </Box>

      {/* Statistics Cards Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 3,
          mb: 3,
        }}
      >
        <StatsCard title="Total active users" value="8.2k" change="+8.2%" />
        <StatsCard title="Total clicks" value="8.2k" change="+8.2%" />
        <StatsCard title="Total appearances" value="8.2k" change="-2.4%" />
      </Box>

      {/* Charts Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "repeat(2, 1fr)" },
          gap: 3,
          mb: 3,
        }}
      >
        <WebsiteVisitsChart />
        <OffersSentChart />
      </Box>

      {/* Offer List Table */}
      <OfferList />
    </Box>
  )
}
