import React from 'react';

export default function Button({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <button
      className={`bg-primary py-1 px-2 rounded-md text-white flex flex-row items-center justify-center ${className}`}
    >
      {children}
    </button>
  );
}
