import { motion } from 'framer-motion';

interface MarqueeProps {
  textTop: string;
  textBottom: string;
}

export default function Marquee({ textTop, textBottom }: MarqueeProps) {
  return (
    <div className="w-full bg-lime-neon py-8 md:py-12 overflow-hidden relative z-20 border-y-4 border-black">
      {/* Top Line - Moving Left */}
      <div className="relative flex overflow-hidden mb-4 md:mb-6">
        <motion.div
          className="flex whitespace-nowrap font-display text-5xl md:text-7xl lg:text-8xl font-black text-black tracking-tighter"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          <span className="mr-12 md:mr-24">{textTop}</span>
          <span className="mr-12 md:mr-24">{textTop}</span>
          <span className="mr-12 md:mr-24">{textTop}</span>
          <span className="mr-12 md:mr-24">{textTop}</span>
        </motion.div>
      </div>

      {/* Bottom Line - Moving Right */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap font-display text-5xl md:text-7xl lg:text-8xl font-black text-black/70 tracking-tighter"
          animate={{ x: [-1000, 0] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          <span className="mr-12 md:mr-24">{textBottom}</span>
          <span className="mr-12 md:mr-24">{textBottom}</span>
          <span className="mr-12 md:mr-24">{textBottom}</span>
          <span className="mr-12 md:mr-24">{textBottom}</span>
        </motion.div>
      </div>
    </div>
  );
}
