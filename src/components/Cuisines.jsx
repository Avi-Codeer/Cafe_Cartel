import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const cuisines = [
  {
    name: 'North Indian',
    description: 'Rich gravies, tandoor-kissed breads & aromatic kebabs.',
    emoji: '🍛',
    tags: ['Butter Chicken', 'Dal Makhani', 'Tandoori'],
    color: 'from-amber-900/30 to-orange-900/20',
  },
  {
    name: 'Continental',
    description: 'European classics reimagined with local finesse.',
    emoji: '🥩',
    tags: ['Pasta', 'Grilled Chicken', 'Soups'],
    color: 'from-slate-800/40 to-zinc-900/30',
  },
  {
    name: 'Italian',
    description: 'Authentic thin-crust pizzas & hand-rolled pastas.',
    emoji: '🍕',
    tags: ['Margherita', 'Pasta Alfredo', 'Risotto'],
    color: 'from-red-900/30 to-rose-900/20',
  },
  {
    name: 'Biryani',
    description: 'Slow-cooked fragrant biryani that speaks for itself.',
    emoji: '🍚',
    tags: ['Hyderabadi', 'Kolkata Style', 'Veg Dum'],
    color: 'from-yellow-900/30 to-amber-900/20',
  },
  {
    name: 'Salads',
    description: 'Fresh, crisp, and dressed to impress.',
    emoji: '🥗',
    tags: ['Caesar', 'Greek', 'Quinoa Bowl'],
    color: 'from-green-900/30 to-emerald-900/20',
  },
  {
    name: 'Desserts',
    description: 'Decadent endings that linger long after the last bite.',
    emoji: '🍰',
    tags: ['Gulab Jamun', 'Tiramisu', 'Cheesecake'],
    color: 'from-pink-900/30 to-fuchsia-900/20',
  },
];

function CuisineCard({ cuisine, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`relative group rounded-lg overflow-hidden cursor-default bg-gradient-to-br ${cuisine.color} border border-white/5 hover:border-[#c9a84c]/40 transition-all duration-500`}
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(201,168,76,0.1), transparent 70%)' }}
      />

      <div className="relative z-10 p-6 md:p-8">
        {/* Emoji */}
        <motion.div
          className="text-4xl md:text-5xl mb-4"
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {cuisine.emoji}
        </motion.div>

        {/* Name */}
        <h3 className="text-white font-bold text-lg md:text-xl mb-2 group-hover:text-[#c9a84c] transition-colors duration-300">
          {cuisine.name}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4 font-light">
          {cuisine.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {cuisine.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] tracking-wider px-2 py-1 rounded-sm border border-[#c9a84c]/30 text-[#c9a84c]/70 uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent transition-all duration-700" />
    </motion.div>
  );
}

export default function Cuisines() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-100px' });

  return (
    <section id="cuisines" className="py-20 md:py-32 px-4 bg-[#0d0d0d] relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(201,168,76,0.04), transparent)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            animate={titleInView ? { opacity: 1, letterSpacing: '0.3em' } : {}}
            transition={{ duration: 0.8 }}
            className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4 font-light"
          >
            Curated for you
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Our <span className="text-[#c9a84c]">Cuisines</span>
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
            From the streets of Punjab to the lanes of Naples — every plate is a passport.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {cuisines.map((cuisine, i) => (
            <CuisineCard key={cuisine.name} cuisine={cuisine} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
