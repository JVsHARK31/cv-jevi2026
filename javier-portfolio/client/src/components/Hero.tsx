import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  
  // Spotlight / Flashlight Effect Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  // Mask size - starts small (0) and expands to reveal anime on hover
  // Increased damping for smoother, less jittery movement
  const maskSize = useSpring(0, { damping: 30, stiffness: 200 });
  
  // Smooth mouse movement for spotlight
  const smoothMouseX = useSpring(mouseX, { damping: 25, stiffness: 250 });
  const smoothMouseY = useSpring(mouseY, { damping: 25, stiffness: 250 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Global parallax movement
      const { clientX, clientY } = e;
      
      // Update spotlight position relative to image container if hovering
      if (imageContainerRef.current) {
        const rect = imageContainerRef.current.getBoundingClientRect();
        mouseX.set(clientX - rect.left);
        mouseY.set(clientY - rect.top);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Update mask size based on hover state
  useEffect(() => {
    maskSize.set(isHoveringImage ? 200 : 0); // Shrink spotlight radius to 200px for sharper focus
  }, [isHoveringImage, maskSize]);

  // 1. Interactive Spotlight Mask - Using SMOOTH mouse values
  const spotlightMask = useMotionTemplate`radial-gradient(${maskSize}px circle at ${smoothMouseX}px ${smoothMouseY}px, black 100%, transparent 100%)`;
  
  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-dark-void">
      
      {/* Left White Panel - Animated */}
      <motion.div 
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-0 bottom-0 w-[15%] md:w-[25%] bg-white z-20 hidden md:block"
      >
        {/* Decorative Tech Lines */}
        <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gray-200"></div>
        <div className="absolute right-10 top-1/2 w-20 h-[1px] bg-gray-300"></div>
      </motion.div>

      {/* Right White Panel - Animated */}
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-0 top-0 bottom-0 w-[15%] md:w-[25%] bg-white z-20 hidden md:block"
      >
         {/* Decorative Tech Lines */}
         <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-200"></div>
         <div className="absolute left-10 top-1/3 w-20 h-[1px] bg-gray-300"></div>
      </motion.div>

      {/* Mobile White Background (Full) */}
      <div className="absolute inset-0 bg-white md:hidden z-0"></div>

      {/* Main Content Container - Centered between panels */}
      <div className="relative z-30 w-full h-full flex items-end justify-center md:w-[50%]">
        
        {/* Center Image: Portrait with Spotlight Reveal - MAXIMIZED */}
        <motion.div 
          ref={imageContainerRef}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          style={{ y: y1 }}
          className="relative w-full h-[90vh] md:h-[100vh] cursor-none flex items-end justify-center overflow-visible" 
          onMouseEnter={() => setIsHoveringImage(true)}
          onMouseLeave={() => setIsHoveringImage(false)}
          onTouchStart={() => setIsHoveringImage(true)}
          onTouchEnd={() => setIsHoveringImage(false)}
        >
          
          {/* Image Container - Fill Height & Overflow Allowed */}
          <div className="relative w-full h-full flex items-end justify-center">
            
            {/* LAYER 1: Base Photo (Real Person) - Always Visible Background */}
            <div className="absolute inset-0 w-full h-full flex items-end justify-center">
              <img 
                src="/images/javier_photo.png" 
                alt="Javier Real" 
                className="w-auto h-[105%] max-w-none object-cover object-top filter grayscale contrast-110 brightness-95 drop-shadow-2xl translate-y-[2%]" 
              />
            </div>

            {/* LAYER 2: Anime Version - Interactive Spotlight Reveal */}
            <motion.div 
              className="absolute inset-0 w-full h-full flex items-end justify-center pointer-events-none"
              style={{ 
                maskImage: spotlightMask,
                WebkitMaskImage: spotlightMask,
                willChange: 'mask-image' // Hint to browser for optimization
              }}
            >
               <img 
                src="/javier_anime_new.png" 
                alt="Javier Anime New" 
                className="w-auto h-[105%] max-w-none object-cover object-top filter drop-shadow-[0_0_30px_rgba(210,255,0,0.5)] scale-[1.01] translate-y-[2%]" 
              />
            </motion.div>

            {/* LAYER 3: CSS-Based Glitch Overlay (GPU Accelerated) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
               <div className="glitch-layer-1 absolute inset-0 bg-lime-neon/20 mix-blend-color-dodge opacity-0"></div>
               <div className="glitch-layer-2 absolute inset-0 bg-lime-neon/20 mix-blend-color-dodge opacity-0"></div>
               <div className="glitch-layer-3 absolute inset-0 bg-lime-neon/20 mix-blend-color-dodge opacity-0"></div>
            </div>

            {/* Spotlight Ring/Border Effect - Smooth Follow */}
            <motion.div
              className="absolute w-[200px] h-[200px] rounded-full border-2 border-lime-neon/50 pointer-events-none z-50 mix-blend-screen"
              style={{ 
                x: smoothMouseX, 
                y: smoothMouseY,
                translateX: '-50%',
                translateY: '-50%',
                opacity: isHoveringImage ? 1 : 0,
                scale: isHoveringImage ? 1 : 0.5
              }}
            />

          </div>
        </motion.div>

      </div>

      {/* Bottom Info - Overlay on top of image */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-40 pointer-events-none"
      >
        <p className="font-mono text-xs md:text-sm text-lime-neon tracking-[0.2em] uppercase bg-black/80 px-4 py-1 backdrop-blur-sm rounded-full border border-lime-neon/20 animate-pulse">
          System Online • Ready to Deploy
        </p>
      </motion.div>

    </section>
  );
}
