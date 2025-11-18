import React from 'react'
import { FeatureCard } from './blocks/grid-feature-cards'
import { 
  Battery,
  Zap,
  Plug,
  Leaf,
  Shield,
  Clock
} from 'lucide-react'

const services = [
  {
    icon: Battery,
    title: "UPS Solutions",
    description: "Require a solution and gain a professional installation with high quality and 3 years warranty."
  },
  {
    icon: Zap,
    title: "Power Solutions",
    description: "Your power is our concern. Uninterruptable power continuity is provided effortlessly with unlimited capacity."
  },
  {
    icon: Plug,
    title: "Inverter Installation",
    description: "Long back up time can be obtained with our high-quality inverters."
  },
  {
    icon: Leaf,
    title: "Green Energy",
    description: "With us, the earth is securer, unpolluted, healthier. Life is not threatened over here."
  },
  {
    icon: Clock,
    title: "Backup Power Solution",
    description: "Leave your inquiry to PowerSolid, and your backup time need is provided easily."
  },
  {
    icon: Shield,
    title: "Security Solution",
    description: "Your machines and devices are preserved and protected with our solutions."
  }
]

const Service = () => {
  return (
    <section id="services" className="relative  bg-white pt-28 pb-20 overflow-hidden">
        
      {/* Background Decorations */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20  blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-600/20  blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-600/10  blur-3xl"></div>
      </div> */}

      <div className="relative z-10  max-w-7xl mx-auto px-4  lg:px-8">
         <span className="block  mb-4 ml-1 text-xs md:text-sm text-primary font-medium">
          Our Services ?
        </span>
        {/* Header Section */}
        <div className="text-center mb-16">
         
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold  mb-6 text-start">
            <span className="text-4xl md:text-6xl font-medium   bg-gradient-to-r from-primary-primary via-primary/80 to-gray-400 bg-clip-text text-transparent">
              Exceptional Services 
            </span>
            <br/>
            <span className="text-4xl md:text-6xl font-medium  bg-gradient-to-r from-primary-primary via-primary/80 to-gray-400 bg-clip-text text-transparent">
              Tailored for You
            </span>
          </h2>
          
          {/* <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver cutting-edge solutions that drive innovation and accelerate your business growth. 
            Our expert team combines creativity with technical excellence to exceed your expectations.
          </p> */}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 gap-6 mb-16 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div> */}
              
              <FeatureCard
                feature={service}
                className="relative bg-white/80 backdrop-blur-sm border border-white/50  shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group py-6 lg:py-12"
              />
              
              {/* Hover Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-black to-black/10 rounded opacity-0 group-hover:opacity-100 transition-all duration-300"></div> */}
            </div>
          ))}
        </div>

       
      </div>
    </section>
  )
}

export default Service