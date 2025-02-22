// src/sections/dashboard/components/offers-sent-chart.tsx
'use client';

import { Card, Typography } from '@mui/material';
import ApexCharts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { Theme } from '@mui/material/styles';

interface OffersSentChartProps {
  title?: string;
}

export function OffersSentChart({ title = 'Offers sent' }: OffersSentChartProps) {
  const chartOptions: ApexOptions = {
    chart: {
      type: 'line',
      height: 350,
      toolbar: { show: false }
    },
    stroke: { curve: 'smooth' },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
  };

  const chartSeries = [
    { name: 'Offers', data: [10, 41, 35, 51, 49, 62, 69, 91, 148] }
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
        type="line"
        height={350}
      />
    </Card>
  );
}