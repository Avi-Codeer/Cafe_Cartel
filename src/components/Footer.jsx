import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Clock, Share2, AtSign, Send } from 'lucide-react';

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <footer id="contact" className="bg-[#080808] relative">
      {/* Top border */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)' }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6">
              <h2 className="text-[#c9a84c] font-bold text-2xl tracking-widest uppercase">The Cartel</h2>
              <p className="text-gray-500 text-xs tracking-[0.3em] uppercase">Cafe</p>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-light mb-6">
              A premium café experience in the heart of Fraser Road, Patna. Where ambiance meets flavour.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: AtSign, label: 'Instagram', href: '#' },
                { icon: Share2, label: 'Facebook', href: '#' },
                { icon: Send, label: 'Twitter', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c]/60 hover:border-[#c9a84c] hover:text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm font-light">
                  Fraser Road Area, Patna,<br />Bihar, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#c9a84c] flex-shrink-0" />
                <a
                  href="tel:+919973355555"
                  className="text-gray-400 hover:text-[#c9a84c] text-sm font-light transition-colors duration-300"
                >
                  +91 99733 55555
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm font-light">
                  <p>Mon – Fri: 10:00 AM – 11:00 PM</p>
                  <p>Sat – Sun: 9:00 AM – 11:30 PM</p>
                </div>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="tel:+919973355555"
                className="flex items-center gap-2 px-4 py-2 border border-[#c9a84c]/40 text-[#c9a84c] text-xs tracking-widest uppercase hover:bg-[#c9a84c]/10 hover:border-[#c9a84c] transition-all duration-300 rounded-sm"
              >
                <Phone size={13} />
                Call Now
              </a>
              <a
                href="https://wa.me/919973355555?text=I'd%20like%20to%20reserve%20a%20table"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#c9a84c] text-black text-xs tracking-widest uppercase hover:bg-[#f0d080] transition-all duration-300 rounded-sm font-semibold"
                style={{ boxShadow: '0 0 12px rgba(201,168,76,0.3)' }}
              >
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-6">
              Find Us
            </h3>
            <div
              className="rounded-lg overflow-hidden border border-[#c9a84c]/20"
              style={{ height: '220px' }}
            >
              <iframe
                title="Cafe The Cartel Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.6890369!2d85.1374!3d25.6093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce6732867%3A0x4059f779827056f4!2sFraser%20Road%2C%20Patna%2C%20Bihar%20800001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.9)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-gray-600 text-xs mt-3 font-light">
              Fraser Road, Patna, Bihar 800001
            </p>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-600 text-xs font-light tracking-wide">
            © {new Date().getFullYear()} Cafe The Cartel. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs font-light">
            Crafted with{' '}
            <span className="text-[#c9a84c]">♥</span>{' '}
            in Patna
          </p>
        </div>
      </div>
    </footer>
  );
}
