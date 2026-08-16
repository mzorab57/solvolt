const Partners = () => {
  const partners = [
    {
      name: "Interlight",
      logo: (
        <img src="../assets/images/logo/logo-1.png" alt="Interlight" className="w-32 h-20" />
      )
    },
    {
      name: "Eternity",
      logo: (
        <img src="../assets/images/logo/logo-2.webp" alt="Eternity" className="w-32 h-20" />
      )
    },
    {
      name: "Seraphim",
      logo: (
        <img src="../assets/images/logo/logo-3.avif" alt="Seraphim" className="w-32 h-20" />
      )
    },
    {
      name: "SOLVOT",
      logo: (
        <img src="/slogo.png" alt="Seraphim" className="w-32 h-20" />
      )
    },
    {
      name: "Deye",
      logo: (
        <img src="../assets/images/logo/logo-1.png" alt="Deye" className="w-32 h-20" />
      )
    },
    {
      name: "EVE",
      logo: (
        <img src="../assets/images/logo/logo-2.webp" alt="EVE" className="w-32 h-20" />
      )
    },
    {
      name: "Growatt",
      logo: (
        <img src="../assets/images/logo/logo-3.avif" alt="Growatt" className="w-32 h-20" />
      )
    },
     {
      name: "SOLVOT",
      logo: (
        <img src="/slogo.png" alt="Seraphim" className="w-32 h-20" />
      )
    },
  ];

  return (
    <section id="partners" className="section-padding bg-white py-28">
      <div className="container-custom px-4 lg:px-8 max-w-7xl mx-auto">
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
                <div key={idx} className="marquee__item ">
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