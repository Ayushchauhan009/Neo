import {
  Author,
  AutoScroll,
  Expertise,
  FixedButton,
  Footer,
  Header,
  Information,
  Navbar,
  Partners,
  Performance,
  TestimonialComponent,
  TradingExperience,
  TradeWinRepeat,
  Strategies,
  WhyNeo,
  SmartTrading,
  Faq,
  Scroll,
  MobileScroller,
} from "./components";
import {
  f1img,
  f2img,
  f3img,
  f4img,
  f5img,
  a1,
  a2,
  a3,
  a4,
} from "./assets/images";

import React from "react";
import ContactComponent from "./components/ContactComponent";

function App() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  // Add an event listener to update the state on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const images = [f1img, f2img, f3img, f4img, f5img];
  return (
    <div className="background h-auto">
      <Navbar />
      <Header />
      <AutoScroll images={images} title="Featured in" />
      <Author />
      {isMobile ? <MobileScroller images={[a1, a2, a3, a4]} /> : <Scroll />}

      <TradeWinRepeat />
      <Strategies />
      <WhyNeo />

      <Information />
      <Expertise />
      <Performance />
      <SmartTrading />

      <TestimonialComponent />
      <Partners />
      <Faq />

      <ContactComponent />
      <TradingExperience />
      <Footer />
      {/* To be Merged  */}

      {/* Till here  */}
      <FixedButton />
    </div>
  );
}

export default App;
