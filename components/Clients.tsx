import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import sugalLogo from "../assets/client_logos/Client_logo_Sugal&Damani.png"
import accLogo from "../assets/client_logos/Client_logo_ACC.png"
import bdoLogo from "../assets/client_logos/Client_logo_BDO.png"
import boomLogo from "../assets/client_logos/Client_logo_Boom.png"
import khelLogo from "../assets/client_logos/Client_logo_Khel_Play.png"
import parazelsusLogo from "../assets/client_logos/Client_logo_Parazelsus.png"
import inradiusLogo from "../assets/client_logos/Client_logo_InRadius.png"
import scorpioLogo from "../assets/client_logos/Client_logo_Scorpio.png"
import caiLogo from "../assets/client_logos/Client_logo_Cai.png"
import socheersLogo from "../assets/client_logos/Client_logo_Socheers.png"
import unwrappedLogo from "../assets/client_logos/Client_logo_Unwrapped.png"
import socailkinnectLogo from "../assets/client_logos/Client_logo_Social_kinnect.png"
import foxyMoronLogo from "../assets/client_logos/Client_logo_Foxymoron.png"
import schbangLogo from "../assets/client_logos/Client_logo_Schbang.png"
import rawLogo from "../assets/client_logos/Client_logo_Raw.png"
import kalkiLogo from "../assets/client_logos/Client_logo_Kalki.png"
import kmgLogo from "../assets/client_logos/Client_logo_KMG.png"
import advikLogo from "../assets/client_logos/Client_logo_Advik.png"
import junosLogo from "../assets/client_logos/Client_logo_Junos.png"
import bestLogo from "../assets/client_logos/Client_logo_Best.png"
import nippoLogo from "../assets/client_logos/Client_logo_Best.png"
import naturalsLogo from "../assets/client_logos/Client_logo_Nippo.png"
import novitaLogo from "../assets/client_logos/Client_logo_Novita.png"
import { Autoplay } from "swiper";

interface ClientsLogos {
  image: StaticImageData;
  name: string;
}

const clientsData: ClientsLogos[] = [
  { image: sugalLogo, name: "SUGAL AND DAMANI" },
  { image: accLogo, name: "ACC" },
  { image: bdoLogo, name: "BDO" },
  { image: boomLogo, name: "BOOM" },
  { image: khelLogo, name: "KHEL PLAY" },
  { image: parazelsusLogo, name: "PARAZELSUS" },
  { image: inradiusLogo, name: "IN RADIUS" },
  { image: scorpioLogo, name: "Scorpio" },
  { image: caiLogo, name: "CAI" },
  { image: socheersLogo, name: "SOCHEERS" },
  { image: unwrappedLogo, name: "UNWRAPPED" },
  { image: socailkinnectLogo, name: "SOCIAL KINNECT" },
  { image: foxyMoronLogo, name: "FOXY MORON" },
  { image: schbangLogo, name: "SCHBANG" },
  { image: rawLogo, name: "Raw Pressery" },
  { image: kalkiLogo, name: "Kalki" },
  { image: kmgLogo, name: "KMG ROBUST" },
  { image: advikLogo, name: "Advik" },
  { image: junosLogo, name: "Junos Pizza" },
  { image: bestLogo, name: "Best" },
  { image: nippoLogo, name: "NIPPO" },
  { image: naturalsLogo, name: "Naturals Icecream" },
  { image: novitaLogo, name: "Novita" },
]

const Clients = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" className="flex justify-center items-center flex-col px-3 py-5 m-2 xl:px-15 xl:py-8 xl:m-4 select-none">
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
