import Image from "next/image";
import React from "react";
import { TestimonialData } from "../Testimonial";

const TestimonialCard = ({
  image,
  name,
  designation,
  logo,
  review,
}: TestimonialData) => {
  return (
    <>
      <div className="w-full block md:block lg:hidden xl:hidden">
        <div className="-mb-10 text-center">
          <Image
            className="rounded-md"
            src={image}
            alt="Madhur Ramani"
            width={90}
            height={90}
          />
        </div>
        <div className="bg-white py-4 pl-8 pr-14 shadow-md rounded-md">
          <h4 className="font-bold text-lg mt-6">{name}</h4>
          <p className="font-normal text-sm text-gray-400">{designation}</p>
          <p className="py-4 text-sm">{review}</p>
          <div className="w-full">
            <Image
              src={logo}
              alt="Peak Scale"
              width={150}
              height={100}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <div className="w-full hidden md:hidden lg:block xl:block">
        <div className="flex items-center max-w-5xl mx-auto">
          <div className="bg-white py-8 pl-8 pr-14 shadow-md rounded-md">
            <h4 className="font-bold text-xl">{name}</h4>
            <p className="font-normal text-base text-gray-400">{designation}</p>
            <br />
            <div className="w-full">
              <Image
                src={logo}
                alt={name}
                width={120}
                height={100}
                objectFit="contain"
              />
            </div>
          </div>
          <div className="text-center -ml-10">
            <Image
              className="rounded-md"
              src={image}
              alt={name}
              width={120}
              height={120}
            />
          </div>
          <p className="p-4 flex-1 text-sm">{review}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
