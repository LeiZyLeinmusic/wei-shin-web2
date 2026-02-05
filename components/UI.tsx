import React from 'react';
import { Link } from 'react-router-dom';

// Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline-dark';
  to?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', to, className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-8 py-3 text-sm font-bold tracking-wider uppercase transition-all duration-300 rounded-none transform active:scale-95";
  
  const variants = {
    primary: "bg-black text-white hover:bg-brand-yellow hover:text-black border border-transparent",
    ghost: "bg-transparent text-white border border-white hover:bg-white hover:text-black",
    'outline-dark': "bg-transparent text-brand-text border border-gray-300 hover:bg-black hover:text-white"
  };

  const combinedClass = `${baseStyle} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
};

// Section Title Component
export const SectionTitle: React.FC<{ title: string; subtitle?: string; light?: boolean }> = ({ title, subtitle, light = false }) => (
  <div className="mb-12">
    <div className="w-[60px] h-[10px] bg-brand-yellow mb-6"></div>
    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-brand-text'}`}>
      {title}
    </h2>
    {subtitle && <p className={`text-lg ${light ? 'text-gray-300' : 'text-brand-textSec'}`}>{subtitle}</p>}
  </div>
);

// Card Component
export const Card: React.FC<{ children: React.ReactNode; className?: string; hoverEffect?: boolean }> = ({ children, className = '', hoverEffect = true }) => (
  <div className={`bg-white border border-gray-100 ${hoverEffect ? 'hover:shadow-sharp hover:-translate-y-1 transition-all duration-300' : ''} ${className}`}>
    {children}
  </div>
);

// Modal Component
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-none shadow-2xl animate-fade-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-brand-yellow text-black hover:bg-black hover:text-white transition-colors"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};