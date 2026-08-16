import React from 'react'
import { FeatureCard } from './blocks/grid-feature-cards'
import { 
  Battery,
  Zap,
  Plug,
  Leaf,
  Shield,
  Clock,
  Sparkles
} from 'lucide-react'

const services = [
  {
    icon: Battery,
    title: "USP Solutions",
   description: "Require a solution and gain a professional installation with high quality and 3 years warranty.",
    comingSoon: true
  },
 
  {
    icon: Zap,
    title: "Power Solutions",
    description: "Your power is our concern. Uninterruptable power continuity is provided effortlessly with unlimited capacity.",
    comingSoon: false
  },
  {
    icon: Plug,
    title: "Inverter Installation",
    description: "Long back up time can be obtained with our high-quality inverters.",
    comingSoon: false
  },
  {
    icon: Leaf,
    title: "Green Energy",
    description: "With us, the earth is securer, unpolluted, healthier. Life is not threatened over here.",
    comingSoon: false
  },
  {
    icon: Clock,
    title: "Backup Power Solution",
    description: "Leave your inquiry to SOLVOLT energy, and your backup time need is provided easily.",
    comingSoon: false
  },
  {
    icon: Shield,
    title: "Security Solution",
    description: "Your machines and devices are preserved and protected with our solutions.",
    comingSoon: false
  }
]

const Service = () => {
  return (
    <section id="services" className="relative bg-white pt-28 pb-2 overflow-hidden">
        
   
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <span className="block mb-4 ml-1 text-xs md:text-sm text-primary font-medium">
          Our Services ?
        </span>
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-start">
            <span className="text-4xl md:text-6xl font-medium bg-gradient-to-r from-primary-primary via-primary/80 to-gray-400 bg-clip-text text-transparent">
              Exceptional Services 
            </span>
            <br/>
            <span className="text-4xl md:text-6xl font-medium bg-gradient-to-r from-primary-primary via-primary/80 to-gray-400 bg-clip-text text-transparent">
              Tailored for You
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative lg:gap-5 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Coming Soon Badge - Only on first card */}
              {service.comingSoon && (
                <div className="absolute -top-2 -right-2 z-20">
                  <span className="relative inline-flex items-center gap-1.5 bg-gradient-to-r from-primary-primary to-gray-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
                    <Sparkles className="w-3 h-3" />
                    Coming Soon
                    <span className="absolute inset-0 bg-gradient-to-r from-primary-primary to-gray-500 rounded-full blur-md opacity-50 -z-10"></span>
                  </span>
                </div>
              )}

           
              
              <FeatureCard
                feature={service}
                className={`relative backdrop-blur-sm shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-105 -translate-y-2 group py-6 lg:py-12 ${
                  service.comingSoon ? '' : ''
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service
