import Hero from '../components/Hero';
import MenuPreview from '../components/MenuPreview';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import HonorFlight from '../components/HonorFlight';
import GiftCards from '../components/GiftCards';

const Home = () => {
  return (
    <main>
      <Hero />
      <MenuPreview />
      <AboutUs />
      <HonorFlight />
      <GiftCards />
      <Contact />
    </main>
  );
};

export default Home;
