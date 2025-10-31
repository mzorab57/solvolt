import React from 'react'
import { FeatureCard } from './blocks/grid-feature-cards'
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Shield, 
  Zap,
  ArrowRight,
  Sparkles
} from 'lucide-react'

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices for optimal performance."
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences across all devices."
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns to boost your online presence and drive business growth."
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced analytics and visualization tools."
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure business continuity."
  },
  {
    icon: Zap,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for enhanced performance and reliability."
  }
]

const Service = () => {
  return (
    <section className="relative min-h-screen bg-white py-20 overflow-hidden">
      {/* Background Decorations */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20  blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-600/20  blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-600/10  blur-3xl"></div>
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1  mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div> */}
              
              <FeatureCard
                feature={service}
                className="relative bg-white/80 backdrop-blur-sm border border-white/50 rounded shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-primary/20 to-primary-primary/5 rounded opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  )
}

export default Service