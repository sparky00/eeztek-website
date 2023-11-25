"use client";

import React, {useState} from "react";
import logo from "../assets/images/eeztek-logo.png";
import { Menu, X } from "lucide-react";



export function Navbar() {
 
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    
    <div className="z-10 py-5 sticky top-0 w-full nav-bar">
      <div className=" mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className=" inline-flex items-center space-x-2">
          <img style={{ width: "60px" }} src={logo} alt="Eeztek logo" />
        </div>
        <div className="hidden grow items-start lg:flex justify-end">
          <ul className="ml-12 inline-flex space-x-8">
            
              <li>
                <a
                   href="#section-1"
                  className="inline-flex items-center text-md font-semibold"
                >
                  About
                </a>
              </li>
              <li>
              <a
                href="#section-2"
                className="inline-flex items-center text-md font-semibold"
              >
                Services
              </a>
            </li>
            <li>
            <a
              href="#section-3"
              className="inline-flex items-center text-md font-semibold"
            >
              Process
            </a>
          </li>
          <li>
          <a
            href="#section-4"
            className="inline-flex items-center text-md font-semibold"
          >
            Industries
          </a>
        </li>
        <li>
        <a
          href="#section-5"
          className="inline-flex items-center text-md font-semibold"
        >
          Contact Us
        </a>
        </li>
            
          </ul>
        </div>
          <div className="lg:hidden nav-bar">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg nav-bar shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                  <img style={{ width: "60px" }} src={logo} alt="Eeztek logo" />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6 nav-bar">
                  <nav className="grid gap-y-4">
                <a
                   href="#section-1"
                  className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium">
                  About
                        </span>
                  
                </a>
                <a
                   href="#section-2"
                  className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium">
                  Services
                        </span>
                  
                </a>
                <a
                   href="#section-3"
                  className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium">
                  Process
                        </span>
                  
                </a>
                <a
                   href="#section-4"
                  className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium">
                  Industries
                        </span>
                  
                </a>
                <a
                   href="#section-5"
                  className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium">
                  Contact Us
                        </span>
                  
                </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      

      </div>
    </div>
    
  );
}
