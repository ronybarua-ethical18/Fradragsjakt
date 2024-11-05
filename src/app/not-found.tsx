// app/page/not-found.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NotFound: React.FC = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex py-8 flex-col justify-end gap-[24px] items-center rounded-lg w-[290px]">
          <Image src="/Error.svg" alt="Error Image" width={210} height={110} />
          <h1> Oops, page is not found!</h1>
          <h3 className="text-gray-500 text-sm">
            This link might be broken or corrupted.
          </h3>
          <Link
            href="/"
            className="w-auto h-auto inline-block px-3 py-2 mt-1 text-sm bg-violet-100 rounded-md text-center"
          >
            Return Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
