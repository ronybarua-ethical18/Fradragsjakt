import React from 'react';
import { Table, TableBody, TableRow, TableCell } from '@/components/ui/table'; // Update import paths as needed
import ActionPopover from './PopOver';

export default function CategoryTable() {
  // Placeholder data with specified values
  const placeholderItems = [
    { serial: 1, category: 'Food', createdBy: 'User' },
    { serial: 2, category: 'Meals', createdBy: 'System' },
    { serial: 3, category: 'Travel', createdBy: 'User' },
    { serial: 4, category: 'Insurance', createdBy: 'System' },
    { serial: 5, category: 'Bills', createdBy: 'User' },
    { serial: 6, category: 'Services', createdBy: 'System' },
    { serial: 7, category: 'Utility', createdBy: 'User' },
    { serial: 8, category: 'Car', createdBy: 'System' },
    { serial: 9, category: 'Gas', createdBy: 'User' },
    { serial: 10, category: 'Others', createdBy: 'System' },
  ];

  return (
    <div className="overflow-auto">
      <Table className="min-w-full border-collapse">
        <TableBody>
          {placeholderItems.map((item) => (
            <TableRow key={item.serial} className="border-b">
              <TableCell
                className="px-[10px] py-[10px] text-center"
                style={{
                  maxWidth: '100px', // Adjusted max width to 75px
                  width: '100px', // Set fixed width
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                {item.serial}
              </TableCell>
              <TableCell
                className="px-[10px] py-[10px] text-start"
                style={{
                  maxWidth: '385px',
                  width: '385px',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                {item.category}
              </TableCell>
              <TableCell
                className="px-[10px] py-[10px] text-start"
                style={{
                  maxWidth: '300px',
                  width: '300px',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                {item.createdBy}
              </TableCell>
              <TableCell className="px-4 py-2 text-end">
                <ActionPopover />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
