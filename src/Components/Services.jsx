import React from "react";
import { Copy, ArrowRight } from "lucide-react";

export function Services() {
  return (
    <div className="mx-auto max-w-7xl px-12 py-5 md:px-6 md:py-10">
      <br></br>
      <br></br>
      <h1 className="text-2xl font-bold capitalize text-black lg:text-3xl">
        Our Web Application Development Services
      </h1>
      <br></br>
      <br></br>
      <br></br>
      <hr />
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16">
        <div className="space-y-3">
          <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
            <Copy size={20} />
          </span>
          <h1 className="text-xl font-semibold capitalize text-black">
            Web Development
          </h1>
          <p className="text-sm text-gray-500">
            Revamp your business process management while transforming the
            entire business ecosystem with our seasoned team specialized in
            developing scalable and futuristic web and mobile applications.
            Besides building cost-effective and agile custom applications, we
            offer end-to-end custom app development, from consulting and
            development to migration and support.
          </p>
        </div>
        <div className="space-y-3">
          <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
            <Copy size={20} />
          </span>
          <h1 className="text-xl font-semibold capitalize text-black">
            App Development
          </h1>
          <p className="text-sm text-gray-500">
            Our innate strength in blending the right technology, strategy, and
            design enables us to develop fully functional modern websites that
            bring your brand to life. We offer a wide range of solutions
            spanning all development and design phases, including adaptive,
            responsive websites, e-commerce solutions, website revamping,
            maintenance, etc.
          </p>
        </div>
        <div className="space-y-3">
          <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
            <Copy size={20} />
          </span>
          <h1 className="text-xl font-semibold capitalize text-black">
            UI & UX Design
          </h1>
          <p className="text-sm text-gray-500">
            Are you looking to work with a team that puts forth a transparent
            design process and delivers spot-on results within budget? Turn to
            our long-standing design team specializing in corporate identity
            designs, responsive web solutions, print designs, motion graphics,
            and UX strategy and consulting.
          </p>
        </div>
        <div className="space-y-3">
          <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
            <Copy size={20} />
          </span>
          <h1 className="text-xl font-semibold capitalize text-black">
            Cloud Services
          </h1>
          <p className="text-sm text-gray-500">
            We can help you if you need to build or consume an API. Our teams
            have worked with various APIs, including Voice, Video, Payment,
            Cloud, Accounting, etc.
          </p>
        </div>
        <div className="space-y-3">
          <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
            <Copy size={20} />
          </span>
          <h1 className="text-xl font-semibold capitalize text-black">Web 3</h1>
          <p className="text-sm text-gray-500">
            We help eCommerce businesses expand their customer reach, grow
            revenue, and drive customer satisfaction by building technically
            impeccable user-driven eCommerce solutions. Our eCommerce
            development offerings include device-agnostic online stores, B2C
            Marketplaces, B2B trade portals, eCommerce aggregators, etc.
          </p>
        </div>
        <div className="space-y-3">
          <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
            <Copy size={20} />
          </span>
          <h1 className="text-xl font-semibold capitalize text-black">IoT</h1>
          <p className="text-sm text-gray-500">
            Turn your website into a high-performing platform with our CMS
            development solution designed to provide end-users with different
            permissions to manage the organization's information, content, and
            assets. We assist in switching from a legacy CMS to a modern
            customized platform or optimizing your existing CMS for the best
            performance possible.
          </p>
        </div>
        <div className="space-y-3">
          <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
            <Copy size={20} />
          </span>
          <h1 className="text-xl font-semibold capitalize text-black">
            Data Analysis
          </h1>
          <p className="text-sm text-gray-500">
            We are a go-to source to keep your apps functional, reliable, and
            relevant to your ever-evolving business needs. Our web application
            support and maintenance services cover everything from content
            updates, web programming, bug fixes, code reviews, SQL database
            support & updates, Mobile Apps (iOS & Android) support, and
            application hosting support.
          </p>
        </div>
        <div className="space-y-3">
          <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
            <Copy size={20} />
          </span>
          <h1 className="text-xl font-semibold capitalize text-black">AL/ML</h1>
          <p className="text-sm text-gray-500">
            We work with modern frameworks like React.js, Angular, Vue.js, Next,
            and Gatsby to create next-generation user experiences that integrate
            and interact seamlessly with your database and APIs.
          </p>
        </div>
      </div>
    </div>
  );
}
