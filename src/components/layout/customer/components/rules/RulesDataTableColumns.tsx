'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import ArrowUpDown from '../../../../../../public/sort.png';
import Image from 'next/image';
import { transformToUppercase } from '@/utils/helpers/transformToUppercase';

export type Transaction = {
  id: string;
  serialNo: number;
  description: string;
  expenseType: 'Private' | 'Public';
  category: string;
};

export const RulesDataTableColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'serialNo',
    header: 'Serial no.',
    cell: ({ row }) => (
      <div className="text-left pl-4">{`${row.index + 1}.`}</div> // Use row.index for serial number
    ),
  },
  {
    accessorKey: 'description_contains',
    header: 'Description Contains',
    cell: ({ row }) => (
      <div className="text-left">{row.getValue('description_contains')}</div>
    ),
  },
  {
    accessorKey: 'expense_type',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="pl-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Expense Type
          <Image src={ArrowUpDown} alt="arrow icon" className="ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const initialValue = row.getValue('expense_type') as string;

      // console.log("initial value", initialValue)
      // const [selectedOption, setSelectedOption] = useState<string>(initialValue);

      return (
        <Select
          value={initialValue}
          onValueChange={(value) => {
            // setSelectedOption(value);
            console.log('Updated expense type:', value);
            // Add any additional logic to persist the change here if needed
          }}
        >
          <SelectTrigger className="w-[120px] text-foreground">
            <SelectValue>{transformToUppercase(initialValue)}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Business">Business</SelectItem>
              <SelectItem value="Personal">Personal</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      );
    },
  },
  {
    accessorKey: 'category_title',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="pl-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Category
          <Image src={ArrowUpDown} alt="arrow icon" className="ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <Input
        type="text"
        defaultValue={transformToUppercase(row.getValue('category_title'))}
        className="w-[150px]"
        onChange={(e) => console.log('Updated category:', e.target.value)}
      />
    ),
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const transaction = row.original;

      return (
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            className="h-8 w-8 p-0"
            onClick={() => console.log('Delete transaction:', transaction.id)}
          >
            <Trash2 className="h-4 w-4 text-[#5B52F9]" />
          </Button>
        </div>
      );
    },
  },
];
