import type { NextPage } from "next";
import Clients from "../components/Clients";
import Essentials from "../components/Essentials";
import QuoteBanner from "../components/reusable/QuoteBanner";
import Testimonial from "../components/Testimonial";
import Services from "../components/Services";
import Slider from "../components/Slider";

const Home: NextPage = () => {
  return (
    <div className="mt-16">
      <Slider />
      <QuoteBanner
        content={
          "ALWAYS PUT PEOPLE FIRST, FOR WITHOUT THEM THERE IS NO ORGANIZATION"
        }
        author={"DAVID SHIKOSANA"}
      />
      <Services />
      <QuoteBanner
        content={
          "IF YOU GET YOUR PEOPLE CAPABILITY RIGHT FIRST… AND CONTINUE TO MAKE IT YOUR FIRST PRIORITY…I GUARANTEE YOU THE RESULTS WILL FOLLOW."
        }
        author={"DAVID NOVAK"}
      />
      <Essentials />
      <QuoteBanner
        content={"TO WIN THE MARKETPLACE, YOU MUST FIRST WIN THE WORKPLACE"}
        author={"DOUG CONANT"}
      />
      <Clients />
      <Testimonial />
    </div>
  );
};

export default Home;
