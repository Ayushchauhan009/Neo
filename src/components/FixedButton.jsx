import React from "react";

const FixedButton = () => {
  return (
    <div className="bg-[#292d35]">
      <div className="fixed bottom-0 footBg h-[100px] w-full py-4 z-50 opacity-100 flex justify-center items-center">
        <div className="max-w-6xl mx-auto lg:px-0 px-5 flex justify-between w-full items-center">
          <p className="text-white tracking-wide text-[16px] lg:text-[32px] font-aileron font-normal lg:font-bold capitalize">
            Begin Smart <br className="block lg:hidden" /> Trading Today!

          </p>
          <button className="font-poppins hover:text-[#fff] font-semibold text-[#17131e] hover:bg-[#17131e] transition-all bg-[#33D6AD] px-[32px] border py-[10px] rounded-[50px] hover:border-[#fff] border-[#17131e]">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FixedButton;
