import React, { Dispatch, SetStateAction } from 'react';
import { Button } from '@/components/ui/button';

import { Label } from '@/components/ui/label';
import SharedModal from '@/components/SharedModal';
import { Control, UseFormHandleSubmit } from 'react-hook-form';
import { FormInput } from '@/components/FormInput';
import { Loader2 } from 'lucide-react';
import { FormData } from './CategoryTable';

interface CategoryAddModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  handleSubmit: UseFormHandleSubmit<FormData, undefined>;
  onSubmit: (data: FormData) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<FormData, any>;
}
export default function CategoryAddModal({
  open,
  setOpen,
  handleSubmit,
  onSubmit,
  control,
  loading,
}: CategoryAddModalProps) {
  return (
    <SharedModal
      open={open}
      onOpenChange={setOpen}
      customClassName="max-w-[500px]"
    >
      <>
        <h2 className="text-[#5B52F9] text-xl font-bold leading-tight mb-6">
          Add Category
        </h2>

        <>
          <Label className="block mb-2 text-[#101010] text-xs font-medium">
            Category Name
          </Label>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormInput
              name="name"
              control={control}
              type="text"
              placeholder="Bills"
              required
            />
            <Button
              disabled={loading}
              type="submit"
              className="w-full flex h-9 py-2 px-4 justify-center items-center gap-[10px] text-white text-sm font-medium"
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Add
            </Button>
          </form>
        </>
      </>
    </SharedModal>
  );
}
