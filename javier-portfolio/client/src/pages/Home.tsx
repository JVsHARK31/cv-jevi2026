import { useState } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import CustomCursor from '@/components/CustomCursor';
import Marquee from '@/components/Marquee';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <Layout>
        <Hero />
<Marquee 
        textTop="SOFTWARE ENGINEER • FRONTEND DEVELOPER • CREATIVE CODER • " 
        textBottom="AI ENTHUSIAST • REACT SPECIALIST • UI/UX DESIGNER • "
      />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </Layout>
    </>
  );
}
