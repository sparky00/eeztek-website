import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-primary">
        <section className="mx-auto max-w-7xl py-5 md:px-6 md:py-10">
          <br></br>
          <br></br>
          <h2 className="text-2xl font-bold tracking-tight text-black xl:text-5xl">
            About Us
          </h2>
          <div className="lg:flex align-center justify-between">
            <div>
              <p className="mt-6 block max-w-4xl text-black-500">
                Eeztek is an IT service company committed to empowering
                businesses of all sizes through technology. Offering a
                comprehensive range of IT services, including managed IT, cloud
                computing, cybersecurity, application development, and
                consulting. Our experienced and certified team is passionate
                about your success. We understand the complexities of technology
                and strive to tailor solutions that meet your needs and goals
                within your budget. We believe in technology as a tool for
                growth, not a burden. Welcome to Eeztek, where innovation meets
                digital solutions. Let's build the web together.
              </p>
            </div>
            <img
              className="h-[200px]"
              src="https://tecnologia.vamtam.com/wp-content/uploads/2023/04/shape-bg.svg"
              alt="svg element"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
