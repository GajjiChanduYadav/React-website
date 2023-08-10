import React from 'react';
import { FaAngleDown, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';

const BodyHeader = () => {
  return (
    <div className='flex mt-10 w-full bg-gray-200 h-24 px-10'>
      <div className='flex items-center bg-blue-300 w-[18%] px-6 ml-20'>
        <img className='h-8' alt='logo' src='https://cdn-icons-png.flaticon.com/512/966/966313.png' />
        <span className='font-bold text-white ml-2'>Categories</span>
      </div>

      <div className='flex w-4/6 ml-28'>
        <ul className='flex gap-10'>
          <li className='flex items-center'>
            Home <FaAngleDown className='ml-1' />
          </li>
          <li className='flex items-center'>
            Shop <FaAngleDown className='ml-1' />
          </li>
          <li className='flex items-center'>
            Pages <FaAngleDown className='ml-1' />
          </li>
          <li className='flex items-center'>
            About
          </li>
          <li className='flex items-center'>
            Blog <FaAngleDown className='ml-1' />
          </li>
          <li className='flex items-center'>
            Contract
          </li>
        </ul>
      </div>

      <div className='flex items-center gap-4 w-1/6 ml-10'>
        <FaHeart />
        <FaShoppingCart />
        <FaUser />
      </div>
    </div>
  );
}

export default BodyHeader;
