import React, { useState } from "react";
import ClearObjectiveImg from "../assets/clear_objectives.webp";
import RightPeopleImg from "../assets/right_people.webp";
import EfficientProcessImg from "../assets/efficient_process.webp";
import EffectiveCommunicationImg from "../assets/effective_communication.webp";
import EstablishedValuesImg from "../assets/established_values.webp";
import BeignDigitalImg from "../assets/beign_digital.webp";
import EssentialButton from "./reusable/EssentialButton";
import Image from "next/image";
import OutlineButton from "./reusable/OutlineButton";
import { Swiper, SwiperSlide } from "swiper/react";

interface EssentialData {
  title: string;
  heading: string;
  body: string;
  img: StaticImageData;
}

const data: EssentialData[] = [
  {
    title: "Clear Objectives",
    heading: "What problem is your organization trying to solve & Why?",
    body: "Setting Goals is the first step of turning the Invisible into Visible. A Shared Goal & Purpose binds everyone together! We partner with your organization in unearthing the core purpose of your business, articulating it & communicating it to all the stakeholders. We work along with you in defining your business objective & aligning them to your People strategy thus ensuring everyone, everywhere, everyday is working towards a Common Goal!",
    img: ClearObjectiveImg,
  },
  {
    title: "Right People",
    heading:
      "Do you believe the key to a sustainable business is through your people?",
    body: "We believe in the saying - People first, then Profits. People are the most crucial part of any business and are the key driving factor of how successful a business will be. We work with your organization in designing an inclusive & People centric culture. We lay the fundamentals of your People Strategy right from recommending the most suitable Organization Structures, Hierarchies, Pay Policy to designing initiatives for attracting, engaging, rewarding & retaining your Human Capital.",
    img: RightPeopleImg,
  },
  {
    title: "Efficient Process",
    heading: "Is the success of your organization happening as a process?",
    body: "If your people can't describe what they are doing as a process, they haven't really understood what they are doing. We work with your organization in studying & revisiting the current set of structured, unstructured steps, activities followed. Basis the finding of the exercise we evaluate the relevance & effectiveness of your current practices & benchmark with industry to create well defined Processes, SOPs, Checklists & Workflows.",
    img: EfficientProcessImg,
  },
  {
    title: "Effective Communication",
    heading: "Are people in your organization feeling connected & involved?",
    body: "Communication is the key to all the good relationships in the world. We partner with you in designing communication channels that are 'HOT' H-Honest, O-Open & T-Two-Way. We design & deploy an Annual Communication Calendar to ensure your organization has relevant, engaging & ongoing means of communications to keep your people connected & involved.",
    img: EffectiveCommunicationImg,
  },
  {
    title: "Established Values",
    heading:
      "Are your people aware of the non-negotiables to your organization?",
    body: "When your values are clear to you, making decisions becomes easier. Values are formed by the deeply held beliefs that describes your Organizational Culture. We work on unearthing the existing organizational values & build a strong Value Manifesto. The manifesto provides clarity on the Do's & the Don'ts, the negotiables & the non-negotiables to your organization. This helps in setting the right expectations with everyone.",
    img: EstablishedValuesImg,
  },
  {
    title: "Beign Digital",
    heading:
      "Does your organization have the capability of being Digital & Data ready?",
    body: "In today's rapidly changing and competitive business environment, being Digital & Data ready is a priority. We partner & hand hold your organization in your Digital journey. We work along with you in defining, tracking & analysing the key business parameters on a Digital platform. We design Digital solutions that are sustainable, scalable & enables your organization with data driven decisions.",
    img: BeignDigitalImg,
  },
];

const Essentials = () => {
  const [selected, setSelected] = useState(0);
  const [swiper, setSwiper] = useState<any>();

  return (
    <div className="flex justify-center items-center flex-col gap-8 px-3 pt-5 m-2 xl:px-15 xl:py-8 xl:m-4 select-none">
      <h4 className="pt-4 text-xl font-normal xl:text-3xl tracking-widest text-center">
        6 Essentials to build a Sustainable Bussiness
      </h4>
      {/* Buttons */}
      <div className="flex-row space-x-2 justify-center items-center xl:px-16 lg:px-8 hidden md:flex lg:flex xl:flex">
        {data.map((essential, idx) => {
          return (
            <EssentialButton
              key={idx}
              title={idx + 1 + ". " + essential.title}
              onClick={() => {
                swiper.slideTo(idx);
              }}
              active={swiper ? swiper.activeIndex === idx : false}
            />
          );
        })}
      </div>
      <div className="xl:px-16 lg:px-8 w-full">
        <Swiper
          navigation={false}
          pagination={false}
          centeredSlides={true}
          slidesPerView={1}
          onSlideChange={(swiper) => setSelected(swiper.activeIndex)}
          onSwiper={(s) => setSwiper(s)}
        >
          {data.map((essential, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 md:gap-20 lg:gap-20 xl:gap-20 justify-center items-center`}
                >
                  <div
                    className="flex-1 flex flex-col items-start"
                    style={{ animation: "fadeLeft .4s linear .4s backwards" }}
                  >
                    <h4 className="text-sm lg:hidden xl:hidden font-bold">
                      {idx + 1 + ". " + essential.title}
                    </h4>
                    <h4 className="text-base lg:text-2xl xl:text-2xl font-light mb-3 lg:mb-8 xl:mb-8">
                      {essential.heading}
                    </h4>
                    <p className="text-sm lg:text-base xl:text-base text-gray-400">
                      {essential.body}
                    </p>
                  </div>
                  <div
                    className="flex-1 text-right hidden md:block lg:block xl:block"
                    style={{ animation: "fadeUp .4s" }}
                  >
                    <Image
                      src={essential.img}
                      alt={essential.title}
                      width={400}
                      height={400}
                    />
                  </div>
                  <div
                    className="flex-1 text-center md:hidden lg:hidden xl:hidden"
                    style={{ animation: "fadeUp .4s" }}
                  >
                    <Image
                      src={essential.img}
                      alt={essential.title}
                      width={250}
                      height={250}
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* Indicators */}
      <div className="flex justify-center items-center flex-row space-x-1">
        {data.map((_, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                swiper.slideTo(idx);
              }}
              className={
                swiper
                  ? `border-2 rounded-full w-2 h-2 ${
                      swiper.activeIndex === idx
                        ? "border-transparent bg-primary"
                        : "border-primary"
                    }`
                  : `border-2 rounded-full w-2 h-2 border-primary`
              }
            ></div>
          );
        })}
      </div>
      <OutlineButton title={"Contact Us"} link={"/contact"} />
    </div>
  );
};

export default Essentials;
