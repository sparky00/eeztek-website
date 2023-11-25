import { Hero } from './Components/Hero';
import { Navbar } from './Components/Navbar';
// import About from './Components/About';
import { Services } from './Components/Services';
import { Industry } from './Components/Industry';
import ContactUs from './Components/ContactUs';
import { Footer } from './Components/Footer';
import Stepper from './Components/Stepper';
import { Clients } from './Components/Clients';
import { useEffect } from 'react';
import Hero2 from './Components/Hero2';
import "./App.css";
import About2 from './Components/About2';
import { Contact } from './Components/Contact';



function App() {
  useEffect(() => {
    // Initialize smooth scroll
    const { SmoothScroll, initTE } = require("tw-elements");
    initTE({ SmoothScroll });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero2/>
      {/* <Hero /> */}
      <Clients />
      <About2/>
      {/* <About /> */}
      <Services />
      <Stepper />
      <Industry />
      <Contact/>
      {/* <ContactUs /> */}
      <Footer />
    </div>
  );
}

export default App;
