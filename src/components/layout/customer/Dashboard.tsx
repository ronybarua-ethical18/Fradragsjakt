import React from 'react';
import ProtectedLayout from '../ProtectedLayout';
import DashboardOverviewSection from './components/dashboard/DashboardOverviewSection';
import DashboardSummarySection from './components/dashboard/DashboardSummarySection';

const CustomerDashboard: React.FC = () => {
  return (
    <ProtectedLayout>
      <DashboardSummarySection />
      <DashboardOverviewSection />
    </ProtectedLayout>
  );
};

export default CustomerDashboard;
