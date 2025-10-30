const Technologies = () => {
  const technologies = [
    {
      title: "The Inverters",
      description: "High-efficiency inverters that convert DC power to AC power with minimal energy loss. Perfect for residential and commercial applications.",
      features: ["Pure Sine Wave Output", "High Efficiency (>95%)", "Overload Protection", "Remote Monitoring"],
      image: (
        <svg className="w-full h-48" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="50" width="200" height="100" rx="8" fill="#374151" stroke="#4b5563" strokeWidth="2"/>
          <rect x="60" y="60" width="40" height="20" rx="4" fill="#10b981"/>
          <rect x="110" y="60" width="40" height="20" rx="4" fill="#3b82f6"/>
          <rect x="160" y="60" width="40" height="20" rx="4" fill="#f59e0b"/>
          <rect x="210" y="60" width="30" height="20" rx="4" fill="#ef4444"/>
          <circle cx="80" cy="110" r="15" fill="#1f2937" stroke="#6b7280" strokeWidth="2"/>
          <circle cx="130" cy="110" r="15" fill="#1f2937" stroke="#6b7280" strokeWidth="2"/>
          <circle cx="180" cy="110" r="15" fill="#1f2937" stroke="#6b7280" strokeWidth="2"/>
          <rect x="60" y="130" width="180" height="10" rx="2" fill="#6b7280"/>
          <text x="150" y="170" textAnchor="middle" className="text-xs fill-gray-300">INVERTER</text>
        </svg>
      )
    },
    {
      title: "The Solar Panels",
      description: "Premium monocrystalline and polycrystalline solar panels designed for maximum energy conversion and durability.",
      features: ["25-Year Warranty", "High Power Output", "Weather Resistant", "Easy Installation"],
      image: (
        <svg className="w-full h-48" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="40" width="200" height="120" rx="8" fill="#1e40af" stroke="#1d4ed8" strokeWidth="2"/>
          <line x1="50" y1="80" x2="250" y2="80" stroke="#3b82f6" strokeWidth="1"/>
          <line x1="50" y1="120" x2="250" y2="120" stroke="#3b82f6" strokeWidth="1"/>
          <line x1="90" y1="40" x2="90" y2="160" stroke="#3b82f6" strokeWidth="1"/>
          <line x1="130" y1="40" x2="130" y2="160" stroke="#3b82f6" strokeWidth="1"/>
          <line x1="170" y1="40" x2="170" y2="160" stroke="#3b82f6" strokeWidth="1"/>
          <line x1="210" y1="40" x2="210" y2="160" stroke="#3b82f6" strokeWidth="1"/>
          <circle cx="230" cy="20" r="15" fill="#fbbf24"/>
          <path d="M230 5 L230 10 M245 20 L240 20 M215 20 L220 20 M230 30 L230 35 M240 10 L237 13 M240 30 L237 27 M220 10 L223 13 M220 30 L223 27" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"/>
          <text x="150" y="180" textAnchor="middle" className="text-xs fill-gray-600">SOLAR PANEL</text>
        </svg>
      )
    },
    {
      title: "The Batteries",
      description: "Advanced lithium-ion and lead-acid batteries providing reliable energy storage for various applications.",
      features: ["Long Cycle Life", "Fast Charging", "Deep Discharge Protection", "Maintenance Free"],
      image: (
        <svg className="w-full h-48" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="100" y="50" width="100" height="120" rx="8" fill="#374151" stroke="#4b5563" strokeWidth="2"/>
          <rect x="110" y="40" width="80" height="15" rx="4" fill="#6b7280"/>
          <rect x="110" y="65" width="80" height="25" fill="#10b981"/>
          <rect x="110" y="95" width="80" height="25" fill="#10b981"/>
          <rect x="110" y="125" width="80" height="25" fill="#10b981"/>
          <rect x="110" y="155" width="80" height="10" fill="#374151"/>
          <text x="150" y="82" textAnchor="middle" className="text-xs fill-white font-bold">100%</text>
          <circle cx="70" cy="110" r="8" fill="#ef4444"/>
          <circle cx="230" cy="110" r="8" fill="#374151"/>
          <text x="70" y="130" textAnchor="middle" className="text-xs fill-red-500">+</text>
          <text x="230" y="130" textAnchor="middle" className="text-xs fill-gray-600">-</text>
          <text x="150" y="190" textAnchor="middle" className="text-xs fill-gray-600">BATTERY</text>
        </svg>
      )
    }
  ];

  return (
    <section className="section-padding gradient-bg">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We utilize cutting-edge technology to deliver the most efficient and reliable 
            power solutions for your energy needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden card-shadow hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="p-6 bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                {tech.image}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {tech.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {tech.description}
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Features:</h4>
                  <ul className="space-y-2">
                    {tech.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <button className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-200 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 card-shadow">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Our Technologies?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Assured</h4>
              <p className="text-gray-600">All products undergo rigorous testing and quality control processes.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">High Efficiency</h4>
              <p className="text-gray-600">Maximum energy conversion with minimal losses for optimal performance.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h4>
              <p className="text-gray-600">Round-the-clock technical support and maintenance services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;