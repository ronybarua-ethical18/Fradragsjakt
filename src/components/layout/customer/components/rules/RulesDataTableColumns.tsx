'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import ArrowUpDown from '../../../../../../public/sort.png';
import Image from 'next/image';

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
      <div className="text-left pl-4">{`${row.getValue('serialNo')}.`}</div>
    ),
  },
  {
    accessorKey: 'description',
    header: 'Description Contains',
    cell: ({ row }) => (
      <div className="text-left">{row.getValue('description')}</div>
    ),
  },
  {
    accessorKey: 'expenseType',
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
    cell: ({ row }) => (
      <Select
        defaultValue={row.getValue('expenseType')}
        onValueChange={(value) => console.log('Updated expense type:', value)}
      >
        <SelectTrigger className="w-[120px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Private">Private</SelectItem>
          <SelectItem value="Public">Public</SelectItem>
        </SelectContent>
      </Select>
    ),
  },
  {
    accessorKey: 'category',
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
        defaultValue={row.getValue('category')}
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
