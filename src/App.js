import { Hero } from './Components/Hero';
import { Navbar } from './Components/Navbar';
import About from './Components/About';
import { Services } from './Components/Services';
import { Process } from './Components/Process';
import { Industry } from './Components/Industry';
import ContactUs from './Components/ContactUs';
import { Footer } from './Components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <Industry />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
