'use client';
import React, { useState } from 'react';
import { SharedDataTable } from '@/components/SharedDataTable';
import { CategoryTableColumns } from './CategoryTableColumns';
import SharedPagination from '@/components/SharedPagination';
import SearchInput from '@/components/SearchInput';
import CategoryAddModal from './CategoryAddModal';
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
export default function CategoryTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="rounded-2xl mt-2 p-6 bg-white">
      <div className="flex justify-between items-center mb-4  ">
        <h2 className="text-xl font-bold">Category Overview</h2>
        <div className="flex gap-2">
          <SearchInput className="" />
          <CategoryAddModal />
        </div>
      </div>
      <div className="mt-10">
        <SharedDataTable columns={CategoryTableColumns} data={data} />
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
