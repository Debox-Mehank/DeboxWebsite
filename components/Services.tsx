import React from "react";
import ConsultingImg from "../assets/homeservices_consulting.webp";
import MarketingImg from "../assets/homeslider/img2.webp";
import TechnologyImg from "../assets/homeservices_technology.webp";
import ServiceCard from "./reusable/ServiceCard";

interface ServicesData {
  img: StaticImageData;
  title: string;
  content: string;
  link: string;
}

const data: ServicesData[] = [
  {
    img: ConsultingImg,
    title: "Consulting",
    content:
      "We partner with you in building a sustainable business & culture with a people-first approach.",
    link: "/consulting",
  },
  {
    img: MarketingImg,
    title: "Marketing",
    content:
      "We partner with the industries best to cater to your Marketing needs through a single point of contact.",
    link: "/marketing",
  },
  {
    img: TechnologyImg,
    title: "Technology",
    content:
      "We partner with you in identifying key data sets to enable technology and data-driven decisions.",
    link: "/custom-solutions",
  },
];

const Services = () => {
  return (
    <div className="flex justify-center items-center flex-col px-3 py-5 m-2 xl:px-15 xl:py-8 xl:m-4 select-none">
      <h4 className="pb-10 pt-4 text-xl font-normal xl:text-3xl tracking-widest text-center">
        Our Services
      </h4>
      {/* <h4 className="pb-10 pt-4 text-2xl uppercase font-bold xl:text-3xl tracking-widest">
        Our Services
        <hr className="bg-primary border-primary border-2 rounded mx-14 lg:mx-16 mt-2" />
      </h4> */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12 xl:gap-14 xl:px-16 lg:px-8">
        {data.map((service, idx) => {
          return (
            <ServiceCard
              key={idx}
              img={service.img}
              title={service.title}
              content={service.content}
              link={service.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
