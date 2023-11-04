import React from "react";

const About = () => {
  return (
    <section className="bg-primary px-12">
      <div className="px-8 py-8 mx-8">
        <br></br>
        <br></br>
        <br></br>
        <h2 className="text-2xl font-bold tracking-tight text-white xl:text-4xl">
          About Us
        </h2>
        <div className="lg:flex align-center justify-between">
          <div>
            <p className="mt-4 block max-w-4xl text-black-500">
              Eeztek is a service-based IT company that helps businesses of all
              sizes to achieve their goals with technology. We offer a
              comprehensive range of IT services, including managed IT services,
              cloud computing, cybersecurity, application development, and IT
              consulting. Our team of experienced and certified IT professionals
              is passionate about helping our clients to succeed. We understand
              that technology can be complex and overwhelming, so we take the
              time to understand your specific needs and develop tailored
              solutions that meet your budget and goals. We believe that
              technology should be a tool that helps businesses to grow and
              succeed, not a burden. That's why we offer a wide range of
              services and support to help our clients get the most out of their
              IT infrastructure.
            </p>
          </div>
          <div>
            <img
              className="h-[250px]"
              src="https://tecnologia.vamtam.com/wp-content/uploads/2023/04/shape-bg.svg"
              alt="svg element"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
