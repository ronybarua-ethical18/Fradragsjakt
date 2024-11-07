// pages/verify-email.tsx

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const VerifyEmail: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-center">
      <header className="pt-6">
        <Image
          src="/Title.svg"
          alt="Fradragsjakt Logo"
          width={150}
          height={30}
          className="mx-auto"
        />
      </header>

      <div className="flex flex-grow items-center justify-center px-6">
        <div className="max-w-[900px] mx-auto">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 pb-[24px]">
            Verify your email
          </h1>
          <p className="flex  mb-6 text-sm text-start">
            Hi [user],
            <br />
            You are almost set to start using all of our features. Simply click
            the verify Email button below to complete the verification process.
            <br />
            The link expires in 48 hours.
          </p>

          <Button className="w-[500px] py-3" variant="purple">
            Verify your email
          </Button>
        </div>
      </div>

      {/* Footer at the Bottom */}
      <footer className="text-gray-500 text-xs py-4">
        <div className="flex justify-center space-x-4 mb-4"></div>
        <p>Copyright © 2024 Fradragsjakt</p>
        <p className="mt-1">
          Fradragsjakt is a comprehensive tax management solution that assists
          freelancers, gig workers, independent contractors, family, and small
          business owners in tracking expenses and identifying tax write-offs.
        </p>
      </footer>
    </div>
  );
};

export default VerifyEmail;
