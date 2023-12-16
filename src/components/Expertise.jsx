import React from "react";
import { ex1, ex2, ex3, ex4, ex5, ex6 } from "../assets/images";

const Expertise = () => {
  return (
    <div>
      <h3 className="text-white mt-20 lg:mt-[150px] mb-[48px] text-center text-[28px] lg:text-5xl font-semibold font-['Poppins'] leading-[30px] lg:leading-[62.40px]">
        Your Need. <br className="block lg:hidden" /> Our Expertise.
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-container px-5 lg:px-[96px] 2xl:mx-auto ">
        <div className=" xxl:w-[400px] h-[245px] space-y-3 bg-gradient-to-b px-[18px] py-[30px] from-fuchsia-800 to-gray-900 rounded-[30px] border border-zinc-300 border-opacity-20">
          <img src={ex1} alt="" />
          <div className="px-[12px] space-y-3">
            <h4 className="font-aileron text-[22px] lg:text-[24px] font-semibold tracking-wide text-[#33d6ad]">
              SEBI Registered
            </h4>
            <p className="font-aileron text-[16px] lg:text-[18px]  text-white">
              Experience a reliable trading journey with SEBI registered software.
            </p>
          </div>
        </div>
        <div className=" xxl:w-[400px] h-[245px] space-y-3 bg-gradient-to-b from-fuchsia-800 px-[18px] py-[30px] to-gray-900 rounded-[30px] border border-zinc-300 border-opacity-20">
          <img src={ex2} alt="" />
          <div className="space-y-3">
            <h4 className="font-aileron text-[22px] lg:text-[24px] font-semibold tracking-wide text-[#33d6ad]">
              Trust & Legacy
            </h4>
            <p className="font-aileron text-[16px] lg:text-[18px]  text-white">
              Count on 40+ years of stock market expertise & legacy.
            </p>
          </div>
        </div>
        <div className=" xxl:w-[400px] h-[245px] space-y-2 bg-gradient-to-b from-fuchsia-800 to-gray-900 px-[18px] py-[30px] rounded-[30px] border border-zinc-300 border-opacity-20">
          <img src={ex3} alt="" />
          <div className="px-[12px] space-y-3">
            <h4 className="font-aileron text-[22px] lg:text-[24px] font-semibold tracking-wide text-[#33d6ad]">
              Seamless Interface
            </h4>
            <p className="font-aileron text-[16px] lg:text-[18px]  text-white">
              Effortless navigation ensures a
              user friendly, intuitive experience.
            </p>
          </div>
        </div>
        <div className=" xxl:w-[400px] h-[245px] space-y-3 bg-gradient-to-b from-fuchsia-800 px-[18px] py-[30px] to-gray-900 rounded-[30px] border border-zinc-300 border-opacity-20">
          <img src={ex4} alt="" />
          <div className=" space-y-3">
            <h4 className="font-aileron text-[22px] lg:text-[24px] font-semibold tracking-wide text-[#33d6ad]">
              Broking Partners
            </h4>
            <p className="font-aileron text-[16px] lg:text-[18px] text-white">
              Choose from leading brokers like Zerodha, 5paisa, Dhan & more.
            </p>
          </div>
        </div>
        <div className=" xxl:w-[400px] h-[245px] space-y-3 bg-gradient-to-b from-fuchsia-800 px-[18px] py-[30px] to-gray-900 rounded-[30px] border border-zinc-300 border-opacity-20">
          <img src={ex5} alt="" />
          <div className=" space-y-3">
            <h4 className="font-aileron text-[22px] lg:text-[24px] font-semibold tracking-wide text-[#33d6ad]">
              Dedicated Customer Service
            </h4>
            <p className="font-aileron text-[16px] lg:text-[18px] text-white">
              Receive guidance & prompt issue resolution instantly.
            </p>
          </div>
        </div>
        <div className=" xxl:w-[400px] h-[245px] space-y-3 bg-gradient-to-b from-fuchsia-800 px-[18px] py-[30px] to-gray-900 rounded-[30px] border border-zinc-300 border-opacity-20">
          <img src={ex6} alt="" />
          <div className=" space-y-3">
            <h4 className="font-aileron text-[22px] lg:text-[24px] font-semibold tracking-wide text-[#33d6ad]">
              Advisory Services
            </h4>
            <p className="font-aileron text-[16px] lg:text-[18px] text-white">
              Get access to a range of features & trades for brokers, sub-brokers & RMs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
