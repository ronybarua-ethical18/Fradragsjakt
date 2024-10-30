import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function CategoryAddModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="purple">+ Add category</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[564px]">
        <DialogHeader>
          <DialogTitle className="text-[#5B52F9] text-xl font-bold leading-tight">
            Add Category
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* Separate line for label */}
          <div>
            <Label className="block mb-2 text-[#101010] text-xs font-medium">
              Category Name
            </Label>
            <Input
              id="name"
              className="w-full text-gray-600 border border-[#E4E4E7]  text-xs font-normal leading-5"
              placeholder="Bills"
              style={{
                fontSize: '12px',
                lineHeight: '20px',
                fontWeight: 400,
                color: '#71717A',
              }}
              type={''}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="w-full flex h-9 py-2 px-4 justify-center items-center gap-[10px] text-white text-sm font-medium"
          >
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
