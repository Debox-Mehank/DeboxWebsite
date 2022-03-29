import Image from "next/image";
import React from "react";
import Logo from "../assets/deboxlogo_white.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-black pt-4 pb-2 w-full mt-auto">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4">
        <div className="p-2 text-center">
          <Image src={Logo} alt="deboxlogo" width={150} height={150} />
        </div>
        <div className="p-2 flex flex-col justify-center items-center lg:items-start xl:items-start space-y-5">
          <h4 className="font-normal text-xl text-white uppercase">
            Our Address
          </h4>
          <p className="font-light text-white text-sm whitespace-pre-wrap">
            {
              "1014, Lodha Supremus - Tower B\nLodha Business District, 2, Kolshet Rd,\nThane, Maharashtra 400607"
            }
          </p>
        </div>
        <div className="p-2 flex flex-col justify-center items-center lg:items-start xl:items-start space-y-5">
          <h4 className="font-normal text-xl text-white uppercase">
            Our Contact
          </h4>
          <p className="font-light text-white text-sm whitespace-pre-wrap">
            India: <Link href={"tel:+919920969961"}>+91 9920969961</Link>
            {"\n"}
            USA: <Link href={"tel:+14047316010"}>+1 404 731 6010</Link>
            {"\n"}
            Email:{" "}
            <Link href={"mailto:darshan@debox.co.in"}>darshan@debox.co.in</Link>
            {/* {
              "India: +91 9920969961\nUSA : +1 404 731 6010\nEmail: darshan@debox.co.in"
            } */}
          </p>
        </div>
        <div className="p-2 flex flex-col justify-center items-center lg:items-start xl:items-start space-y-5">
          <h4 className="font-normal text-xl text-white uppercase">
            Working Hours
          </h4>
          <p className="font-light text-white text-sm whitespace-pre-wrap">
            {"Monday-Friday: 10 AM - 7 PM (IST)"}
          </p>
          <div className="flex items-center justify-center gap-4 mt-4 lg:justify-start xl:justify-start">
            <Link href={"https://www.facebook.com/deboxconsulting"}>
              <div>
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-white"
                  size="lg"
                />
              </div>
            </Link>
            <Link href={"https://www.linkedin.com/company/deboxconsulting"}>
              <div>
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-white"
                  size="lg"
                />
              </div>
            </Link>
            <Link href={"https://wa.me/919920969961"}>
              <div>
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-white"
                  size="lg"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center text-sm py-4 text-white">
        Copyright 2021 | Debox Consulting Private Limited
      </p>
    </footer>
  );
};

export default Footer;
