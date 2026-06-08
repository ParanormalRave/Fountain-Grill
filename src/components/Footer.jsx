import { Link } from 'react-router-dom';
import { site } from '../data/site';

const Footer = () => {
  return (
    <footer className="bg-accent text-secondary pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-serif font-bold text-primary">
            FOUNTAIN GRILL
          </h3>
          <p className="opacity-70">{site.tagline}</p>
          <p className="opacity-70 text-sm">
            {site.address.line1}
            <br />
            {site.address.line2}
          </p>
          <p className="opacity-70 text-sm">
            <a href={site.phoneHref} className="hover:text-primary transition-colors">
              {site.phone}
            </a>
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3 opacity-70">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/menu/food" className="hover:text-primary transition-colors">Menu</Link></li>
            <li><Link to="/#about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            <li>
              <a href={site.links.order} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                Order Online
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Our Programs</h4>
          <ul className="space-y-3 opacity-70">
            <li><Link to="/#honor-flight" className="hover:text-primary transition-colors">Honor Flight Meals</Link></li>
            <li><Link to="/#gift-cards" className="hover:text-primary transition-colors">Gift Cards</Link></li>
            <li><Link to="/menu/catering" className="hover:text-primary transition-colors">Catering</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Follow Us</h4>
          <div className="flex gap-4">
            <a
              href={site.links.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-primary/20 p-2 rounded-full hover:bg-primary hover:scale-110 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a
              href={site.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-primary/20 p-2 rounded-full hover:bg-primary hover:scale-110 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a
              href={site.links.yelp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Yelp"
              className="bg-primary/20 p-2 rounded-full hover:bg-primary hover:scale-110 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206 9.194 9.194 0 0 1 2.364 3.252 1.073 1.073 0 0 1-.694 1.459zm-5.336 3.717l4.917 1.665c.913.31.96 1.581.07 1.957a9.19 9.19 0 0 1-3.95.74 1.073 1.073 0 0 1-1.01-1.246l.844-5.106c.16-.96 1.42-1.18 1.96-.342l.169-.005zm-3.65 1.05l.852 5.107a1.073 1.073 0 0 1-1.01 1.247 9.19 9.19 0 0 1-3.95-.74c-.89-.376-.844-1.648.069-1.958l4.04-1.366zm-2.27-3.34l-4.995-1.434a1.073 1.073 0 0 1-.694-1.458 9.193 9.193 0 0 1 2.364-3.253 1.072 1.072 0 0 1 1.596.207l3.013 4.47c.563.83-.217 1.906-1.177 1.63l-.107-.012zm3.78-4.97V3.06a1.073 1.073 0 0 1 1.25-1.058c1.96.337 3.8 1.137 5.37 2.33a1.073 1.073 0 0 1 .04 1.668L13.6 9.96c-.74.61-1.86.09-1.86-.86l.62.001z"/></svg>
            </a>
          </div>
          <a
            href={site.links.giftCards}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-sm font-semibold text-primary hover:underline"
          >
            Buy a Gift Card →
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center text-sm opacity-50">
        <p>© 2026 Fountain Grill LLC. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
