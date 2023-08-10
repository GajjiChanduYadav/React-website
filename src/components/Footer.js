import React from 'react';

const Footer = () => {
  return (
    <div className="flex justify-evenly p-8  gap-2">

      <div className="flex flex-col items-center p-4  border border-gray-300 rounded">
        <img alt='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIbrgrA58stXud_PuctLY3c6bT3BjZEpPPdg&usqp=CAU' className="h-16"/>
        <h1 className="text-center font-semibold m-2">Fast & Secure</h1>
        <h1 className="text-center font-semibold">Delivery</h1>
      </div>

      <div className="flex flex-col items-center p-4 border border-gray-300 rounded">
        <img alt='logo' src='https://media.istockphoto.com/id/1356820159/vector/checkmark-on-a-white-background-blue-color-vector.jpg?s=612x612&w=0&k=20&c=M0TCzFHPaPS8DY6LcpPpq1h-xzRtTAVWHSeV3fZ7X0E=' className="h-16"/>
        <h1 className="text-center font-semibold m-2">100% Guarantee</h1>
        <h1 className="text-center font-semibold ">On Product</h1>
      </div>
           
      <div className="flex flex-col items-center p-4 border border-gray-300 rounded">
        <img alt='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUDXnak4ZZ1IjBRiZYBZ3Ivi3VR4E_WvvCNA&usqp=CAU' className="h-16"/>
        <h1 className="text-center font-semibold m-2">24 Hour Return</h1>
        <h1 className="text-center font-semibold">Policy</h1>
      </div>

      <div className="flex flex-col items-center p-4 border border-gray-300 rounded w-40">
        <img alt='logo' src='https://img.freepik.com/premium-vector/delivery-design_24877-37943.jpg' className=" h-24"/>
        <h1 className="text-center font-semibold m-2">24 Hours</h1>
        <h1 className="text-center font-semibold">Delivery</h1>
      </div>

      <div className="flex flex-col items-center p-4 border border-gray-300 rounded">
        <img alt='logo' src='https://static.vecteezy.com/system/resources/previews/010/575/107/original/packaging-icon-logo-illustration-box-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg' className="h-16"/>
        <h1 className="text-center font-semibold m-2">Next Level Pro</h1>
        <h1 className="text-center font-semibold">Quality</h1>
      </div>

    </div>
  );
}

export default Footer;
