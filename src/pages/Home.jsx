import Hero from '../components/Hero';
import Service from '../components/Service';
import Technologie from '../components/Technologie';
import Partners from '../components/Partners';
import { Story } from '../components/Story';
import Project from '@/components/Project';
import Gallery from '@/components/Gallery';
import WhyChooseUs from '@/components/WhyChooseUs';

const Home = () => {
  return (
    <div className="bg-black">
      <Hero />
      <Story />
      <Service />
      <Project />
      <Technologie />
      <WhyChooseUs />
      <Gallery />
      <Partners />
    </div>
  );
};

export default Home;