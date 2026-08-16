import React from 'react';
import { Sun, ShieldCheck, Wrench } from 'lucide-react';

const features = [
  {
    title: 'Solutions Tailored to Your Needs',
    desc: 'We design solar energy systems based on the specific needs of your home, business, or project.',
    Icon: Sun,
  },
  {
    title: 'Quality & Reliability',
    desc: 'We provide reliable and high-quality solar solutions using premium equipment and professional expertise.',
    Icon: ShieldCheck,
  },
  {
    title: 'Complete Service & Support',
    desc: 'From consultation and system design to installation and after-sales support, our team is with you every step.',
    Icon: Wrench,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="pb-44 pt-12 bg-white">
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
