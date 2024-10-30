// app/page/not-found.tsx
import React from 'react';
import Image from 'next/image';

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
        </div>
      </div>
    </>
  );
};

export default NotFound;
