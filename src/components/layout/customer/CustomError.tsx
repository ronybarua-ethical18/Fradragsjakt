import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

export default function CustomError() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-white p-6">
      <div className="rounded-lg p-8 max-w-lg text-center w-[564px]">
        <h2 className="text-2xl font-bold text-black mb-4 justify-items-center">
          {' '}
          <Image
            src="/ErrorFace.svg"
            width={160}
            height={160}
            alt="Picture of the error"
          />
          There has been an error
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          Please try again later or contact support if the problem persists.
        </p>

        <div className="flex space-x-4 justify-center">
          <Button
            className="px-6 py-3 text-white rounded-md font-semibold transition duration-300 ease-in-out w-full"
            variant={'purple'}
          >
            Try again
          </Button>
          <Button
            className="px-6 py-3 text-white rounded-md font-semibold transition duration-300 ease-in-out w-full"
            variant={'purple'}
          >
            Go back home
          </Button>
        </div>
      </div>
    </div>
  );
}
