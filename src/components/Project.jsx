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
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
    alt: "Web Development Project"
  },
  {
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&crop=center",
    alt: "Mobile App Development"
  },
  {
    src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center",
    alt: "UI/UX Design Project"
  },
  {
    src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop&crop=center",
    alt: "E-commerce Platform"
  },
  {
    src: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop&crop=center",
    alt: "Data Analytics Dashboard"
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=center",
    alt: "Cloud Solutions"
  },
  {
    src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center",
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
    <div className="relative bg-white text-white ">
      {/* Hero Section with Zoom Parallax */}
        <ZoomParallax images={projectImages} />
    
    </div>
  )
}

export default Project