import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Home, BookOpen, Users, User, Bell, HelpCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSelector from '../common/LanguageSelector';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-purple-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center gap-2 font-bold text-xl">
              <span className="flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full">
                <Users size={18} />
              </span>
              Village To Venture
            </NavLink>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? "bg-purple-900 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1" 
                  : "px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 flex items-center gap-1"
                }
              >
                <Home size={18} /> {t('nav.home')}
              </NavLink>
              <NavLink 
                to="/resources" 
                className={({ isActive }) => 
                  isActive ? "bg-purple-900 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1" 
                  : "px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 flex items-center gap-1"
                }
              >
                <BookOpen size={18} /> {t('nav.resources')}
              </NavLink>
              <NavLink 
                to="/community" 
                className={({ isActive }) => 
                  isActive ? "bg-purple-900 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1" 
                  : "px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 flex items-center gap-1"
                }
              >
                <Users size={18} /> {t('nav.community')}
              </NavLink>
              <NavLink 
                to="/emergency" 
                className={({ isActive }) => 
                  isActive ? "bg-purple-900 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1" 
                  : "px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 flex items-center gap-1"
                }
              >
                <Bell size={18} /> {t('nav.emergency')}
              </NavLink>
              <NavLink 
                to="/profile" 
                className={({ isActive }) => 
                  isActive ? "bg-purple-900 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1" 
                  : "px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 flex items-center gap-1"
                }
              >
                <User size={18} /> {t('nav.profile')}
              </NavLink>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <LanguageSelector />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-purple-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "bg-purple-900 text-white block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2" 
                : "text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700 flex items-center gap-2"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <Home size={18} /> {t('nav.home')}
            </NavLink>
            <NavLink 
              to="/resources" 
              className={({ isActive }) => 
                isActive ? "bg-purple-900 text-white block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2" 
                : "text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700 flex items-center gap-2"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <BookOpen size={18} /> {t('nav.resources')}
            </NavLink>
            <NavLink 
              to="/community" 
              className={({ isActive }) => 
                isActive ? "bg-purple-900 text-white block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2" 
                : "text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700 flex items-center gap-2"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <Users size={18} /> {t('nav.community')}
            </NavLink>
            <NavLink 
              to="/emergency" 
              className={({ isActive }) => 
                isActive ? "bg-purple-900 text-white block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2" 
                : "text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700 flex items-center gap-2"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <Bell size={18} /> {t('nav.emergency')}
            </NavLink>
            <NavLink 
              to="/profile" 
              className={({ isActive }) => 
                isActive ? "bg-purple-900 text-white block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2" 
                : "text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700 flex items-center gap-2"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <User size={18} /> {t('nav.profile')}
            </NavLink>
            <div className="pt-4">
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;