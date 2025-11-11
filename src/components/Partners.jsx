const Partners = () => {
  const partners = [
    {
      name: "Interlight",
      logo: (
        <svg className="w-full h-12" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="100" height="20" rx="4" fill="#2563eb"/>
          <text x="60" y="25" textAnchor="middle" className="text-white text-sm font-bold">INTERLIGHT</text>
        </svg>
      )
    },
    {
      name: "Eternity",
      logo: (
        <svg className="w-full h-12" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="8" fill="#10b981"/>
          <text x="35" y="25" className="text-gray-700 text-sm font-bold">ETERNITY</text>
        </svg>
      )
    },
    {
      name: "Seraphim",
      logo: (
        <svg className="w-full h-12" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 20 L20 10 L30 20 L20 30 Z" fill="#f59e0b"/>
          <text x="40" y="25" className="text-gray-700 text-sm font-bold">SERAPHIM</text>
        </svg>
      )
    },
    {
      name: "Deye",
      logo: (
        <svg className="w-full h-12" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="15" width="25" height="10" rx="5" fill="#ef4444"/>
          <text x="45" y="25" className="text-gray-700 text-sm font-bold">DEYE</text>
        </svg>
      )
    },
    {
      name: "EVE",
      logo: (
        <svg className="w-full h-12" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="10,25 20,15 30,25 20,35" fill="#8b5cf6"/>
          <text x="40" y="25" className="text-gray-700 text-sm font-bold">EVE</text>
        </svg>
      )
    },
    {
      name: "Growatt",
      logo: (
        <svg className="w-full h-12" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="20" r="6" fill="#059669"/>
          <circle cx="25" cy="20" r="4" fill="#34d399"/>
          <text x="35" y="25" className="text-gray-700 text-sm font-bold">GROWATT</text>
        </svg>
      )
    }
  ];

  return (
    <section className="section-padding bg-white py-24">
      <div className="container-custom">
        <div className="text-start mb-16">
          <h2 className="text-4xl md:text-6xl font-semibold  bg-gradient-to-r from-primary-primary via-primary/80 to-gray-300 bg-clip-text text-transparent">
            Our Partners
          </h2>
          <p className="text-xl text-start font-light text-gray-500  max-w-3xl py-2 ">
            We collaborate with leading global brands to bring you the best power solutions 
            and cutting-edge technology in the energy sector.
          </p>
        </div>
        {/* Partners Marquee (Infinite Loop) */}
        <div className="mb-16">
          <div className="marquee" role="region" aria-label="Partner logos marquee">
            <div className="marquee__inner">
              {[...partners, ...partners].map((partner, idx) => (
                <div key={idx} className="marquee__item">
                  {partner.logo}
                </div>
              ))}
            </div>
          </div>
        </div>


      
      </div>
    </section>
  );
};

export default Partners;