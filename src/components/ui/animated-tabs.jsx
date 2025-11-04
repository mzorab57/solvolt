"use client";;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const defaultTabs = [
{
  id: "tab1",
  label: "Tab 1",
  content: (
    <div className="grid grid-cols-2 gap-4 w-full h-full">
      <img
        src="https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Tab 1"
        className="rounded w-full h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none" />

      <div className="flex flex-col gap-y-2">
        <h2 className="text-2xl font-bold mb-0 text-white mt-0 !m-0">
          Tab 1
        </h2>
        <p className="text-sm text-gray-200 mt-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
    </div>
  ),
},
{
  id: "tab2",
  label: "Tab 2",
  content: (
    <div className="grid grid-cols-2 gap-4 w-full h-full">
      <img
        src="https://images.unsplash.com/photo-1506543730435-e2c1d4553a84?q=80&w=2362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Tab 2"
        className="rounded-lg w-full h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none" />
      <div className="flex flex-col gap-y-2">
        <h2 className="text-2xl font-bold mb-0 text-white mt-0 !m-0">
          Tab 2
        </h2>
        <p className="text-sm text-gray-200 mt-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
    </div>
  ),
},
{
  id: "tab3",
  label: "Tab 3",
  content: (
    <div className="grid grid-cols-2 gap-4 w-full h-full">
      <img
        src="https://images.unsplash.com/photo-1522428938647-2baa7c899f2f?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Tab 3"
        className="rounded-lg w-full h-60 object-cover mt-0 !m-0  shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none" />
      <div className="flex flex-col gap-y-2">
        <h2 className="text-2xl font-bold mb-0 text-white mt-0 !m-0">
          Tab 3
        </h2>
        <p className="text-sm text-gray-200 mt-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
    </div>
  ),
},
];

const AnimatedTabs = ({
  tabs = defaultTabs,
  defaultTab,
  className
}) => {
const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

if (!tabs?.length) return null;

return (
  <div className={cn("w-full max-w-7xl  lg:px-8 flex flex-col gap-y-1", className)}>
    <div
      className="flex gap-2 flex-wrap bg-black/5 p-2 mx-2   rounded-2xl">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            "relative px-3 py-1.5 text-sm font-medium rounded-2xl text-black outline-none transition-colors"
          )}>
          {activeTab === tab.id && (
            <motion.div
              layoutId="active-tab"
              className="absolute inset-0 bg-[#f3f0f0d1] border-2 border-primary-primary/40  rounded-lg "
              transition={{ type: "spring", duration: 0.6 }} />
          )}
          <span className="relative z-10 ">{tab.label}</span>
        </button>
      ))}
    </div>
    <div
      className="p-4    text-white  rounded-2xl  min-h-60 h-full">
      {tabs.map((tab) =>
        activeTab === tab.id && (
          <motion.div
            key={tab.id}
            initial={{
              opacity: 0,
              scale: 0.95,
              x: -10,
              filter: "blur(10px)",
            }}
            animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95, x: -10, filter: "blur(10px)" }}
            transition={{
              duration: 0.5,
              ease: "circInOut",
              type: "spring",
            }}>
            {tab.content}
          </motion.div>
        ))}
    </div>
  </div>
);
};

export { AnimatedTabs };
