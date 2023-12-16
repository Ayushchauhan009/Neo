import React, { useEffect, useState } from "react";
import { checkbox, gradient, headerImage } from "../assets/images";

const Header = () => {
  const [text, setText] = useState("");
  const fullText = "Trade Better. Smarter. Faster.";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="pt-[100px]">
      <h1 className="text-center font-semibold text-white text-[24px] lg:text-[64px] font-poppins ">
        {text}
      </h1>
      <p className="font-aileron text-center text-white text-[16px] lg:text-[24px]">
        Unlocking profits by combining <br className="block lg:hidden" /> human
        expertise & AI
      </p>
      <div className="flex flex-col lg:flex-row pt-[39px] space-y-[16px] lg:space-y-0 lg:space-x-[38px] justify-center items-center text-[#33D6AD] font-aileron text-[26px]">
        <p className="flex space-x-3 items-center">
          <img src={checkbox} alt="" />
          <span>40+ Years of Experience</span>
        </p>
        <p className="flex space-x-3 items-center">
          <img src={checkbox} alt="" />
          <span>SEBI Registered</span>
        </p>
        <p className="flex space-x-3 items-center">
          <img src={checkbox} alt="" />
          <span>30,000+ Users</span>
        </p>
      </div>
      <div className="flex justify-center pt-[45px] pb-[20px] items-center">
        <button className="font-poppins hover:text-[#33D6AD] font-semibold text-black hover:bg-transparent transition-all bg-[#33D6AD] px-[32px] border py-[16px] rounded-[50px] border-[#33D6AD]">
          Start Trading
        </button>
      </div>
      <div className="flex items-center justify-center">
        <img src={headerImage} alt="" />
      </div>
    </div>
  );
};

export default Header;
