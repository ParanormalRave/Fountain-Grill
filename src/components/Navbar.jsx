import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/fg_logo.webp'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const menuItems = [
    { name: 'Food Menu', path: '/menu/food' },
    { name: 'Drink Menu', path: '/menu/drink' },
    { name: 'Kids Menu', path: '/menu/kids' },
    { name: 'Catering Menu', path: '/menu/Catering' },
  ];

  return (
    <nav className="bg-secondary border-b border-neutral-light sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" >
             <img src={logo} alt="fg_logo" className='h-10' />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => setIsMenuOpen(false)}
            >
              <button className="nav-link flex items-center gap-1 focus:outline-none">
                Menu
                <svg className={`w-4 h-4 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isMenuOpen && (
                <div className="absolute left-0 mt-0 w-48 bg-secondary border border-neutral-light shadow-lg py-2 z-50">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-accent hover:bg-neutral-light hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="border-t border-neutral-light mt-1 pt-1">
                    <Link to="/menu" className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-neutral-light" onClick={() => setIsMenuOpen(false)}>
                      View Full Menu
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/#about" className="nav-link">About Us</Link>
            <Link to="/#contact" className="nav-link">Contact</Link>
            <Link to="/#honor-flight" className="nav-link">Honor Flight</Link>
            <Link to="/#gift-cards" className="nav-link">Gift Cards</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              className="text-accent hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileNavOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileNavOpen && (
        <div className="md:hidden bg-secondary border-b border-neutral-light animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 nav-link" onClick={() => setIsMobileNavOpen(false)}>Home</Link>
            <div className="px-3 py-2 font-medium text-accent">Menu</div>
            <div className="pl-6 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 text-sm text-accent hover:text-primary"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Link to="/#about" className="block px-3 py-2 nav-link" onClick={() => setIsMobileNavOpen(false)}>About Us</Link>
            <Link to="/#contact" className="block px-3 py-2 nav-link" onClick={() => setIsMobileNavOpen(false)}>Contact</Link>
            <Link to="/#honor-flight" className="block px-3 py-2 nav-link" onClick={() => setIsMobileNavOpen(false)}>Honor Flight</Link>
            <Link to="/#gift-cards" className="block px-3 py-2 nav-link" onClick={() => setIsMobileNavOpen(false)}>Gift Cards</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
