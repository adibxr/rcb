
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MatchCountdown from '@/components/MatchCountdown';
import PlayerCards from '@/components/PlayerCards';
import MatchSchedule from '@/components/MatchSchedule';
import AppPreview from '@/components/AppPreview';
import MerchandisePreview from '@/components/MerchandisePreview';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Function to handle reveal animations on scroll
    const handleScrollAnimation = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // Adjust this value to control when elements start animating
        
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
      
      <PlayerCards />
      <MatchSchedule />
      <AppPreview />
      <MerchandisePreview />
      <Footer />
    </div>
  );
};

export default Index;
