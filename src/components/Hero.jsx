"use client";

import { cn } from "../lib/utils";
import React from "react";
import { motion } from "framer-motion";
import LightRays from "./LightRays";
import { DotScreenShader } from "./DotScreenShader";

export function HeroContent() {
  return (
    <div className="absolute top-1/3   flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
      

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            May these lights guide you
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-200 via-white to-blue-100 bg-clip-text text-transparent">
            on your path
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Experience the future of web development with cutting-edge solutions
          that illuminate your digital journey.
        </motion.p>

        {/* Buttons */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
              backgroundColor: "rgba(59, 130, 246, 0.9)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg backdrop-blur-sm border border-blue-500/30"
          >
            Get Started
          </motion.button>

          <motion.button
            whileHover={{ 
              scale: 1.05, 
              borderColor: "rgb(147, 197, 253)",
              backgroundColor: "rgba(59, 130, 246, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-gray-500 hover:border-blue-300 text-gray-200 rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
          >
            Learn More
          </motion.button>
        </motion.div> */}
      </motion.div>

   
    </div>
  );
}

export default function Hero() {
  return (
    <div className="relative h-screen  bg-slate-900 overflow-hidden  flex flex-col justify-center items-center ">
      {/* DotScreenShader as base background layer */}
      <div className="absolute inset-0 w-full h-full">
        <DotScreenShader theme="dark" />
      </div>
      
      {/* LightRays as overlay effect */}
      <LightRays 
        className="absolute inset-0 top-20 md:top-12  w-full h-full"
        raysOrigin="top-center"
        raysColor="#"
        raysSpeed={1}
        lightSpread={1.5}
        rayLength={5}
        pulsating={true}
        fadeDistance={1.2}
        saturation={1.0}
        followMouse={true}
        mouseInfluence={0.15}
        noiseAmount={0.1}
        distortion={0.05}
      />
     
      
      <HeroContent />
    </div>
  );
}