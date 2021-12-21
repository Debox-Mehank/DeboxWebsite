import {
  faFacebookF,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full mt-16">
      <div className="flex justify-center items-center flex-col px-3 py-5 m-2 xl:px-15 xl:py-8 xl:m-4 select-none">
        <h4 className="pt-4 text-xl font-normal xl:text-3xl tracking-widest text-center">
          Contact Us
        </h4>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 xl:grid-cols-3 lg:p-8">
        <div className="p-2 flex flex-col justify-start items-start lg:items-center xl:items-center pl-10 pb-10 lg:pl-0 lg:pb-0 xl:pl-0 xl:pb-0 space-y-5">
          <h4 className="font-normal text-xl text-black uppercase">
            India Office
          </h4>
          <div className="flex flex-col justify-start items-center gap-4">
            <div className="flex justify-between w-full gap-4">
              <FontAwesomeIcon
                className="text-primary mt-1"
                icon={faLocationDot}
              />
              <p className="font-light text-black text-sm whitespace-pre-wrap flex-1">
                {
                  "Super Office 1, Redbrick Supremus,\nLodha Supremus, Kolshet Industrial\nArea, Thane (W) - 400604, Mumbai."
                }
              </p>
            </div>
            <div className="flex justify-between w-full gap-4">
              <FontAwesomeIcon
                className="text-primary mt-1"
                icon={faEnvelope}
              />
              <Link href={"mailto:communications@debox.co.in"}>
                <p className="font-light text-black hover:text-primary text-sm text-left flex-1">
                  communications@debox.co.in
                </p>
              </Link>
            </div>
            <div className="flex justify-between w-full gap-4">
              <FontAwesomeIcon className="text-primary mt-1" icon={faPhone} />
              <Link href={"tel:+919920969961"}>
                <p className="font-light text-black hover:text-primary text-sm text-left flex-1">
                  +91 9920969961
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="p-2 flex flex-col justify-start items-start lg:items-center xl:items-center pl-10 pb-10 lg:pl-0 lg:pb-0 xl:pl-0 xl:pb-0 space-y-5">
          <h4 className="font-normal text-xl text-black uppercase">
            Singapore Office
          </h4>
          <div className="flex flex-col justify-start items-center gap-4">
            <div className="flex justify-between w-full gap-4">
              <FontAwesomeIcon
                className="text-primary mt-1"
                icon={faLocationDot}
              />
              <p className="font-light text-black text-sm whitespace-pre-wrap flex-1">
                {"04-53 Block, 10 Gloucester Road,\nSingapore 210010"}
              </p>
            </div>
            <div className="flex justify-between w-full gap-4">
              <FontAwesomeIcon
                className="text-primary mt-1"
                icon={faEnvelope}
              />
              <Link href={"mailto:communications@debox.co.in"}>
                <p className="font-light text-black hover:text-primary text-sm text-left flex-1">
                  communications@debox.co.in
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="p-2 flex flex-col justify-start items-start lg:items-center xl:items-center pl-10 pb-10 lg:pl-0 lg:pb-0 xl:pl-0 xl:pb-0 space-y-5">
          <h4 className="font-normal text-xl text-black uppercase">
            Usa Office
          </h4>
          <div className="flex flex-col justify-start items-center gap-4">
            <div className="flex justify-between w-full gap-4">
              <FontAwesomeIcon
                className="text-primary mt-1"
                icon={faLocationDot}
              />
              <p className="font-light text-black text-sm whitespace-pre-wrap flex-1">
                {"Coming soon in Dallas!"}
              </p>
            </div>
            <div className="flex justify-between w-full gap-4">
              <FontAwesomeIcon
                className="text-primary mt-1"
                icon={faEnvelope}
              />
              <Link href={"mailto:communications@debox.co.in"}>
                <p className="font-light text-black hover:text-primary text-sm text-left flex-1">
                  communications@debox.co.in
                </p>
              </Link>
            </div>
            <div className="flex justify-between w-full gap-4">
              <FontAwesomeIcon className="text-primary mt-1" icon={faPhone} />
              <Link href={"tel:+14047316010"}>
                <p className="font-light text-black hover:text-primary text-sm text-left flex-1">
                  +1 (404) 731 6010
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
