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
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with leading global brands to bring you the best power solutions 
            and cutting-edge technology in the energy sector.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-lg p-6 hover:bg-white hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              <div className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                {partner.logo}
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Our Partnerships Matter
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our strategic partnerships enable us to deliver world-class solutions 
              with guaranteed quality and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h4>
              <p className="text-gray-600 text-sm">Products from trusted global manufacturers with proven track records.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Latest Technology</h4>
              <p className="text-gray-600 text-sm">Access to cutting-edge innovations and advanced energy solutions.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Competitive Pricing</h4>
              <p className="text-gray-600 text-sm">Direct partnerships ensure the best prices for premium products.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M12 12h.01M12 12h.01" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Global Support</h4>
              <p className="text-gray-600 text-sm">Worldwide warranty and support network for peace of mind.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Experience Premium Quality?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how our partnerships with industry leaders can benefit your energy projects. 
            Get in touch with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              View Products
            </button>
            <button className="btn-secondary">
              Contact Partners Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;