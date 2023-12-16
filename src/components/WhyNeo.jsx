import React from "react";

const WhyNeo = () => {
  return (
    <div className="max-container lg:px-[96px] px-[20px] 2xl:mx-auto xxl:px-[156px] pt-[40px] lg:pt-[105px]">
      <div className="text-white lg:text-5xl text-[28px] font-semibold font-['Poppins'] text-center capitalize lg:leading-[62.40px] leading-9 lg:mb-12 mb-8">
        Why NeoTrader
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-8 gap-y-6 gap-x-0">
        <div className="lg:py-[42px] lg:px-[36px] py-8 px-4 w-full h-[194px] bg-gradient-to-b  from-fuchsia-950 to-gray-900 rounded-[30px] border border-zinc-300 border-opacity-20">
          <div className="text-teal-400 lg:text-2xl text-xl font-bold font-['Aileron'] lg:leading-[31.20px] leading-relaxed tracking-wide">
            1. Market View
          </div>
          <div className="h-14 text-zinc-400 lg:text-xl text-base font-normal font-['Aileron'] lg:leading-7 leading-snug tracking-tight lg:mt-5 mt-3">
            NeoTrader's Dashboard & Heatmap provides a daily market snapshot, simplifying the analysis of gainers
            & losers.
          </div>
        </div>
        <div className="lg:py-[42px] lg:px-[36px] py-8 px-4 w-full h-[194px] bg-gradient-to-b  from-fuchsia-950 to-gray-900 rounded-[30px] border border-zinc-300 border-opacity-20">
          <div className="text-teal-400 lg:text-2xl text-xl font-bold font-['Aileron'] lg:leading-[31.20px] leading-relaxed tracking-wide">
            2. Customised Trades
          </div>
          <div className="h-14 text-zinc-400 lg:text-xl text-base font-normal font-['Aileron'] lg:leading-7 leading-snug tracking-tight lg:mt-5 mt-3">
          The Analyst’s Zone offers pre-processed data & technical tools for crafting personalised trades, leveraging indicators & expert alerts.
          </div>
        </div>
        <div className="lg:py-[42px] lg:px-[36px] py-8 px-4 w-full h-[194px] bg-gradient-to-b  from-fuchsia-950 to-gray-900 rounded-[30px] border border-zinc-300 border-opacity-20">
          <div className="text-teal-400 lg:text-2xl text-xl font-bold font-['Aileron'] lg:leading-[31.20px] leading-relaxed tracking-wide">
            3. Stock Analyzer
          </div>
          <div className="h-14 text-zinc-400 lg:text-xl text-base font-normal font-['Aileron'] lg:leading-7 leading-snug tracking-tight lg:mt-5 mt-3">
          Stock Analyzer instantly access comprehensive information on any stock, including technical signals, news, fundamentals, & charts.
          </div>
        </div>
        <div className="lg:py-[42px] lg:px-[36px] py-8 px-4 w-full h-[194px] bg-gradient-to-b  from-fuchsia-950 to-gray-900 rounded-[30px] border border-zinc-300 border-opacity-20">
          <div className="text-teal-400 lg:text-2xl text-xl font-bold font-['Aileron'] lg:leading-[31.20px] leading-relaxed tracking-wide">
            4. Direct Execution
          </div>
          <div className="h-14 text-zinc-400 lg:text-xl text-base font-normal font-['Aileron'] lg:leading-7 leading-snug tracking-tight lg:mt-5 mt-3">
          NeoTrader's API integration with leading brokers like Zerodha, Dhan, 5 Paisa, Fyers & Alice Blue enables seamless trade execution without taking extra time.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyNeo;
