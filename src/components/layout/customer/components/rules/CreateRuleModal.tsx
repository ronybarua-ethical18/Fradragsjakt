import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

import { MdOutlineSignpost } from 'react-icons/md';
import ExpenseRuleUpdateOrCreateContent from '../expenses/ExpenseRuleUpdateOrCreateContent';
import SharedModal from '@/components/SharedModal';

export default function CreateRuleModal() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };
  return (
    <>
      <Button variant="purple" onClick={handleButtonClick}>
        <MdOutlineSignpost size={20} className="mr-2" />
        Create Rule
      </Button>
      <div className="bg-white z-50">
        <SharedModal
          open={isModalOpen}
          onOpenChange={setModalOpen}
          customClassName="max-w-[500px]"
        >
          <div className="bg-white">
            <ExpenseRuleUpdateOrCreateContent modalClose={setModalOpen} />
          </div>
        </SharedModal>
      </div>
    </>
  );
}
