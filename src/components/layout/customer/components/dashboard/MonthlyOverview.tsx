import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';

const MonthlyOverview = () => {
  return (
    <Card className="col-span-3 p-6 border border-[#EEF0F4] shadow-none rounded-2xl">
      <CardContent className="p-0 flex flex-col justify-between h-full">
        <div className="flex justify-between">
          <h4 className="text-sm  text-[#627A97] font-semibold">Overview </h4>
          <Badge className="bg-[#F0EFFE] px-1   hover:text-white rounded-[5px] text-xs text-[#627A97] font-medium">
            This month
          </Badge>
        </div>
        <ul className="h-[252px] space-y-1 max-h-[252px] overflow-auto [&::-webkit-scrollbar]:hidden">
          {[
            { title: 'Travel spendings', subtitle: 'Tax payed' },
            { title: 'Utilities', subtitle: 'Tax payed' },
            { title: 'Utilities', subtitle: 'Top savings from' },
            { title: 'Utilities', subtitle: 'Top savings from' },
          ].map(({ title, subtitle }, i) => (
            <li key={i} className="flex space-x-6 items-center">
              <div className="px-4 py-2 bg-[#F0EFFE] rounded-lg">
                <p className="text-[20px] text-[#71717A] font-semibold leading-[20px]">
                  14{' '}
                </p>{' '}
                <span className="text-xs text-[#71717A] leading-[20px]">
                  Aug
                </span>
              </div>
              <div className="text-sm">
                <h4 className=" text-[#101010] font-semibold">{title}</h4>{' '}
                <p className=" text-[#627A97] font-medium">{subtitle}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default MonthlyOverview;
