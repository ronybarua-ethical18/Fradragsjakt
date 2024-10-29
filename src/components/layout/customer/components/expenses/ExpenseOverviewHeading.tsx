import SearchInput from '@/components/SearchInput';
import { Button } from '@/components/ui/button';
import React from 'react';
import { IoMdAdd } from 'react-icons/io';

const buttons = [
  { text: 'Filter By', icon: <IoMdAdd className="font-bold mr-2" /> },
  { text: 'Rule', icon: <IoMdAdd className="font-bold mr-2" /> },
  { text: 'Show Write-offs', icon: <IoMdAdd className="font-bold mr-2" /> },
];

function ExpenseOverviewHeading() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h1 className="text-xl font-semibold">Total Expenses Overview</h1>
        <h2 className="text-sm text-gray-600 font-light mb-0">
          <strong className="text-[#00B386] font-semibold">+2%</strong> in
          August
        </h2>
        <div className="mt-5">
          <Button variant="purple">
            <IoMdAdd className="font-bold mr-2" /> Add Expense
          </Button>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex flex-col justify-end">
          <div className="flex justify-end">
            <SearchInput className="hidden md:block" />
          </div>
          <div className="mt-5 flex space-x-2">
            {buttons.map((button, index) => (
              <Button key={index} variant="purple">
                {button.icon} {button.text}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseOverviewHeading;
