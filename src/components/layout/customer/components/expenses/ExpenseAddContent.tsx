// import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Label } from '@/components/ui/label';
import { FormInput } from '@/components/FormInput';
import { useForm } from 'react-hook-form';
import { FormData } from './ExpenseOverviewSection';
import { trpc } from '@/utils/trpc';
import toast from 'react-hot-toast';

const defaultCategories = [
  { title: 'Transport', value: 'Transport' },
  { title: 'Meals', value: 'Meals' },
  { title: 'Gas', value: 'Gas' },
];

type CategoryType = { title: string; value: string };

interface ExpenseAddContentProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  categories?: CategoryType[];
}
function ExpenseAddContent({ categories = [] }: ExpenseAddContentProps) {
  const { handleSubmit, control, reset } = useForm<FormData>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false);
  const utils = trpc.useUtils();

  const manipulatedCategories = Array.from(
    new Map(
      [...categories, ...defaultCategories].map((cat) => [cat.value, cat])
    ).values()
  );

  const mutation = trpc.expenses.createExpense.useMutation({
    onSuccess: () => {
      toast.success('Category created successfully!', {
        duration: 4000,
      });
      utils.categories.getCategories.invalidate();
      reset();
      setLoading(false);
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to create category');
      setLoading(false);
    },
  });
  const onSubmit = (data: FormData) => {
    console.log('expense_data', data);

    setLoading(true);
    mutation.mutate({ ...data, amount: Number(data?.amount) });
  };
  return (
    <div>
      <h1 className="font-bold text-xl text-[#5B52F9] mb-4">
        Manually add expense
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="description">Description</Label>
          <FormInput
            type="text"
            name="description"
            // id="description"
            placeholder="Description"
            control={control}
            //   value={email}
            //   onChange={(e) => setEmail(e.target.value)}
            customClassName="w-full mt-2"
            required
          />
        </div>
        <div>
          <Label htmlFor="expense-type">Expense type</Label>
          <FormInput
            name="expense_type"
            customClassName="w-full mt-2"
            type="select"
            control={control}
            placeholder="Select type"
            options={[
              { title: 'Business', value: 'business' },
              { title: 'Personal', value: 'personal' },
              { title: 'Unknown', value: 'unknown' },
            ]}
            required
          />
        </div>
        <div>
          <Label htmlFor="category">Category</Label>
          <FormInput
            name="category"
            customClassName="w-full mt-2"
            type="select"
            control={control}
            placeholder="Select category"
            options={manipulatedCategories}
            required
          />
        </div>
        <div>
          <Label htmlFor="description">Amount</Label>
          <FormInput
            type="number"
            name="amount"
            // id="description"
            placeholder="Amount"
            control={control}
            //   value={email}
            //   onChange={(e) => setEmail(e.target.value)}
            customClassName="w-full mt-2"
            required
          />
        </div>
        <div>
          <Label htmlFor="category">Deduction status</Label>
          <FormInput
            name="deduction_status"
            customClassName="w-full mt-2"
            type="select"
            control={control}
            placeholder="Select status"
            options={[
              { title: 'Deductible', value: 'deductible' },
              { title: 'Non Deductible', value: 'non-deductible' },
            ]}
            required
          />
        </div>
        <div className="py-3">
          <Button
            // disabled={loading || status === 'loading'} // Disable button during loading
            type="submit"
            className="w-full text-white"
          >
            {/* {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} */}
            Add Expense
          </Button>
          <Button
            // disabled={loading || status === 'loading'} // Disable button during loading
            type="submit"
            className="w-full bg-[#F0EFFE] text-[#FF4444] hover:bg-[#F0EFFE] mt-3"
          >
            {/* {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} */}
            Discard
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseAddContent;
