import React from 'react';
import ProtectedLayout from '../ProtectedLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ExpenseCard, { expenses } from './components/dashboard/ExpenseCard';

function CustomerDashboard() {
  return (
    <ProtectedLayout>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-5">
          <div className="grid grid-cols-12 gap-2">
            <Card className="col-span-6 p-4  border border-[#EEF0F4] shadow-none rounded-2xl">
              <CardHeader>
                <CardTitle>All Deductible Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">$30,000</div>
                <Button variant="secondary" className="mt-4">
                  This year
                </Button>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Travel</span>
                    <span>45%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Utilities</span>
                    <span>55%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card className="col-span-6 p-4  border border-[#EEF0F4] shadow-none">
              <CardHeader>
                <CardTitle>Summary</CardTitle>
                <span className="text-sm text-gray-500">
                  Please check your docs
                </span>
              </CardHeader>
              <CardContent>
                {/* Placeholder for Donut Chart */}
                <div className="h-36 w-36 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold">$41,000</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Yearly Graph */}
        <Card className="col-span-7 p-4 border border-[#EEF0F4] shadow-none">
          <CardHeader>
            <CardTitle>Yearly Graph</CardTitle>
            <span className="text-sm text-gray-500">
              Please check your docs
            </span>
          </CardHeader>
          <CardContent>
            {/* Placeholder for Graph */}
            <div className="h-36 bg-gray-100 rounded-lg"></div>
          </CardContent>
        </Card>

        {/* Expense Categories */}
        <div className="col-span-12 grid grid-cols-3 gap-2">
          {expenses.map((expense, index) => (
            <ExpenseCard key={index} expense={expense} index={index} />
          ))}
        </div>

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
    </ProtectedLayout>
  );
}

export default CustomerDashboard;
