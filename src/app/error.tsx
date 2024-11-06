// app/page/error.tsx
'use client'; // must be a client component
import React, { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h2>Something went wrong!</h2>
      <button onClick={reset} className="text-blue-500 underline">
        Try again
      </button>
    </div>
  );
};

export default Error;
