'use client';
import React, { useState } from 'react';
import { SharedDataTable } from '@/components/SharedDataTable';
import SharedPagination from '@/components/SharedPagination';
import SearchInput from '@/components/SearchInput';
import { RulesDataTableColumns, Transaction } from './RulesDataTableColumns';
import { Button } from '@/components/ui/button';
import CreateRuleModal from './CreateRuleModal';
import { trpc } from '@/config/trpc/client';

const data: Transaction[] = [
  {
    id: '1',
    serialNo: 1,
    description: 'foodpanda.com Dhaka BGD card',
    expenseType: 'Private',
    category: 'Travel',
  },
  {
    id: '2',
    serialNo: 2,
    description: 'foodpanda.com Dhaka BGD card',
    expenseType: 'Public',
    category: 'Food',
  },
  {
    id: '3',
    serialNo: 3,
    description: 'foodpanda.com Dhaka BGD card',
    expenseType: 'Private',
    category: 'Clothing',
  },
  {
    id: '4',
    serialNo: 4,
    description: 'foodpanda.com Dhaka BGD card',
    expenseType: 'Private',
    category: 'Business',
  },
  {
    id: '5',
    serialNo: 5,
    description: 'foodpanda.com Dhaka BGD card',
    expenseType: 'Public',
    category: 'Utility',
  },
  {
    id: '6',
    serialNo: 6,
    description: 'foodpanda.com Dhaka BGD card',
    expenseType: 'Private',
    category: 'Service',
  },
  {
    id: '7',
    serialNo: 7,
    description: 'foodpanda.com Dhaka BGD card',
    expenseType: 'Public',
    category: 'Car',
  },
  {
    id: '8',
    serialNo: 8,
    description: 'foodpanda.com Dhaka BGD card',
    expenseType: 'Private',
    category: 'Food',
  },
];

export default function RulesOverviewSection() {
  const { data: rulesResponse } = trpc.rules.getRules.useQuery({
    page: 1,
    limit: 10,
  });

  // const rules = rulesResponse || [];
  const pagination = rulesResponse?.pagination;
  const totalPages = pagination?.totalPages || 1;

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="rounded-2xl mt-2 p-6 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl text-[#101010] font-bold">Edit Rules</h2>
        <div className="flex gap-2">
          <SearchInput className="" placeholder="Search Rules" />
          <CreateRuleModal />
          <Button className="text-white w-[124px] text-sm font-medium">
            Save
          </Button>
        </div>
      </div>
      <div className="mt-10">
        <SharedDataTable columns={RulesDataTableColumns} data={data} />
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
