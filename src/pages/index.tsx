import Image from 'next/image';
import { Inter } from 'next/font/google';
import Button from '@/components/button';
import Navbar from '@/components/navbar';
import Ratings from '@/components/ratings';
import Amount from '@/components/card/amount';
import { AiFillCaretRight } from 'react-icons/ai';
import CoffeContainer from '@/components/card/coffe';
import Donut from '@/assets/donut.png';
import Sc from '@/assets/sippy_cups.png';
import Cookies from '@/assets/cookies.png';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [totalAmount, setTotalAmount] = useState<number>(1);

  const onIncrement = () => {
    setTotalAmount((prevState) => prevState + 1);
  };

  const onDecrement = () => {
    setTotalAmount((prevState) => (prevState > 0 ? prevState - 1 : prevState));
  };

  return (
    <main className='px-8 pt-4'>
      <Navbar />
      <div className='bg-[#FEF9F3] flex flex-row items-center justify-between py-12 px-32'>
        {/* description */}
        <div className='w-[40%] flex flex-col gap-8'>
          <h1 className='text-5xl font-bold'>Caramel Ribbon</h1>
          <div className='flex flex-row gap-4'>
            <Ratings />
            <h1 className='font-bold text-2xl text-primary'>$ 39.00</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam quas tenetur officia est voluptatem
            deleniti, corrupti, culpa quae sed suscipit, autem ipsum fugiat fugit laborum impedit nostrum. Accusantium,
            corporis officia. Voluptatem, dolore? Nisi cum ipsam nulla illo quaerat minus sint veniam in omnis alias?
            Nulla consequuntur quisquam amet autem veniam reiciendis iste, optio iusto officiis unde! Eligendi
            recusandae repudiandae eius.
          </p>
          <h1 className='font-bold'>Serve With</h1>
          <div className='flex flex-row items-center gap-12'>
            <div className='max-w-[100px] text-center'>
              <Image
                alt='donut'
                src={Donut}
              />
              <p className='mt-4 font-bold'>Donut</p>
            </div>
            <div className='max-w-[100px] text-center'>
              <Image
                alt='Sc'
                src={Sc}
              />
              <p className='mt-4 font-bold'>Yogurt</p>
            </div>
            <div className='max-w-[100px] text-center'>
              <Image
                alt='Cookies'
                src={Cookies}
              />
              <p className='mt-4 font-bold'>cookies</p>
            </div>
          </div>
          <div className='flex flex-row gap-16'>
            <Amount
              className='flex-1'
              total={totalAmount}
              onDecrement={onDecrement}
              onIncrement={onIncrement}
            />
            <Button className='gap-4 py-3 px-5 flex-1'>
              <p className='text-[16px]'>Add To Chart</p>
              <AiFillCaretRight className='text-[16px] ' />
            </Button>
          </div>
        </div>
        <div className='flex flex-row justify-evenly ml-40  items-center'>
          {/* coffe midle showcase */}
          <div>
            <CoffeContainer />
          </div>
          {/* coffe list */}
          <div className='w-[40%] flex flex-col  justify-evenly items-end gap-4 '>
            <CoffeContainer size='small' />
            <CoffeContainer size='small' />
            <CoffeContainer size='small' />
          </div>
        </div>
      </div>
    </main>
  );
}
