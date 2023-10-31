"use client";

import React from "react";
// import { ChevronDown } from "lucide-react";
import logo from "../assets/images/eeztek-logo.png";

const menuItems = [
  {
    name: "About",
    href: "#",
  },
  {
    name: "Services",
    href: "#",
  },
  {
    name: "Process",
    href: "#",
  },
  {
    name: "Industries",
    href: "#",
  },
  {
    name: "Contact Us",
    href: "#",
  },
];

export function Navbar() {
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <img style={{ width: "60px" }} src={logo} alt="Eeztek logo" />
        </div>
        <div className="hidden grow items-start lg:flex justify-end">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="inline-flex items-center text-md font-semibold text-gray-800 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
