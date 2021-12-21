import Link from "next/link";
import React, { MouseEventHandler } from "react";

interface ButtonProps {
  title: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  link?: string;
}

const Button = ({ title, onClick, link }: ButtonProps) => {
  return (
    <>
      {link ? (
        <div className="text-white bg-primary font-semibold text-sm shadow-md cursor-pointer rounded-sm py-1.5 px-4 mt-3 lg:py-2 hover:text-black hover:bg-gray-300 w-max uppercase">
          <Link href={link}>{title}</Link>
        </div>
      ) : (
        <div
          onClick={onClick}
          className="text-white bg-primary font-semibold text-sm shadow-md cursor-pointer rounded-sm py-1.5 px-4 mt-3 lg:py-2 hover:text-black hover:bg-gray-300 w-max uppercase"
        >
          {title}
        </div>
      )}
    </>
  );
};

export default Button;
