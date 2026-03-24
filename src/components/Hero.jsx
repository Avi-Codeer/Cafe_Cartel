import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${offsetY * 0.4}px)`,
          willChange: 'transform',
        }}
      >
        {/* Dark overlay with texture */}
        <div className="absolute inset-0 bg-[#0d0d0d]" />
        {/* Gradient radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.12) 0%, rgba(13,13,13,0) 70%)',
          }}
        />
        {/* Subtle grid/pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(201,168,76,0.3) 60px, rgba(201,168,76,0.3) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(201,168,76,0.3) 60px, rgba(201,168,76,0.3) 61px)',
          }}
        />
      </div>

      {/* Top & bottom vignette */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0d0d0d] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0d0d0d] to-transparent pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        {/* Pre-heading */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[#c9a84c] text-xs md:text-sm tracking-[0.4em] uppercase mb-6 font-light"
        >
          Fraser Road · Patna · Premium Café
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight"
          style={{
            textShadow: '0 0 60px rgba(201,168,76,0.3), 0 2px 4px rgba(0,0,0,0.8)',
          }}
        >
          The Cartel
          <br />
          <span
            className="text-[#c9a84c]"
            style={{ textShadow: '0 0 40px rgba(201,168,76,0.6)' }}
          >
            Experience
          </span>
        </motion.h1>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mx-auto mb-6 h-px w-32 md:w-48"
          style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-gray-400 text-sm md:text-lg max-w-xl mx-auto mb-10 font-light tracking-wide"
        >
          Where every sip tells a story. Premium flavours, curated ambiance — a rendezvous you won't forget.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://wa.me/919973355555?text=I'd%20like%20to%20reserve%20a%20table"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-8 py-4 bg-[#c9a84c] text-black font-semibold text-sm tracking-widest uppercase rounded-sm transition-all duration-300 hover:bg-[#f0d080] overflow-hidden group"
            style={{
              boxShadow: '0 0 20px rgba(201,168,76,0.5), 0 0 40px rgba(201,168,76,0.2)',
            }}
          >
            <span className="relative z-10">Book a Table</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </a>

          <a
            href="#menu"
            className="px-8 py-4 border border-[#c9a84c]/50 text-[#c9a84c] font-light text-sm tracking-widest uppercase rounded-sm hover:border-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all duration-300"
          >
            Explore Menu
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-[#c9a84c]" />
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#c9a84c]/40 pointer-events-none"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}
    </section>
  );
}
