import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "../assets/404.png";

const PageNotFound: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center p-5 mt-20">
      <Image
        src={img}
        alt="Page not found"
        width={350}
        height={350}
        className="mt-5"
      />
      <h4 className="font-bold text-black text-3xl -mt-16">Page Not Found</h4>
      <div className="mt-5 text-base bg-primary py-2 px-3 rounded-md text-white">
        <Link href={"/"}>Go Back</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
