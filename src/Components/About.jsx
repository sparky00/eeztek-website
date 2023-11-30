import React from "react";
import { ArrowLeft, ArrowRight } from 'lucide-react'
const About = () => {
    
// const styles = {
//         height: '100vh',
    
//         '@media (min-width: 768px)': {
//           height: '80vh',
//         },
    
//         '@media (min-width: 1024px)': {
//           height: '80vh', 
//         },
//       };
      
  return (
    <section id="about">
      <div
      // style={styles}
        className="z-1 relative ml-5 pr-3  pb-20 sm:pb-32 pt-44 sm:pt-52  lg:flex lg:flex-row lg:items-center justify-center"
      >
        <div className="w-full lg:w-1/3">
          <img
            src="https://images.unsplash.com/photo-1603575448878-868a20723f5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="ManWith Laptop"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="my-10 lg:my-0 lg:px-10">
            <h2 className="heading-style-3 leading-tight text-black sm:text-2xl lg:text-3xl">
              About Us
            </h2>
            <h2 className="heading-style-2 font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Make it easy to do your business with us and we are best
            </h2>
            <p className="font-style mt-4 max-w-xl text-base leading-relaxed text-gray-600">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day going forward, a new normal that
              has evolved operational X is on the runway.
            </p>
            <div className="mt-6 flex items-center gap-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 24 30" fill="none"><path d="M12 0L22.956 2.43467C23.5653 2.57067 24 3.11067 24 3.736V17.052C24 19.7267 22.6627 22.2253 20.4373 23.708L12 29.3333L3.56267 23.708C1.336 22.224 0 19.7267 0 17.0533V3.736C0 3.11067 0.434667 2.57067 1.044 2.43467L12 0ZM17.936 9.62933L11.336 16.228L7.56533 12.4573L5.68 14.3427L11.3373 20L19.8227 11.5147L17.936 9.62933Z" fill="url(#paint0_linear_798_2560)"></path><defs><linearGradient id="paint0_linear_798_2560" x1="-2.6021e-07" y1="4.10667" x2="26.9589" y2="19.657" gradientUnits="userSpaceOnUse"><stop stop-color="#E42C2C" offset="1"></stop><stop offset="1" stop-color="#FF3838"></stop></linearGradient></defs></svg>
            <h2 className="heading-style-3 mr-6">Web Solutions</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 24 30" fill="none"><path d="M12 0L22.956 2.43467C23.5653 2.57067 24 3.11067 24 3.736V17.052C24 19.7267 22.6627 22.2253 20.4373 23.708L12 29.3333L3.56267 23.708C1.336 22.224 0 19.7267 0 17.0533V3.736C0 3.11067 0.434667 2.57067 1.044 2.43467L12 0ZM17.936 9.62933L11.336 16.228L7.56533 12.4573L5.68 14.3427L11.3373 20L19.8227 11.5147L17.936 9.62933Z" fill="url(#paint0_linear_798_2560)"></path><defs><linearGradient id="paint0_linear_798_2560" x1="-2.6021e-07" y1="4.10667" x2="26.9589" y2="19.657" gradientUnits="userSpaceOnUse"><stop stop-color="#E42C2C" offset="1"></stop><stop offset="1" stop-color="#FF3838"></stop></linearGradient></defs></svg>
            <h2 className="heading-style-3">Tech Services</h2>
          </div>    
            

            <form action="#" method="POST" className="mt-8 max-w-xl">
              <div className="flex flex-col sm:flex-row sm:items-center">
              <div className='d-flex'>
              <button
                type="button"
                className="primary-btn d-flex"
              >
                Discover More
                <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" fill='#ffffff' viewBox="0 0 24 24" width="24" height="24"><path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path></svg>
              </button>
              
            </div>
            
              </div>

            </form>
            
          </div>
          
        </div>
      
      </div>
      <br />
    </section>
  );
};

export default About;
