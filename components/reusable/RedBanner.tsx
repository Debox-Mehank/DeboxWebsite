import Link from "next/link";
import React from "react";

interface RedBannerProps {
  content: string;
  link: string;
  btn: string;
}

const RedBanner = ({ content, link, btn }: RedBannerProps) => {
  return (
    <div className="md:8 lg:8 p-8 bg-primary w-full 2xl:p-8 flex flex-col justify-center items-center">
      <h4 className="whitespace-pre-wrap text-center text-white text-sm md:text-lg lg:text-lg xl:text-2xl mb-4 font-light uppercase">
        {content}
      </h4>
      <div className="text-white bg-transparent font-semibold text-sm shadow-md cursor-pointer border border-white rounded-sm py-1.5 px-4 mt-3 lg:py-2 hover:text-primary hover:border-primary hover:bg-white w-max">
        <Link href={link}>{btn}</Link>
      </div>
    </div>
  );
};

export default RedBanner;
