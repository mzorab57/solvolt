import React from 'react'
import { AnimatedTabs } from './ui/animated-tabs'
import { Zap, Cpu, Battery, Shield, Gauge, Sparkles, Star, Award, TrendingUp, Users, Globe, Rocket } from 'lucide-react'

const Technologie = () => {


  const technologyTabs = [
    {
      id: "smart-grid",
      label: "The Inverters",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full h-full">
          <div className="relative group">
            <div className="absolute inset-0 rounded group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative pt-8 bg-black/5  p-8 rounded-2xl h-full">
              <div className="flex  items-center gap-4 mb-2 lg:mb-6">
                {/* <div className="p-4 bg-gradient-to-br from-primary-primary/20 to-cyan-500/20 rounded-xl">
                  <Zap className="w-8 h-8 text-black" />
                </div> */}
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-black">The Inverters</h3>
                  {/* <div className="flex items-center gap-2 mt-1">
                    <Gauge className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-semibold">99.2% Efficiency</span>
                  </div> */}
                </div>
              </div>
              
              <p className="text-gray-700 mb-3 lg:mb-6 leading-relaxed">
               High-efficiency power conversion systems
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                 
                  <span className="text-gray-500">Real-time monitoring & analytics</span>
                </div>
                <div className="flex items-center gap-3">
                 
                  <span className="text-gray-500">Predictive maintenance alerts</span>
                </div>
                <div className="flex items-center gap-3">
                 
                  <span className="text-gray-500">Auto-optimization algorithms</span>
                </div>
              </div>

             
            </div>
          </div>

{/*  images */}
          <div className="relative bg-black/5  rounded-2xl">
            <div className="absolute inset-0  rounded-xl"></div>
            <div className="relative  p-8 h-full">
              {/* Image gallery */}
              <div className="grid grid-cols-2 gap-4">
                <figure className="relative group rounded-xl overflow-hidden ">
                  <img
                    src="/assets/images/inverter.webp"
                    alt="Smart Grid – Overview"
                    className="w-full h-40 md:h-48 object-cover transform group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-cyan-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <figcaption className="absolute bottom-3 left-3 text-white text-sm font-medium">
                    Grid Overview
                  </figcaption>
                  {/* <span className="absolute top-3 right-3 px-2 py-1 text-xs rounded-full bg-blue-600/70 text-white backdrop-blur">
                    Live
                  </span> */}
                </figure>

                <figure className="relative group rounded-xl overflow-hidden ">
                  <img
                    src="/assets/images/inverter.webp"
                    alt="Smart Grid – Monitoring"
                    className="w-full h-40 md:h-48 object-cover transform group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/30 via-emerald-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <figcaption className="absolute bottom-3 left-3 text-white text-sm font-medium">
                    Monitoring
                  </figcaption>
                  <span className="absolute top-3 right-3 px-2 py-1 text-xs rounded-full bg-emerald-600/70 text-white backdrop-blur">
                    24/7
                  </span>
                </figure>

                <figure className="relative group rounded-xl overflow-hidden ">
                  <img
                    src="/assets/images/inverter.webp"
                    alt="Smart Grid – Load Balancing"
                    className="w-full h-40 md:h-48 object-cover transform group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <figcaption className="absolute bottom-3 left-3 text-white text-sm font-medium">
                    Load Balancing
                  </figcaption>
                  <span className="absolute top-3 right-3 px-2 py-1 text-xs rounded-full bg-purple-600/70 text-white backdrop-blur">
                    Optimal
                  </span>
                </figure>

                <figure className="relative group rounded-xl overflow-hidden ">
                  <img
                    src="/assets/images/inverter.webp"
                    alt="Smart Grid – Fault Detection"
                    className="w-full h-40 md:h-48 object-cover transform group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-rose-600/30 via-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <figcaption className="absolute bottom-3 left-3 text-white text-sm font-medium">
                    Fault Detection
                  </figcaption>
                  <span className="absolute top-3 right-3 px-2 py-1 text-xs rounded-full bg-orange-600/70 text-white backdrop-blur">
                    AI
                  </span>
                </figure>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "quantum-processing",
      label: "Solar Panels",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full h-full">
          <div className="relative group">
            <div className="absolute inset-0 rounded group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative pt-8 bg-black/5  p-8 rounded-2xl h-full">
              <div className="flex  items-center gap-4 mb-2 lg:mb-6">
                {/* <div className="p-4 bg-gradient-to-br from-primary-primary/20 to-cyan-500/20 rounded-xl">
                  <Zap className="w-8 h-8 text-black" />
                </div> */}
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-black">Solar Panels</h3>
                  {/* <div className="flex items-center gap-2 mt-1">
                    <Gauge className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-semibold">99.2% Efficiency</span>
                  </div> */}
                </div>
              </div>
              
              <p className="text-gray-700 mb-3 lg:mb-6 leading-relaxed">
              Premium photovoltaic energy solutions
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                 
                  <span className="text-gray-500">Real-time monitoring & analytics</span>
                </div>
                <div className="flex items-center gap-3">
                 
                  <span className="text-gray-500">Predictive maintenance alerts</span>
                </div>
                <div className="flex items-center gap-3">
                 
                  <span className="text-gray-500">Auto-optimization algorithms</span>
                </div>
              </div>

             
            </div>
          </div>

{/*  images */}
          <div className="relative bg-black/5  rounded-2xl">
            <div className="absolute inset-0  rounded-xl"></div>
            <div className="relative  p-8 h-full">
              {/* Image gallery */}
              <div className="grid grid-cols-2 gap-4">
                <figure className="relative group rounded-xl overflow-hidden ">
                  <img
                    src="/assets/images/inverter.webp"
                    alt="Smart Grid – Overview"
                    className="w-full h-40 md:h-48 object-cover transform group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-cyan-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <figcaption className="absolute bottom-3 left-3 text-white text-sm font-medium">
                    Grid Overview
                  </figcaption>
                  {/* <span className="absolute top-3 right-3 px-2 py-1 text-xs rounded-full bg-blue-600/70 text-white backdrop-blur">
                    Live
                  </span> */}
                </figure>

                <figure className="relative group rounded-xl overflow-hidden ">
                  <img
                    src="/assets/images/inverter.webp"
                    alt="Smart Grid – Monitoring"
                    className="w-full h-40 md:h-48 object-cover transform group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/30 via-emerald-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <figcaption className="absolute bottom-3 left-3 text-white text-sm font-medium">
                    Monitoring
                  </figcaption>
                  <span className="absolute top-3 right-3 px-2 py-1 text-xs rounded-full bg-emerald-600/70 text-white backdrop-blur">
                    24/7
                  </span>
                </figure>

                <figure className="relative group rounded-xl overflow-hidden ">
                  <img
                    src="/assets/images/inverter.webp"
                    alt="Smart Grid – Load Balancing"
                    className="w-full h-40 md:h-48 object-cover transform group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <figcaption className="absolute bottom-3 left-3 text-white text-sm font-medium">
                    Load Balancing
                  </figcaption>
                  <span className="absolute top-3 right-3 px-2 py-1 text-xs rounded-full bg-purple-600/70 text-white backdrop-blur">
                    Optimal
                  </span>
                </figure>

                <figure className="relative group rounded-xl overflow-hidden ">
                  <img
                    src="/assets/images/inverter.webp"
                    alt="Smart Grid – Fault Detection"
                    className="w-full h-40 md:h-48 object-cover transform group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-rose-600/30 via-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <figcaption className="absolute bottom-3 left-3 text-white text-sm font-medium">
                    Fault Detection
                  </figcaption>
                  <span className="absolute top-3 right-3 px-2 py-1 text-xs rounded-full bg-orange-600/70 text-white backdrop-blur">
                    AI
                  </span>
                </figure>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "energy-storage",
      label: "Batteries",
    content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full h-full">
          <div className="relative group">
            <div className="absolute inset-0 rounded group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative pt-8 bg-black/5  p-8 rounded-2xl h-full">
              <div className="flex  items-center gap-4 mb-2 lg:mb-6">
                {/* <div className="p-4 bg-gradient-to-br from-primary-primary/20 to-cyan-500/20 rounded-xl">
                  <Zap className="w-8 h-8 text-black" />
                </div> */}
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold  text-black">Batteries</h3>
                  {/* <div className="flex items-center gap-2 mt-1">
                    <Gauge className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-semibold">99.2% Efficiency</span>
                  </div> */}
                </div>
              </div>
              
              <p className="text-gray-700 mb-3 lg:mb-6 leading-relaxed">
              Long-lasting energy storage systems
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                 
                  <span className="text-gray-500">Real-time monitoring & analytics</span>
                </div>
                <div className="flex items-center gap-3">
                 
                  <span className="text-gray-500">Predictive maintenance alerts</span>
                </div>
                <div className="flex items-center gap-3">
                 
                  <span className="text-gray-500">Auto-optimization algorithms</span>
                </div>
              </div>

             
            </div>
          </div>

{/*  images */}
          <div className="relative bg-black/5  rounded-2xl">
            <div className="absolute inset-0  rounded-xl"></div>
            <div className="relative  p-8 h-full">
              {/* Image gallery */}
              <div className="grid grid-cols-2 gap-4">
                <figure className="relative group rounded-xl overflow-hidden ">
                  <img
                    src="/assets/images/inverter.webp"
                    alt="Smart Grid – Overview"
                    className="w-full h-40 md:h-48 object-cover transform group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-cyan-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <figcaption className="absolute bottom-3 left-3 text-white text-sm font-medium">
                    Grid Overview
                  </figcaption>
                  {/* <span className="absolute top-3 right-3 px-2 py-1 text-xs rounded-full bg-blue-600/70 text-white backdrop-blur">
                    Live
                  </span> */}
                </figure>

                <figure className="relative group rounded-xl overflow-hidden ">
                  <img
                    src="/assets/images/inverter.webp"
                    alt="Smart Grid – Monitoring"
                    className="w-full h-40 md:h-48 object-cover transform group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/30 via-emerald-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <figcaption className="absolute bottom-3 left-3 text-white text-sm font-medium">
                    Monitoring
                  </figcaption>
                  <span className="absolute top-3 right-3 px-2 py-1 text-xs rounded-full bg-emerald-600/70 text-white backdrop-blur">
                    24/7
                  </span>
                </figure>

                <figure className="relative group rounded-xl overflow-hidden ">
                  <img
                    src="/assets/images/inverter.webp"
                    alt="Smart Grid – Load Balancing"
                    className="w-full h-40 md:h-48 object-cover transform group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <figcaption className="absolute bottom-3 left-3 text-white text-sm font-medium">
                    Load Balancing
                  </figcaption>
                  <span className="absolute top-3 right-3 px-2 py-1 text-xs rounded-full bg-purple-600/70 text-white backdrop-blur">
                    Optimal
                  </span>
                </figure>

                <figure className="relative group rounded-xl overflow-hidden ">
                  <img
                    src="/assets/images/inverter.webp"
                    alt="Smart Grid – Fault Detection"
                    className="w-full h-40 md:h-48 object-cover transform group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-rose-600/30 via-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <figcaption className="absolute bottom-3 left-3 text-white text-sm font-medium">
                    Fault Detection
                  </figcaption>
                  <span className="absolute top-3 right-3 px-2 py-1 text-xs rounded-full bg-orange-600/70 text-white backdrop-blur">
                    AI
                  </span>
                </figure>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    
  ]

  return (
    <div id="technologies" className="min-h-screen bg-white relative overflow-hidden">
      {/* <FloatingParticles /> */}
      
      {/* Header Section */}
      <div className="relative z-10 pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-start">
          <div className="relative inline-block">
           
            <h1 className="relative   text-4xl md:text-6xl font-semibold  bg-gradient-to-r from-primary-primary via-primary/80 to-gray-400 bg-clip-text text-transparent">
              Advanced Technologies
            </h1>
          </div>
          
          <p className="text-xl text-gray-500 max-w-3xl font-light  my-6 ">
            Discover our cutting-edge energy solutions powered by artificial intelligence, 
            quantum computing, and military-grade security protocols.
          </p>
          
      
        </div>
      </div>

      {/* Animated Tabs Section */}
      <div className="relative  z-10 max-w-7xl mx-auto">
        <div className="relative">
          {/* <ElectricBorder className="absolute inset-0 rounded-3xl" /> */}
          <div className="relative   rounded ">
            <AnimatedTabs tabs={technologyTabs} />
          </div>
        </div>
      </div>

     
    
    </div>
  )
}

export default Technologie