
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import imgData from './imgData.js'
import { Autoplay } from "swiper";
import useMediaQuery from '../../hooks/useMediaQuery'

const imgs = (props: any) => {

  const isDesktop = useMediaQuery('(min-width: 960px)');

  return (
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" className="flex justify-center items-center flex-col px-3 py-5 m-2 xl:px-15 xl:py-4 xl:m-2 select-none">

      <div className="relative flex w-full flex-row justify-center items-center xl:px-16 lg:px-8">
        <Swiper
          pagination={false}
          freeMode={false}
          navigation={false}
          spaceBetween={20}
          slidesPerView={isDesktop ? 5 : 1}
          autoHeight={true}
          loop={true}
          speed={props.speed}
          autoplay={{
            delay: props.delay,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {props.imgArray.map((img, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div className=" item-detail mx-20">
                  <Image className="rounded-lg" src={img.url} layout="fill" objectFit="contain" alt={img.alt} />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default imgs;
