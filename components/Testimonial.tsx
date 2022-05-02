import React, { useState } from "react";
import TestimonialCard from "./reusable/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import testioneimg from "../assets/testione.webp";
import testitwoimg from "../assets/testitwo.webp";
import testithreeimg from "../assets/testithree.webp";
import testifourimg from "../assets/testifour.webp";
import testifiveimg from "../assets/testifive.webp";
import testisiximg from "../assets/testisix.webp";
import peakscale from "../assets/peakscale_logo.png";
import cai from "../assets/cai_logo.png";
import kalki from "../assets/kalki_logo.png";
import kaykay from "../assets/kaykay_logo.png";
import advik from "../assets/advik_logo.webp";
import junos from "../assets/junos_logo.png";
import { Autoplay } from "swiper";

export interface TestimonialData {
  image: StaticImageData;
  name: string;
  designation: string;
  logo: StaticImageData;
  review: string;
}

const testimonialData: TestimonialData[] = [
  {
    image: testioneimg,
    name: "Madhur Ramani",
    designation: "Founder\nPeakScale",
    logo: peakscale,
    review:
      "I have been working with Debox since a few years now - on some occasions as a client, and other times using them as a consulting partner. I have always found the Debox team to be very professional and reliable, delivering high quality work each time, and going out of their way to ensure client success.",
  },
  {
    image: testitwoimg,
    name: "Aradhana Minawala",
    designation: "Partner\nThe CAI Store",
    logo: cai,
    review:
      "Debox is very methodical in their ways. They not only understand the needs of the company but they take time and effort to speak to each employee and understand their needs and incorporate it within the work structure. Their re-structuring has already sorted our company in so many ways which has helped our business grow only because we have gotten structured so fast. They are the key solution to all problems and take care of each and every problem from start to finish!",
  },
  {
    image: testithreeimg,
    name: "Ritika Gupta",
    designation: "Director\nKalki Fashion",
    logo: kalki,
    review:
      "We had the privilege to work with Debox at Kalki they really helped us structure all our reports and also give a defined checklist and tasks for every team. Because of that, we can now quantify the work done in every department it has really helped us in improving our efficiency and productivity. They took tremendous effort in understanding how our business works and customize reports and requirements as per our needs.",
  },
  {
    image: testifourimg,
    name: "Abhishek Jagasia",
    designation: "Director\nKayKay Embroideries Pvt. Ltd",
    logo: kaykay,
    review:
      "Debox has been brutally honest in helping us understand where we stand and what we, as an Organization, need to do to function smoother and to focus on our growth. Growth isn’t possible without systems and processes and Debox has helped us drive the same consistently to help us achieve our organization goals. Thank you for all the work. Keep it going! Best of luck !",
  },
  {
    image: testifiveimg,
    name: "Amol Dagwade",
    designation: "CFO & CHRO\nAdvik Hi-Tech Pvt. Ltd.",
    logo: advik,
    review:
      "Debox has worked with Advik on multiple projects like Culture Survey, Salary & Benefits Benchmarking, Corporate Identity & is currently managing Corporate Communications. I am impressed with Debox way of working, being Director / Partner themselves take an active interest in the execution of work. Understanding the client’s business and finding the solution with a detail orientation is the USP of Debox. Through the association, we have gained a lot of insights & external perspective on how communication can be the differentiator. With Corporate Communication project with them, we have now structured our communication within and outside the organization which has led to positivity in the Work Environment & improvement in our Employer Brand Proposition.",
  },
  {
    image: testisiximg,
    name: "Aditya Shah",
    designation: "Partner\nJuno's Hospitality LLP",
    logo: junos,
    review:
      "Debox are very focused in their approach and data driven to achieve results. Working with them was a wonderful experience!",
  },
];

const Testimonial = () => {
  const [swiper, setSwiper] = useState<any>();
  return (
    <div className="flex justify-center items-center flex-col gap-8 px-3 pt-5 mt-2 xl:px-15 xl:py-8 xl:mt-4 select-none bg-testimonialsBg">
      <h4 className="pb-2 lg:pb-10 xl:pb-10 pt-4 text-xl font-normal xl:text-3xl tracking-widest text-center">
        Client Testimonials
      </h4>
      {/* Desktop */}
      <div className="flex w-full flex-row justify-center items-center xl:px-16 lg:px-8 pb-8 relative">
        <div className="absolute -left-2 lg:left-48 xl:left-48 z-10 top-0 bottom-0 flex justify-center items-center">
          <div
            onClick={() => {
              if (swiper.activeIndex > 0) {
                swiper.slideTo(swiper.activeIndex - 1)
              }
            }}
            className="bg-gray-400 rounded-full p-2 hover:bg-gray-500 text-white w-7 h-7 lg:w-10 lg:h-10 md:w-10 md:h-10 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 lg:w-6 lg:h-6 md:w-6 md:h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
        </div>
        <div className="absolute -right-2 lg:right-48 xl:right-48 z-10 top-0 bottom-0 flex justify-center items-center">
          <div
            onClick={() => {
              if (swiper.activeIndex < testimonialData.length) {
                swiper.slideTo(swiper.activeIndex + 1)
              }
            }}
            className="bg-gray-400 rounded-full p-2 hover:bg-gray-500 text-white w-7 h-7 lg:w-10 lg:h-10 md:w-10 md:h-10 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 lg:w-6 lg:h-6 md:w-6 md:h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
        <Swiper
          navigation={false}
          pagination={false}
          centeredSlides={true}
          spaceBetween={20}
          slidesPerView={1}
          onSwiper={(s) => setSwiper(s)}
          autoHeight={true}
          loop={true}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false
        // }}
        // modules={[Autoplay]}
        >
          {testimonialData.map((testimonial, idx) => {
            return (
              <SwiperSlide key={idx}>
                <TestimonialCard
                  name={testimonial.name}
                  image={testimonial.image}
                  designation={testimonial.designation}
                  logo={testimonial.logo}
                  review={testimonial.review}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
