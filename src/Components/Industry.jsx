import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

export function Industry() {
  return (
    <>
      <div className="mx-auto max-w-7xl">
        {/* <!-- Container for demo purpose --> */}
        <div class="container my-24 mx-auto">
          {/* <!-- Section: Design Block --> */}
          <section class="mb-32 text-center md:text-left">
            <div class="grid gap-8 md:grid-cols-2">
              <div class="mb-6 md:mb-0">
                <h2 class="mb-6 text-3xl font-bold">
                  Trusted by 2,000,000+ <br />
                  <u class="">developers and designers</u>
                </h2>
                <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Saepe, quas?
                </p>
                <button
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  type="button"
                  class="inline-block rounded-full bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Pre-order now
                </button>
              </div>

              <div class="mb-6 md:mb-0">
                <Splide aria-label="My Favorite Images">
                  <SplideSlide>
                    <div className="flex justify-between">
                      <img
                        className=""
                        src="https://www.orangemantra.com/wp-content/uploads/2023/10/In-realestate.png"
                        alt="pic 1"
                      />
                      <img
                        className=""
                        src="https://www.orangemantra.com/wp-content/uploads/2023/10/In-retail.png"
                        alt="psa 2"
                      />
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="flex justify-between">
                      <img
                        className="industries-img"
                        src="https://www.orangemantra.com/wp-content/uploads/2023/10/In-manufacturing.png"
                        alt="pic 1"
                      />
                      <img
                        className="industries-img"
                        src="https://www.orangemantra.com/wp-content/uploads/2023/10/In-education.png"
                        alt="psa 2"
                      />
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="flex justify-between">
                      <img
                        className="industries-img"
                        src="https://www.orangemantra.com/wp-content/uploads/2023/10/In-bank.png"
                        alt="pic 1"
                      />
                      <img
                        className="industries-img"
                        src="https://www.orangemantra.com/wp-content/uploads/2023/10/In-healthcare.png"
                        alt="psa 2"
                      />
                    </div>
                  </SplideSlide>
                </Splide>
              </div>
            </div>
          </section>
          {/* <!-- Section: Design Block --> */}
        </div>
        {/* <!-- Container for demo purpose --> */}
      </div>
    </>
  );
}
