
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrollPosition = window.scrollY;
      const layers = parallaxRef.current.querySelectorAll('.parallax-layer');
      
      layers.forEach((layer, index) => {
        const speed = (index + 1) * 0.2;
        const yPos = -(scrollPosition * speed);
        
        (layer as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Parallax container */}
      <div ref={parallaxRef} className="parallax-container h-full">
        {/* Background layer */}
        <div className="parallax-layer opacity-70 dark:opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-background z-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://assets.bcci.tv/bcci/photos/699/a7c4d9ab-e761-4e52-b81c-61b19e4a748d.jpg')] bg-center bg-cover"></div>
        </div>
        
        {/* Middle layer */}
        <div className="parallax-layer z-20 flex items-center justify-center h-full px-4">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-7xl font-extrabold opacity-0 animate-fade-in">
              <span className="block text-white drop-shadow-lg">ROYAL</span>
              <span className="block text-gradient">CHALLENGERS</span>
              <span className="block text-white drop-shadow-lg">BANGALORE</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white max-w-xl mx-auto mt-4 drop-shadow-lg opacity-0 animate-fade-in-delay-1">
              Play Bold. Play Fearless. Play with Heart.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-6 opacity-0 animate-fade-in-delay-2">
              <Button 
                className="rcb-btn-primary text-lg px-8 py-3"
                onClick={() => scrollToSection('matches')}
              >
                Upcoming Matches
              </Button>
              
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/20 text-lg px-8 py-3"
                onClick={() => scrollToSection('players')}
              >
                Meet Our Players
              </Button>
            </div>
          </div>
        </div>
        
        {/* Foreground layer */}
        <div className="parallax-layer z-30 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-background to-transparent"></div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 text-white text-center animate-bounce-subtle">
        <p className="text-sm font-medium mb-2">Scroll Down</p>
        <ChevronDown className="w-6 h-6 mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
