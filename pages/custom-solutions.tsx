import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faChartLine,
  faFileLines,
  faListCheck,
  faMaximize,
  faSquarePollVertical,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RedBanner from "../components/reusable/RedBanner";
import transport from "../assets/transport_icon.png";
import prm from "../assets/PRM_icon.png";
import agency from "../assets/agency_icon.png";
import Image from "next/image";
import Link from "next/link";

interface OurProcess {
  icon: IconDefinition;
  title: string;
  content: string;
}

const process_data: OurProcess[] = [
  {
    icon: faSquarePollVertical,
    title: "Defining Metrics",
    content:
      "Deciding what to track and how to track in order to control & monitor the process through a few check points.",
  },
  {
    icon: faFileLines,
    title: "Designing Reports",
    content:
      "Designing Reports for different set of individuals to showcase the right data enabling faster decision making.",
  },
  {
    icon: faListCheck,
    title: "Creating Interlinks & Checkpoints",
    content:
      "Linking different data sets to make it more meaningful and creating check points to mitigate process risk.",
  },
  {
    icon: faChartLine,
    title: "Creating Dashboards",
    content:
      "Dashboards to help you analyse and track all critical activities from one single page. Deep-dive in details if something seems off the mark.",
  },
  {
    icon: faUserCheck,
    title: "Platform Training",
    content:
      "Training teams to help them use the platform faster and ensure success.",
  },
  {
    icon: faMaximize,
    title: "On-ground Implementation",
    content:
      "We provide implementation support to ensure that the team uses the platform extensively and that the planned results are achieved.",
  },
];

const CustomSolutionsPage = () => {
  return (
    <div className="w-full">
      <div className="w-full h-screen bg-cover bg-center custom-solutions-div"></div>
      {/* 4 grid section */}
      <div className="flex justify-center items-center flex-col gap-8 px-3 mt-2 xl:px-20 xl:mt-4 select-none bg-testimonialsBg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full py-8">
          <div className="flex flex-col justify-start p-5">
            <h4 className="text-base pb-4 font-semibold xl:text-xl tracking-widest text-primary">
              Better Tracking
            </h4>
            <p className="text-sm font-normal text-black">
              Many crucial processes within an organization are not accessible
              on the go (mobile). Our platform tracks and analyses data for such
              unattended and untracked processes.
            </p>
          </div>
          <div className="flex flex-col justify-start p-5">
            <h4 className="text-base pb-4 font-semibold xl:text-xl tracking-widest text-primary">
              Timely Course Correction
            </h4>
            <p className="text-sm font-normal text-black">
              We set data validations and check points that help in identifying
              red flags and take timely course correction, thus resulting in
              increase in overall productivity and organizational efficiency.
            </p>
          </div>
          <div className="flex flex-col justify-start p-5">
            <h4 className="text-base pb-4 font-semibold xl:text-xl tracking-widest text-primary">
              Informed Decision Making
            </h4>
            <p className="text-sm font-normal text-black">
              Data has a better Idea! Always. With data being tracked for
              crucial unattended process and available on cloud it is easier to
              check historic data, trends and take more informed business
              decisions.
            </p>
          </div>
          <div className="flex flex-col justify-start p-5">
            <h4 className="text-base pb-4 font-semibold xl:text-xl tracking-widest text-primary">
              Digital & Data Ready!
            </h4>
            <p className="text-sm font-normal text-black">
              In todays rapidly changing and competitive business environment,
              being Digital & Data ready is a priority. Not only does it give a
              competitive advantage but also impacts the Organizational Culture.
            </p>
          </div>
        </div>
      </div>
      {/* our process section */}
      <div className="flex justify-center items-center flex-col px-3 py-5 m-2 xl:px-15 xl:py-8 xl:m-4 select-none">
        <h4 className="pt-4 text-xl font-normal xl:text-3xl tracking-widest text-center">
          Our Process
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full gap-16 md:px-16 lg:px-16 xl:px-16 text-center mt-20">
          {process_data.map((process, idx) => {
            return (
              <div key={idx} className="flex justify-center items-center">
                <div className="w-20">
                  <FontAwesomeIcon
                    icon={process.icon}
                    size="3x"
                    className="text-primary"
                  />
                </div>
                <div className="flex flex-col justify-start flex-1 text-left">
                  <h4 className="text-sm md:text-lg lg:text-lg xl:text-lg my-2 uppercase">
                    {process.title}
                  </h4>
                  <p className="text-xs md:text-sm lg:text-sm xl:text-sm text-gray-400">
                    {process.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Red Banner */}
      <RedBanner
        content="Discuss Your Custom Requirements"
        link="/contact"
        btn="Contact Us"
      />
      {/* Existing Solutions */}
      <div className="flex justify-center items-center flex-col px-3 py-5 m-2 xl:px-15 xl:py-8 xl:m-4 select-none">
        <h4 className="pt-4 text-xl font-normal xl:text-3xl tracking-widest text-center">
          Existing Solutions
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full gap-8 xl:gap-16 md:px-16 lg:px-16 xl:px-16 text-center mt-8 mb-4 xl:mt-16 xl:mb-4">
          <Link href="/transport-operations">
            <div className="flex justify-center items-center gap-5 p-2 md:p-4 lg:p-4 xl:p-4 border border-dashed border-black rounded-sm hover:bg-testimonialsBg">
              <div className="w-20 md:w-24 lg:w-32 xl:w-32">
                <Image src={transport} alt="Transport Operations Management" />
              </div>
              <div className="flex flex-col justify-start flex-1 text-left">
                <h4 className="text-sm md:text-lg lg:text-lg xl:text-xl my-2 text-primary font-semibold">
                  Transport Operations Management
                </h4>
                <p className="text-xs md:text-base lg:text-base xl:text-base text-black">
                  Transforming the paper and coordination based Transport
                  industry by tracking core operations on a fully digitized
                  platform.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/performance-review-management">
            <div className="flex justify-center items-center gap-5 p-2 md:p-4 lg:p-4 xl:p-4 border border-dashed border-black rounded-sm hover:bg-testimonialsBg">
              <div className="w-20 md:w-24 lg:w-32 xl:w-32">
                <Image src={prm} alt="Performance Review Management" />
              </div>
              <div className="flex flex-col justify-start flex-1 text-left">
                <h4 className="text-sm md:text-lg lg:text-lg xl:text-xl my-2 text-primary font-semibold">
                  Performance Review Management
                </h4>
                <p className="text-xs md:text-base lg:text-base xl:text-base text-black">
                  Transforming the most time-consuming and unproductive parts of
                  the performance management process on a single & easy to use
                  platform.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/agency-operations">
            <div className="flex justify-center items-center gap-5 p-2 md:p-4 lg:p-4 xl:p-4 border border-dashed border-black rounded-sm hover:bg-testimonialsBg">
              <div className="w-20 md:w-24 lg:w-32 xl:w-32">
                <Image src={agency} alt="Agency Operations Management" />
              </div>
              <div className="flex flex-col justify-start flex-1 text-left">
                <h4 className="text-sm md:text-lg lg:text-lg xl:text-xl my-2 text-primary font-semibold">
                  Agency Operations Management
                </h4>
                <p className="text-xs md:text-base lg:text-base xl:text-base text-black">
                  Transforming how the life-cycle of a brief is managed from
                  inception till execution in a smart digital way.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* Schedule Demo */}
      <div className="flex justify-center items-center flex-col px-3 m-2 xl:px-15 xl:py-8 xl:m-4 select-none">
        <h4 className="pt-4 text-xl font-normal xl:text-3xl tracking-widest text-center uppercase">
          Schedule A Demo
        </h4>
        <div className="text-black bg-transparent font-semibold text-sm shadow-md cursor-pointer border border-black rounded-sm py-1.5 mb-3 px-4 mt-4 lg:py-2 hover:text-primary hover:border-primary hover:bg-white w-max">
          <Link href={"/contact"}>Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default CustomSolutionsPage;
