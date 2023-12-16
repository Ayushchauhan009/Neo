import React from "react";
import { contactImage, call, msg, location } from "../assets/images";

const ContactComponent = () => {
  return (
    <div className="mt-[40px] lg:mt-[150px] max-container px-5 lg:px-[96px] 2xl:mx-auto xxl:px-[146px]">
      <div className="max-w-6xl mx-auto py-12 flex flex-col-reverse lg:flex-row items-center">
        {/* Image on the left side */}
        <div className="w-auto lg:w-1/2">
          <img
            src={contactImage}
            alt="NeoTrader Team"
            className="rounded-lg w-full h-[367px]"
          />
        </div>

        {/* Text content on the right side */}
        <div className="w-auto lg:w-1/2 text-center lg:text-left lg:px-8">
          <h2 className="text-[28px] lg:text-[32px]  font-aileron text-white font-bold mb-2">
            Your Success. <br className="block lg:hidden" /> Our Support.
          </h2>
          <p className="text-white font-aileron mt-[20px] lg:mt-0 text-[16px] lg:text-[20px]">
            The NeoTrader Team stands as your unwavering support, guiding you
            through every market endeavour with expertise and dedication,
            ensuring your success in the trading realm. With their constant
            presence and commitment, the NeoTrader Team is your reliable ally,
            ready to assist and empower you in your trading journey.
          </p>

          {/* Contact Information */}
          <div className="mt-4">
            <p className="text-xl text-white hidden lg:block">For more info:</p>
            <div className="flex text-[18px] font-aileron items-center justify-start lg:space-x-5">
              <p className="text-[#bababa] hidden lg:flex items-center">
                <span className="mr-2">
                  <img src={call} alt="" />
                </span>
                +91-8779800688 / 8169111411
              </p>
              <p className="text-center text-[#bababa] block lg:hidden">
                Contact us at +91-8779800688/8169111411
              </p>
              <p className="underline text-[#33d6ad]">
                <a
                  href="mailto:support@neotrader.in"
                  className="hidden lg:flex items-center "
                >
                  <span className="mr-2">
                    <img src={msg} alt="" />
                  </span>{" "}
                  support@neotrader.in
                </a>
              </p>
            </div>
            <p className="hidden lg:flex items-center text-[#bababa] font-aileron">
              {" "}
              <span className="mr-2">
                <img src={location} alt="" />
              </span>
              14th floor, 1402 Vikas Centre, Dr C G Rd, Chembur (E), Mumbai,
              Maharashtra 400074
            </p>
            <p className="text-center font-aileron text-[#bababa] block lg:hidden">
              or email at{" "}
              <a
                href="mailto:support@neotrader.in"
                className="underline text-[#33d6ad]"
              >
                support@neotrader.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
