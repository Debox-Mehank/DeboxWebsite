import type { NextPage } from "next";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsProgress,
  faBookmark,
  faBullhorn,
  faBullseye,
  faComments,
  faGears,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faHand } from "@fortawesome/free-regular-svg-icons";
import TeamCard, { TeamCardProps } from "../components/reusable/TeamCard";
import Darshan from "../assets/Darshan.webp";
import Jayesh from "../assets/Jayesh.webp";
import PrateekBucha from "../assets/PrateekBucha.webp";
import Button from "../components/reusable/Button";

interface ConsultingService {
  icon: IconDefinition;
  title: string;
  content: string;
}

const services_data: ConsultingService[] = [
  {
    icon: faBullseye,
    title: "Objective Setting",
    content:
      "Mission, Vision & Values, Business Strategy, Annual & Strategic Business Plan, Balanced Scorecard/OKRs",
  },
  {
    icon: faUserGroup,
    title: "People & Culture",
    content:
      "Org. Structure, Job Descriptions, KPI & Goal Setting, Talent Management, Appraisals and Reviews",
  },
  {
    icon: faGears,
    title: "Efficient Process",
    content:
      "Risk Advisory, Internal Audits, Process Audits, Process Re-Engineering, SOPs & Checklist, IFC & ICFR.",
  },
  {
    icon: faComments,
    title: "Effective Communication",
    content:
      "Policy Designing, Internal Communications, Open Houses, Rewards & Recognition, Skip Level Meetings",
  },
  {
    icon: faHand,
    title: "Organizational Values",
    content: "Values Setting & Communication, Values Manifesto, Values Rewards",
  },
  {
    icon: faBookmark,
    title: "Employer Branding",
    content:
      "Employer Branding Strategy, Campus Branding, LinkedIn Marketing, Talent Strategy, Induction Designing",
  },
  {
    icon: faBarsProgress,
    title: "Benchmarking",
    content:
      "SOP and Processes, Product, Salary, Benefits, Tools and Technology, Vendor and Quality.",
  },
  {
    icon: faBullhorn,
    title: "Surveys",
    content:
      "Organizational Culture, Employee Satisfaction, Customer Satisfaction, NPS, others.",
  },
];

const teams_data: TeamCardProps[] = [
  {
    image: Darshan,
    name: "Darshan Vyas",
    designation: "Founder",
    desc: "He has more than 10 years of industry experience having worked with Corporates like Godrej, Future Group and Sequent Scientific (acquired by the Carlyle Group) and was leading the consulting team at Stratum Consulting for over 2 years. He has studied Human Resources from Welingkar’s followed by Executive Post Graduation in Marketing & Communications from MICA.  He is certified in Balanced Scorecard Deployment (Performance Management) and in CII Business Excellence (EFQM) Model Deployment Facilitation. Over the years, he has got opportunities to work alongside the top consulting firms like BCG, Hay, KPMG, Thomas International, and Cerebrus during his corporate stints. He focuses on designing high impact solutions by bringing together his understanding of Business, People and Data.",
    email: "darshan@debox.co.in",
    linkedin: "https://www.linkedin.com/in/thebusinesssolutionist/",
  },
  {
    image: Jayesh,
    name: "Jayesh Sirnani",
    designation: "Consulting Head",
    desc: "He has more than 8 years of industry experience with a formal education in Finance & Accounting. He kick-started his professional journey with one of the top 6 accounting firms, RSM Astute Consulting, where he worked on numerous Process Audits for brands like Metropolis Healthcare, Pantaloons, Glenmark Pharmaceuticals, Gitanjali Gems, MSD Pharmaceuticals. In 2015, he joined the consulting team at Stratum Consulting where he was heading the design and deployment of projects for brands like RAW Pressery, Syncom Healthcare, Naturals Ice Creams, Brand Concepts, Sanjeev Auto and many more. He has a solid understanding of business and financial processes with a keen focus on data tracking and analysis.",
    email: "jayesh@debox.co.in",
    linkedin: "https://www.linkedin.com/in/jayesh-sirnani-53518858/",
  },
  // {
  //   image: PrateekBucha,
  //   name: "Prateek Bucha",
  //   designation: "Vertical Leader - Risk Advisory",
  //   desc: "He is a qualified Chartered Accountant (CA) with more than 10 years of industry experience with specialized focus in 'Risk Advisory Services'. His core competencies are Cost / Process Optimization Reviews, Business Process Reviews (Risk based Internal Audit), development of SOPs (Standard Operating Policies) and IFC / ICFR designing and testing reviews.\n\nHe has worked with BDO India LLP (World's 5th largest accounting firm) and Mahajan & Aibara LLP (Firm specialized in risk based internal audits). He has provided Risk Advisory Services to several large corporates in FMCG, manufacturing, hospitality, and healthcare sectors. He has also supported E-commerce start-ups in designing and implementing processes by recommending best practices.",
  //   email: "prateek@debox.co.in",
  //   linkedin: "https://www.linkedin.com/in/prateek-bucha-0481667a/",
  // },
];

const Consulting: NextPage = () => {
  return (
    <div className="w-full">
      <div className="w-full h-screen bg-cover bg-center consulting-div relative">
        <div className="absolute bottom-10 flex justify-center items-center w-full">
          <Button
            title="Check our Consulting Deck"
            link="https://consulting.debox.co.in/"
          />
        </div>
      </div>
      <h4 className="text-center text-lg md:text-2xl lg:text-2xl xl:text-2xl whitespace-pre-wrap p-4 md:p-16 lg:p-16 xl:p-16 leading-9 tracking-wide">
        {
          "We partner with businesses to build a Sustainable Growth path through\nsynergies of People, Processes and Technology."
        }
      </h4>
      <div className="flex justify-center items-center flex-col gap-8 px-3 mt-2 xl:px-15 xl:mt-4 select-none bg-testimonialsBg">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 w-full py-8">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="flex flex-col justify-center"
          >
            <h4 className="text-xl p-5 font-normal xl:text-3xl tracking-widest text-center text-primary">
              Our Process
            </h4>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="flex flex-col justify-start p-5"
          >
            <h4 className="text-base pb-4 font-normal xl:text-xl tracking-widest text-primary underline">
              Build
            </h4>
            <p className="text-sm font-normal text-gray-400">
              We design solutions that are tailor-made with an understanding of
              your business, people and data.
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="flex flex-col justify-start p-5"
          >
            <h4 className="text-base pb-4 font-normal xl:text-xl tracking-widest text-primary underline">
              Operate
            </h4>
            <p className="text-sm font-normal text-gray-400">
              We take full accountability for successful execution and track the
              performance to ensure project success.
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="flex flex-col justify-start p-5"
          >
            <h4 className="text-base pb-4 font-normal xl:text-xl tracking-widest text-primary underline">
              Transfer
            </h4>
            <p className="text-sm font-normal text-gray-400">
              We develop people within your organizations to take the solutions
              forward and create a sustainability and growth path for Talent.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col px-3 py-5 m-2 xl:px-15 xl:py-8 xl:m-4 select-none">
        <h4 className="pb-10 pt-4 text-xl font-normal xl:text-3xl tracking-widest text-center">
          Our Services
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full gap-16 md:gap-28 lg:gap-32 xl:gap-32 md:px-32 lg:px-36 xl:px-40 text-center">
          {services_data.map((service, idx) => {
            return (
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                key={idx}
                className="flex justify-center items-center"
              >
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
      <div className="flex flex-col space-y-8 md:flex-row lg:flex-row xl:flex-row justify-around items-center w-full mt-4 mb-12">
        <Button
          title="Check our Risk Advisory Deck"
          link="https://riskadvisory.debox.co.in/"
        />
      </div>
      <div className="flex justify-center items-center flex-col px-3 py-5 m-2 xl:px-15 xl:py-8 xl:m-4 select-none">
        <h4 className="pb-10 pt-4 text-xl font-normal xl:text-3xl tracking-widest text-center">
          Consulting Team
        </h4>
        <div className="grid grid-cols-1 w-full gap-16 px-2 md:px-16 lg:px-16 xl:px-16 text-center">
          {teams_data.map((team, idx) => {
            return (
              <TeamCard
                key={idx}
                image={team.image}
                name={team.name}
                designation={team.designation}
                desc={team.desc}
                email={team.email}
                linkedin={team.linkedin}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Consulting;
