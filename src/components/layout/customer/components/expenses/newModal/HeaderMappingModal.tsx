import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function HeaderMappingModal() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-[564px]">
        {/* Header */}
        <h2
          className="text-xl font-semibold mb-2"
          style={{ color: 'var(--violet, #5B52F9)' }}
        >
          Return
        </h2>

        {/* File Selection Display */}
        <div className="text-gray-700 mb-4 text-xs">
          <p className="font-semibold pb-[6px]">Your selected file</p>
          <div
            className="w-auto h-auto inline-block px-3 py-2 mt-1 text-sm  bg-violet-100 rounded-md text-center"
            style={{ color: 'var(--violet, #5B52F9)' }}
          >
            Customers.csv
          </div>
        </div>

        {/* Instructions */}
        <p className="text-gray-500 mb-6 text-xs pb-[24px]">
          The best match to each field on the selected file have been
          auto-selected.
        </p>

        {/* Field Selection Table */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-gray-400 border-b border-gray-200 text-xs pb-2">
            Field
          </div>
          <div className="text-gray-400 border-b border-gray-200 text-xs pb-2">
            Imported file headers
          </div>

          <div className="text-gray-800 text-xs py-[14px] font-semibold">
            Description
          </div>
          <Select>
            <SelectTrigger className="w-full text-xs text-gray-600">
              <SelectValue placeholder="Bills" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bills">Bills</SelectItem>
              <SelectItem value="invoices">Invoices</SelectItem>
              <SelectItem value="payments">Payments</SelectItem>
            </SelectContent>
          </Select>

          <div className="text-gray-800 text-xs py-[14px] font-semibold">
            Amount
          </div>
          <Select>
            <SelectTrigger className="w-full text-xs text-gray-600">
              <SelectValue placeholder="Amount" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bills">Bills</SelectItem>
              <SelectItem value="invoices">Invoices</SelectItem>
              <SelectItem value="Amount">Amount</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Done Button */}
        <Button className="w-full text-white " variant={'purple'}>
          Done
        </Button>
      </div>
    </div>
  );
}
