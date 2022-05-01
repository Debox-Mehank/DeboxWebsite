import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import NavItem from "./reusable/NavItem";
import Logo from "../assets/deboxlogo.png";
import Router from "next/router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const doMagic = () => {
      setIsOpen(false);
    };

    Router.events.on("routeChangeStart", doMagic); // add listener

    return () => {
      Router.events.off("routeChangeStart", doMagic); // remove listener
    };
  }, []);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <nav
      style={{ transition: "0.2s" }}
      className={`flex justify-between items-center flex-wrap h-auto w-full z-50 fixed top-0 left-0 ${scrolled ? "p-1 shadow-md bg-white" : "p-2 bg-transparent"
        }`}
      role="navigation">
      <div className="hidden md:block lg:block">
        <Link href="/">
          <a className="items-center mx-3 inline-flex">
            <Image
              src={Logo}
              height={scrolled ? 80 : 90}
              width={scrolled ? 80 : 90}
              alt="Debox Consulting Logo"
            />
          </a>
        </Link>
      </div>
      <div className="block md:hidden lg:hidden">
        <Link href="/">
          <a className="items-center mx-3 inline-flex">
            <Image
              src={Logo}
              height={scrolled ? 65 : 75}
              width={scrolled ? 65 : 75}
              alt="Debox Consulting Logo"
            />
          </a>
        </Link>
      </div>

      <ul className="hidden lg:block">
        <NavItem title="Home" link="/" active={router.pathname === "/"} />
        <NavItem
          title="Consulting"
          link="/consulting"
          active={router.pathname === "/consulting"}
        />
        <NavItem
          title="Marketing"
          link="/marketing"
          active={router.pathname === "/marketing"}
        />
        <div className="inline-block relative has_dropdown">
          <NavItem
            title="Tech"
            link="/custom-solutions"
            active={
              router.pathname === "/custom-solutions" ||
              router.pathname === "/transport-operations" ||
              router.pathname === "/performance-review-management" ||
              router.pathname === "/agency-operations"
            }
          />
          <div className="absolute right-0 top-12 dropdown opacity-0 invisible translate-y-8">
            <ul className="bg-white shadow-md border-collapse border-gray-400 w-72 flex justify-evenly items-center flex-col">
              <Link href="/transport-operations">
                <li className="p-3 text-sm border border-collapse border-gray-400 w-full hover:bg-greyButtonBg cursor-pointer">
                  Transport Operations
                </li>
              </Link>
              <Link href="/agency-operations">
                <li className="p-3 text-sm border border-collapse border-gray-400 w-full hover:bg-greyButtonBg cursor-pointer">
                  Agency Operations
                </li>
              </Link>
              <Link href="/performance-review-management">
                <li className="whitespace-pre-line p-3 text-sm border border-collapse border-gray-400 w-full hover:bg-greyButtonBg cursor-pointer">
                  Performance Review{"\n"}Management
                </li>
              </Link>
              <Link href="/custom-solutions">
                <li className="p-3 text-sm border border-collapse border-gray-400 w-full hover:bg-greyButtonBg cursor-pointer">
                  Custom Solutions
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <NavItem
          title="About Us"
          link="/about-us"
          active={router.pathname === "/about-us"}
        />
        <NavItem
          title="Contact Us"
          link="/contact"
          active={router.pathname === "/contact"}
        />

      </ul>

      <ul
        id="mobile_nav"
        className={`absolute ${isOpen ? "flex" : "hidden"} flex-col ${scrolled ? "top-20" : "top-24"
          } md:top-24 bg-white w-full lg:hidden shadow-md left-0 pt-2`}>
        <NavItem title="Home" link="/" active={router.pathname === "/"} />
        <hr className="ml-4 mr-8 my-2" />
        <NavItem
          title="Consulting"
          link="/consulting"
          active={router.pathname === "/consulting"}
        />
        <hr className="ml-4 mr-8 my-2" />
        <NavItem
          title="Marketing"
          link="/marketing"
          active={router.pathname === "/marketing"}
        />
        <hr className="ml-4 mr-8 my-2" />
        <NavItem
          title="Tech"
          link="/custom-solutions"
          active={router.pathname === "/custom-solutions"}
        />
        <hr className="ml-4 mr-8 my-2" />
        <NavItem
          title="About Us"
          link="/about-us"
          active={router.pathname === "/"}
        />
        <hr className="ml-4 mr-8 my-2" />
        <NavItem
          title="Contact Us"
          link="/contact"
          active={router.pathname === "/contact"}
        />
      </ul>

      <button
        onClick={() => setIsOpen((prev) => !isOpen)}
        className="inline-flex p-3 lg:hidden text-black ml-auto"
        aria-label="Menu Mobile Button">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
