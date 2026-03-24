import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Cuisines', href: '#cuisines' },
  { label: 'Menu', href: '#menu' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-black/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex flex-col leading-tight">
          <span className="text-[#c9a84c] font-bold text-lg md:text-xl tracking-widest uppercase">
            The Cartel
          </span>
          <span className="text-gray-400 text-[10px] md:text-xs tracking-[0.3em] uppercase">Cafe</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-[#c9a84c] text-sm tracking-widest uppercase transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a84c] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-block px-5 py-2 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-widest uppercase hover:bg-[#c9a84c] hover:text-black transition-all duration-300 rounded-sm"
        >
          Book a Table
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#c9a84c] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-[#c9a84c]/20"
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-6 py-3 text-gray-300 hover:text-[#c9a84c] text-sm tracking-widest uppercase transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="px-6 pt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center px-5 py-2 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-widest uppercase hover:bg-[#c9a84c] hover:text-black transition-all duration-300 rounded-sm"
                >
                  Book a Table
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
