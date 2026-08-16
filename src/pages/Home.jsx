import Hero from '../components/Hero';
import Service from '../components/Service';
import Technologie from '../components/Technologie';
import Partners from '../components/Partners';
import { Story } from '../components/Story';
import WhyChooseUs from '@/components/WhyChooseUs';
import Slider from '@/components/Slider';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GalleryCircle from '@/components/GalleryCircle';
import Location from '@/components/Location';



const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location]);

  return (
    <div className="">
      <Hero />
      <Story />
      <Service />
    <GalleryCircle />
      {/* <Project /> */}
      <Technologie />
      <WhyChooseUs />
      <Slider />
      <Location />
      <Partners />
     
    </div>
  );
};

export default Home;
