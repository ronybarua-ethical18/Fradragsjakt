'use client';

import React, { useState } from 'react';
import ExpenseOverviewHeading from './ExpenseOverviewHeading';
import SharedPagination from '@/components/SharedPagination';
import { SharedDataTable } from '@/components/SharedDataTable';
import {
  ExpenseColumnProps,
  expenseDataTableColumns,
} from './ExpenseDataTableColumns';

function ExpenseOverviewSection() {
  const expenseData: ExpenseColumnProps[] = [
    {
      id: '1',
      date: '2023-01-15',
      description: 'Office Supplies',
      category: 'Supplies',
      expenseType: 'Office',
      amount: 150.0,
    },
    {
      id: '2',
      date: '2023-01-20',
      description: 'Team Lunch',
      category: 'Food',
      expenseType: 'Entertainment',
      amount: 250.0,
    },
    {
      id: '3',
      date: '2023-02-05',
      description: 'Travel to Client',
      category: 'Travel',
      expenseType: 'Business',
      amount: 300.0,
    },
    {
      id: '4',
      date: '2023-02-12',
      description: 'Software Subscription',
      category: 'Subscriptions',
      expenseType: 'Technology',
      amount: 100.0,
    },
    {
      id: '5',
      date: '2023-02-20',
      description: 'Utilities',
      category: 'Office',
      expenseType: 'Bills',
      amount: 120.0,
    },
    {
      id: '6',
      date: '2023-03-10',
      description: 'Marketing Campaign',
      category: 'Marketing',
      expenseType: 'Advertising',
      amount: 450.0,
    },
    {
      id: '7',
      date: '2023-03-15',
      description: 'Office Rent',
      category: 'Rent',
      expenseType: 'Office',
      amount: 1200.0,
    },
    {
      id: '8',
      date: '2023-04-01',
      description: 'Internet Bill',
      category: 'Utilities',
      expenseType: 'Bills',
      amount: 75.0,
    },
    {
      id: '9',
      date: '2023-04-05',
      description: 'Client Meeting Refreshments',
      category: 'Food',
      expenseType: 'Entertainment',
      amount: 90.0,
    },
    {
      id: '10',
      date: '2023-04-10',
      description: 'Equipment Purchase',
      category: 'Equipment',
      expenseType: 'Office',
      amount: 600.0,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // For example, total pages might be 10

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Additional logic for fetching data based on the page can be added here
  };
  return (
    <div className="mt-3 rounded-xl px-4 py-6 bg-white">
      <ExpenseOverviewHeading />
      <div className="mt-10">
        <SharedDataTable columns={expenseDataTableColumns} data={expenseData} />
        <div className="mt-10">
          <SharedPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default ExpenseOverviewSection;
