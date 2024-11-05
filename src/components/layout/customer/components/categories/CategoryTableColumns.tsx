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
import { EnumValues } from 'zod';

export type Category = {
  _id: string;
  tile: string;
  created_by: EnumValues;
};

export const CategoryTableColumns: ColumnDef<Category>[] = [
  {
    header: 'Serial no.',
    cell: ({ row }) => {
      const serial_no = row.index + 1;
      return <div className="text-left pl-4">{`${serial_no}.`}</div>;
    },
  },
  {
    accessorKey: 'title',
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
      <div className="text-left pl-4">{row.getValue('title')}</div>
    ),
  },
  {
    accessorKey: 'created_by',
    header: 'Created by',
    cell: ({ row }) => (
      <div className="text-left text-xs pl-4 font-medium text-[#00104B]">
        {row.getValue('created_by')}
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
              onClick={() => navigator.clipboard.writeText(category._id)}
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
