import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contact" className="bg-lime-neon text-dark-void py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="font-mono text-sm tracking-widest mb-4">READY TO COLLABORATE?</p>
          <a 
            href="mailto:javier.athallah@binus.ac.id"
            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold hover:text-white transition-colors duration-300 leading-none"
          >
            LET'S TALK
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl border-t border-dark-void/20 pt-12">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold font-display text-xl">CONTACT</h3>
            <a href="mailto:javier.athallah@binus.ac.id" className="font-mono hover:underline">javier.athallah@binus.ac.id</a>
            <p className="font-mono">Jakarta, Indonesia</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold font-display text-xl">SOCIALS</h3>
            <div className="flex flex-col gap-2 font-mono">
              <a href="#" className="hover:underline">LinkedIn</a>
              <a href="#" className="hover:underline">GitHub</a>
              <a href="#" className="hover:underline">Instagram</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold font-display text-xl">MENU</h3>
            <div className="flex flex-col gap-2 font-mono">
              <a href="#" className="hover:underline">Home</a>
              <a href="#projects" className="hover:underline">Projects</a>
              <a href="#about" className="hover:underline">About</a>
            </div>
          </div>
        </div>

        <div className="mt-20 font-mono text-xs opacity-50">
          © 2026 JAVIER MUHAMMAD ATHALLAH. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
