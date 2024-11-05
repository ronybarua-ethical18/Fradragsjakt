import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function FilterContent() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-[564px]">
        <h2
          className="text-xl font-semibold  mb-4"
          style={{ color: 'var(--violet, #5B52F9)' }}
        >
          Filter by
        </h2>

        <div className="mb-4 flex items-center space-x-4 justify-between">
          <label className=" w-24 text-xs font-semibold">Category</label>
          <Select>
            <SelectTrigger className="w-[226px] text-xs text-gray-600 ">
              <SelectValue placeholder="Transport" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="transport">Transport</SelectItem>
              <SelectItem value="food">Food</SelectItem>
              <SelectItem value="accommodation">Accommodation</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-4 flex items-center space-x-4 justify-between">
          <label className="w-24 text-xs font-semibold">Type</label>
          <Select>
            <SelectTrigger className="w-[226px] text-xs text-gray-700">
              <SelectValue placeholder="Business" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="personal">Personal</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-4 flex items-center space-x-4 justify-between">
          <label className=" w-24 text-xs font-semibold">Month</label>
          <Select>
            <SelectTrigger className="w-[226px] text-xs text-gray-600">
              <SelectValue placeholder="January" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="january">January</SelectItem>
              <SelectItem value="february">February</SelectItem>
              <SelectItem value="march">March</SelectItem>
              {/* Add other months as needed */}
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full text-white mt-4" variant={'purple'}>
          Apply
        </Button>
      </div>
    </div>
  );
}
