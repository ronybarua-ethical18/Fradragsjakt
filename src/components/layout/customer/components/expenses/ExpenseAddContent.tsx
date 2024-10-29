// import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';
import { Label } from '@/components/ui/label';
import { FormInput } from '@/components/FormInput';
import { useForm } from 'react-hook-form';

function ExpenseAddContent() {
  const { handleSubmit, control } = useForm<FormData>();

  return (
    <div>
      <h1 className="font-bold text-xl text-[#5B52F9] mb-4">
        Manually add expense
      </h1>
      <form onSubmit={handleSubmit(() => {})} className="space-y-4">
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
            name="expense-type"
            customClassName="w-full mt-2"
            type="select"
            control={control}
            placeholder="Select type"
            options={[
              { title: 'Transport', value: 'transport' },
              { title: 'Meals', value: 'meals' },
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
            options={[
              { title: 'Transport', value: 'transport' },
              { title: 'Meals', value: 'meals' },
            ]}
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
            name="status"
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
