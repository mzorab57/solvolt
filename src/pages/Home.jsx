import Hero from '../components/Hero';
import Service from '../components/Service';
import Technologie from '../components/Technologie';
import Partners from '../components/Partners';
import { Story } from '../components/Story';
import Project from '@/components/Project';
import Gallery from '@/components/Gallery';

const Home = () => {
  return (
    <div>
      <Hero />
      <Story />
      <Service />
      <Project />
      <Technologie />
      <Gallery />
      <Partners />
    </div>
  );
};

export default Home;