import React from 'react';
import DashboardImage from '/assets/Dashboardimage.png';

const HeroSection = () => {
  return (
    <>
      {/* <div className='custom-gradient blur w-screen h-full pt-10 pb-40 border-0 rounded-full'> */}
      <div className="relative mt-44">
        <div className="relative h-[1000px] blur-3xl contrast-100  bg-gradient-to-r from-[#9BFFA5] via-[#AED3FF] to-[#C9D4EF]  border-0 rounded-full"></div>

        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-center mt-28 text-6xl font-bold font-rubik text-[#1D2130] leading-[61px]">
            Versatile POS Solutions for
          </h1>
          <h1 className="text-center top-[180px] text-6xl font-bold font-rubik text-[#1D2130] leading-[61px]">
            Every Business Setting
          </h1>
          <h1 className="text-center top-[180px] text-lg font-normal font-roboto text-[#1D2130] leading-7 mt-10">
            Whether you run a retail store, restaurant, or online business, Zinqler empowers you
          </h1>
          <h1 className="text-center top-[180px] text-lg font-normal font-roboto text-[#1D2130] leading-7">
            to thrive with its adaptable and comprehensive POS software.
          </h1>
          <div className="flex items-center justify-center w-full my-12 md:flex-row">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="text-base font-roboto font-normal leading-6 border-2 border-gray-400 rounded-s-xl outline-none w-96 p-4 mb-0 text-slate-400"
            />
            <button className=" text-white border-0 rounded-e-xl text-base font-roboto font-bold leading-6 w-auto p-[18px] bg-violet7 bg-black">
              Get free trial
            </button>
          </div>
          <div className="flex mt-6 justify-center items-center">
            <img src={DashboardImage} alt="dashboard" className="w-[1012px] h-[600px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

// bg-gradient-to-r from-[#D798E1] to-[#9BFFA5] to-[#AED3FF] to-[#C9D4EF] to-[#CACFFA] z-50
