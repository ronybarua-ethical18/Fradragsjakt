'use client';

import React, { useState } from 'react';
import ExpenseOverviewHeading from './ExpenseOverviewHeading';
import SharedPagination from '@/components/SharedPagination';
import { SharedDataTable } from '@/components/SharedDataTable';
import { expenseDataTableColumns } from './ExpenseDataTableColumns';
import { trpc } from '@/utils/trpc';

function ExpenseOverviewSection() {
  const { data: expensesResponse } = trpc.expenses.getExpenses.useQuery({
    page: 1,
    limit: 10,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="mt-3 rounded-xl px-4 py-6 bg-white">
      <ExpenseOverviewHeading />
      <div className="mt-10">
        <SharedDataTable
          className="h-[500px]"
          columns={expenseDataTableColumns}
          data={expensesResponse?.data || []}
        />
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
