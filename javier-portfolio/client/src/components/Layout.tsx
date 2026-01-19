import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Link, useLocation } from 'wouter';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Reset scroll on route change
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
  }, [location]);

  return (
    <div className="bg-dark-void min-h-screen text-white font-sans selection:bg-lime-neon selection:text-dark-void overflow-hidden">
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
        <Link href="/" className="text-2xl font-display font-bold tracking-tighter hover:text-lime-neon transition-colors duration-300">
            JMA
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-mono text-sm tracking-widest uppercase">
          <Link href="/" className="hover:text-lime-neon transition-colors">Home</Link>
          <a href="#projects" className="hover:text-lime-neon transition-colors">Projects</a>
          <a href="#about" className="hover:text-lime-neon transition-colors">About</a>
          <a href="#contact" className="hover:text-lime-neon transition-colors">Contact</a>
        </div>

        <button className="md:hidden text-lime-neon">
          MENU
        </button>
      </nav>

      <main className="relative z-10">
        {children}
      </main>

      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <div className="font-mono text-xs text-lime-neon animate-pulse">
          SYSTEM: ONLINE
        </div>
      </div>
    </div>
  );
}
