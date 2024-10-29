import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const DashboardOverviewSection = () => {
  return (
    <div className="grid grid-cols-12 gap-2 mt-2">
      {' '}
      {/* Total Expenses Overview */}
      <Card className="col-span-9 p-4 border border-[#EEF0F4] shadow-none">
        <CardHeader>
          <CardTitle>Total Expenses Overview</CardTitle>
          <span className="text-sm text-gray-500">+2% in August</span>
        </CardHeader>
        <CardContent>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Expense Description</th>
                <th className="px-4 py-2">Expense Type</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(4)].map((_, i) => (
                <tr key={i} className="border-t">
                  <td className="px-4 py-2">8/30/24</td>
                  <td className="px-4 py-2">Chase</td>
                  <td className="px-4 py-2">Private</td>
                  <td className="px-4 py-2">Deductible</td>
                  <td className="px-4 py-2">Clothing</td>
                  <td className="px-4 py-2">$100</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
      {/* Overview */}
      <Card className="col-span-3 p-4 border border-[#EEF0F4] shadow-none">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <Button variant="secondary" size="sm" className="mt-2">
            This month
          </Button>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>
              <div>14 Aug</div>
              <div>Travel spendings</div>
              <div className="text-sm text-gray-500">Tax paid</div>
            </li>
            <li>
              <div>14 Aug</div>
              <div>Utilities</div>
              <div className="text-sm text-gray-500">Tax paid</div>
            </li>
            {/* More items */}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverviewSection;
