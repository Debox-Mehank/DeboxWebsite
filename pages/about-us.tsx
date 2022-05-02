import Image from "next/image";

import results from "../assets/about/results.svg";
import ownership from "../assets/about/ownership.svg";
import commitment from "../assets/about/commitment.svg";
import empowerment from "../assets/about/empowerment.svg";
import mission from "../assets/about/mission.png";
import vision from "../assets/about/vision.png";

export default function AboutUs() {
  const values = [
    {
      name: "RESULTS",
      content:
        "We clearly focus on the financial & non-financial value we would be adding through our services and the end benefit we would be delivering for all the stakeholders involved.",
      svg: results,
      letter: "R",
    },
    {
      name: "OWNERSHIP",
      content:
        "We put ourselves in the shoes of our clients and drive the projects as we would do it if it was our own business",
      svg: ownership,
      letter: "O",
    },
    {
      name: "COMMITMENT",
      content:
        "We commit to the fullest and are focused on driving success even it requires us to go over and above the scope of work to achieve the same.",
      svg: commitment,
      letter: "C",
    },
    {
      name: "EMPOWERMENT",
      content:
        "We fully empower and trust in our people and give them opportunities and information necessary for them to excel.",
      svg: empowerment,
      letter: "E",
    },
  ];

  return (
    <main className="mx-auto font-normal">
      <div className="h-screen bg-cover bg-center about-div mb-8"></div>

      <div className="text-xl">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="px-4 md:px-12 lg:px-40"
        >
          <p className="mb-6">
            The name Debox stands for '
            <span className="border-red-700 border-b-2">Out of the Box</span>'.
          </p>
          <p className="mb-6">
            We believe in doing things differently, we believe in challenging
            the status quo and breaking the normal. We believe in delivering
            performance that stands out and gets noticed. We are a boutique
            consulting firm that focuses on designing holistic and measurable
            business solutions. We partner with businesses to build a
            Sustainable Growth path through synergies of People, Processes and
            Technology.
          </p>
          <p className="mb-6">
            Founded in 2017, we have delivered exceptional results for our
            clients be it Consulting, Marketing or Custom Tech. We have built a
            solid trust amongst our clients and have a high customer referral
            rate and we take pride in the same.
          </p>
        </div>

        {/* Divider */}
        <div className="pt-4">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        {/*Divider End */}

        <div className="md:flex align-baseline text-justify">
          <div className="text-justify p-4 text-last-left md:flex-1 flex flex-col items-start gap-6 bg-primary  text-white xl:px-40 xl:py-12">
            <Image src={mission} width={75} height={75}></Image>
            <p className="">
              <span className="font-bold">OUR MISSION</span>
            </p>
            <p>
              To be a trusted name in our field of operations known for
              delivering exceptional results and unmatched customer
              satisfaction.
            </p>
          </div>

          <div className="text-justify p-4 text-last-left md:flex-1 flex flex-col items-start gap-6 bg-secondary text-white xl:px-40 xl:py-12">
            <Image src={vision} width={75} height={75}></Image>
            <p className="">
              <span className="font-bold">OUR VISION</span>
            </p>
            <p>
              We intend to build a team of exceptional performers coming
              together from various domains who are willing to take risks, take
              on newer challenges to deliver path breaking solutions.
            </p>
          </div>
        </div>
        <div className=" flex-1 px-4 md:px-20 lg:px-40 py-10 bg-testimonialsBg text-black text-center">
          <p className="my-2">
            <span className="font-bold">OUR CORE VALUES</span>
          </p>
          <p className="mb-2">
            We live by Our Core Values - ROCE (also stands for Return on Capital
            Employed in financial terms).
          </p>

          <p>What ROCE stands for at Debox:</p>
        </div>
        <div className="px-4 md:px-40 xl:px-96 flex flex-col justify-around p-10 md:align-baseline gap-8 pb-16">
          {values.map((value, idx) => {
            return (
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                key={idx}
                className="flex-1 flex items-center justify-center gap-6"
              >
                <p className="font-serif text-4xl bold">{value.letter}</p>
                <div className="flex flex-col justify-start flex-1 text-left">
                  <h4 className="text-sm md:text-lg lg:text-lg xl:text-lg my-2 uppercase">
                    {value.name}
                  </h4>
                  <p className="text-xs md:text-lg lg:text-lg text-gray-400">
                    {value.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
