'use client';
import { Card } from '@/components/ui/card';
import React from 'react';
import ExpenseCard, { expenses } from './ExpenseCard';
import DeductiveExpenses from './DeductiveExpenses';
import SummaryChart from './SummaryChart';
import YearlyExpenseGraph from './YearlyExpenseGraph';

const DashboardSummarySection = () => {
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-5">
        <div className="grid grid-cols-12 gap-2">
          <DeductiveExpenses />
          <SummaryChart />
        </div>
      </div>

      {/* Yearly Graph */}
      <Card className="col-span-7 border border-[#EEF0F4] shadow-none">
        <YearlyExpenseGraph />
      </Card>

      {/* Expense Categories */}
      <div className="col-span-12 grid grid-cols-3 gap-2">
        {expenses.map((expense, index) => (
          <ExpenseCard key={index} expense={expense} index={index} />
        ))}
      </div>
    </div>
  );
};

export default DashboardSummarySection;
