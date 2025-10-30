const About = () => {
  const whyChooseUs = [
    {
      title: "Individual Approach",
      description: "We will be your dependable partner and will constantly develop quality",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Modern Technologies",
      description: "We deal with UPS, solar panels, inverters, batteries, and other related power solutions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Complex Solutions",
      description: "Develop quality for the products to all of our customers all around the world.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who We Are?
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed">
                Solvolt is an international brand which was founded in Vietnam. We deal with UPS, 
                solar panels, inverters, batteries, and other related power solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  We concentrate on customer values by providing quality of products and services 
                  in the most effective and innovative methods. We prioritize the environment and 
                  life with power management technology which is more sustainable and reliable 
                  because that is what really matters.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We will be your dependable partner and will constantly develop quality for the 
                  products to all of our customers all around the world.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button className="btn-primary">
                  View Products
                </button>
                <button className="btn-secondary">
                  Download Catalogue
                </button>
              </div>
            </div>
            <div className="relative">
              {/* Company Values Illustration */}
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8">
                <svg className="w-full h-64" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Globe */}
                  <circle cx="200" cy="125" r="80" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2"/>
                  <path d="M120 125 Q200 80 280 125 Q200 170 120 125" stroke="#0284c7" strokeWidth="2" fill="none"/>
                  <path d="M200 45 Q240 125 200 205 Q160 125 200 45" stroke="#0284c7" strokeWidth="2" fill="none"/>
                  
                  {/* Energy symbols around globe */}
                  <g transform="translate(150, 75)">
                    <rect width="20" height="15" rx="2" fill="#10b981"/>
                    <line x1="0" y1="7" x2="20" y2="7" stroke="#065f46" strokeWidth="1"/>
                    <line x1="5" y1="0" x2="5" y2="15" stroke="#065f46" strokeWidth="1"/>
                    <line x1="15" y1="0" x2="15" y2="15" stroke="#065f46" strokeWidth="1"/>
                  </g>
                  
                  <g transform="translate(230, 75)">
                    <path d="M10 0 L20 10 L10 20 L0 10 Z" fill="#f59e0b"/>
                    <circle cx="10" cy="10" r="3" fill="#fbbf24"/>
                  </g>
                  
                  <g transform="translate(150, 160)">
                    <rect width="15" height="25" rx="2" fill="#374151"/>
                    <rect width="15" height="8" fill="#10b981"/>
                    <rect y="10" width="15" height="8" fill="#10b981"/>
                    <rect y="20" width="15" height="5" fill="#6b7280"/>
                  </g>
                  
                  <g transform="translate(235, 160)">
                    <path d="M5 0 L15 8 L10 8 L10 20 L0 20 L0 8 L5 0 Z" fill="#eab308"/>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Power Solid?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solvolt concentrates on customer values by providing quality products and services 
              in the most effective and innovative methods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 card-shadow text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
              <p className="text-primary-100 max-w-2xl mx-auto">
                Years of dedication and commitment to excellence have led us to these milestones
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-primary-100">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-primary-100">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-primary-100">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-primary-100">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Power Your Future?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Solvolt for their energy solutions. 
              Let's build a sustainable future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Get Started Today
              </button>
              <button className="btn-secondary">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;