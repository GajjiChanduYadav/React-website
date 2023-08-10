import React from 'react';
import { FaAngleDown, FaShoppingBag, FaTv, FaHome, FaMedkit, FaCouch, FaCut, FaGem, FaCamera } from 'react-icons/fa';
import BodyContainer from './BodyContainer';
import RightBody from './RightBody';

const SideBar = () => {
  return (
    <div className='flex ' >
      <div className='w-[244px]  bg-white p-2 border border-gray-300 m-[118px] mt-0'>
        <ul className='text-center mt-[10px]'>
          <li className='flex items-center m-2 ml-6'>
            <FaShoppingBag className='mr-2' />
            Fashion <FaAngleDown className='ml-[78px]' />
          </li>

          <hr className='border-gray-300 my-1 mt-4' />

          <li className='flex items-center mb-2 m-4 ml-6'>
            <FaTv className='mr-2' />
            Electronics <FaAngleDown className='ml-[57px]' />
          </li>

          <hr className='border-gray-300 my-1 mt-4' />

          <li className='flex items-center mb-2 m-4 ml-6'>
            <FaHome className='mr-2' />
            Home Decor <FaAngleDown className='ml-[44px]' />
          </li>

          <hr className='border-gray-300 my-1 mt-4' />

          <li className='flex items-center mb-2 m-4 ml-6'>
            <FaMedkit className='mr-2' />
            Medicine
          </li>

          <hr className='border-gray-300 my-1 mt-4' />

          <li className='flex items-center mb-2 m-4 ml-6'>
            <FaCouch className='mr-2' />
            Furniture
          </li>

          <hr className='border-gray-300 my-1 mt-4' />

          <li className='flex items-center mb-2 m-4 ml-6'>
            <FaCut className='mr-2' />
            Crafts
          </li>

          <hr className='border-gray-300 my-1 mt-4' />

          <li className='flex items-center mb-2 m-4 ml-6'>
            <FaGem className='mr-2' />
            Accessories
          </li>

          <hr className='border-gray-300 my-1 mt-4' />

          <li className='flex items-center mb-2 m-4 ml-6'>
            <FaCamera className='mr-2' />
            Camera
          </li>
        </ul>
      </div>
      <BodyContainer/>
      <RightBody/>
    </div>
  );
}

export default SideBar;
