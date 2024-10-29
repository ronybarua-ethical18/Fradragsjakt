'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button'; // Adjust the import path as necessary
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover'; // Adjust based on your UI library

export default function ActionPopover() {
  const [isOpen, setIsOpen] = useState(false);

  const handleEdit = () => {
    console.log('Edit action triggered');
    setIsOpen(false); // Close the popover after action
  };

  const handleDelete = () => {
    console.log('Delete action triggered');
    setIsOpen(false); // Close the popover after action
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="link" className="black">
          ...
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-2 bg-white border border-gray-200 rounded-md shadow-lg">
        <div className="flex flex-col gap-1">
          <Button
            variant="white"
            onClick={handleEdit}
            className="text-left hover:bg-gray-100"
          >
            Edit
          </Button>
          <Button
            variant="white"
            onClick={handleDelete}
            className="text-left hover:bg-gray-100 text-red-600"
          >
            Delete
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
