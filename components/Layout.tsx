import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Menu', id: 'menu' },
    { label: 'About', id: 'about' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleOrderNow = () => {
    onNavigate('menu');
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const mapLink = "https://www.google.com/maps/search/?api=1&query=P+N+DAS+COLLEGE+Palta+West+Bengal";
  const phoneNumber = "09123822622";
  const displayPhone = "091238 22622";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header 
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo - Animate Left */}
          <div 
            className="text-2xl font-extrabold cursor-pointer flex items-center gap-2 animate-slide-in-left"
            onClick={() => handleNavClick('home')}
          >
            <div className={`p-2 rounded-lg ${isScrolled ? 'bg-brand-primary text-white' : 'bg-white text-brand-primary'} shadow-sm`}>
               <span className="font-black tracking-tighter">H</span>
            </div>
            <span className={isScrolled ? 'text-brand-dark' : 'text-white drop-shadow-md md:drop-shadow-lg'}>
              Hungry<span className="text-brand-primary font-light">?</span>
            </span>
          </div>

          {/* Desktop Nav - Animate Right */}
          <nav className="hidden md:flex items-center gap-8 animate-slide-in-right">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-bold uppercase tracking-wide transition-colors duration-300 ${
                  currentPage === link.id 
                    ? 'text-brand-primary' 
                    : isScrolled ? 'text-gray-700 hover:text-brand-primary' : 'text-gray-100 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={handleOrderNow}
              className="bg-brand-primary text-white px-6 py-2 rounded-full font-bold hover:bg-orange-700 transition-all transform hover:scale-105 shadow-lg border-2 border-brand-primary"
            >
              Order Now
            </button>
          </nav>

          {/* Mobile Menu Toggle - Animate Right */}
          <button 
            className={`md:hidden p-2 animate-slide-in-right ${isScrolled ? 'text-brand-dark' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} className="text-brand-dark" /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 px-4 flex flex-col gap-4 border-t border-gray-100 animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-lg font-medium py-2 border-b border-gray-100 ${
                   currentPage === link.id ? 'text-brand-primary' : 'text-gray-800'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={handleOrderNow}
              className="bg-brand-primary text-white w-full py-3 rounded-lg font-bold mt-2 shadow-md"
            >
              Order Now
            </button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white pt-16 pb-8 border-t-4 border-brand-primary">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-3xl font-black mb-4 text-white">Hungry <span className="text-brand-primary">?</span></h3>
            <p className="text-gray-400 mb-6">
              Get your fill here. Fresh, flavourful & pocket-friendly veg + non-veg snacks for everyone in Palta.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-brand-secondary">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button onClick={() => handleNavClick(link.id)} className="text-gray-400 hover:text-brand-primary transition-colors">
                    {link.label}
                  </button>
                </li>
              ))}
              <li><button onClick={() => window.open('https://www.swiggy.com', '_blank')} className="text-gray-400 hover:text-brand-primary transition-colors">Order on Swiggy</button></li>
              <li><button onClick={() => window.open('https://www.zomato.com', '_blank')} className="text-gray-400 hover:text-brand-primary transition-colors">Order on Zomato</button></li>
            </ul>
          </div>

          {/* Service Options */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-brand-secondary">Service Options</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2"><span className="text-brand-primary">✔</span> Dine-in (No Wait)</li>
              <li className="flex items-center gap-2"><span className="text-brand-primary">✔</span> Takeaway</li>
              <li className="flex items-center gap-2"><span className="text-brand-primary">✔</span> Delivery</li>
              <li className="flex items-center gap-2"><span className="text-brand-primary">✔</span> Healthy Options</li>
              <li className="flex items-center gap-2"><span className="text-brand-primary">✔</span> Family Friendly</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-brand-secondary">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-primary shrink-0 mt-1" size={20} />
                <a 
                  href={mapLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  Near P N DAS COLLEGE, beside Mallick pharmacy, Shantinagar, Palta, Barrackpore, West Bengal 743122
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-brand-primary shrink-0" size={20} />
                <span>Open · Closes 10:30 PM</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-primary shrink-0" size={20} />
                <a href={`tel:+91${phoneNumber}`} className="hover:text-white transition-colors">{displayPhone}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto px-4 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 Hungry. All Rights Reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="text-brand-primary">★ ★ ★ ★ ★</span>
            <span className="text-white">4.9/5 (160+ Reviews)</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;