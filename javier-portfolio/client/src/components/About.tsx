import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={containerRef} className="relative py-32 bg-dark-void text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* Left: Sticky Title */}
          <div className="w-full md:w-1/3 md:sticky md:top-32">
            <motion.h2 
              style={{ opacity }}
              className="font-display text-5xl md:text-7xl font-bold text-lime-neon mb-8"
            >
              ABOUT<br/>ME
            </motion.h2>
            <div className="w-20 h-1 bg-lime-neon mb-8"></div>
            <p className="font-mono text-sm text-gray-400">
              BASED IN JAKARTA, INDONESIA<br/>
              BINUS UNIVERSITY STUDENT
            </p>
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-2/3">
            <motion.div style={{ y }} className="space-y-12">
              <p className="text-2xl md:text-4xl font-light leading-relaxed">
                <span className="text-lime-neon font-display italic">"Hello! I'm Javier."</span> I am a Computer Science Software Engineering student at BINUS University with a deep passion for technology.
              </p>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                As a Software Engineer at BINUS University, I apply theoretical knowledge in real-world projects. This experience has enriched my understanding of software development methodologies and industry best practices.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-gray-800">
                <div>
                  <h3 className="font-mono text-lime-neon mb-4">FOCUS AREAS</h3>
                  <ul className="space-y-2 font-display text-xl">
                    <li>Software Engineering</li>
                    <li>Frontend Development</li>
                    <li>AI & Machine Learning</li>
                    <li>Database Design</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-mono text-lime-neon mb-4">EDUCATION</h3>
                  <ul className="space-y-4">
                    <li>
                      <div className="font-bold text-xl">Bachelor of Computer Science</div>
                      <div className="text-gray-400">BINUS University (2024 - 2028)</div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
