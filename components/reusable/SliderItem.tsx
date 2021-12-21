import Image from "next/image";
import React from "react";

interface SliderItemProps {
  img: StaticImageData;
  content: string;
  active?: boolean;
}

const SliderItem = ({ img, content, active = false }: SliderItemProps) => {
  return (
    <div
      className={`container w-full flex-col-reverse md:flex-row lg:flex-row flex-wrap justify-around items-center ${
        active ? "flex" : "hidden"
      }`}
    >
      <h4
        style={{ animation: "fadeLeft .4s linear .4s backwards" }}
        className="lg:text-3xl md:text-2xl text-lg flex-1 uppercase text-center lg:text-left md:text-start whitespace-pre-wrap font-medium"
      >
        {content}
      </h4>
      <div
        style={{ animation: "fadeUp .4s linear" }}
        className="flex-1 md:hidden block lg:block"
      >
        <Image src={img} alt={""} priority />
      </div>
      <div
        style={{ animation: "fadeUp .4s linear" }}
        className="flex-1 md:block lg:hidden hidden"
      >
        <Image src={img} width={450} height={450} alt={""} priority />
      </div>
    </div>
  );
};

export default SliderItem;
