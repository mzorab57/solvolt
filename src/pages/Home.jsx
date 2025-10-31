import Hero from '../components/Hero';
import Services from '../components/Services';
import Technologies from '../components/Technologies';
import Partners from '../components/Partners';
import { Story } from '../components/Story';

const Home = () => {
  return (
    <div>
      <Hero />
      <Story />
      <Services />
      <Technologies />
      <Partners />
    </div>
  );
};

export default Home;