import { Hero } from './Components/Hero';
import { Navbar } from './Components/Navbar';
import About from './Components/About';
import { Services } from './Components/Services';
import { Industry } from './Components/Industry';
import ContactUs from './Components/ContactUs';
import { Footer } from './Components/Footer';
import Stepper from './Components/Stepper';
import { Clients } from './Components/Clients';



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Clients />
      <About/>
      <Services />
      <Stepper />
      <Industry />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
