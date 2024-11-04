import React from 'react';
import MonthlyOverview from './MonthlyOverview';
import YearlyExpenseTable from './YearlyExpenseTable';

const DashboardOverviewSection = () => {
  return (
    <div className="grid grid-cols-12 gap-2 mt-2">
      <YearlyExpenseTable />
      <MonthlyOverview />
    </div>
  );
};

export default DashboardOverviewSection;
