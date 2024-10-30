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

export function ContentBank() {
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
      title: 'Have a loan?',
      content:
        'If you have given a monetary donation of at least NOK 500 to a voluntary organisation and/or religious or belief-based community, you can get a deduction for this.',
    },
    {
      id: 'item-2',
      title: 'Have refinanced a loan in the last year?',
      content:
        'If you have given a monetary donation of at least NOK 500 to a voluntary organisation and/or religious or belief-based community, you can get a deduction for this.',
    },
    {
      id: 'item-3',
      title: 'Have taken out a joint loan with someone?',
      content:
        'If you have given a monetary donation of at least NOK 500 to a voluntary organisation and/or religious or belief-based community, you can get a deduction for this.',
    },
    {
      id: 'item-4',
      title: 'Have young people’s housing savings (BSU)',
      content:
        'Young people’s housing savings (BSU) is for people under 34 years of age. You can save up to NOK 27,500 per year. Then you get a tax deduction of NOK 2,750 (10 percent). You can save up to a total of NOK 300,000.',
    },
    {
      id: 'item-5',
      title: 'I have sold shares or securities at a loss',
      content:
        'Gains and losses on shares are taxable for the amount that exceeds the deductible risk-free return. Losses on sale of shares are deductible. The tax rate for 2023 is 37.84 percent.',
    },
  ];

  return (
    <div className="bg-white p-8 border-[1px] rounded-2xl w-[565px]">
      <p className="text-xs text-gray-500">Review Questionnaire</p>
      <Accordion type="multiple" className="w-full">
        {accordionData.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger
              onClick={() => handleToggle(item.id)}
              className={`${
                openItems.includes(item.id) ? 'text-violet-600' : ''
              } no-underline font-bold`}
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
