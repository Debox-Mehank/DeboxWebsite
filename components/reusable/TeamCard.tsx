import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface TeamCardProps {
  image: StaticImageData;
  name: string;
  designation: string;
  desc: string;
  email: string;
  linkedin: string;
}

const TeamCard = ({
  image,
  name,
  designation,
  desc,
  email,
  linkedin,
}: TeamCardProps) => {
  return (
    <div className="px-2 md:px-20 lg:px-20 xl:px-20 flex flex-col justify-center items-center">
      <div className="hidden md:flex lg:flex xl:flex border-4 p-1 border-primary w-max rounded-full justify-center items-center transition hover:opacity-80 hover:bg-primary">
        <Image
          className="rounded-full"
          src={image}
          alt={name}
          width={220}
          height={220}
          objectFit="cover"
        />
      </div>
      <div className="flex md:hidden lg:hidden xl:hidden border-4 p-1 border-primary w-max rounded-full justify-center items-center transition hover:opacity-80 hover:bg-primary">
        <Image
          className="rounded-full"
          src={image}
          alt={name}
          width={180}
          height={180}
          objectFit="cover"
        />
      </div>
      <h4 className="text-lg md:text-2xl lg:text-2xl xl:text-2xl text-primary mt-4 tracking-widest">
        {name}
      </h4>
      <h4 className="text-sm md:text-base lg:text-base xl:text-base text-gray-400 mt-1">
        {designation}
      </h4>
      <p className="text-sm md:text-base lg:text-base xl:text-base text-gray-600 whitespace-pre-wrap mt-4">
        {desc}
      </p>
      <Link href={`mailto:${email}`}>
        <h4 className="text-sm md:text-base lg:text-base xl:text-base text-primary mt-4 hover:text-black">
          <FontAwesomeIcon icon={faEnvelope} className="mr-4" size="lg" />
          {email}
        </h4>
      </Link>
      <Link href={linkedin} replace={false}>
        <FontAwesomeIcon
          icon={faLinkedin}
          className="mt-2 text-gray-400 hover:text-blue-500"
          size="lg"
        />
      </Link>
    </div>
  );
};

export default TeamCard;
