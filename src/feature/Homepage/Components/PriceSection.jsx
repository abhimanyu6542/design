import React from 'react';
import { BsCheck } from 'react-icons/bs';

const PriceSection = () => {
  return (
    <>
      <div className="border-2 border-white priceSection h-[450px] mb-44 mt-10">
        <h1 className="heading font-bold font-roboto text-lg leading-6 text-center mt-28 ">
          Pricing
        </h1>
        <h1 className="text-center mt-7 text-4xl mx-5 font-bold font-rubik text-[#1D2130] leading-10 ">
          Simple pricing for your business
        </h1>
        <h1 className="text-center mt-7 mx-5 text-lg font-medium font-rubik text-[#1D2130] leading-8 ">
          Plan that is carefully crafted to suit your business.
        </h1>
        <div className="md:h-64 mt-16 md:mx-auto mx-5 flex flex-col md:flex-row justify-center items-center shadow-2xl rounded-xl md:w-[800px] w-auto bg-[#FFFFFF] md:flex md:justify-around">
          <div className="w-[40%] p-2 py-5 sm:p-9 mx-auto">
            <p className="font-extrabold leading-8 text-2xl text-[#171923]">Only at</p>
            <p className="font-extrabold leading-[60px] text-6xl text-[#171923]">$329</p>
            <p className="font-medium leading-7 text-lg text-[#171923]">billed per month</p>
            <button className="bg-black text-white px-10 sm:px-8 py-0 mt-2 sm:py-3 flex justify-center text-center text-lg font-roboto rounded-xl">
              Get Started
            </button>
          </div>
          <div className="w-[60%] p-2 sm:p-9">
            <p className="text-lg font-roboto leading-7 text-[#2D3748]">
              Access these features when you get this pricing package for your business.
            </p>
            <ul className="text-gray-500 text-lg lg:text-lg mt-2 font-medium">
              <li>
                <div className="flex flex-row text-lg font-roboto leading-7 text-[#2D3748]">
                  <BsCheck className="mr-2 mt-1 bg-[#373FFF] text-white rounded-full" />
                  International calling and messaging API
                </div>
              </li>
              <li>
                <div className="flex flex-row text-lg font-roboto leading-7 text-[#2D3748]">
                  <BsCheck className="mr-2 mt-1 bg-[#373FFF] text-white rounded-full" />
                  Additional phone numbers
                </div>
              </li>
              <li>
                <div className="flex flex-row text-lg font-roboto leading-7 text-[#2D3748]">
                  <BsCheck className="mr-2 mt-1 bg-[#373FFF] text-white rounded-full" />
                  Automated messages via Zapier
                </div>
              </li>
              <li>
                <div className="flex flex-row text-lg font-roboto leading-7 text-[#2D3748]">
                  <BsCheck className="mr-2 mt-1 bg-[#373FFF] text-white rounded-full" />
                  24/7 support and consulting
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default PriceSection;
