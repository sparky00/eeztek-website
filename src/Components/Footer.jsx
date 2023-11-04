import React from "react";
import logo from "../assets/images/eeztek-logo.png";

export function Footer() {
  return (
    <section className="relative overflow-hidden bg-white py-4">
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-auto">
            <a href="/">
              <div className="flex justify-center flex-col align-center">
                <img style={{ width: "60px" }} src={logo} alt="Eeztek logo" />
                <span className="text-sm mt-2">© Eeztek 2023</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
