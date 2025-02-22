// // src/sections/dashboard/components/stats-card.tsx
'use client';

import { Card, Box, Typography, Stack } from '@mui/material';
import { Theme } from '@mui/material/styles';

interface StatsCardProps {
  title: string;
  value: string | number;
  change: string;
}

export function StatsCard({ title, value, change }: StatsCardProps) {
  return (
    <Card sx={{ p: 2 }}>
      <Stack spacing={1}>
        {/* Title with secondary text color */}
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {title}
        </Typography>

        {/* Main value display */}
        <Typography variant="h4" sx={{ fontFamily: 'fontSecondaryFamily' }}>
          {value}
        </Typography>

        {/* Change indicator with theme colors */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              px: 0.75,
              py: 0.25,
              borderRadius: 1,
              bgcolor: 'success.lighter',
              color: 'success.main',
              display: 'flex',
              alignItems: 'center',
              mr: 1,
            }}
          >
            <Typography variant="caption" sx={{ fontWeight: 'fontWeightSemiBold' }}>
              {change}
            </Typography>
          </Box>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            previous month
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
}