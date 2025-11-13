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
        { label: 'Exceptional Services', href: '/services', ariaLabel: 'Exceptional Services' },
        { label: 'Advanced Technologies', href: '/services', ariaLabel: 'Advanced Technologies' },
        { label: 'Partnerships', href: '/services', ariaLabel: 'Partnerships' }
      ]
    },
    {
      label: 'Portfolio',
      bgColor: '#',
      textColor: '#ffffff',
      links: [
        { label: 'Projects', href: '/projects', ariaLabel: 'Projects' },
        { label: 'Products', href: '/products', ariaLabel: 'Products' },
        { label: 'Videos', href: '/videos', ariaLabel: 'Videos' }
      ]
    },
    {
      label: 'Company',
      bgColor: '#',
      textColor: '#ffffff',
      links: [
        { label: 'About Us', href: '/about', ariaLabel: 'About Solvolt' },
        { label: 'Contact', href: '/contact', ariaLabel: 'Contact Us' },
        { label: 'Why Choose', href: '/why-choose', ariaLabel: 'Why Choose Solvolt' },
      ]
    }
  ];

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-4">
      <CardNav
        logo="/vite.svg"
        logoAlt="Solvolt Logo"
        items={navItems}
        className="backdrop-blur-xl rounded"
        baseColor="rgba(0, 155, 144,0.15)"
        menuColor="#ffffff"
        buttonBgColor="#3b82f6"
        buttonTextColor="#ffffff"
      />
    </div>
  );
};

export default Header;