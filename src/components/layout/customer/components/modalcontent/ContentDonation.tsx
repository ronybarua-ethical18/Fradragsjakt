import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function ContentDonation() {
  return (
    <Card className="w-[565px]">
      <p className="text-xs  pl-[32px] pt-[32px] text-gray-500">
        Review Questionnaire
      </p>
      <CardHeader>
        <CardTitle className="start text-xl font-semibold">
          Gifts to voluntary organisations
        </CardTitle>
        <CardDescription className="text-xs">
          If you have given a monetary donation of at least NOK 500 to a
          voluntary organisation and/or religious or belief-based community, you
          can get a deduction for this.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Donation Amount</Label>
              <Input id="name" placeholder="$200" type={''} />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex ">
        <Button className="text-white w-full">Done</Button>
      </CardFooter>
    </Card>
  );
}
