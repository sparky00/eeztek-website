import React,{useState} from "react";

import axios from "axios";
let API_form = "pat-na1-31107309-2f19-4e55-af0c-daa200950a83";

const ContactUs = () => {

const[name, setName] = useState('');
const[email, setEmail] = useState('');
const[message, setMessage] = useState('');




  const submitHandler = async(e) => {
   
    e.preventDefault();
    const tempData = {
      fields: [
        {
          name: "email",
          value: email,
        },
        {
          name: "name",
          value: name,
        },
        {
          name: "message",
          value: message,
        },
      ],
    };


    
    console.log(tempData)
    axios
      .post(
        `https://api.hsforms.com/submissions/v3/integration/secure/submit/44252009/727112c9-dd40-453f-a475-5d15b188f7fc`,
        JSON.stringify(tempData),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_form}`,
          },
        }
      )
      .then((resp) => console.log("BUTTon",tempData))

      .catch((err) => {
        console.log("ERROr",err);
      });
  };

  return (
    <section 
    style={{backgroundColor :"#01eac7"}}
    class="body-font relative  text-gray-400">
      <div class="container mx-auto px-5 py-10">
        <div class="mb-12 flex w-full flex-col text-center">
          <h1 class="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">
            Contact Us
          </h1>
          <p class="mx-auto text-base leading-relaxed lg:w-2/3 text-black">
            Feel free to reach out to us! Whether you have a question, feedback,
            or a collaboration proposal, we'd love to hear from you.
          </p>
        </div>

        <div class="mx-auto md:w-2/3 lg:w-1/2">
          <form 
          class="-m-2 flex flex-wrap"
          onSubmit={submitHandler}
          >
            <div class="w-1/2 p-2">
              <div class="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  class="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                  placeholder="Name"
                />
                <label
                  for="name"
                  class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
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
                  onChange={e=> setEmail(e.target.value)}
                  class="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                  placeholder="Email"
                />
                <label
                  for="email"
                  class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
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
                  onChange={e => setMessage(e.target.value)}
                  class="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                  placeholder="Message"
                ></textarea>
                <label
                  for="message"
                  class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                >
                  Message
                </label>
              </div>
            </div>
            <div class="w-full p-2">
              <button
                type="submit"
                class="mx-auto flex rounded border-0 bg-black py-2 px-8 text-lg text-white hover:bg-indigo-950 focus:outline-none"
              >
                Submit
              </button>
            </div>

            <div class="mt-8 w-full border-t border-gray-800 p-2 pt-8 text-center text-black">
              {/* <a class="text-indigo-400">example@email.com</a> */}
              <p class="my-5 leading-normal">
                49 Smith St. <br />
                Saint Cloud, MN 56301
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;


// git remote add origin https://github.com/sparky00/eeztek-website.git