import React, { useEffect, useRef, useState } from "react";
import { test1, test2, test3, part1 } from "../assets/images";
import classNames from "classnames";

const points = [
  { name: "Point 1", image: test1 },
  { name: "Point 2", image: test2 },
  { name: "Point 3", image: test3 },
  { name: "Point 4", image: part1 },
];

const App = () => {
  const [activePoint, setActivePoint] = useState(0);
  const [showImage, setShowImage] = useState(false);

  const pointsRefs = useRef(points.map(() => React.createRef()));

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setActivePoint(index);
        setShowImage(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    });

    pointsRefs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleDotClick = (index) => {
    setActivePoint(index);
    setShowImage(true);
    if (pointsRefs.current[index] && pointsRefs.current[index].current) {
      pointsRefs.current[index].current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Your scroll logic here
      // For example, you can increment/decrement the activePoint based on scroll direction
      // and call handleDotClick to update the view accordingly.
    };

    document.addEventListener("wheel", handleScroll);

    return () => {
      document.removeEventListener("wheel", handleScroll);
    };
  }, []); // Ensure the event listener is added and removed only once

  return (
    <div className="h-screen ">
      <div className="flex items-center justify-center">
        {points.map((point, index) => (
          <div
            key={index}
            ref={pointsRefs.current[index]}
            className={classNames("point", {
              "active-point": activePoint === index,
            })}
          >
            {point.name}
          </div>
        ))}
        <div className="flex-1">
          {showImage && (
            <img
              src={points[activePoint].image}
              alt={`Point ${activePoint + 1} Image`}
              className="w-553 h-313 float-right"
            />
          )}
        </div>
      </div>

      <div className="navigation-dots">
        {points.map((_, index) => (
          <div
            key={index}
            className={classNames("dot", {
              "active-dot": activePoint === index,
            })}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
