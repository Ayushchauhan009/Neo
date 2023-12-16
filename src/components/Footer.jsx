import React from "react";
import { footerImage } from "../assets/images";

const Footer = () => {
  return (
    <footer className=" text-white pt-12 pb-36 px-5 lg:mx-[96px] xxl:mx-auto xxl:w-[1248px] my-5 lg:my-20 rounded-[20px] max-container">
      <div className="max-w-6xl mx-auto flex flex-col space-y-10 lg:space-y-0 lg:flex-row items-start">
        {/* Logo on the left side */}
        <div className="lg:w-[30%]">
          <img src={footerImage} alt="NeoTrader Logo" className=" h-auto" />
        </div>

        {/* Contact Form and Information on the right side */}
        <div className="w-[70%] flex flex-col lg:flex-row space-y-10 lg:space-y-0 justify-between lg:space-x-[80px]">
          {/* Contact Form */}
          <div className="flex flex-col">
            <h3 className=" font-medium mb-2 text-[24px] font-poppins">
              SEBI Registration No.
            </h3>
            <div className="flex text-[#9f9f9f] font-aileron flex-col">
              <p className="">INH000002285</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className=" font-medium mb-2 text-[24px] font-poppins">
              Address
            </h3>
            <div className="flex text-[#9f9f9f] font-aileron flex-col">
              <p className="">14th floor, 1402 Vikas Centre,</p>
              <p className="">Dr C G Rd, Chembur (E), Mumbai,</p>
              <p className=" mb-2">Maharashtra 400074</p>
             
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className=" font-medium mb-2 text-[24px] font-poppins">
              Contact Us
            </h3>
            <div className="flex text-[#9f9f9f] font-aileron flex-col">
              <p className="">+91-8779800688</p>
              <p className="">support@neotrader.in</p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer and Start Trading Section */}
      <div className="max-w-6xl block mx-auto mt-8 tracking-[4%]">
        <p className="font-aileron font-semibold text-[20px] mb-4 text-xl">
          Disclaimer:{" "}
          <span className="font-normal text-xl">
            Investments in securities market are subject to market risks, read
            all the related documents carefully before investing. Brokerage will
            not exceed SEBI prescribed limit. The securities are quoted as an
            example and not as a recommendation. SEBI Registration: INH000002285
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
