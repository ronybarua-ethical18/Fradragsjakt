'use client';

import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import ArrowUpDown from '../../../../../../public/sort.png';

// Define the data structure for a category
export type Category = {
  id: string;
  serialNo: number;
  name: string;
  createdBy: 'USER' | 'SYSTEM';
};

// Define columns for the category table
export const CategoryTableColumns: ColumnDef<Category>[] = [
  {
    accessorKey: 'serialNo',
    header: 'Serial no.',
    cell: ({ row }) => (
      <div className="text-left pl-4">{`${row.getValue('serialNo')}.`}</div>
    ),
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Category
        <Image src={ArrowUpDown} alt="sort icon" className="ml-2" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-left pl-4">{row.getValue('name')}</div>
    ),
  },
  {
    accessorKey: 'createdBy',
    header: 'Created by',
    cell: ({ row }) => (
      <div className="text-left text-xs pl-4 font-medium text-[#00104B]">
        {row.getValue('createdBy')}
      </div>
    ),
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const category = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(category.id)}
            >
              Copy category ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit category</DropdownMenuItem>
            <DropdownMenuItem>Delete category</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
