
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MatchCountdown from '@/components/MatchCountdown';
import PlayerCards from '@/components/PlayerCards';
import MatchSchedule from '@/components/MatchSchedule';
import AppPreview from '@/components/AppPreview';
import MerchandisePreview from '@/components/MerchandisePreview';
import FanZone from '@/components/FanZone';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Function to handle reveal animations on scroll
    const handleScrollAnimation = () => {
      const reveals = document.querySelectorAll('.reveal');
      const scrollAnimations = document.querySelectorAll('.scroll-animation');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // Adjust this value to control when elements start animating
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
      
      // Handle horizontal scroll animations
      scrollAnimations.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    // Initial check when page loads
    handleScrollAnimation();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <div className="py-12 px-4 sm:px-6 -mt-24 relative z-10">
        <MatchCountdown />
      </div>
      
      <div className="reveal">
        <PlayerCards />
      </div>
      
      <div className="reveal">
        <MatchSchedule />
      </div>
      
      <div className="reveal">
        <AppPreview />
      </div>
      
      <div className="reveal">
        <FanZone />
      </div>
      
      <div className="reveal">
        <MerchandisePreview />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
