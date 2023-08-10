import React from 'react'
import {FaSearch,FaAngleDown} from 'react-icons/fa'
const Header = () => {
  return (
    <div className='grid grid-flow-col mt-8 gap-4 '>

       <div className=' flex items-center ml-32 '>
        <img className='h-14' alt='logo' src='https://img.freepik.com/free-icon/diamond_318-195445.jpg'/>
        <h1 className='font-bold text-2xl p-2 text-blue-500'>eTrade</h1>
       </div>

       <div className='flex w-[800px] rounded border ml-10 '>
          <button className="px-4 py-2 w-10">{<FaSearch/>}</button>
          <input className='w-[800px] outline-none' type='text' placeholder='What are you looking for...'/>  
       </div>

       <div className='flex gap-2 '>
           <button className='px-4 py-2 flex items-center border border-gray-300'>
                USD <FaAngleDown className='ml-1' />
            </button>
            <button className='px-4 py-2 flex items-center border border-gray-300'>
                 EN <FaAngleDown className='ml-1' />
            </button>
      </div>

    </div>
  )
}

export default Header;
