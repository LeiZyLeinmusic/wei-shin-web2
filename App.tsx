import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from './components/Layout';
import Home from './pages/Home';
import { Products } from './pages/Products';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { News, Insights, Support, Contact } from './pages/Others';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-brand-text bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* About Nested Routes */}
            <Route path="/about/*" element={<About />} />
            
            {/* Products Nested Routes */}
            <Route path="/products/*" element={<Products />} />
            
            {/* Projects Nested Routes */}
            <Route path="/projects/*" element={<Projects />} />
            
            {/* News Nested Routes */}
            <Route path="/news/*" element={<News />} />
            
            {/* Insights Nested Routes */}
            <Route path="/insights/*" element={<Insights />} />
            
            {/* Support Routes */}
            <Route path="/support/*" element={<Support />} />
            
            {/* Contact Routes */}
            <Route path="/contact/*" element={<Contact />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;