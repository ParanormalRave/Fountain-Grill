import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import ScrollProgress from './components/ScrollProgress';

// Scroll to top on route change (or to the hashed section once it's mounted)
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // The target section may not be mounted yet on a fresh route change,
      // so retry on the next frames until it appears.
      let tries = 0;
      const scroll = () => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (tries++ < 10) {
          requestAnimationFrame(scroll);
        }
      };
      scroll();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <ScrollProgress />
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/menu/:category" element={<MenuPage />} />
            {/* Fallback for other sections if accessed via direct link */}
            <Route path="/about" element={<Home />} />
            <Route path="/contact" element={<Home />} />
            <Route path="/honor-flight" element={<Home />} />
            <Route path="/gift-cards" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
