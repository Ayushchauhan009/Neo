// HorizontalScrollerWithDots.js

import React, { useState, useRef, useEffect } from "react";

const HorizontalScrollerWithDots = ({ images, getTitle, getDescription }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageStyles, setImageStyles] = useState(
    images.map(() => ({ opacity: 1, marginLeft: "-50%" }))
  );

  const myRef = useRef();
  const contentRefs = images.map(() => myRef);

  const handleDotClick = (index) => {
    contentRefs[index].current.scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setActiveIndex(index);

          const newImageStyles = images.map((_, i) => ({
            opacity: i === index ? 1 : 0,
            marginLeft: i === index ? "0%" : "-50%",
          }));

          setImageStyles(newImageStyles);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    contentRefs.forEach((ref) => {
      observer.observe(ref.current);
    });

    return () => {
      observer.disconnect();
    };
  }, [contentRefs, images]);

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center transition-transform ease-in-out transform">
        {images.map((image, index) => (
          <div
            key={index}
            ref={contentRefs[index]}
            className={`flex-shrink-0 w-full h-[400px] overflow-hidden ${
              imageStyles[index].opacity === 1
                ? `opacity-100 ml-${imageStyles[index].marginLeft}`
                : "opacity-0"
            } transition-opacity p-4`}
          >
            <img src={image} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              activeIndex === index ? "bg-blue-500" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollerWithDots;
