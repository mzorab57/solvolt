import React from 'react'
import { ZoomParallax } from './ui/zoom-parallax'
import { 
  ExternalLink, 
  Github, 
  Code, 
  Sparkles,
  ArrowRight,
  Star,
  Users,
  Calendar
} from 'lucide-react'

// Project images for the parallax effect
const projectImages = [
  {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Web Development Project"
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1679917152411-353fd633e218?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Mobile App Development"
  },
  {
    src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center",
    alt: "UI/UX Design Project"
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1679437976868-f7f3c805b0d4?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "E-commerce Platform"
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1682148196781-8bbcdfd7f537?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Data Analytics Dashboard"
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661961617519-ce160a561ee4?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Cloud Solutions"
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1682148026899-d21f17c04e80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "AI & Machine Learning"
  }
]

// Featured projects data
const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description: "A modern, scalable e-commerce solution with advanced features and seamless user experience.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    stats: { stars: 245, users: "10K+", year: "2024" },
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
    link: "#",
    github: "#"
  },
  {
    title: "AI Analytics Dashboard",
    description: "Intelligent data visualization platform with real-time analytics and machine learning insights.",
    tech: ["Vue.js", "Python", "TensorFlow", "D3.js"],
    stats: { stars: 189, users: "5K+", year: "2024" },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
    link: "#",
    github: "#"
  },
  {
    title: "Mobile Banking App",
    description: "Secure and intuitive mobile banking application with biometric authentication and real-time transactions.",
    tech: ["React Native", "Firebase", "Node.js", "PostgreSQL"],
    stats: { stars: 312, users: "25K+", year: "2023" },
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center",
    link: "#",
    github: "#"
  }
]

const Project = () => {
  return (
    <div id="projects" className="relative bg-white text-white ">
      {/* Hero Section with Zoom Parallax */}
        <ZoomParallax images={projectImages} />
    
    </div>
  )
}

export default Project