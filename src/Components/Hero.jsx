import React from 'react'
// import heroImg from '../assets/images/heroImage.jpg'
import hero2 from '../assets/images/hero-2.jpg'

const Hero = () => {
  return (
    <div className="relative w-full bg-slate-700"
    style={{ 
        backgroundImage: `url("https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/banner_h_3_bg.png")` 
      }}
    >
        
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            
          {/* <svg
            width="30"
            height="36"
            viewBox="0 0 50 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
              fill="black"
            />
          </svg> */}
          {/* <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1"> */}
            {/* <div className="rounded-full bg-white p-1 px-2">
              <p className="text-sm font-medium">We&apos; hiring</p>
            </div>
            <p className="text-sm font-medium">Join our team &rarr;</p> */}
          {/* </div> */}
          <h1 className="heading-style mt-8 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-6xl">
          The best offer for your business
          </h1>
          {/* <p className="mt-8 text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi blanditiis
            dolores quasi eaque explicabo!
          </p> */}
          <form action="" className="mt-8 flex items-start space-x-2">
            
            <div className='d-flex'>
              <button
                type="button"
                className="primary-btn d-flex"
              >
                Subscribe
                <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" fill='#ffffff' viewBox="0 0 24 24" width="24" height="24"><path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path></svg>
              </button>
            </div>
          </form>
        </div>
        <div className="my-6 relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <br /><br />
          <image class="img-bg" src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/banner_h_4_red_shape.png"/>
<svg id="sw-js-blob-svg" viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
            <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
        </linearGradient>
    </defs>
    <mask id="mask-1" mask-type="alpha">
        <path fill="url(#sw-gradient)"
        d="M17,-23.9C23.9,-22,32.6,-20.4,36.5,-15.6C40.4,-10.7,39.5,-2.6,37.1,4.4C34.7,11.5,30.8,17.4,26.3,22.9C21.7,28.5,16.6,33.6,9.8,37.5C3,41.3,-5.3,43.9,-12.4,41.9C-19.4,39.9,-25.2,33.4,-29.8,26.6C-34.4,19.9,-37.7,12.9,-36.7,6.5C-35.8,0.1,-30.5,-5.7,-27.9,-13.3C-25.3,-20.9,-25.4,-30.4,-21.2,-33.5C-17.1,-36.6,-8.5,-33.4,-1.7,-30.7C5.1,-28,10.1,-25.8,17,-23.9Z"
        width="100%" height="100%" transform="translate(50 50)" style={{transition: "all 0.3s ease 0s"}} stroke-width="0">
        </path>
    </mask>
    <g mask="url(#mask-1)">
        <path fill="url(#sw-gradient)"
            d="M17,-23.9C23.9,-22,32.6,-20.4,36.5,-15.6C40.4,-10.7,39.5,-2.6,37.1,4.4C34.7,11.5,30.8,17.4,26.3,22.9C21.7,28.5,16.6,33.6,9.8,37.5C3,41.3,-5.3,43.9,-12.4,41.9C-19.4,39.9,-25.2,33.4,-29.8,26.6C-34.4,19.9,-37.7,12.9,-36.7,6.5C-35.8,0.1,-30.5,-5.7,-27.9,-13.3C-25.3,-20.9,-25.4,-30.4,-21.2,-33.5C-17.1,-36.6,-8.5,-33.4,-1.7,-30.7C5.1,-28,10.1,-25.8,17,-23.9Z"
            width="100%" height="100%" transform="translate(50 50)"style={{transition: "all 0.3s ease 0s"}} stroke-width="0">
        </path>
    <image class="hero-img" x="2" y="13" href="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/banner_h_4_img.png" />
    </g>
</svg>


          {/* <img
            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
            src={hero2}
            alt=""
          /> */}

        </div>
      </div>
      <br /><br /><br />
    </div>
  )
}

export default Hero;

// other
