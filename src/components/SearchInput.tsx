'use client';

import { useForm } from 'react-hook-form';
import { Input } from './ui/input';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SearchInput({ className }: { className: string }) {
  const form = useForm({
    defaultValues: {
      search: '',
    },
  });

  const searchValue = form.watch('search'); // Watch the value of the search input

  return (
    <form>
      <div className={cn('relative w-[332px]', className)}>
        {!searchValue && (
          <Search className="absolute right-3 top-2.5 h-4 w-4 text-[#71717A]" />
        )}
        <Input
          type="search"
          placeholder="Search"
          className="w-full appearance-none bg-background py-2 pl-3 shadow-none placeholder:text-[#71717A] placeholder:text-sm"
          {...form.register('search')}
        />
      </div>
    </form>
  );
}
