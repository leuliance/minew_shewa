
import AboutUs from './components/AboutUs';
import PlayList from './components/Playlist';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import NavBar from './components/NavBar';
import Stats from './components/Stats';
import { Box } from '@chakra-ui/react';
import CallToAction from './components/CallToAction';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div >
      <NavBar />
      {/* <Box h="65px"/> */}
      <Hero />
      <AboutUs />
      <Stats />
      <PlayList />
      <HowItWorks />
      
      <ContactUs />
      <CallToAction />
      <Footer/>
    </div>
  );
}

export default App;
