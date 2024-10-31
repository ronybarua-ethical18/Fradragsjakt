import { Card } from '@/components/ui/card';
import React from 'react';

export default function RulesTopSection() {
  return (
    <Card className="rounded-2xl space-y-2 shadow-none border border-[#EEF0F4] p-6">
      <h3 className="text-xl text-[#101010] font-semibold">
        Add, Customize rules to calculate your deductions with ease{' '}
      </h3>
      <p className="text-xs text-[#71717A] font-bold">
        Customize rule for better managemebt
      </p>
    </Card>
  );
}
