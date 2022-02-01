import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from 'next/router'
import React, { useEffect } from "react";
import contactImage from "../assets/contact_us_image.jpg"

const Contact = () => {
  const router = useRouter();
  const query = router.query

  useEffect(() => {
    console.log(query);
    if (query && query.submit === "true") {
      console.log("Form Submitted");
    }
  }, [query]);

  return (
    <div className="w-full mt-16">
      <div className="flex justify-center items-center flex-col px-3 py-5 mx-2 mt-2 xl:px-15 xl:py-8 xl:m-4 select-none">
        <h4 className="pt-4 text-xl font-bold xl:text-3xl tracking-widest text-center">
          Contact Us
        </h4>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-contact xl:grid-cols-contact">
        <div className="w-full flex justify-center items-center">
          <Image src={contactImage} alt="Debox Consulting Contact Us" objectFit="cover" />
        </div>
        <form name="contact" data-netlify="true" action="/contact?submit=true" method="POST" className="w-full px-8 lg:px-20 xl:px-20 py-4 lg:py-0 xl:py-0 flex flex-col justify-center gap-6">
          <input type="hidden" name="form-name" value="contact" />
          <p className="text-black font-semibold text-xs md:text-sm lg:text-sm xl:text-sm my-2">Fields marked with an <span className="text-red-800">*</span> are required.</p>
          <div className="flex flex-col gap-1">
            <label className="text-xs md:text-sm lg:text-sm xl:text-sm">What services are you looking for?<span className="text-red-800">*</span></label>
            <div className="flex items-center justify-start gap-2">
              <input required type="radio" name="services" id="services-consulting" />
              <label htmlFor="services-consulting" className="text-xs md:text-sm lg:text-sm xl:text-sm">Consulting</label>
            </div>
            <div className="flex items-center justify-start gap-2">
              <input required type="radio" name="services" id="services-marketing" />
              <label htmlFor="services-marketing" className="text-xs md:text-sm lg:text-sm xl:text-sm">Marketing</label>
            </div>
            <div className="flex items-center justify-start gap-2">
              <input required type="radio" name="services" id="services-tech" />
              <label htmlFor="services-tech" className="text-xs md:text-sm lg:text-sm xl:text-sm">Tech</label>
            </div>
            <div className="flex items-center justify-start gap-2">
              <input required type="radio" name="services" id="services-design" />
              <label htmlFor="services-design" className="text-xs md:text-sm lg:text-sm xl:text-sm">Design</label>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="urgency" className="text-xs md:text-sm lg:text-sm xl:text-sm">How urgent is the project?<span className="text-red-800">*</span></label>
            <select required id="urgency" name="urgency" className="bg-gray-100 p-2 rounded text-sm md:text-base lg:text-base xl:text-base">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="duedate" className="text-xs md:text-sm lg:text-sm xl:text-sm">Due Date<span className="text-red-800">*</span></label>
            <input required id="duedate" name="duedate" type={"date"} className="bg-gray-100 p-2 rounded text-sm md:text-base lg:text-base xl:text-base" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="desc" className="text-xs md:text-sm lg:text-sm xl:text-sm">Describe Your Project<span className="text-red-800">*</span></label>
            <textarea required rows={4} id="desc" name="desc" className="bg-gray-100 p-2 rounded text-sm md:text-base lg:text-base xl:text-base" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="fullname" className="text-xs md:text-sm lg:text-sm xl:text-sm">Full Name<span className="text-red-800">*</span></label>
            <input required id="fullname" name="fullname" type="text" className="bg-gray-100 p-2 rounded text-sm md:text-base lg:text-base xl:text-base" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-xs md:text-sm lg:text-sm xl:text-sm">Email<span className="text-red-800">*</span></label>
              <input required id="email" name="email" type="email" className="bg-gray-100 p-2 rounded text-sm md:text-base lg:text-base xl:text-base" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="text-xs md:text-sm lg:text-sm xl:text-sm">Mobile Number<span className="text-red-800">*</span></label>
              <input required id="phone" name="phone" type="number" maxLength={10} className="bg-gray-100 p-2 rounded text-sm md:text-base lg:text-base xl:text-base" />
            </div>
          </div>
          <div className="w-full">
            <input type="submit" value="Submit" className="text-white bg-primary font-semibold text-sm shadow-md cursor-pointer rounded-sm py-1.5 px-4 mt-3 lg:py-2 hover:text-black hover:bg-gray-300 w-max uppercase" />
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 xl:grid-cols-3 lg:p-8 w-full lg:w-3/5 xl:w-3/5 mt-5">
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
