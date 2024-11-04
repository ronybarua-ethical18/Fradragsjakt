'use client';
import React, { useState } from 'react';
import { SharedDataTable } from '@/components/SharedDataTable';
import { Category, CategoryTableColumns } from './CategoryTableColumns';
import SharedPagination from '@/components/SharedPagination';
import SearchInput from '@/components/SearchInput';
import { Button } from '@/components/ui/button';
import CategoryAddModal from './CategoryAddModal';
import { trpc } from '@/utils/trpc';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
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
export type FormData = {
  name: string;
};
export default function CategoryTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { handleSubmit, control, reset } = useForm<FormData>();

  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const mutation = trpc.categories.createCategory.useMutation({
    onSuccess: () => {
      toast.success('Category created successfully!', {
        duration: 4000,
      });
      reset();
      setLoading(false);
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to create category');
      setLoading(false);
    },
  });

  const onSubmit = (data: FormData) => {
    setLoading(true);
    mutation.mutate(data);
  };
  return (
    <div className="rounded-2xl mt-2 p-6 bg-white">
      <div className="flex justify-between items-center mb-4  ">
        <h2 className="text-xl text-[#101010] font-bold">Category Overview</h2>
        <div className="flex gap-2">
          <SearchInput className="" />
          <Button onClick={() => setOpen(true)} variant="purple">
            + Add category
          </Button>
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
      <CategoryAddModal
        open={open}
        setOpen={setOpen}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        control={control}
        loading={loading}
      />
    </div>
  );
}
