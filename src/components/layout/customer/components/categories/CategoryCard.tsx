import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Define the specific type for Category properties
type Category = {
  label: string;
  amount: number | string; // Adjust this type if needed
  image: string;
};

interface CategoryCardProps {
  category: Category;
  index: number;
}

export default function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <Card
      style={index === 0 ? { gridRow: 'span 2' } : { minHeight: '100px' }}
      className="rounded-[16px] border border-[#EEF0F4] bg-white"
    >
      <CardContent className="flex h-full items-center space-x-4 p-4">
        <Image
          src={category.image}
          alt={category.label}
          width={index === 0 ? 108 : 40} // Conditional width
          height={index === 0 ? 106 : 40} // Conditional height
          className="rounded-full"
        />
        <div>
          <h3 className={cn('text-xl font-bold')}>{category.amount}</h3>
          <p className="text-[#71717A] font-inter text-[16px] font-semibold leading-[20px]">
            {category.label}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
