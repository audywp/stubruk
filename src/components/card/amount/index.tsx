import React from 'react';

type TAmount = { total: number; className: string; onDecrement: () => void; onIncrement: () => void };

export default function Amount({ total, onDecrement, onIncrement, className }: Partial<TAmount>) {
  return (
    <div className={`bg-white flex flex-row justify-evenly place-items-center ${className}`}>
      <button
        className='flex-1'
        onClick={onDecrement}
      >
        <p>-</p>
      </button>
      <div className='h-4 w-[0.7px] bg-gray-400' />
      <div className='flex-1 items-center text-center'>
        <p>{total}</p>
      </div>
      <div className='h-4 w-[0.7px] bg-gray-400' />
      <button
        className='flex-1'
        onClick={onIncrement}
      >
        <p>+</p>
      </button>
    </div>
  );
}
