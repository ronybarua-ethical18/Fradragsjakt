import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import ExpenseStatsByType from './ExpenseStatsByType';
import { expenseType } from '@/utils/dummy';
import ExpenseType from './ExpenseType';

function ExpenseTopSection() {
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
          <div className="text-white flex items-center justify-center bg-[#5B52F9] p-4 rounded-xl font-bold">
            <IoMdAdd className="font-bold mr-2" /> More
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseTopSection;
