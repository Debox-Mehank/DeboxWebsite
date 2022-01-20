import Link from "next/link";
import React from "react";

interface NavItemProps {
  title: string;
  link: string;
  active: boolean;
}

const NavItem = ({ title, link, active }: NavItemProps) => {
  return (
    <Link href={link}>
      <a
        className={`px-4 py-2 font-bold items-center justify-center hover:text-primary uppercase text-sm ${
          active ? "text-primary" : "text-black"
        }`}>
        {title}
      </a>
    </Link>
  );
};

export default NavItem;
