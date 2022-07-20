import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";



// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function Carousel(props) {
    return (
        <>
            <Swiper
                className="shadow-2xl"
                pagination={{
                    type: "progressbar",
                }}
                freeMode={true}
                navigation={true}
                autoHeight={true}
                loop={true}
                speed={1500}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    waitForTransition: false
                }}
                modules={[Autoplay, Navigation]}
            >
                {props.imgArray.map((img, idx) => {
                    return (
                        <SwiperSlide key={idx}>
                            <div className="flex justify-center items-center">
                                <Image className="rounded-lg" src={img.url} width={800} height={600} alt={img.alt} />
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    );
}
