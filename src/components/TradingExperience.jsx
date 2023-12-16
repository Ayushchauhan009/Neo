import React from "react";

const TradingExperience = () => {
  return (
    <div className="bg-[#33d6ad] mx-[96px] w-[90%]  xxl:mx-auto xxl:w-[1248px] text-[#131623] lg:my-20 rounded-[20px] max-container py-16">
      <div className="max-w-6xl px-8 lg:px-0 mx-auto text-center">
        <h2 className="text-[28px] lg:text-5xl font-poppins font-semibold lg:mb-2">
          Revolutionise Your Trading Experience
        </h2>
        <p className="text-[28px] lg:text-5xl font-poppins font-semibold lg:mb-5">
          With NeoTrader
        </p>
        <p className="text-xl font-aileron text-[#000f3b] mb-4 lg:mb-8">
          Unlock the doors to market mastery and redefine your trading journey!
        </p>
        <div className="flex justify-center items-center">
          <button className="font-poppins hover:text-[#33D6AD] font-semibold text-[#17131e] hover:bg-[#17131e] transition-all bg-[#33D6AD] px-[32px] border py-[16px] rounded-[50px] border-[#17131e]">
          Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default TradingExperience;
