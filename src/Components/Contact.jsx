import React,{useState} from "react";
import { ArrowRight } from "lucide-react";

import axios from "axios";
let API_form =
  "patpoaj7837lQkMsY.8832ca40d97e5f8f405d6ceffd2e33011c6306cab0ecf8fe4823504c9f18677e";


 
export function Contact() {

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
    <section  id="section-5">
      <div className="my-24 grid grid-cols-1 lg:grid-cols-2">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
          <div className="absolute inset-0">
            <img
              className="h-full w-full rounded-md object-cover object-top"
              src="https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk0fHxkZXNpZ25lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative">
            <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
              <h3 className="text-4xl font-bold text-white">
              Proactively envisioned multimedia based expertise and cross-media growth strategies seamlessly.
              </h3>
              <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full" style={{backgroundColor:"#fc3737"}}>
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white"  style={{color:"#fc3737"}} >
                    {" "}
                    Phone:{" "}
                  </span>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    987654321{" "}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full" style={{backgroundColor:"#fc3737"}}>
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white" style={{color:"#fc3737"}}>
                    {" "}
                    Email:{" "}
                  </span>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    support@eeztek.com{" "}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500" style={{backgroundColor:"#fc3737"}}>
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white" style={{color:"#fc3737"}}>
                    {" "}
                    Address:{" "}
                  </span>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    ABC, INDIA{" "}
                  </span>
                </li>
                {/* <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    Design Files Included{" "}
                  </span>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="heading-style-3">
          Get in Touch
            </h2>
            <h2 className="heading-style-2 ">
              Don't be say, Say hello!
            </h2>
            
            <form className="mt-8"  onSubmit={submitHandler}>
              <div className="space-y-5">
                <div className="flex">
                <div className="relative">
                  <div className="mt-2">
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Name"
                      style={{ fontFamily: "space grotesk, sans-serif"}}
                    ></input>
                  </div>
                </div>
                <div className="relative ml-4" >
                  <div className="mt-2">
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Email"
                      style={{ fontFamily: "space grotesk, sans-serif"}}
                    ></input>
                  </div>
                </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                  </div>
                  <div className="mt-2">
                    <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                      className="flex h-32 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="message"
                      placeholder="Message"
                      style={{ fontFamily: "space grotesk, sans-serif"}}
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="primary-btn d-flex"
                  >
                    Submit <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" fill='#ffffff' viewBox="0 0 24 24" width="24" height="24"><path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path></svg>
                  </button>
                </div>
              </div>
            </form>
           
          </div>
        </div>
      </div>
    </section>
  );
}
