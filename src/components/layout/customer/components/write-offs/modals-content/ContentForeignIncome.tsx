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

export function ContentForeignIncome() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const handleToggle = (value: string) => {
    setOpenItems((prevItems) =>
      prevItems.includes(value)
        ? prevItems.filter((item) => item !== value)
        : [...prevItems, value]
    );
  };

  // Define an array with the items' title and content
  const accordionData = [
    {
      id: 'item-1',
      title:
        'Have income or wealth in another country than Norway and pay tax in the other country',
      content:
        'You must declare all your foreign income and wealth in the Norwegian tax return. This applies regardless of whether you’ve paid tax abroad or the income/wealth is tax free in the country in question.',
    },
  ];

  return (
    <div className=" ">
      <p className="text-xs text-gray-500">Review Questionnaire</p>
      <Accordion type="multiple" className="w-full">
        {accordionData.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger
              onClick={() => handleToggle(item.id)}
              className={`${
                openItems.includes(item.id) ? 'text-violet-600' : ''
              } no-underline font-bold text-start`}
            >
              {item.title}
            </AccordionTrigger>
            {openItems.includes(item.id) && (
              <AccordionContent className="text-gray-500 text-xs">
                {item.content}
                <p className="text-black pt-[12px] pb-[6px]">Amount</p>
                <Input type="text" placeholder="$200" />
              </AccordionContent>
            )}
          </AccordionItem>
        ))}
      </Accordion>
      <Button className="text-white w-full mt-4">Done</Button>
    </div>
  );
}
