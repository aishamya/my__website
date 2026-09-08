import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Activity } from 'lucide-react';

interface NavbarProps {
  onOpenProjects: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenProjects }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        'home',
        'about',
        'skills',
        'projects',
        'experience',
        'certifications',
        'achievements',
        'contact',
      ];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0e1a]/85 backdrop-blur-xl border-b border-sky-300/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="group flex flex-col focus:outline-none"
            id="nav-brand"
          >
            <span className="text-base sm:text-lg font-bold tracking-wider text-slate-100 group-hover:text-sky-300 transition-colors">
              AISHAMYA U
            </span>
            <span className="text-[10px] tracking-[0.28em] text-sky-400 font-mono font-medium">
              AIML • QUANT • SOFTWARE
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-[13px] text-slate-300">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`transition-colors py-1 relative hover:text-sky-300 ${
                    isActive ? 'text-sky-300 font-medium' : 'text-slate-400'
                  }`}
                  id={`nav-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-sky-400 shadow-[0_0_8px_#7dd3fc]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenProjects}
              className="glass-pill px-4 py-1.5 rounded-lg text-xs font-medium text-sky-300 hover:text-white transition-all flex items-center gap-1.5 border border-sky-400/20"
              id="btn-view-projects-nav"
            >
              <span>View Projects</span>
            </button>

            <div
              className="w-8 h-8 rounded-lg glass-panel flex items-center justify-center text-sky-300/80 border border-sky-400/15"
              title="System Stream Online"
            >
              <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-sky-300 glass-panel"
            aria-label="Toggle Navigation Menu"
            id="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-xl glass-panel-elevated border border-sky-400/20">
            <div className="flex flex-col space-y-3 text-sm">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="px-3 py-2 rounded-lg text-slate-300 hover:text-sky-300 hover:bg-sky-500/10 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 border-t border-sky-400/15 flex items-center justify-between">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenProjects();
                  }}
                  className="w-full text-center py-2 rounded-lg bg-sky-500/15 text-sky-300 border border-sky-400/30 text-xs font-medium"
                >
                  View Featured Projects
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
