'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export function ContentHealthFamily() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const handleToggle = (value: string) => {
    setOpenItems((prevItems) =>
      prevItems.includes(value)
        ? prevItems.filter((item) => item !== value)
        : [...prevItems, value]
    );
  };

  return (
    <div className="bg-white p-8 rounded-2xl w-[565px] border-[1px]">
      <p className="text-xs text-gray-500">Review Questionnaire</p>
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger
            onClick={() => handleToggle('item-1')}
            className={`${
              openItems.includes('item-1') ? 'text-violet-600' : ''
            } no-underline font-bold`}
          >
            Have a loan?
          </AccordionTrigger>
          {openItems.includes('item-1') && (
            <AccordionContent className="text-gray-500 text-xs">
              If you have given a monetary donation of at least NOK 500 to a
              voluntary organisation and/or religious or belief-based community,
              you can get a deduction for this.
              <p className="text-black pt-[12px] pb-[6px]">Amount</p>
              <Input type="text" placeholder="$200" />
            </AccordionContent>
          )}
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger
            onClick={() => handleToggle('item-2')}
            className={`${
              openItems.includes('item-2') ? 'text-violet-600' : ''
            } no-underline font-bold`}
          >
            Is it styled?
          </AccordionTrigger>
          {openItems.includes('item-2') && (
            <AccordionContent className="text-gray-500 text-xs">
              Yes. It comes with default styles that match the other components
              aesthetic.
              <p className="text-black pt-[12px] pb-[6px]">Amount</p>
              <Input type="text" placeholder="$200" />
            </AccordionContent>
          )}
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger
            onClick={() => handleToggle('item-3')}
            className={`${
              openItems.includes('item-3') ? 'text-violet-600' : ''
            } no-underline font-bold`}
          >
            Is it animated?
          </AccordionTrigger>
          {openItems.includes('item-3') && (
            <AccordionContent className="text-gray-500 text-xs">
              Yes. It’s animated by default, but you can disable it if you
              prefer.
              <p className="text-black pt-[12px] pb-[6px]">Amount</p>
              <Input type="text" placeholder="$200" />
            </AccordionContent>
          )}
        </AccordionItem>
      </Accordion>
      <Button className="text-white w-full mt-4">Done</Button>
    </div>
  );
}
