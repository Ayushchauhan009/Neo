import React from "react";
import { checkMark, smartImages, stamp,   smartImagesMobile,
  stampMobile } from "../assets/images";

const SmartTrading = () => {
  return (
    <div className="max-container mt-[150px] lg:px-[96px] px-[20px] 2xl:mx-auto xxl:px-[156px] pt-[33px]">
      <div className=" lg:h-[650px]  bg-gradient-to-b from-fuchsia-800 to-gray-900 rounded-[30px] border border-zinc-300 border-opacity-20">
        <div className="lg:flex">
          <div className=" lg:w-[70%] lg:h-[650px] bg-gradient-to-b from-fuchsia-950 to-gray-900 rounded-tl-[30px] lg:rounded-tr-none rounded-tr-[30px] lg:rounded-bl-[30px] border border-zinc-300 border-opacity-20">
            <div className="lg:px-[27px] lg:py-[47px] py-5 px-3 w-[100%] lg:h-[200px] bg-transparent rounded-tl-[30px] lg:rounded-tr-none rounded-tr-[30px] border-zinc-300 border-b border-opacity-20">
              <div className="text-white lg:text-[32px] text-xl font-semibold font-['Poppins'] lg:leading-[41.60px] leading-relaxed whitespace-nowrap">
                Smart Trading. Smart Pricing.
              </div>
              <div className="text-white lg:text-2xl text-base font-normal font-['Aileron'] lg:leading-[33.60px] leading-snug lg:tracking-wide tracking-tight mt-3">Start your <span className="text-teal-400"> one-month subscription </span>  & unlock the secret of successful trading without breaking your bank. </div>
            </div>
            <div className="lg:px-[20px] lg:flex hidden lg:pt-4">
              <img src={smartImages} alt="" />
              <img src={stamp} alt="" />
            </div>
            <div className="lg:hidden flex py-4 px-[6px]">
              <img src={smartImagesMobile} alt="" />
              <img src={stampMobile} alt="" />
            </div>
            <div className="grid lg:grid-cols-1 lg:px-[27px] lg:py-[47px] px-3 py-8 lg:gap-x-6 lg:gap-y-4 gap-y-4">
              <div className="flex gap-x-2 items-center justify-start">
                <img src={checkMark} alt="" />
                <div className="text-white lg:text-xl text-base font-medium font-['Aileron'] capitalize lg:leading-[33.60px] leading-snug">
                  Trader Tool Kit & Trade Calculator - <span className="text-teal-400"> ₹10,000 </span>
                </div>
              </div>
              <div className="flex gap-x-2 items-center justify-start">
                <img src={checkMark} alt="" />
                <div className="text-white lg:text-xl text-base font-medium font-['Aileron'] capitalize lg:leading-[33.60px] leading-snug">
                  Access to Multiple session support - <span className="text-teal-400"> ₹60,000 </span>
                </div>
              </div>
              <div className="flex gap-x-2 items-center justify-start">
                <img src={checkMark} alt="" />
                <div className="text-white lg:text-xl text-base font-medium font-['Aileron'] capitalize lg:leading-[33.60px] leading-snug">
                  Dr CK Narayan's course - <span className="text-teal-400"> ₹30,000 </span>
                </div>
              </div>
              <div className="flex gap-x-2 items-center justify-start">
                <img src={checkMark} alt="" />
                <div className="text-white lg:text-xl text-base font-medium font-['Aileron'] capitalize lg:leading-[33.60px] leading-snug">
                  E- Book ( The Ultimate E-book for Trading Success) - <span className="text-teal-400">  ₹1,000 </span>
                </div>
              </div>

            </div>

          </div>
          <div className="flex flex-col justify-start   lg:py-[47px] lg:px-[25px] items-start lg:w-[30%] lg:h-[650px] px-4 py-5  bg-gradient-to-b from-fuchsia-950 to-gray-900 lg:rounded-tr-[30px] lg:rounded-bl-[0px] rounded-bl-[30px] rounded-br-[30px]  border border-zinc-300 border-opacity-20">
            <div className="text-white lg:text-[22px] text-xl font-bold font-['Aileron'] lg:leading-[33.60px] leading-7 whitespace-nowrap">Dedicated Customer Support</div>
            <ul className="list-disc lg:ml-8 ml-6 lg:mt-2 mt-3 lg:space-y-1 space-y-2">
              <li className="text-white lg:text-xl text-base font-normal font-['Aileron'] lg:leading-7 leading-tight">Phone & WhatsApp</li>
              <li className="text-white lg:text-xl text-base font-normal font-['Aileron'] lg:leading-7 leading-tight">Email Support</li>
              <li className="text-white lg:text-xl text-base font-normal font-['Aileron'] lg:leading-7 leading-tight">Strategy Support Session</li>
              <li className="text-white lg:text-xl text-base font-normal font-['Aileron'] lg:leading-7 leading-tight">Q & A Sessions</li>
              <li className="text-white lg:text-xl text-base font-normal font-['Aileron'] lg:leading-7 leading-tight">NeoTrader Community</li>
            </ul>
            <div className="text-white lg:text-xl text-base font-normal font-['Aileron'] leading-[30px] tracking-tight lg:mt-[100px] mt-[50px]">Total Value of all bonuses </div>
            <div className="text-white lg:text-[40px] text-[33px] font-bold font-['Aileron'] leading-10 tracking-wide line-through">₹ 1,00,000</div>
            <div className="text-white lg:text-xl text-base font-normal font-['Aileron'] leading-tight tracking-tight lg:mt-4 mt-2">You Pay only</div>
            <div>
              <span className="text-teal-400 lg:text-5xl text-[32px] font-bold font-['Aileron'] lg:leading-[48px] leading-loose tracking-wide">
                ₹ 7,999
              </span>
              <span className="text-teal-400 text-[32px] font-semibold font-['Aileron'] leading-loose tracking-wide">
                {" "}
              </span>
              <span className="text-teal-400 text-xl font-semibold font-['Aileron'] leading-tight tracking-tight">
                +GST
              </span>
            </div>

            <button className="lg:w-[250px] w-[150px] lg:h-16 h-10 lg:px-8 lg:py-4 bg-teal-400 hover:bg-transparent rounded-[50px] justify-center items-center gap-2.5 inline-flex text-black hover:text-teal-400 hover:border border-teal-400 lg:text-xl text-lg font-semibold font-['Poppins'] leading-relaxed tracking-tight lg:mt-10 mt-5">
              Start Trading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartTrading;
