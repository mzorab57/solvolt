import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CardNav from './CardNav';

const Header = () => {
  const location = useLocation();

  // Navigation items for CardNav
  const navItems = [
    {
      label: 'Services',
      bgColor: '#',
      textColor: '#ffffff',
      links: [
        { label: 'Web Development', href: '/services', ariaLabel: 'Web Development Services' },
        { label: 'Mobile Apps', href: '/services', ariaLabel: 'Mobile App Development' },
        { label: 'UI/UX Design', href: '/services', ariaLabel: 'UI/UX Design Services' }
      ]
    },
    {
      label: 'Solutions',
      bgColor: '#',
      textColor: '#ffffff',
      links: [
        { label: 'E-commerce', href: '/services', ariaLabel: 'E-commerce Solutions' },
        { label: 'Enterprise', href: '/services', ariaLabel: 'Enterprise Solutions' },
        { label: 'Startups', href: '/services', ariaLabel: 'Startup Solutions' }
      ]
    },
    {
      label: 'Company',
      bgColor: '#',
      textColor: '#ffffff',
      links: [
        { label: 'About Us', href: '/about', ariaLabel: 'About Solvolt' },
        { label: 'Contact', href: '/contact', ariaLabel: 'Contact Us' },
        { label: 'Careers', href: '/about', ariaLabel: 'Career Opportunities' }
      ]
    }
  ];

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <CardNav
        logo="/vite.svg"
        logoAlt="Solvolt Logo"
        items={navItems}
        className="backdrop-blur-xl rounded-xl"
        baseColor="rgba(0,0,0,0.15)"
        menuColor="#ffffff"
        buttonBgColor="#3b82f6"
        buttonTextColor="#ffffff"
      />
    </div>
  );
};

export default Header;