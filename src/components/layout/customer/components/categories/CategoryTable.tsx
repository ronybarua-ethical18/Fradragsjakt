'use client';
import React, { useState } from 'react';
import { SharedDataTable } from '@/components/SharedDataTable';
import { Category, CategoryTableColumns } from './CategoryTableColumns';
import SharedPagination from '@/components/SharedPagination';
import SearchInput from '@/components/SearchInput';
import CategoryAddModal from './CategoryAddModal';
const data: Category[] = [
  { id: '1', serialNo: 1, name: 'Transport', createdBy: 'USER' },
  { id: '2', serialNo: 2, name: 'Car', createdBy: 'SYSTEM' },
  { id: '3', serialNo: 3, name: 'Gas', createdBy: 'USER' },
  { id: '4', serialNo: 4, name: 'Stationary', createdBy: 'USER' },
  { id: '5', serialNo: 5, name: 'Air ticket', createdBy: 'SYSTEM' },
  { id: '6', serialNo: 6, name: 'Meals', createdBy: 'SYSTEM' },
  { id: '7', serialNo: 7, name: 'Insurance', createdBy: 'USER' },
  { id: '8', serialNo: 8, name: 'Travel', createdBy: 'SYSTEM' },
  { id: '9', serialNo: 9, name: 'Clothing', createdBy: 'USER' },
  { id: '10', serialNo: 10, name: 'Payment', createdBy: 'SYSTEM' },
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
        <h2 className="text-xl text-[#101010] font-bold">Category Overview</h2>
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
