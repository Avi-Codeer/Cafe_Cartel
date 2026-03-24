import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Wifi,
  Wind,
  Car,
  Armchair,
  Users,
  TreePine,
  Coffee,
  Clock,
} from 'lucide-react';

const amenities = [
  {
    icon: Wifi,
    label: 'Work-Friendly',
    description: 'High-speed WiFi & power outlets',
  },
  {
    icon: Wind,
    label: 'Smoking Area',
    description: 'Designated outdoor smoking zone',
  },
  {
    icon: Car,
    label: 'Free Parking',
    description: 'Ample parking space available',
  },
  {
    icon: Armchair,
    label: 'Indoor Seating',
    description: 'Plush air-conditioned interiors',
  },
  {
    icon: TreePine,
    label: 'Outdoor Seating',
    description: 'Al-fresco dining experience',
  },
  {
    icon: Users,
    label: 'Family-Friendly',
    description: 'Welcoming space for all ages',
  },
  {
    icon: Coffee,
    label: 'Specialty Coffee',
    description: 'Artisan brews & signature drinks',
  },
  {
    icon: Clock,
    label: 'Extended Hours',
    description: 'Open late for your cravings',
  },
];

function AmenityCard({ amenity, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = amenity.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      className="group flex flex-col items-center text-center p-6 rounded-lg border border-white/5 hover:border-[#c9a84c]/30 bg-white/[0.02] hover:bg-[#c9a84c]/5 transition-all duration-400 cursor-default"
    >
      {/* Icon container */}
      <div className="relative mb-4">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center border border-[#c9a84c]/30 group-hover:border-[#c9a84c]/60 transition-all duration-300"
          style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)' }}
        >
          <Icon
            size={24}
            className="text-[#c9a84c] group-hover:text-[#f0d080] transition-colors duration-300"
          />
        </div>
        {/* Glow */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ boxShadow: '0 0 20px rgba(201,168,76,0.25)' }}
        />
      </div>

      <h3 className="text-white font-semibold text-sm mb-1 tracking-wide group-hover:text-[#c9a84c] transition-colors duration-300">
        {amenity.label}
      </h3>
      <p className="text-gray-500 text-xs font-light leading-relaxed">
        {amenity.description}
      </p>
    </motion.div>
  );
}

export default function Amenities() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-100px' });

  return (
    <section id="amenities" className="py-20 md:py-32 px-4 bg-[#111111] relative">
      {/* Top border accent */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }}
      />
      <div className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4 font-light"
          >
            What we offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Our <span className="text-[#c9a84c]">Amenities</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={titleInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto h-px w-24"
            style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5">
          {amenities.map((amenity, i) => (
            <AmenityCard key={amenity.label} amenity={amenity} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
