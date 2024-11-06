'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center w-[564px]">
        <h2 className="text-2xl font-bold text-red-600 mb-4 justify-items-center">
          {' '}
          <Image
            src="/ErrorFace.svg"
            width={160}
            height={160}
            alt="Picture of the error"
          />
          {error.message}
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          Please try again later or contact support if the problem persists.
        </p>

        <div className="flex space-x-4 justify-center">
          <Button
            onClick={reset}
            className="px-6 py-3 text-white rounded-md font-semibold transition duration-300 ease-in-out w-full"
            variant={'purple'}
          >
            Try again
          </Button>
          <Button
            onClick={() => router.push('/')}
            className="px-6 py-3 text-white rounded-md font-semibold transition duration-300 ease-in-out w-full"
            variant={'purple'}
          >
            Go back home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Error;
