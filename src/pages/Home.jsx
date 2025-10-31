import Hero from '../components/Hero';
import Service from '../components/Service';
import Technologies from '../components/Technologies';
import Partners from '../components/Partners';
import { Story } from '../components/Story';

const Home = () => {
  return (
    <div>
      <Hero />
      <Story />
      <Service />
      <Technologies />
      <Partners />
    </div>
  );
};

export default Home;