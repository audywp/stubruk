import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '@/assets/logo.svg';
import Link from 'next/link';
import Button from '../button';
import { BiSearch } from 'react-icons/bi';
import { FiUser, FiShoppingBag } from 'react-icons/fi';

type TnavList = {
  title: string;
  isActive: boolean;
};

export default function Navbar() {
  const [navList, setNavList] = useState<TnavList[]>([
    {
      title: 'Menu',
      isActive: false,
    },
    {
      title: 'Trending',
      isActive: true,
    },
    {
      title: 'Rewards',
      isActive: false,
    },
    {
      title: 'Gift Cards',
      isActive: false,
    },
    {
      title: 'About',
      isActive: false,
    },
  ]);

  const handleNavChange = (idx: number) => {
    setNavList((prevState) => {
      prevState.forEach((_val, index) => {
        prevState[index].isActive = false;
      });

      prevState[idx].isActive = true;

      return [...prevState];
    });
  };

  return (
    <nav className='flex flex-row items-center justify-between'>
      <div className='flex flex-row items-center gap-32'>
        <div className='flex flex-row items-center gap-2'>
          <Image
            alt='stubruk'
            src={Logo}
          />
          <h1 className='font-extrabold text-xl'>STARBUCKS</h1>
        </div>
        <div>
          <ul className='flex flex-row items-center gap-8'>
            {navList.map((val, idx) => {
              return (
                <div
                  key={val.title + idx}
                  className='flex flex-col relative'
                >
                  <li
                    onClick={() => handleNavChange(idx)}
                    className={`${val.isActive ? 'text-primary' : ''} h-24 flex items-center justify-center`}
                  >
                    <Link href={'#'}>{val.title}</Link>
                  </li>
                  <div
                    className={`${
                      val.isActive ? 'h-1 w-full bg-primary rounded-tr-md rounded-tl-md' : ''
                    } absolute bottom-0`}
                  />
                </div>
              );
            })}
          </ul>
        </div>
      </div>

      <div className='flex flex-row items-center gap-4'>
        <div className='border-2 flex items-center rounded-md'>
          <input
            className='border-0 focus:outline-0 py-2 px-3'
            type='search'
            placeholder='Search'
          />
          <Button className='w-8 h-8 mr-1'>
            <BiSearch />
          </Button>
        </div>
        <div className='flex flex-row items-center gap-4'>
          <FiUser />
          <FiShoppingBag />
        </div>
      </div>
    </nav>
  );
}
