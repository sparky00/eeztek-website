
import { Navbar } from './Components/Navbar';
import About from './Components/About';
import { Services } from './Components/Services';
import { Industry } from './Components/Industry';
import { Footer } from './Components/Footer';
import Stepper from './Components/Stepper';
import { Clients } from './Components/Clients';
import { useEffect } from 'react';
import "./App.css";
import { Contact } from './Components/Contact';
import Technologies from './Components/Technologies';
import Testimonial from './Components/Testimonial';
import Hero from './Components/Hero';



function App() {
  useEffect(() => {
    // Initialize smooth scroll
    const { SmoothScroll, initTE } = require("tw-elements");
    initTE({ SmoothScroll });
  }, []);

 

  return (
    <div>
      <Navbar />
      <Hero/>
      <Clients />
      <About />
      <Services />
      <Stepper />
      <Industry />
      <Technologies/>
      <Testimonial/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
