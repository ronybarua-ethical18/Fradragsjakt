'use client';

import React, { useState } from 'react';
import ExpenseOverviewHeading from './ExpenseOverviewHeading';
import SharedPagination from '@/components/SharedPagination';
import { SharedDataTable } from '@/components/SharedDataTable';
import { expenseDataTableColumns } from './ExpenseDataTableColumns';

function ExpenseOverviewSection() {
  const data = [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '728ed521',
      amount: 200,
      status: 'success',
      email: 'a@example.com',
    },
    {
      id: '728ed522',
      amount: 100,
      status: 'pending',
      email: 'b@example.com',
    },
    {
      id: '728ed523',
      amount: 10,
      status: 'failed',
      email: 'c@example.com',
    },
    {
      id: '728ed525',
      amount: 250,
      status: 'pending',
      email: 'd@example.com',
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
        <SharedDataTable columns={expenseDataTableColumns} data={data} />
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
