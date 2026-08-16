import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { AnimatedTabs } from './ui/animated-tabs';

const technologies = [
  {
    id: 'smart-grid',
    label: 'The Inverters',
    title: 'The Inverters',
    description: 'High-efficiency power conversion systems designed for stable performance and smart energy control.',
    features: [
      'Real-time monitoring & analytics',
      'Predictive maintenance alerts',
      'Auto-optimization algorithms',
    ],
    images: [
      {
        src: '/assets/images/INVERTER/11KW_png.png',
        alt: 'Solvolt inverter product',
        label: '11KW System',
      },
      {
        src: '/assets/images/INVERTER/SUN-3-12K-SG05LP3-EU-SM23.webp',
        alt: 'Solvolt hybrid inverter',
        label: 'Hybrid Inverter',
      },
      {
        src: '/assets/images/INVERTER/left-side.png',
        alt: 'Solvolt inverter side view',
        label: 'Detailed View',
      },
      {
        src: '/assets/images/INVERTER/ttnergy-tex-solar-inverters.webp',
        alt: 'Solvolt inverter lineup',
        label: 'Power Range',
      },
    ],
  },
  {
    id: 'quantum-processing',
    label: 'Solar Panels',
    title: 'Solar Panels',
    description: 'Premium photovoltaic energy solutions built to deliver clean output, durability, and long-term efficiency.',
    features: [
      'Reliable performance in harsh climates',
      'High-output cell technology',
      'Optimized energy generation',
    ],
    images: [
      {
        src: '/assets/images/PANEL/20240625220747.webp',
        alt: 'Solar panel installation view',
        label: 'Field Setup',
      },
      {
        src: '/assets/images/PANEL/535wsolar-550W-Jinko-Ginko-410-Mono-Pano-600W-Junko-470W-530W-850W-Panel.avif',
        alt: 'High-capacity solar panel',
        label: 'High Capacity',
      },
      {
        src: '/assets/images/PANEL/6a474c6f42e87.webp',
        alt: 'Modern solar panel technology',
        label: 'Modern Design',
      },
      {
        src: '/assets/images/PANEL/longi-solar-record.jpg',
        alt: 'Longi solar panel product',
        label: 'Premium Panel',
      },
    ],
  },
  {
    id: 'energy-storage',
    label: 'Batteries',
    title: 'Batteries',
    description: 'Long-lasting energy storage systems that support backup continuity, efficiency, and dependable daily use.',
    features: [
      'Stable backup storage capacity',
      'Long lifecycle battery technology',
      'Reliable support for critical loads',
    ],
    images: [
      {
        src: '/assets/images/BATTERY/ChatGPT%20Image%20Aug%2015,%202026,%2002_10_35%20PM.png',
        alt: 'Solvolt battery storage unit',
        label: 'Storage Unit',
      },
      {
        src: '/assets/images/BATTERY/rw-g10.6-1.jpg',
        alt: 'Wall-mounted battery system',
        label: 'Wall Mounted',
      },
    ],
  },
];

const renderTabContent = ({ title, description, features, images }) => (
  <div className="grid h-full w-full grid-cols-1 gap-4 lg:grid-cols-2">
    <div className="relative group">
      <div className="absolute inset-0 rounded group-hover:blur-2xl transition-all duration-500" />
      <div className="relative h-full rounded-2xl bg-black/5 p-8 pt-8">
        <div className="mb-2 flex items-center gap-4 lg:mb-6">
          <div>
            <h3 className="text-2xl font-bold text-black lg:text-3xl">{title}</h3>
          </div>
        </div>

        <p className="mb-3 leading-relaxed text-gray-700 lg:mb-6">
          {description}
        </p>

        <div className="space-y-3">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary-primary" />
              <span className="text-gray-500">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="relative rounded-2xl bg-black/5">
      <div className="absolute inset-0 rounded-xl" />
      <div className="relative h-full p-5 md:p-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {images.map((image) => (
            <figure key={image.src} className="relative overflow-hidden rounded-xl group">
              <img
                src={image.src}
                alt={image.alt}
                className="h-56 w-full object-contain transition-all duration-500 group-hover:scale-105 md:h-48"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent p-4">
                <figcaption className="text-sm font-medium text-white">
                  {image.label}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const technologyTabs = technologies.map((item) => ({
  id: item.id,
  label: item.label,
  content: renderTabContent(item),
}));

const Technologie = () => {
  return (
    <div id="technologies" className="relative min-h-screen overflow-hidden bg-white">
      <div className="relative z-10 pb-12 pt-28">
        <div className="mx-auto max-w-7xl px-4 text-start sm:px-6 lg:px-8">
          <div className="relative inline-block">
            <h1 className="relative bg-gradient-to-r from-primary-primary via-primary/80 to-gray-400 bg-clip-text text-4xl font-semibold text-transparent md:text-6xl">
              Advanced Solar Solutions
            </h1>
          </div>

          <p className="my-6 max-w-3xl text-xl font-light text-gray-500">
            Discover our state-of-the-art solar energy products — integrating high-efficiency solar panels,
            smart inverters, and long-lasting lithium battery storage — designed to deliver reliable, clean,
            and sustainable power.
          </p>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="relative rounded">
          <AnimatedTabs tabs={technologyTabs} />
        </div>
      </div>
    </div>
  );
};

export default Technologie;
