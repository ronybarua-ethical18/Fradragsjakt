'use client';
import React from 'react';
import Chart from 'react-apexcharts';

interface ApexChartProps {
  series?: number[];
  label?: string;
  height?: number;
  hollowSize?: string;
}

const CircularProgressChart: React.FC<ApexChartProps> = ({
  series = [70],
  height = 80,
}) => {
  const options = {
    chart: {
      height,
      type: 'radialBar' as const,
    },
    colors: ['#00B386'],
    plotOptions: {
      radialBar: {
        hollow: {
          size: '40%', // Inner circle size
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: true,
            formatter: (val: number) => `${val}%`,
            fontSize: '10px',
            fontWeight: 'bold',
            color: '#101010',
            offsetY: 4,
          },
        },
      },
    },
  };

  return (
    <div id="chart" className="border border-red-800">
      <Chart
        options={{ ...options }}
        series={series}
        type="radialBar"
        height={height}
        width={height}
      />
    </div>
  );
};

export default CircularProgressChart;
