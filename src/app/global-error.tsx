'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

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
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          {error.message}
        </h2>
        <p className="text-gray-700 mb-6">
          An unexpected error occurred. Please try again, or go back to the
          dashboard.
        </p>

        <div className="flex space-x-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Try Again
          </button>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-gray-300 text-gray-700 rounded-md font-semibold hover:bg-gray-400 transition duration-300 ease-in-out"
          >
            Go Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
