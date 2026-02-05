import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './UI';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navClass = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-brand-dark py-4 shadow-lg' : 'bg-transparent py-6'
  }`;

  const linkClass = `text-sm font-medium tracking-wide transition-colors ${
    isScrolled ? 'text-gray-300 hover:text-brand-yellow' : 'text-white/90 hover:text-brand-yellow'
  }`;

  return (
    <header className={navClass}>
      <div className="max-w-[1320px] mx-auto px-10 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center z-50">
          <img 
            src="https://docs.google.com/drawings/d/e/2PACX-1vSFGj9WeS9AcKrM2-wEc6bBG7bBg8r_Of_snyMe_Zgi5Ecs1ZwpanDc9ZVvHySSjqJcD64aK0LvogTj/pub?w=924&h=232" 
            alt="WAI CIN 煒鑫實業" 
            className="h-10 md:h-12 w-auto object-contain" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          <div className="group relative">
            <Link to="/about" className={linkClass}>關於煒鑫</Link>
            <div className="absolute top-full left-0 pt-4 hidden group-hover:block">
              <div className="bg-white text-brand-text min-w-[200px] shadow-sharp border-t-4 border-brand-yellow">
                <Link to="/about/chairman" className="block px-6 py-3 hover:bg-gray-50 text-sm">董事長的話</Link>
                <Link to="/about/team" className="block px-6 py-3 hover:bg-gray-50 text-sm">團隊介紹</Link>
                <Link to="/about/business" className="block px-6 py-3 hover:bg-gray-50 text-sm">營業項目</Link>
                <Link to="/about/history" className="block px-6 py-3 hover:bg-gray-50 text-sm">公司沿革</Link>
                <Link to="/about/experience" className="block px-6 py-3 hover:bg-gray-50 text-sm">工程經驗</Link>
                <Link to="/about/affiliates" className="block px-6 py-3 hover:bg-gray-50 text-sm">關係企業</Link>
              </div>
            </div>
          </div>
          <Link to="/products" className={linkClass}>產品介紹</Link>
          <Link to="/projects" className={linkClass}>工程實績</Link>
          <Link to="/news" className={linkClass}>最新消息</Link>
          <Link to="/insights" className={linkClass}>技術觀點</Link>
          <Link to="/support" className={linkClass}>服務支援</Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button variant="ghost" to="/contact" className="!px-6 !py-2 text-xs">
            立即諮詢
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-brand-dark/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <Link to="/about" className="text-2xl text-white font-bold">關於煒鑫</Link>
          <Link to="/products" className="text-2xl text-white font-bold">產品介紹</Link>
          <Link to="/projects" className="text-2xl text-white font-bold">工程實績</Link>
          <Link to="/news" className="text-2xl text-white font-bold">最新消息</Link>
          <Link to="/insights" className="text-2xl text-white font-bold">技術觀點</Link>
          <Link to="/support" className="text-2xl text-white font-bold">服務支援</Link>
          <Link to="/contact" className="text-2xl text-brand-yellow font-bold">聯絡我們</Link>
        </div>
      </div>
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-brand-text pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-[1320px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-6 tracking-tighter">煒鑫實業有限公司</h3>
            <p className="text-brand-textSec text-sm leading-relaxed">
              專注於防水與隔音工程的領導品牌。<br/>
              提供全方位的建築結構保護方案。
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">SITEMAP</h4>
            <ul className="space-y-2 text-sm text-brand-textSec">
              <li><Link to="/about" className="hover:text-brand-yellow transition-colors">關於煒鑫</Link></li>
              <li><Link to="/products" className="hover:text-brand-yellow transition-colors">產品介紹</Link></li>
              <li><Link to="/projects" className="hover:text-brand-yellow transition-colors">工程實績</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">SUPPORT</h4>
            <ul className="space-y-2 text-sm text-brand-textSec">
              <li><Link to="/support/downloads" className="hover:text-brand-yellow transition-colors">型錄下載</Link></li>
              <li><Link to="/insights" className="hover:text-brand-yellow transition-colors">技術觀點</Link></li>
              <li><Link to="/contact" className="hover:text-brand-yellow transition-colors">聯絡我們</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">OFFICE</h4>
            <ul className="space-y-3 text-sm text-brand-textSec">
              <li className="flex items-start gap-3">
                <span className="text-brand-yellow">📍</span>
                <span>台北市中山區某某路123號10樓</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-yellow">📞</span>
                <span>02-2345-6789</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-yellow">✉️</span>
                <span>service@waicin.com.tw</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-textSec">
          <p>© 2026 WAI CIN Industrial Co., Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <span>Privacy Policy</span>
             <span>Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const PageHeader: React.FC<{ title: string; breadcrumb: string }> = ({ title, breadcrumb }) => (
  <div className="bg-brand-dark pt-40 pb-20 px-10">
    <div className="max-w-[1320px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
           <span className="text-brand-yellow text-sm font-bold tracking-widest uppercase mb-2 block">{breadcrumb}</span>
           <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{title}</h1>
        </div>
        <div className="w-20 h-1 bg-brand-yellow md:mb-2"></div>
      </div>
    </div>
  </div>
);