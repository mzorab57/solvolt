import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              If you are curious to learn more about what we can offer or how we can help your business, 
              Contact us now! We help our clients reach their goals every day.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Component */}
      <Contact />

      {/* Additional Contact Information */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Other Ways to Reach Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're here to help you with all your power solution needs. Choose the most convenient way to get in touch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 card-shadow text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Phone Support</h3>
              <p className="text-gray-600 mb-4">Call us directly for immediate assistance</p>
              <div className="space-y-2">
                <p className="font-semibold text-primary-600">07701550944</p>
                <p className="font-semibold text-primary-600">07706894747</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 card-shadow text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Support</h3>
              <p className="text-gray-600 mb-4">Send us your questions anytime</p>
              <p className="font-semibold text-primary-600">info@solvoltenergy.com</p>
            </div>

            <div className="bg-white rounded-xl p-8 card-shadow text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Our Office</h3>
              <p className="text-gray-600 mb-4">Come see us in person</p>
              <p className="font-semibold text-primary-600">Iraq, Erbil, Qasemlo Street, opposite Karezaushk Hospital</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Business Hours</h2>
                <p className="text-primary-100 mb-6">
                  We're available during these hours to serve you better. For emergencies, 
                  our 24/7 support line is always available.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Emergency Only</span>
                  </div>
                  <div className="flex justify-between border-t border-primary-400 pt-3 mt-4">
                    <span>Emergency Support:</span>
                    <span className="font-semibold">24/7 Available</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Quick Response Guarantee</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold">&lt; 2hrs</div>
                      <div className="text-sm text-primary-100">Email Response</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">&lt; 30min</div>
                      <div className="text-sm text-primary-100">Phone Response</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">Same Day</div>
                      <div className="text-sm text-primary-100">Site Visit</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm text-primary-100">Emergency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;