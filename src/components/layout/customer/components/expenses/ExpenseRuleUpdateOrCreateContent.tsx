// import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';
import { Label } from '@/components/ui/label';
import { FormInput } from '@/components/FormInput';
import { useForm } from 'react-hook-form';
import { trpc } from '@/utils/trpc';
import toast from 'react-hot-toast';

function ExpenseRuleUpdateOrCreateContent() {
  const { handleSubmit, control } = useForm<FormData>();

  const ruleMutation = trpc.rules.createRule.useMutation({
    onSuccess: () => {
      toast.success('Rule is created successfully');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = (data: FormData) => {
    ruleMutation.mutate(data);
  };
  return (
    <div>
      <h1 className="font-bold text-xl text-[#5B52F9] mb-4">IF</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="description">Description contain</Label>
          <FormInput
            type="text"
            name="description_contains"
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
          <Label htmlFor="expense_type">Expense type</Label>
          <FormInput
            name="expense_type"
            customClassName="w-full mt-2"
            type="select"
            control={control}
            placeholder="Select type"
            options={[
              { title: 'Business', value: 'business' },
              { title: 'Personal', value: 'personal' },
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
              { title: 'Gas', value: 'gas' },
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
