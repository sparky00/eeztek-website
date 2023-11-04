import React, { useState } from "react";

import axios from "axios";
let API_form =
  "patpoaj7837lQkMsY.8832ca40d97e5f8f405d6ceffd2e33011c6306cab0ecf8fe4823504c9f18677e";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const tempData = {
      fields: {
        Email: email,
        Name: name,
        Message: message,
      },
    };

    console.log(tempData);
    axios
      .post(
        `https://api.airtable.com/v0/app5ENrJi9DbexEoP/tblUQYw6uj3eDWatl`,
        JSON.stringify(tempData),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_form}`,
          },
        }
      )
      .then((response) => {
        // console.log('Success:', response.data);
        // Redirect to the 'thank you' page after a successful submission
        window.location.href = "/thankyou"; // Replace with your actual 'thank you' page URL
      })

      .catch((err) => {
        console.log("ERROr", err);
      });
  };

  return (
    <section className="bg-primary py-12">
      <span className="[&>svg]:absolute [&>svg]:-z-10 [&>svg]:hidden [&>svg]:h-[560px] [&>svg]:w-full [&>svg]:lg:block">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="absolute top-[60px] hidden h-[580px] w-full transition-opacity duration-300 dark:opacity-0 lg:block"
        >
          <defs>
            <linearGradient id="sw-gradient-light" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="hsl(209, 92.2%, 92.1%)" offset="0%"></stop>
              <stop stop-color="hsl(209, 92.2%, 99.1%)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-light)"
            d="M -0.664 3.46 C -0.664 3.46 405.288 15.475 461.728 21.285 C 601.037 35.625 672.268 76.086 701.056 97.646 C 756.056 138.838 797.267 216.257 857.745 245.156 C 885.704 258.516 980.334 280.547 1048.511 268.826 C 1121.622 256.256 1199.864 226.267 1214.176 220.176 C 1241.273 208.643 1280.201 191.509 1343.494 179.436 C 1434.325 162.111 1439.504 196.099 1439.503 183.204 C 1439.502 161.288 1440 0 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L -0.664 3.46 Z"
          ></path>
        </svg>
        <svg
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="absolute top-[60px] hidden h-[580px] w-full opacity-0 transition-opacity duration-300 dark:opacity-100 lg:block"
        >
          <defs>
            <linearGradient id="sw-gradient-dark" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="hsl(240, 4%, 28%)" offset="0%"></stop>
              <stop stop-color="hsl(0, 0%, 15%)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-dark)"
            d="M -0.664 3.46 C -0.664 3.46 405.288 15.475 461.728 21.285 C 601.037 35.625 672.268 76.086 701.056 97.646 C 756.056 138.838 797.267 216.257 857.745 245.156 C 885.704 258.516 980.334 280.547 1048.511 268.826 C 1121.622 256.256 1199.864 226.267 1214.176 220.176 C 1241.273 208.643 1280.201 191.509 1343.494 179.436 C 1434.325 162.111 1439.504 196.099 1439.503 183.204 C 1439.502 161.288 1440 0 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L -0.664 3.46 Z"
          ></path>
        </svg>
      </span>
      {/* <!-- SVG Background --> */}

      {/* <!-- Jumbotron --> */}
      <div className="px-6 pt-8 text-center md:px-12 lg:my-12 lg:text-left">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mt-12 lg:mt-0">
              <h1 className="mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                Please fill out the details
                <br />
                {/* <span className="text-primary">for your business</span> */}
              </h1>
            </div>
            <div className="mb-12 lg:mb-0">
              <form class="-m-2 flex flex-wrap" onSubmit={submitHandler}>
                <div class="w-1/2 p-2">
                  <div class="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      class="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                      placeholder="Name"
                    />
                    <label
                      for="name"
                      class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-white-600 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base text-white-600 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white-500"
                    >
                      Name
                    </label>
                  </div>
                </div>
                <div class="w-1/2 p-2">
                  <div class="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      class="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                      placeholder="Email"
                    />
                    <label
                      for="email"
                      class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-white-600 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base text-white-600 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white-500"
                    >
                      Email
                    </label>
                  </div>
                </div>
                <div class="mt-4 w-full p-2">
                  <div class="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      class="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                      placeholder="Message"
                    ></textarea>
                    <label
                      for="message"
                      class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-white-600 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base text-white-600 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white-500"
                    >
                      Message
                    </label>
                  </div>
                </div>
                <div class="p-2">
                  <button
                    type="submit"
                    class="mx-auto flex rounded border-0 bg-black py-2 px-8 text-lg text-white hover:bg-indigo-950 focus:outline-none"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactUs;
