import React from 'react';
import { UserCheck, Cpu, Layers } from 'lucide-react';

const features = [
  {
    title: 'Individual Approach',
    desc: 'We will be your dependable partner and will constantly develop quality.',
    Icon: UserCheck,
  },
  {
    title: 'Modern Technologies',
    desc: 'We deal with UPS, solar panels, inverters, batteries, and related power solutions.',
    Icon: Cpu,
  },
  {
    title: 'Complex Solutions',
    desc: 'Develop quality for the products to all of our customers worldwide.',
    Icon: Layers,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="pb-44 pt-12 bg-white">
      <div className="container max-w-7xl mx-auto px-4 lg:px-8">
        <div className="max-w-3xl  mb-10">
          <h2 className="text-4xl md:text-6xl font-semibold  bg-gradient-to-r from-primary-primary via-primary/80 to-gray-300 bg-clip-text text-transparent">Why Choose Solvolt?</h2>
          <p className="text-lg text-start font-light text-gray-500  max-w-4xl py-5 px-1 ">
            Solvolt concentrates on customer values by providing quality products and services
            in the most effective and innovative methods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {features.map(({ title, desc, Icon }, idx) => (
            <div
              key={idx}
              className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-primary/50 to-primary-primary/70 flex items-center justify-center text-white">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}