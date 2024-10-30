'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ExpenseStatsByType from './ExpenseStatsByType';
import { expenseType } from '@/utils/dummy';
import ExpenseType from './ExpenseType';
import PlusIcon from '../../../../../../public/images/expenses/plus.png';
import ExpenseModal from './ExpenseModal';
import ExpenseUploadFile from './ExpenseUploadFile';

function ExpenseTopSection() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="grid grid-cols-2 gap-3">
        <ExpenseStatsByType
          type="Business"
          amount={'30,000'}
          month="August"
          percentage={2}
        />
        <ExpenseStatsByType
          type="Personal"
          amount={'30,000'}
          month="August"
          percentage={2}
        />
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {expenseType.map((expense) => (
            <ExpenseType
              key={expense.id}
              imageSrc={expense.imageSrc}
              amount={expense.amount}
              type={expense.type}
              quantity={expense.quantity}
            />
          ))}
          <div
            className="text-white flex items-center justify-center bg-[#5B52F9] p-4 rounded-xl font-bold cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            <Image src={PlusIcon} alt="Plus icon" className="mr-3" /> More
          </div>
        </div>
      </div>
      <div className="bg-white z-50">
        <ExpenseModal
          open={isModalOpen}
          onOpenChange={setModalOpen}
          customClassName="max-w-[500px]"
        >
          <div className="bg-white">
            <h1 className="font-bold text-xl text-[#5B52F9] mb-4">
              Upload receipt as attachment
            </h1>
            <ExpenseUploadFile />
          </div>
        </ExpenseModal>
      </div>
    </div>
  );
}

export default ExpenseTopSection;
