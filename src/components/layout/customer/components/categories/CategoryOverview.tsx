import React from 'react';

import CategoryAddModal from './CategoryAddModal';
import CategoryTable from './CategoryTable';
import TableHeader from './TableHeader';
import SearchInput from '@/components/SearchInput';

export default function CategoryOverview() {
  return (
    <div className="overflow-auto bg-white p-6 rounded-2xl">
      <div className="flex justify-between items-center mb-4 py-4">
        <h2 className="text-xl font-bold">Category Overview</h2>
        <div className="flex gap-2">
          <SearchInput className={''} />

          <CategoryAddModal />
        </div>
      </div>
      <TableHeader />
      <CategoryTable />
    </div>
  );
}
