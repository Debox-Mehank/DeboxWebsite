import Image from "next/image";
import React from "react";
import OutlineButton from "./OutlineButton";

interface ServiceCardProps {
  img: StaticImageData;
  title: string;
  content: string;
  link: string;
}

const ServiceCard = ({ img, title, content, link }: ServiceCardProps) => {
  return (
    <div data-aos="fade-up-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" className="flex flex-col justify-between items-center p-3 gap-3 xl:p-4">
      <div className="hidden md:block lg:block">
        <Image src={img} alt={title} />
      </div>
      <div className="block md:hidden lg:hidden">
        <Image src={img} alt={title} width={250} height={250} />
      </div>
      <h4 className="font-medium text-xl text-center tracking-widest">
        {title}
      </h4>
      <p className="font-light text-sm text-center">{content}</p>
      <OutlineButton title={"Know More"} link={link} />
    </div>
  );
};

export default ServiceCard;
