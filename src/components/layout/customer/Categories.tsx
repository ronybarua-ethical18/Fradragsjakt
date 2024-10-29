import React from 'react';
import ProtectedLayout from '../ProtectedLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import CategoryCard from './components/categories/CategoryCard';

// Sample categories array
const categories = [
  { label: 'Supplies', amount: 35, image: '/Supplies.svg' },
  { label: 'Clothing', amount: 15, image: '/Clothing.png' },
  { label: 'Travel', amount: 20, image: '/Travel.png' },
  { label: 'Transport', amount: 25, image: '/Transport.png' },
  { label: 'Gas', amount: 40, image: '/Gas.png' },
  { label: 'Meals', amount: 30, image: '/Meals.png' },
  { label: 'Insurance', amount: 40, image: '/Insurance.png' },
  { label: 'Payment', amount: 25, image: '/Payment.png' },
  { label: 'More (25)', amount: '$500', image: '/More.png' },
];

export default function CustomerCategories() {
  return (
    <ProtectedLayout>
      <div className="container mx-auto">
        {/* Supplies and Summary Cards */}
        <div className="grid grid-cols-5 gap-2 mb-8">
          {categories.map((category, index) => (
            <CategoryCard category={category} key={index} index={index} />
          ))}
        </div>

        {/* Category Overview */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Category Overview</h2>
          <div className="flex gap-2">
            <Input
              type="select"
              placeholder="Search category"
              className="w-48"
            />
            <Button className="bg-blue-500 text-white">+ Add Category</Button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left bg-gray-100">
                <th className="px-4 py-2">Serial No.</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Created By</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{index + 1}</td>{' '}
                  {/* Displaying serial number */}
                  <td className="px-4 py-2">{item.label}</td>
                  <td className="px-4 py-2">USER</td>
                  <td className="px-4 py-2">
                    <Button variant="link">Edit</Button>
                    <Button variant="link" className="ml-2 text-red-500">
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-4">
          <Button variant="link" className="mr-4">
            Previous
          </Button>
          <span>1</span>
          <Button variant="link" className="ml-4">
            Next
          </Button>
        </div>
      </div>
    </ProtectedLayout>
  );
}
