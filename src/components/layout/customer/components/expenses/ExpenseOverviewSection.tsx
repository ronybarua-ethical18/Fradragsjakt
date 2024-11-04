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
      description: 'Taxi to Client Meeting',
      category: 'Transport',
      expenseType: 'Business',
      amount: 45.0,
    },
    {
      id: '2',
      date: '2023-01-20',
      description: 'Lunch with Team',
      category: 'Meals',
      expenseType: 'Business',
      amount: 60.0,
    },
    {
      id: '3',
      date: '2023-02-05',
      description: 'Flight for Conference',
      category: 'Travel',
      expenseType: 'Business',
      amount: 500.0,
    },
    {
      id: '4',
      date: '2023-02-12',
      description: 'Dinner with Client',
      category: 'Meals',
      expenseType: 'Personal',
      amount: 120.0,
    },
    {
      id: '5',
      date: '2023-02-20',
      description: 'Train to Workshop',
      category: 'Transport',
      expenseType: 'Don’t know',
      amount: 30.0,
    },
    {
      id: '6',
      date: '2023-03-10',
      description: 'Business Trip Hotel',
      category: 'Travel',
      expenseType: 'Business',
      amount: 300.0,
    },
    {
      id: '7',
      date: '2023-03-15',
      description: 'Daily Commute',
      category: 'Transport',
      expenseType: 'Personal',
      amount: 100.0,
    },
    {
      id: '8',
      date: '2023-04-01',
      description: 'Dinner on Vacation',
      category: 'Meals',
      expenseType: 'Personal',
      amount: 85.0,
    },
    {
      id: '9',
      date: '2023-04-05',
      description: 'Cab to Airport',
      category: 'Transport',
      expenseType: 'Don’t know',
      amount: 50.0,
    },
    {
      id: '10',
      date: '2023-04-10',
      description: 'Conference Registration',
      category: 'Travel',
      expenseType: 'Business',
      amount: 250.0,
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
