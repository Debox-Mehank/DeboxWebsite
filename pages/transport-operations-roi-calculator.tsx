import React from "react";
import { useRouter } from "next/router";

const ROICalcTrans = () => {
  const router = useRouter();
  return (
    <div className="w-full mt-20">
      <div className="w-11/12 md:w-11/12 lg:-4/5 xl:w-4/5 mx-auto flex justify-center items-center flex-col px-3 mt-2 xl:px-20 xl:mt-4 select-none">
        <h4 className="pt-8 text-xl font-normal xl:text-2xl tracking-widest text-center">
          KNOW HOW MUCH YOU CAN SAVE
        </h4>
        <p className="text-center text-base text-black whitespace-pre-wrap pt-2 px-2 md:px-14 lg:px-14 xl:px-14 pb-8">
          {
            "As consultants we understand that a lot goes behind any business decision. The most important of all is the Return on Investment. Calculate the potential ROI of the platform for your organization."
          }
        </p>
      </div>
      <div className="w-full mx-auto flex justify-center items-center flex-col px-3 mt-2 xl:px-20 xl:mt-4 select-none">
        <div className="w-full max-w-7xl pb-12">
          <div
            style={{
              width: "100%",
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
            }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              width="100%"
              height="100%"
              src="https://creator.zohopublic.in/zoho_tech59/debox-website/page-embed/Transport_Form_Embed/XQdUXpShq9x3FrfxZa7Wt8zKzdtwd1MJuquO2D2XukHpaRpE0wgeTTAKs6tPaZ5KVvVYXdxpVK0V9tKgjm4nffdJkNRZ5rRMn8Et"
              name="transroi"
              frameBorder="0"
              scrolling="auto"
            />
          </div>
        </div>
      </div>
      <div className="w-full mx-auto flex justify-center items-center flex-col px-3 mt-2 xl:px-20 xl:mt-4 select-none">
        <div className="flex justify-center items-center gap-8 mt-4 mb-6 xl:mb-8 xl:mt-5">
          <div
            onClick={() => {
              router.back();
            }}
            className={`text-primary border border-primary transition-all bg-transparent hover:bg-primary hover:text-white font-semibold text-sm cursor-pointer rounded-sm px-4 mt-3 py-2 w-max`}>
            Go Back
          </div>
          <div
            onClick={() => {
              router.reload();
            }}
            className={`text-primary border border-primary transition-all bg-transparent hover:bg-primary hover:text-white font-semibold text-sm cursor-pointer rounded-sm px-4 mt-3 py-2 w-max`}>
            Re-Calculate
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalcTrans;
