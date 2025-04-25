"use client";

import gsap from "gsap";
import { useEffect, useState, RefObject } from "react";

interface Props {
  titleRef1: RefObject<HTMLHeadingElement | null>;
  titleRef2: RefObject<HTMLHeadingElement | null>;
  titleRef3: RefObject<HTMLHeadingElement | null>;
  titleRef4: RefObject<HTMLHeadingElement | null>;
}

const Titulo = ({ titleRef1, titleRef2, titleRef3, titleRef4 }: Props) => {
  const [fontSize, setFontSize] = useState("text-4xl");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setFontSize("text-2xl");
      } else if (window.innerWidth < 1024) {
        setFontSize("text-3xl");
      } else {
        setFontSize("text-4xl");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (
      titleRef1.current &&
      titleRef2.current &&
      titleRef3.current &&
      titleRef4.current
    ) {
      gsap.from(
        [
          titleRef1.current,
          titleRef2.current,
          titleRef3.current,
          titleRef4.current,
        ],
        {
          x: -100,
          y: -20,
          rotate: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }
  }, [titleRef1, titleRef2, titleRef3, titleRef4]);

  return (
    <div className="flex flex-col items-center px-4">
      <div className="flex flex-wrap gap-2 justify-center">
        <h1
          className={`${fontSize} font-bold text-white text-center`}
          ref={titleRef1}
        >
          Bienvenidos a
        </h1>
        <h1
          className={`${fontSize} font-bold text-white text-center`}
          ref={titleRef2}
        >
          mi
        </h1>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        <h1
          className={`${fontSize} font-bold text-white text-center`}
          ref={titleRef3}
        >
          Porfolio
        </h1>
        <h1
          className={`${fontSize} font-bold text-white web text-center`}
          ref={titleRef4}
        >
          web
        </h1>
      </div>
    </div>
  );
};

export default Titulo;
