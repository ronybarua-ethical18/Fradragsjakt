import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

import { MdOutlineSignpost } from 'react-icons/md';
import ExpenseRuleUpdateOrCreateContent from '../expenses/ExpenseRuleUpdateOrCreateContent';

export default function CreateRuleModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="purple">
          <MdOutlineSignpost size={20} className="mr-2" />
          Create Rule
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[564px]">
        <ExpenseRuleUpdateOrCreateContent />
      </DialogContent>
    </Dialog>
  );
}
