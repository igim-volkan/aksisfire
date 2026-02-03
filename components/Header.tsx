import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, Globe, ShoppingBag, User } from 'lucide-react';
import { NAVIGATION_DATA } from '../constants';
import { NavItem } from '../types';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const context = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="fixed w-full z-50 bg-white shadow-lg font-sans">
      {/* Top Bar */}
      <div className="bg-secondary-900 text-gray-300 text-xs py-2 hidden md:block border-b border-gray-700">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <Phone size={14} /> +90 (216) 306 82 16
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <Mail size={14} /> aksisfire@aksisfire.com.tr
            </span>
          </div>
          <div className="flex space-x-4 items-center">
            <span className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer relative group" onClick={() => context.setIsCartOpen(true)}>
              <ShoppingBag size={14} />
              <span className="ml-1">Cart ({context.cartCount})</span>
            </span>
            <span className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
              <Globe size={14} /> EN
            </span>
            <Link to="/admin/login" className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
              <User size={14} /> Login
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/aksisfire-new.svg" alt="Aksisfire Systems" className="h-10" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex h-full items-center">
          {NAVIGATION_DATA.map((item) => (
            <div
              key={item.label}
              className="relative h-full flex items-center px-4 cursor-pointer group"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                onClick={() => !item.children && item.path && navigate(item.path)}
                className={`flex items-center gap-1 text-sm font-semibold transition-colors uppercase tracking-wide ${item.children ? 'cursor-default text-gray-700 group-hover:text-primary-600' : 'cursor-pointer text-gray-700 hover:text-primary-600'}`}
              >
                {item.label}
                {item.children && <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
              </div>

              {/* Mega Menu */}
              {item.type === 'mega' && activeDropdown === item.label && item.children && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-7xl bg-white shadow-xl border-t-4 border-primary-600 p-8 grid grid-cols-4 gap-6 animate-fade-in-down rounded-b-lg">
                  <div className="col-span-1 bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-display font-bold text-secondary-900 mb-2">{item.label}</h3>
                    <p className="text-sm text-gray-500 mb-4">Complete range of certified fire suppression and detection systems for marine and industrial applications.</p>
                    <Link to={item.path || '/fire-solutions'} className="text-primary-600 font-semibold text-sm hover:underline" onClick={() => setActiveDropdown(null)}>View All Products &rarr;</Link>
                  </div>
                  <div className="col-span-3 grid grid-cols-3 gap-y-4 gap-x-8">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path || '#'}
                        className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 group/item transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover/item:bg-primary-600 transition-colors"></div>
                        <span className="text-sm font-medium text-gray-700 group-hover/item:text-primary-600">{child.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Standard Dropdown */}
              {item.type === 'dropdown' && activeDropdown === item.label && item.children && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl border-t-2 border-primary-600 py-2 animate-fade-in-down rounded-b-lg">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.path || '#'}
                      className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors border-b border-gray-50 last:border-none"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-600"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden">
          <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-2xl overflow-y-auto">
            <div className="p-4 flex justify-between items-center border-b">
              <span className="font-display font-bold text-xl text-secondary-900">MENU</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-500">
                <X size={24} />
              </button>
            </div>
            <div className="py-4">
              {NAVIGATION_DATA.map((item) => (
                <div key={item.label}>
                  <div className="px-6 py-3 border-b border-gray-100">
                    <div className="font-bold text-secondary-900 flex justify-between items-center">
                      {item.children ? (
                        <span className="cursor-default">{item.label}</span>
                      ) : (
                        <Link to={item.path || '#'} onClick={() => setIsMobileMenuOpen(false)}>
                          {item.label}
                        </Link>
                      )}
                    </div>
                  </div>
                  {item.children && (
                    <div className="bg-gray-50 px-6 py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.path || '#'}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 text-sm text-gray-600 hover:text-primary-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;