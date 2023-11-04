import React from "react";
import "../index.css";
import logo1 from "../assets/images/1.png";
import logo2 from "../assets/images/2.png";
import logo3 from "../assets/images/3.png";
import logo4 from "../assets/images/4.png";

export function Clients() {
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <div class="container mx-auto">
          <section class="text-center md:text-left">
            <div class="grid grid-cols-6 gap-4 items-center">
              <div class="md:mb-0">
                <h2 class="col-span-1 text-5xl font-bold">Clients</h2>
              </div>
              <div className="col-span-5 ml-12 inline-flex space-x-12 justify-between items-center">
                <img
                  style={{ width: "40%", height: "fit-content" }}
                  src={logo1}
                  alt="logos"
                />
                <img
                  style={{ width: "40%", height: "fit-content" }}
                  src={logo2}
                  alt="logos"
                />
                <img
                  style={{ width: "40%", height: "fit-content" }}
                  src={logo3}
                  alt="logos"
                />
                <img
                  style={{ width: "40%", height: "fit-content" }}
                  src={logo4}
                  alt="logos"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
