'use client';

import React, { useState } from 'react';

const ErrorTrigger = () => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    // Simulate an error to trigger Error component
    throw new Error('This is a simulated error');
  }

  return (
    <div>
      <button onClick={() => setHasError(true)}>Trigger Error</button>
    </div>
  );
};

export default ErrorTrigger;
