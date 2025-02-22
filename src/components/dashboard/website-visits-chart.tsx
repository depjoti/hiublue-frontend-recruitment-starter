// src/sections/dashboard/components/website-visits-chart.tsx
'use client';

import { Card, Typography } from '@mui/material';
import ApexCharts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { Theme } from '@mui/material/styles';

interface WebsiteVisitsChartProps {
  title?: string;
}

export function WebsiteVisitsChart({ title = 'Website visits' }: WebsiteVisitsChartProps) {
  const chartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: false,
      toolbar: { show: false }
    },
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    },
    colors: ['#2065D1', '#FFB547'],
  };

  const chartSeries = [
    { name: 'Desktop', data: [30, 45, 25, 35, 40, 35, 60] },
    { name: 'Mobile', data: [25, 35, 35, 30, 20, 15, 45] }
  ];

  return (
    <Card sx={{ 
      p: 2,
      boxShadow: (theme: Theme) => theme.customShadows.card,
      borderRadius: (theme: Theme) => `${theme.shape.borderRadius * 2}px`
    }}>
      <Typography 
        variant="h6" 
        sx={{ 
          mb: 2,
          fontFamily: 'fontSecondaryFamily',
          fontWeight: 'fontWeightSemiBold'
        }}
      >
        {title}
      </Typography>
      <ApexCharts
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={350}
      />
    </Card>
  );
}