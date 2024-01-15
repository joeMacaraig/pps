"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "react-feather";
import { clearInterval } from "timers";
type CarouselProps = {
  slides: string[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
};

export default function Carousel({
  slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}: CarouselProps) {
  const [curr, setCurr] = useState(0);
  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };
  useEffect(() => {
    if (!autoSlide) return;
    const slide = setInterval(next, autoSlideInterval);
    return () => clearInterval(slide);
  }, []);

  return (
    <div className="overflow-hidden relative w-[370px] sm:w-[500px]">
      <div
        className="flex transition-transform  ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((item, index) => (
          <Image key={index} src={item} alt="photos" width={500} height={500} />
        ))}
      </div>
      <div className="absolute w-[370px] sm:w-[500px] inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>
      <div className="asolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2 p-2">
          {slides.map((_, index) => (
            <div
              className={`transition-all w-3 h-3 bg-black rounded-full ${
                curr === index ? "" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
