import { NextPage } from "next";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faCamera,
  faCartShopping,
  faChessRook,
  faDesktop,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/reusable/Button";

interface MarketingService {
  icon: IconDefinition;
  title: string;
  content: string;
}

const services_data: MarketingService[] = [
  {
    icon: faChessRook,
    title: "Marketing Strategy",
    content:
      "Marketing & Branding Strategy, Brand Positioning & Tonality, Logo & Branding, Competitive Research",
  },
  {
    icon: faThumbsUp,
    title: "Digital Marketing",
    content:
      "Social Media Marketing, SEO, Google, Online Reputation Management, Sales Campaigns",
  },
  {
    icon: faDesktop,
    title: "Websites",
    content:
      "Website Designing & Development, UI/UX, Keyword Planning, Website SEO, Website Monetization, Website Content",
  },
  {
    icon: faCartShopping,
    title: "E-Commerce Management",
    content:
      "E-Commerce Setup, E-Commerce Tie-Ups, E-Commerce Management & Marketing",
  },
  {
    icon: faCamera,
    title: "Photo & Video Shoots",
    content:
      "Brand & Product Shoots, Food Photography, Product Photography, Brand Videos",
  },
  {
    icon: faPrint,
    title: "Print & Outdoor",
    content:
      "Hoarding, Banners, Pamphlets, Restaurant Menu, Catalogs, Stationary, Corporate Identity, Printing",
  },
];

const Marketing: NextPage = () => {
  return (
    <div className="w-full">
      <div className="w-full h-screen bg-cover bg-center marketing-div"></div>
      <h4 className="text-center text-lg md:text-2xl lg:text-2xl xl:text-2xl whitespace-pre-wrap p-4 md:p-16 lg:p-16 xl:p-16 leading-9 tracking-wide">
        {
          "Over the years we have built solid relations with the best of the Digital Agencies across the globe. Through our industry network, we bring together the best of the industry to provide you with marketing solutions that focus on ROI and Growth and not just superficial social numbers. "
        }
      </h4>
      <div className="flex justify-center items-center flex-col gap-8 px-3 mt-2 xl:px-15 xl:mt-4 select-none bg-marketingBg">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 w-full py-8">
          <div className="flex flex-col justify-center items-center text-center p-5">
            <h4 className="text-2xl p-5 font-bold xl:text-3xl text-center text-primary">
              178
            </h4>
            <p className="text-sm font-light text-black">Projects Managed</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center p-5">
            <h4 className="text-2xl p-5 font-bold xl:text-3xl text-center text-primary">
              15
            </h4>
            <p className="text-sm font-light text-black">Geographies Catered</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center p-5">
            <h4 className="text-2xl p-5 font-bold xl:text-3xl text-center text-primary">
              198
            </h4>
            <p className="text-sm font-light text-black">Campaigns Delivered</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center p-5">
            <h4 className="text-2xl p-5 font-bold xl:text-3xl text-center text-primary">
              10.32
            </h4>
            <p className="text-sm font-light text-black">
              Return on Investment
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col px-3 py-5 m-2 xl:px-15 xl:py-8 xl:m-4 select-none">
        <h4 className="pt-4 text-xl font-normal xl:text-3xl tracking-widest text-center">
          Our Services
        </h4>
        <p className="text-center text-sm text-gray-400 whitespace-pre-wrap pt-2 px-2 md:px-14 lg:px-14 xl:px-14 pb-8">
          {
            "For a fast-growing business or brand finding the right marketing partner and managing multiple vendors can be time-consuming and chaotic. Basis of your marketing goals, we bring together the best in the industry to suit your requirements. We become your common thread to ensure there is a synergy amongst your vendors so the overall brand communication is in sync across all platforms.\n\nOur network has 22 Digital Media agencies impaneled across India, Singapore, Dubai, Canada, and the USA."
          }
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full gap-16 md:gap-28 lg:gap-32 xl:gap-32 md:px-32 lg:px-36 xl:px-40 mt-20 text-center">
          {services_data.map((service, idx) => {
            return (
              <div key={idx} className="flex justify-center items-center">
                <div className="w-20">
                  <FontAwesomeIcon
                    icon={service.icon}
                    size="3x"
                    className="text-primary"
                  />
                </div>
                <div className="flex flex-col justify-start flex-1 text-left">
                  <h4 className="text-sm md:text-lg lg:text-lg xl:text-lg my-2 uppercase">
                    {service.title}
                  </h4>
                  <p className="text-xs md:text-sm lg:text-sm xl:text-sm text-gray-400">
                    {service.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center items-center w-full mt-4 mb-12">
        <Button
          title="CHECK OUR PORTFOLIO"
          link="https://debox.co.in/marketing-portfolio/"
        />
      </div>
    </div>
  );
};

export default Marketing;
