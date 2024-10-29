// components/SummaryChart.tsx
'use client';
import React from 'react';
import Chart from 'react-apexcharts';

const SummaryChart: React.FC = () => {
  const chartOptions = {
    chart: {
      type: 'donut' as const,
    },
    labels: ['Category A', 'Category B', 'Category C', 'Category D'],
    colors: ['#6EC1E4', '#FFBE76', '#F3A4B5', '#7ED5C6'], // Adjust colors to match your design
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: true,
            total: {
              show: true,
              label: '$41,000',
              fontSize: '22px',
              fontWeight: 600,
              color: '#1F2937', // Darker text
            },
          },
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  };

  const chartSeries = [25, 25, 25, 25];

  return (
    <div className="col-span-6 space-y-6 p-6 bg-white rounded-2xl  border border-[#EEF0F4] shadow-none">
      <div className="flex flex-col h-full justify-between">
        <div>
          <h3 className="text-sm font-semibold text-[#71717A]">Summary</h3>
          <p className="text-[#71717A] text-xs ">Please check your docs</p>
        </div>
        <div className="flex justify-center">
          <Chart
            options={chartOptions}
            height={208}
            width={208}
            series={chartSeries}
            type="donut"
          />
        </div>
      </div>
    </div>
  );
};

export default SummaryChart;
