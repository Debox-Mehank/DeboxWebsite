import React, { useState } from "react";
import SliderItem from "./reusable/SliderItem";
import img1 from "../assets/homeslider/img1.webp";
import img2 from "../assets/homeslider/img2.webp";
import img3 from "../assets/homeslider/img3.webp";

interface SliderData {
  img: StaticImageData;
  content: string;
}

const data: SliderData[] = [
  {
    img: img1,
    content: "Spending too much\ntime in Process &\nPeople Management?",
  },
  {
    img: img2,
    content: "Spending too much\ntime managing multiple\nmarketing vendors?",
  },
  {
    img: img3,
    content: "Spending too much\ntime in manual data\ntracking & analysis?",
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="w-full flex justify-center items-center flex-col text-center font-bold p-4 md:px-18 lg:px-24 relative">
      {data.map((slide, idx) => {
        return (
          <SliderItem
            key={idx}
            img={slide.img}
            content={slide.content}
            active={index === idx ? true : false}
          />
        );
      })}
      <div className="absolute left-4">
        <div
          onClick={() => {
            setIndex((prev) => {
              return (prev - 1 + data.length) % data.length;
            });
          }}
          className="bg-gray-400 rounded-full p-2 hover:bg-gray-500 text-white w-7 h-7 lg:w-10 lg:h-10 md:w-10 md:h-10 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 lg:w-6 lg:h-6 md:w-6 md:h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={4}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
      </div>
      <div className="absolute right-4">
        <div
          onClick={() => {
            setIndex((prev) => {
              return (prev + 1) % data.length;
            });
          }}
          className="bg-gray-400 rounded-full p-2 hover:bg-gray-500 text-white w-7 h-7 lg:w-10 lg:h-10 md:w-10 md:h-10 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 lg:w-6 lg:h-6 md:w-6 md:h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={4}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Slider;
