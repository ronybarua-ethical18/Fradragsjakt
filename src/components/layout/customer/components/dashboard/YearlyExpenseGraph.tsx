// Graph.tsx
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { ApexOptions } from 'apexcharts'; // Import ApexOptions type

// Dynamically import ApexChart without SSR
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const YearlyExpenseGraph = () => {
  const [showPersonal, setShowPersonal] = useState(true);

  // Graph Options and Data
  const personalOptions: ApexOptions = {
    chart: { id: 'personal-expense', toolbar: { show: false } },
    stroke: { curve: 'smooth', colors: ['#FF6666'], width: 3 },
    xaxis: {
      categories: [
        'July',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
      ],
    },
    yaxis: { labels: { formatter: (val: number) => `$${val}k` } },
  };

  const businessOptions: ApexOptions = {
    chart: { id: 'business-expense', toolbar: { show: false } },
    stroke: { curve: 'smooth', colors: ['#6A5ACD'], width: 3 },
    xaxis: {
      categories: [
        'July',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
      ],
    },
    yaxis: { labels: { formatter: (val: number) => `$${val}k` } },
  };

  const personalSeries = [
    {
      name: 'Personal Expense',
      data: [10, 20, 15, 25, 22, 20, 30, 35, 25, 28, 22, 20],
    },
  ];
  const businessSeries = [
    {
      name: 'Business Expense',
      data: [15, 10, 20, 18, 35, 25, 30, 40, 42, 35, 40, 35],
    },
  ];

  return (
    <div className="px-4 pt-4 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold">Yearly Graph</h2>
          <p className="text-gray-500">Please check your docs</p>
        </div>
        <div className=" gap-2">
          <button
            onClick={() => setShowPersonal(true)}
            className={`p-2 rounded ${showPersonal ? 'bg-indigo-500 text-white' : 'bg-gray-100'}`}
          >
            <span className="material-icons">person</span>
          </button>
          <button
            onClick={() => setShowPersonal(false)}
            className={`p-2 rounded ${!showPersonal ? 'bg-indigo-500 text-white' : 'bg-gray-100'}`}
          >
            <span className="material-icons">handshake</span>
          </button>
        </div>
      </div>

      <ApexChart
        options={showPersonal ? personalOptions : businessOptions}
        series={showPersonal ? personalSeries : businessSeries}
        type="line"
        height={231}
      />
    </div>
  );
};

export default YearlyExpenseGraph;
