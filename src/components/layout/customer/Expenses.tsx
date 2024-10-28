import React from 'react';

import ProtectedLayout from '../ProtectedLayout';
import ExpenseTopSection from './components/expenses/ExpenseTopSection';
import ExpenseOverviewSection from './components/expenses/ExpenseOverviewSection';

const CustomerExpenses: React.FC = () => {
  return (
    <ProtectedLayout>
      <ExpenseTopSection />
      <ExpenseOverviewSection />
    </ProtectedLayout>
  );
};

export default CustomerExpenses;
