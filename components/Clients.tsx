import React from "react";
import ClientsWebImg from "../assets/clients_web.webp";
import ClientsMobileImg from "../assets/clients_mobile.webp";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="flex justify-center items-center flex-col px-3 py-5 m-2 xl:px-15 xl:py-8 xl:m-4 select-none">
      <h4 className="pb-10 pt-4 text-xl font-normal xl:text-3xl tracking-widest text-center">
        Our Clients
      </h4>
      <div className="flex-1 text-right hidden md:block lg:block xl:block">
        <Image src={ClientsWebImg} alt={"clients"} priority />
      </div>
      <div className="flex-1 text-center md:hidden lg:hidden xl:hidden">
        <Image src={ClientsMobileImg} alt={"clients"} priority />
      </div>
    </div>
  );
};

export default Clients;
