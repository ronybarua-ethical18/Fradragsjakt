import { Button } from '@/components/ui/button';
import SelectField from './SelectField'; // Import the new SelectField component

export function FilterContent() {
  const categories = [
    { value: 'transport', label: 'Transport' },
    { value: 'food', label: 'Food' },
    { value: 'accommodation', label: 'Accommodation' },
  ];

  const types = [
    { value: 'business', label: 'Business' },
    { value: 'personal', label: 'Personal' },
  ];

  const months = [
    { value: 'january', label: 'January' },
    { value: 'february', label: 'February' },
    { value: 'march', label: 'March' },
    { value: 'april', label: 'April' },
    { value: 'may', label: 'May' },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-[564px]">
        <h2
          className="text-xl font-semibold mb-4"
          style={{ color: 'var(--violet, #5B52F9)' }}
        >
          Filter by
        </h2>

        {/* Category Field */}
        <div className="flex items-center mb-4 w-full justify-between">
          <label className="text-gray-800 text-xs font-semibold w-1/3 text-left">
            Category
          </label>
          <div className="w-2/3 max-w-[225px]">
            <SelectField
              placeholder="Transport"
              items={categories}
              label={''}
            />
          </div>
        </div>

        {/* Type Field */}
        <div className="flex items-center mb-4 w-full justify-between">
          <label className="text-gray-800 text-xs font-semibold w-1/3 text-left">
            Type
          </label>
          <div className="w-2/3 max-w-[225px]">
            <SelectField placeholder="Business" items={types} label={''} />
          </div>
        </div>

        {/* Month Field */}
        <div className="flex items-center mb-4 w-full justify-between">
          <label className="text-gray-800 text-xs font-semibold w-1/3 text-left">
            Month
          </label>
          <div className="w-2/3 max-w-[225px]">
            <SelectField placeholder="January" items={months} label={''} />
          </div>
        </div>

        <Button className="w-full text-white mt-4" variant={'purple'}>
          Apply
        </Button>
      </div>
    </div>
  );
}
