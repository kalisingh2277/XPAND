import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold">XPAND</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/payment">Payment</NavLink>
            <NavLink to="/upload">Upload</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/feedback">Feedback</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-white transition-colors duration-300 hover:glow"
  >
    {children}
  </Link>
);

export default Navbar;