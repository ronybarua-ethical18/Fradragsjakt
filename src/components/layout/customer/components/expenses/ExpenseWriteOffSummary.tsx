// import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';

function ExpenseWriteOffSummary() {
  return (
    <div>
      <h1 className="font-bold text-xl text-[#5B52F9] mb-4">Your write-offs</h1>

      <div className="py-3">
        <Button
          // disabled={loading || status === 'loading'} // Disable button during loading
          type="submit"
          className="w-full bg-[#F0EFFE] text-[#5B52F9] hover:bg-[#F0EFFE] mt-3"
        >
          {/* {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} */}
          Review deductions and questions
        </Button>
        <Button
          // disabled={loading || status === 'loading'} // Disable button during loading
          type="submit"
          className="w-full text-white mt-4"
        >
          {/* {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} */}
          Import to tax return
        </Button>
      </div>
    </div>
  );
}

export default ExpenseWriteOffSummary;
