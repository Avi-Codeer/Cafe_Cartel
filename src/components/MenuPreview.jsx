import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, IndianRupee, ChefHat, Sparkles } from 'lucide-react';

const highlights = [
  {
    icon: BookOpen,
    value: '13',
    unit: 'Pages',
    label: 'Curated Menu',
    description: 'A thoughtfully crafted menu across multiple cuisines',
  },
  {
    icon: IndianRupee,
    value: '1,000',
    unit: '₹',
    label: 'Avg. for Two',
    description: 'Premium dining experience at accessible pricing',
  },
  {
    icon: ChefHat,
    value: '50+',
    unit: '',
    label: 'Signature Dishes',
    description: 'Handpicked specialties by our expert chefs',
  },
  {
    icon: Sparkles,
    value: '4★',
    unit: '',
    label: 'Premium Café',
    description: 'Rated among the finest in Fraser Road, Patna',
  },
];

const menuCategories = [
  'Starters & Appetisers',
  'Soups & Salads',
  'North Indian Mains',
  'Biryani & Rice',
  'Continental & Italian',
  'Breads & Sides',
  'Chinese Specialties',
  'Grills & Kebabs',
  'Beverages – Hot',
  'Beverages – Cold & Shakes',
  'Mocktails & Specials',
  'Desserts',
  "Chef's Specials",
];

function StatCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group text-center p-6 md:p-8 rounded-lg border border-white/5 hover:border-[#c9a84c]/30 bg-white/[0.02] hover:bg-[#c9a84c]/5 transition-all duration-400"
    >
      <div
        className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center border border-[#c9a84c]/30"
        style={{ background: 'rgba(201,168,76,0.08)' }}
      >
        <Icon size={20} className="text-[#c9a84c]" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-[#c9a84c] transition-colors duration-300">
        {item.unit === '₹' && <span className="text-[#c9a84c] text-xl mr-1">₹</span>}
        {item.value}
        {item.unit && item.unit !== '₹' && (
          <span className="text-[#c9a84c] text-base ml-1">{item.unit}</span>
        )}
      </div>
      <div className="text-[#c9a84c] text-xs tracking-widest uppercase mb-2 font-light">
        {item.label}
      </div>
      <p className="text-gray-500 text-xs font-light leading-relaxed">{item.description}</p>
    </motion.div>
  );
}

export default function MenuPreview() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-100px' });
  const listRef = useRef(null);
  const listInView = useInView(listRef, { once: true, margin: '-80px' });

  return (
    <section id="menu" className="py-20 md:py-32 px-4 bg-[#0d0d0d] relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(201,168,76,0.05), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4 font-light"
          >
            The Cartel Menu
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            A <span className="text-[#c9a84c]">Menu</span> to Remember
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={titleInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mb-4 h-px w-24"
            style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-gray-500 text-sm md:text-base max-w-lg mx-auto font-light"
          >
            13 pages of carefully curated flavours, priced thoughtfully at an average of ₹1,000 for two.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-16">
          {highlights.map((item, i) => (
            <StatCard key={item.label} item={item} index={i} />
          ))}
        </div>

        {/* Menu Categories */}
        <motion.div
          ref={listRef}
          initial={{ opacity: 0, y: 30 }}
          animate={listInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="rounded-lg border border-[#c9a84c]/20 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.05), rgba(13,13,13,0.8))' }}
        >
          <div className="p-6 md:p-8 border-b border-[#c9a84c]/10">
            <h3 className="text-[#c9a84c] font-semibold text-sm tracking-widest uppercase flex items-center gap-3">
              <BookOpen size={16} />
              Menu Chapters — 13 Pages
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-[#c9a84c]/5">
            {menuCategories.map((cat, i) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, x: -10 }}
                animate={listInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                className="group flex items-center gap-3 px-6 py-4 bg-[#0d0d0d]/60 hover:bg-[#c9a84c]/5 transition-colors duration-300"
              >
                <span
                  className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[9px] font-bold text-black bg-[#c9a84c]/80 group-hover:bg-[#c9a84c] transition-colors duration-300"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-gray-400 group-hover:text-gray-200 text-sm transition-colors duration-300 font-light">
                  {cat}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm font-light">
              <span className="text-[#c9a84c] font-semibold">Average cost:</span> ₹1,000 for two people (approx.)
            </p>
            <a
              href="https://wa.me/919973355555?text=I'd%20like%20to%20reserve%20a%20table"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#c9a84c] text-black font-semibold text-xs tracking-widest uppercase rounded-sm hover:bg-[#f0d080] transition-all duration-300 flex-shrink-0"
              style={{ boxShadow: '0 0 15px rgba(201,168,76,0.3)' }}
            >
              Reserve a Table
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
