import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import RedBanner from "../components/reusable/RedBanner";
import YoutubeEmbed from "../components/reusable/YoutubeEmbed";
import CustomTable from "../components/reusable/CustomTable";
import c1 from "../assets/challenges_one.png";
import c2 from "../assets/challenges_two.png";
import c3 from "../assets/challenges_three.png";
import c4 from "../assets/challenges_four.png";
import kf_simple from "../assets/kf_simple.png";
import kf_autotriggers from "../assets/kf_autotriggers.png";
import kf_tracking from "../assets/kf_tracking.png";
import kf_dashboard from "../assets/kf_dashboard.png";
import smarttv from "../assets/smarttv.png";
import desktop from "../assets/desktop.png";
import mobile from "../assets/mobile.png";
import IntegrationsSlider from "../components/reusable/IntegrationsSlider";

const AgencyOperations = () => {
  const [annual, setAnnual] = useState(true);
  return (
    <div className="w-full">
      <div className="w-full h-screen bg-cover bg-center agency-operations-div"></div>
      {/* challenges */}
      <div className="flex justify-center items-center flex-col px-3 mt-2 xl:px-20 xl:mt-4 select-none bg-testimonialsBg">
        <h4 className="pt-8 text-xl font-normal xl:text-2xl tracking-widest text-center">
          Challenges faced in a Remote Working Environment
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 w-full pt-4 pb-8">
          <div className="flex flex-col justify-center items-center p-5">
            <div className="w-28 lg:w-32 xl:w-32">
              <Image src={c1} alt="Limited Tracking of Employee Productivity" />
            </div>
            <p className="text-base font-normal text-black text-center whitespace-pre-line">
              Limited Tracking of{"\n"}Employee Productivity
            </p>
          </div>
          <div className="flex flex-col justify-center items-center p-5">
            <div className="w-28 lg:w-32 xl:w-32">
              <Image src={c2} alt="Drop in Operational Efficiency" />
            </div>
            <p className="text-base font-normal text-black text-center whitespace-pre-line">
              Drop in{"\n"}Operational Efficiency
            </p>
          </div>
          <div className="flex flex-col justify-center items-center p-5">
            <div className="w-28 lg:w-32 xl:w-32">
              <Image src={c3} alt="Drop in Customer Satisfaction" />
            </div>
            <p className="text-base font-normal text-black text-center whitespace-pre-line">
              Drop in{"\n"}Customer Satisfaction
            </p>
          </div>
          <div className="flex flex-col justify-center items-center p-5">
            <div className="w-28 lg:w-32 xl:w-32">
              <Image src={c4} alt="Increase in Co-ordination Time" />
            </div>
            <p className="text-base font-normal text-black text-center whitespace-pre-line">
              Increase in{"\n"}Co-ordination Time
            </p>
          </div>
        </div>
      </div>
      {/* about our solution */}
      <div className="flex justify-center items-center flex-col px-3 py-5 m-2 xl:px-15 xl:m-4 select-none">
        <h4 className="pt-4 text-xl font-normal xl:text-2xl tracking-widest text-center mb-3">
          About our Solution
        </h4>
        <p className="text-center text-base text-black whitespace-pre-wrap pt-2 px-2 md:px-14 lg:px-14 xl:px-14 pb-8">
          {
            "Having worked with half a dozen well-known digital media agencies in India, we understand that a lot goes behind delivering successful & impactful campaigns that standout. Not to forget the chaos and fire-fighting that goes behind it."
          }
        </p>
        <p className="text-center text-base text-black whitespace-pre-wrap pt-2 px-2 md:px-14 lg:px-14 xl:px-14 pb-8">
          {
            "Our Agency Operations Solution brings out the best of our learnings on business, people & processes to organize the chaos and scale efficiently. The platform offers customized auto-triggered notifications and auto-generated reports to reduce the unproductive time investment thus improving productivity and client satisfaction."
          }
        </p>
      </div>
      {/* yt video */}
      <div className="flex justify-center items-center flex-col px-3 py-5 xl:px-15 select-none bg-testimonialsBg">
        <h4 className="pt-4 text-xl font-normal xl:text-2xl tracking-widest text-center mb-3">
          Manage Agency Operations Effectively
        </h4>
        <p className="text-center text-base text-black whitespace-pre-wrap pt-2 px-2 md:px-14 lg:px-14 xl:px-14 pb-8">
          {
            "Transforming how the life-cycle of a brief is managed from inception till execution in a smart digital way."
          }
        </p>
        <YoutubeEmbed videoUrl="https://www.youtube.com/embed/tPQWkF7KDP0" />
      </div>
      {/* Red Banner */}
      <RedBanner content="SCHEDULE A DEMO" link="/contact" btn="Contact Us" />
      {/* key features */}
      <div className="flex justify-center items-center flex-col px-3 xl:px-20 select-none bg-testimonialsBg">
        <h4 className="pt-8 text-xl font-normal xl:text-2xl tracking-widest text-center">
          Key Features
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 w-full pt-4 pb-8">
          <div className="flex flex-col justify-center items-center p-5">
            <div className="w-28 lg:w-32 xl:w-32">
              <Image src={kf_simple} alt="Simple & Easy to Use" />
            </div>
            <p className="text-base font-normal text-black text-center whitespace-pre-line">
              Simple{"\n"}& Easy to Use
            </p>
          </div>
          <div className="flex flex-col justify-center items-center p-5">
            <div className="w-28 lg:w-32 xl:w-32">
              <Image
                src={kf_autotriggers}
                alt="Auto Triggers, Notifications & Data Validation"
              />
            </div>
            <p className="text-base font-normal text-black text-center whitespace-pre-line">
              Auto Triggers, Notifications{"\n"}& Data Validation
            </p>
          </div>
          <div className="flex flex-col justify-center items-center p-5">
            <div className="w-28 lg:w-32 xl:w-32">
              <Image src={kf_tracking} alt="Better Productivity Tracking" />
            </div>
            <p className="text-base font-normal text-black text-center whitespace-pre-line">
              Better{"\n"}Productivity Tracking
            </p>
          </div>
          <div className="flex flex-col justify-center items-center p-5">
            <div className="w-28 lg:w-32 xl:w-32">
              <Image src={kf_dashboard} alt="Custom Dashboard & Reports" />
            </div>
            <p className="text-base font-normal text-black text-center whitespace-pre-line">
              Custom Dashboard{"\n"}& Reports
            </p>
          </div>
        </div>
      </div>
      {/* Pricing */}
      <div className="flex justify-center items-center flex-col select-none">
        <h4 className="pt-4 text-xl font-normal xl:text-2xl tracking-widest text-center mb-3 mt-4">
          CHOOSE A PLAN
        </h4>
        <div className="flex justify-center items-center gap-8 mt-4 mb-6 xl:mb-8 xl:mt-5">
          <div
            onClick={() => setAnnual(true)}
            className={`text-white ${annual ? "bg-primary" : "bg-greyButtonBg"
              } font-semibold text-sm shadow-md cursor-pointer rounded-sm px-4 mt-3 py-2 w-max uppercase`}>
            Annual
          </div>
          <div
            onClick={() => setAnnual(false)}
            className={`text-white ${annual ? "bg-greyButtonBg" : "bg-primary"
              } font-semibold text-sm shadow-md cursor-pointer rounded-sm px-4 mt-3 py-2 w-max uppercase`}>
            Bi-Annual
          </div>
        </div>
        {annual ? (
          <CustomTable
            title="All prices are monthly cost paid upfront annually"
            dc={["60,000", "85,000"]}
            mc={[
              ["Up to 100 users", "14,000", "20,000"],
              ["Up to 200 users", "24,000", "30,000"],
              ["Up to 300 users", "33,000", "39,000"],
            ]}
            mc_title="Monthly Subscription Charges:"
          />
        ) : (
          <CustomTable
            title="All prices are monthly cost paid upfront bi-annually"
            dc={["60,000", "85,000"]}
            mc={[
              ["Up to 100 users", "17,500", "25,000"],
              ["Up to 200 users", "30,000", "15,000"],
              ["Up to 300 users", "41,250", "48,750"],
            ]}
            mc_title="Monthly Subscription Charges:"
          />
        )}
      </div>
      {/* Roi Banner */}
      <div className="mt-2">
        <RedBanner
          content="KNOW HOW MUCH YOU CAN SAVE"
          link="/agency-operations-roi-calculator"
          btn="Calculate ROI"
        />
      </div>
      {/* Accessible */}
      <div className="flex justify-center items-center flex-col px-3 mt-2 xl:px-20 xl:mt-4 select-none">
        <h4 className="pt-8 text-xl font-normal xl:text-2xl tracking-widest text-center">
          Accessible From
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 w-full pt-4 pb-8">
          <div className="flex flex-col justify-center items-center p-5">
            <div className="w-28 lg:w-32 xl:w-32">
              <Image src={smarttv} alt="Smart Tv" />
            </div>
            <p className="text-base font-normal text-black text-center whitespace-pre-line">
              Smart Tv
            </p>
          </div>
          <div className="flex flex-col justify-center items-center p-5">
            <div className="w-28 lg:w-32 xl:w-32">
              <Image src={desktop} alt="Desktop" />
            </div>
            <p className="text-base font-normal text-black text-center whitespace-pre-line">
              Desktop
            </p>
          </div>
          <div className="flex flex-col justify-center items-center p-5">
            <div className="w-28 lg:w-32 xl:w-32">
              <Image src={mobile} alt="Mobile" />
            </div>
            <p className="text-base font-normal text-black text-center whitespace-pre-line">
              Mobile
            </p>
          </div>
        </div>
      </div>
      {/* Integrations */}
      <IntegrationsSlider />
      {/* Schedule Demo */}
      <div className="flex justify-center items-center flex-col px-3 m-2 xl:px-15 xl:py-8 xl:m-4 select-none">
        <h4 className="pt-4 text-xl font-normal xl:text-2xl tracking-widest text-center uppercase">
          Schedule A Demo
        </h4>
        <div className="text-black bg-transparent font-semibold text-sm shadow-md cursor-pointer border border-black rounded-sm py-1.5 mb-3 px-4 mt-4 lg:py-2 hover:text-primary hover:border-primary hover:bg-white w-max">
          <Link href={"/contact"}>Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default AgencyOperations;
