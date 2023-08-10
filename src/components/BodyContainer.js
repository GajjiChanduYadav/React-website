import React from 'react'
import {  FaArrowRight } from 'react-icons/fa';

const BodyContainer = () => {
  return (
    <div className=' p-12 w-[700px] h-[425px] bg-gray-100 border flex mt-10  items-center '>

      <div className='flex items-center mb-28 absolute'>
        <div>
            <img  className= 'w-10' alt='logo' 
                src='https://static.vecteezy.com/system/resources/previews/007/081/002/original/phone-device-smart-app-business-watch-brand-cellphone-telephone-free-vector.jpg'
            />
        </div> 
        <div className='p-2'>
            <span className='text-red-500 font-bold'>Smartwatch</span>
        </div>    
      </div>

      <div className='mt-16 p-2 w-3/6'>
        <h1 className='text-3xl font-bold'>Bloosom</h1>
        <h1 className=' text-3xl pt-2 font-bold whitespace-nowrap'>Smart Watch</h1>
        <p className='flex items-center pt-2 '>
          Shop now <FaArrowRight className='ml-1' />
        </p>
        <hr className='border-t-2 border-gray-700 w-20 font-bold' />
  
      </div>
      
         
       <div className='ml-4 '>
            <img   alt='logo' className=''
            src='https://img.freepik.com/premium-psd/realistic-smart-watch-mockup_165789-538.jpg'/>
           
        </div>


      
    </div>
  )
}

export default BodyContainer;
