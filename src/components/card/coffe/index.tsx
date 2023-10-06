import Image from 'next/image';
import React from 'react';
import Example from '@/assets/example.png';

type TCoffeContainer = {
  bg?: string;
  size?: 'big' | 'small';
};

export default function CoffeContainer({ bg = 'primary', size = 'big' }: TCoffeContainer) {
  return (
    <div
      className={`bg-${bg} ${size === 'small' ? 'w-[50%]' : ''} rounded-full relative flex items-center justify-center`}
    >
      <Image
        alt='example img'
        src={Example}
      />
    </div>
  );
}
