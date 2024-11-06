// import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';
import { Label } from '@/components/ui/label';
import { FormInput } from '@/components/FormInput';
import { useForm } from 'react-hook-form';

function ExpenseRuleUpdateOrCreateContent() {
  const { handleSubmit, control } = useForm<FormData>();

  return (
    <div>
      <h1 className="font-bold text-xl text-[#5B52F9] mb-4">IF</h1>
      <form onSubmit={handleSubmit(() => {})} className="space-y-4">
        <div>
          <Label htmlFor="description">Description contain</Label>
          <FormInput
            type="text"
            name="description-contain"
            // id="description"
            placeholder="Description contain"
            control={control}
            //   value={email}
            //   onChange={(e) => setEmail(e.target.value)}
            customClassName="w-full mt-2"
            required
          />
        </div>

        <h1 className="font-bold text-xl text-[#5B52F9] mb-4">Then</h1>
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

        <div className="py-3">
          <Button
            // disabled={loading || status === 'loading'} // Disable button during loading
            type="submit"
            className="w-full text-white"
          >
            {/* {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} */}
            Apply Update
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

export default ExpenseRuleUpdateOrCreateContent;
