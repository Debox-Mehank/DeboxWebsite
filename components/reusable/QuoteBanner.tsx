import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

interface QuoteBannerProps {
  content: string;
  author: string;
  animation: string;
  offset: string;
}

const QuoteBanner = ({ content, author, animation, offset }: QuoteBannerProps) => {
  return (
    <div data-aos="" className="mt-12 md:8 lg:8 p-4 bg-primary w-full 2xl:p-8">
      <h4 className="whitespace-pre-wrap text-center text-white text-sm md:text-lg lg:text-lg xl:text-xl font-normal tracking-widest lg:px-20 xl:px-20">
        <FontAwesomeIcon
          icon={faQuoteLeft}
          className="text-white mr-4 mb-2"
          size="lg"
        />
        {content}
        <FontAwesomeIcon
          icon={faQuoteRight}
          className="text-white ml-4 lg:mb-2"
          size="lg"
        />
      </h4>
      <h4 className="my-0 whitespace-pre-wrap text-center text-white font-bold text-sm md:text-lg lg:text-lg xl:text-xl tracking-widest">
        {" - "}
        {author}
      </h4>
    </div>
  );
};

export default QuoteBanner;
