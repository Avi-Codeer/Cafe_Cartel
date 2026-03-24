import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function FloatingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div
            className="flex border-t"
            style={{
              borderColor: 'rgba(201,168,76,0.2)',
              background: 'rgba(10,10,10,0.95)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {/* Call Button */}
            <a
              href="tel:+919973355555"
              className="flex-1 flex items-center justify-center gap-2.5 py-4 relative overflow-hidden group"
              aria-label="Call us"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-active:opacity-100 transition-opacity" />
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Phone size={18} className="text-[#c9a84c]" />
              </motion.div>
              <span className="text-white font-medium text-sm tracking-wide">Call Us</span>
            </a>

            {/* Divider */}
            <div className="w-px bg-[#c9a84c]/20" />

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919973355555?text=I'd%20like%20to%20reserve%20a%20table"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2.5 py-4 relative overflow-hidden group"
              aria-label="WhatsApp us"
              style={{ background: 'rgba(201,168,76,0.08)' }}
            >
              <div className="absolute inset-0 bg-[#c9a84c]/10 opacity-0 group-active:opacity-100 transition-opacity" />
              <motion.div
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <MessageCircle size={18} className="text-[#c9a84c]" />
              </motion.div>
              <span className="text-[#c9a84c] font-semibold text-sm tracking-wide">WhatsApp</span>
            </a>
          </div>

          {/* Safe area spacer for devices with home indicator */}
          <div
            className="bg-[rgba(10,10,10,0.95)]"
            style={{ height: 'env(safe-area-inset-bottom, 0px)' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
