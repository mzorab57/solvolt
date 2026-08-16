import React from 'react';
import { BadgeCheck, MapPinned, Wrench } from 'lucide-react';

const highlights = [
  {
    title: 'Service Coverage',
    Icon: MapPinned,
  },
  {
    title: 'Installed Projects',
    Icon: BadgeCheck,
  },
  {
    title: 'Ongoing Support',
    Icon: Wrench,
  },
];

const Location = () => {
  return (
    <section id="locations" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <span className="mb-4 block text-xs font-medium text-primary md:text-sm">
            Our Locations
          </span>
          <h2 className="bg-gradient-to-r from-primary-primary via-primary/80 to-gray-400 bg-clip-text text-4xl font-semibold text-transparent md:text-6xl">
            Where Solvolt
            <br />
            Has Made Impact
          </h2>
          <p className="max-w-2xl px-1 py-5 text-lg font-light text-gray-500">
            This map highlights the locations where Solvolt has carried out installations,
            support, and energy solution projects for homes, businesses, and commercial sites.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="lg:space-y-12 space-y-8">
            {highlights.map(({ title, desc, Icon }) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className=" flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary-primary/50 to-primary-primary/70 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                </div>
       
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary-primary/10 via-transparent to-primary-primary/5 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-primary-primary/10 bg-gradient-to-br from-slate-50 to-white p-4 shadow-[0_25px_80px_rgba(15,23,42,0.12)] md:p-6">
              <img
                src="/assets/images/location.png"
                alt="Map of Solvolt completed work and service locations"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
