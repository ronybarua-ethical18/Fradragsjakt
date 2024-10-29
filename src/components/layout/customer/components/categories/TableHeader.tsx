import React from 'react';
import { TableHead, TableRow, TableCell } from '@/components/ui/table'; // Adjust the import path as needed

export default function TableHeader() {
  return (
    <TableHead>
      <TableRow className="text-left bg-white">
        {/* Serial Number Column */}
        <TableCell
          className="px-[10px] py-[10px] border-b-[1px]"
          style={{ width: '100px' }}
        >
          Serial no.
        </TableCell>
        {/* Category Column */}
        <TableCell
          className="px-[10px] py-[10px] text-start border-b-[1px]"
          style={{ width: '385px' }}
        >
          Category
        </TableCell>
        {/* Created By Column */}
        <TableCell
          className="px-[10px] py-[10px] text-start border-b-[1px]"
          style={{ width: '300px' }}
        >
          Created By
        </TableCell>
        {/* Actions Column */}
        <TableCell
          className="px-[10px] py-[10px] text-end border-b-[1px]"
          style={{ width: '580px' }}
        >
          Actions
        </TableCell>
      </TableRow>
    </TableHead>
  );
}
