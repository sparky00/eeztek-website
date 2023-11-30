import React from "react";
import "../index.css";
import logo1 from "../assets/images/4.png";
import logo2 from "../assets/images/2.png";
import logo3 from "../assets/images/3.png";
import logo4 from "../assets/images/1.png";

export function Clients() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-10">
      <div className="mx-auto max-w-xl text-center">
           
           <h1 className="heading-style-2  text-center ">
            Trusted By World Class Companies
        </h1>
           </div>
           
            <div className="grid grid-cols-2 lg:grid-cols-4" >
              <img class="w-1/2 sm:w-40 img-width" src={logo1} alt="logos" className="pool-box-list2 w-20 h-20" />
              <img class="w-1/2 sm:w-40 img-width" src={logo2} alt="logos" className="pool-box-list2 w-20 h-20" />
              <img class="w-1/2 sm:w-40 img-width" src={logo3} alt="logos" className="pool-box-list2 w-20 h-20" />
              <img class="w-1/2 sm:w-40 img-width" src={logo4} alt="logos" className="pool-box-list2 w-20 h-20" />
            </div>
            
          
      </div>
    </>
    
  );
}



