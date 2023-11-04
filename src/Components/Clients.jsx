import React from "react";
import "../index.css";
import logo1 from "../assets/images/4.png";
import logo2 from "../assets/images/2.png";
import logo3 from "../assets/images/3.png";
import logo4 from "../assets/images/1.png";

export function Clients() {
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <div class="container mx-auto">
          <section class="text-center md:text-left">
            {/* <div class="grid grid-cols-6 gap-4 items-center"> */}
            <div class="md:mb-0 col-span-6 md:col-span-1 lg:mb-25">
              <h2 class="text-3xl md:text-5xl font-bold text-center margin-top">
                Clients
              </h2>
            </div>
            <div class="mx-auto col-span-6 lg:pt-15 md:col-span-5 sm:inline-flex lg:flex lg:space-x-8 lg:justify-between lg:items-center flex flex-wrap">
              <img class="w-1/2 sm:w-40 img-width" src={logo1} alt="logos" />
              <img class="w-1/2 sm:w-40 img-width" src={logo2} alt="logos" />
              <img class="w-1/2 sm:w-40 img-width" src={logo3} alt="logos" />
              <img class="w-1/2 sm:w-40 img-width" src={logo4} alt="logos" />
            </div>
            {/* </div> */}
          </section>
        </div>
      </div>
    </>
  );
}
