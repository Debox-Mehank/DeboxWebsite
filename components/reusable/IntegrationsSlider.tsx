import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import gsuite from "../../assets/integrations/Integrations_1.png"
import zapier from "../../assets/integrations/Integrations_2.png"
import razorpay from "../../assets/integrations/Integrations_3.png"
import paypal from "../../assets/integrations/Integrations_4.png"
import zohobooks from "../../assets/integrations/Integrations_5.png"
import zohoworkdrive from "../../assets/integrations/Integrations_6.png"
import zohoinvoice from "../../assets/integrations/Integrations_7.png"
import twilio from "../../assets/integrations/Integrations_8.png"
import clickatell from "../../assets/integrations/Integrations_9.png"
import Image from 'next/image';

export interface Integration {
    name: string;
    image: StaticImageData;
}

const integrationsData: Integration[] = [
    { name: "gsuite", image: gsuite },
    { name: "zapier", image: zapier },
    { name: "razorpay", image: razorpay },
    { name: "paypal", image: paypal },
    { name: "zohobooks", image: zohobooks },
    { name: "zohoworkdrive", image: zohoworkdrive },
    { name: "zohoinvoice", image: zohoinvoice },
    { name: "twilio", image: twilio },
    { name: "clickatell", image: clickatell },
]

const IntegrationsSlider = () => {
    return <div className="flex justify-center items-center flex-col px-3 mt-2 xl:px-20 xl:mt-4 select-none bg-testimonialsBg">
        <h4 className="pt-8 text-xl font-normal xl:text-2xl tracking-widest text-center">
            Integrations
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
                {integrationsData.map((integration, idx) => {
                    return (
                        <SwiperSlide key={idx}>
                            <div className="flex justify-center items-center">
                                <Image src={integration.image} width={150} height={150} alt={integration.name} />
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    </div>;
};

export default IntegrationsSlider;
