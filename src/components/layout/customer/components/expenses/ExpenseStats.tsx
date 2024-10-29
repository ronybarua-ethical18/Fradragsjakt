'use client';

import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const ApexChart: React.FC<{ title: string }> = ({ title }) => {
  const chartOptions = {
    series: [
      {
        name: 'Inflation',
        data: [2.3, 3.1, 4.0, 4.0, 3.6, 3.2, 2.3],
      },
    ],
    options: {
      chart: {
        height: '30%',
        type: 'bar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          barHeight: '80%',
          borderRadius: 2,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
        crosshairs: {
          show: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      grid: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      title: {
        text: undefined,
      },
      colors: title === 'Business' ? ['#00B386'] : ['#F99BAB'],
    },
  } as { series: ApexAxisChartSeries; options: ApexOptions };

  return (
    <ReactApexChart
      options={chartOptions.options}
      series={chartOptions.series}
      type="bar"
      height={100}
      width={120}
    />
  );
};

export default ApexChart;
