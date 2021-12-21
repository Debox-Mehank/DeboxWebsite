import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import NavItem from "./reusable/NavItem";
import Logo from "../assets/deboxlogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

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
      className={`flex justify-between items-center flex-wrap h-auto w-full z-10 fixed top-0 left-0 ${
        scrolled ? "p-1 shadow-md bg-white" : "p-2 bg-transparent"
      }`}
      role="navigation"
    >
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
        <NavItem
          title="Tech"
          link="/tech"
          active={router.pathname === "/tech"}
        />
        <NavItem
          title="Contact Us"
          link="/contact"
          active={router.pathname === "/contact"}
        />
      </ul>
      <button
        className="inline-flex p-3 lg:hidden text-black ml-auto"
        aria-label="Menu Mobile Button"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
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
