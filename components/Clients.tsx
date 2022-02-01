import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import scorpioLogo from "../assets/client_logos/Client_logo_Scorpio.png"
import junosLogo from "../assets/client_logos/Client_logo_Junos.png"
import naturalsLogo from "../assets/client_logos/Client_logo_Naturals.png"
import rawLogo from "../assets/client_logos/Client_logo_Raw.png"
import caiLogo from "../assets/client_logos/Client_logo_Cai.png"
import silaLogo from "../assets/client_logos/Client_logo_Sila.png"
import sanjeevLogo from "../assets/client_logos/Client_logo_Sanjeev.png"
import advikLogo from "../assets/client_logos/Client_logo_Advik.png"
import kalkiLogo from "../assets/client_logos/Client_logo_Kalki.png"
import modLogo from "../assets/client_logos/Client_logo_MOD.png"
import peakscaleLogo from "../assets/client_logos/Client_logo_PeakScale.png"
import bestLogo from "../assets/client_logos/Client_logo_Best.png"
import { Autoplay } from "swiper";

interface ClientsLogos {
  image: StaticImageData;
  name: string;
}

const clientsData: ClientsLogos[] = [
  { image: scorpioLogo, name: "Scorpio" },
  { image: junosLogo, name: "Junos Pizza" },
  { image: naturalsLogo, name: "Naturals Icecream" },
  { image: rawLogo, name: "Raw Pressery" },
  { image: caiLogo, name: "CAI" },
  { image: silaLogo, name: "Sila" },
  { image: sanjeevLogo, name: "Sanjeev" },
  { image: advikLogo, name: "Advik" },
  { image: kalkiLogo, name: "Kalki" },
  { image: modLogo, name: "Mad Over Donuts" },
  { image: peakscaleLogo, name: "PeakScale" },
  { image: bestLogo, name: "Best" },
]

const Clients = () => {
  return (
    <div data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" className="flex justify-center items-center flex-col px-3 py-5 m-2 xl:px-15 xl:py-8 xl:m-4 select-none">
      <h4 className="pb-4 pt-4 text-xl font-normal xl:text-3xl tracking-widest text-center">
        Our Clients
      </h4>
      <div className="flex w-full flex-row justify-center items-center xl:px-16 lg:px-8">
        <Swiper
          navigation={false}
          pagination={false}
          spaceBetween={10}
          slidesPerView={5}
          autoHeight={true}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false
          }}
          modules={[Autoplay]}
        >
          {clientsData.map((client, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div className="flex justify-center items-center">
                  <Image src={client.image} width={200} height={200} alt={client.name} />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Clients;
