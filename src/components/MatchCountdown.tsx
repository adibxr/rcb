
import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const MatchCountdown = () => {
  // Example match date - replace with actual next match date
  const matchDate = new Date("2023-05-18T19:30:00+05:30");
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = matchDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // If match has already started
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [matchDate]);
  
  const formatTimeUnit = (value: number): string => {
    return value < 10 ? `0${value}` : `${value}`;
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto match-countdown-bg p-8 rounded-3xl animate-pulse-subtle opacity-0 animate-fade-in-delay-2">
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">Next Match</h3>
        <div className="flex items-center justify-center space-x-2 text-lg text-gray-600 dark:text-gray-300">
          <Calendar className="w-5 h-5" />
          <span>{matchDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
          <Clock className="w-5 h-5 ml-2" />
          <span>{matchDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        
        <div className="flex items-center justify-center mt-6 mb-4">
          <div className="flex items-center space-x-3">
            <img 
              src="https://www.espncricinfo.com/db/PICTURES/CMS/313400/313421.logo.png" 
              alt="RCB Logo" 
              className="w-14 h-14 object-contain"
            />
            <span className="font-bold text-xl md:text-2xl">RCB</span>
          </div>
          
          <div className="mx-6 text-center">
            <div className="bg-rcb-red rounded-lg text-white px-4 py-2 mb-1">VS</div>
            <span className="text-sm text-gray-600 dark:text-gray-400">M. Chinnaswamy Stadium</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <span className="font-bold text-xl md:text-2xl">CSK</span>
            <img 
              src="https://www.espncricinfo.com/db/PICTURES/CMS/313400/313423.logo.png" 
              alt="Opponent Logo" 
              className="w-14 h-14 object-contain"
            />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
        <div className="glass-panel dark:glass-panel-dark text-center py-4 px-2">
          <div className="text-3xl md:text-4xl font-extrabold text-rcb-red">{formatTimeUnit(timeLeft.days)}</div>
          <div className="text-xs uppercase tracking-wide mt-1 text-gray-600 dark:text-gray-300">Days</div>
        </div>
        
        <div className="glass-panel dark:glass-panel-dark text-center py-4 px-2">
          <div className="text-3xl md:text-4xl font-extrabold text-rcb-red">{formatTimeUnit(timeLeft.hours)}</div>
          <div className="text-xs uppercase tracking-wide mt-1 text-gray-600 dark:text-gray-300">Hours</div>
        </div>
        
        <div className="glass-panel dark:glass-panel-dark text-center py-4 px-2">
          <div className="text-3xl md:text-4xl font-extrabold text-rcb-red">{formatTimeUnit(timeLeft.minutes)}</div>
          <div className="text-xs uppercase tracking-wide mt-1 text-gray-600 dark:text-gray-300">Minutes</div>
        </div>
        
        <div className="glass-panel dark:glass-panel-dark text-center py-4 px-2">
          <div className="text-3xl md:text-4xl font-extrabold text-rcb-red">{formatTimeUnit(timeLeft.seconds)}</div>
          <div className="text-xs uppercase tracking-wide mt-1 text-gray-600 dark:text-gray-300">Seconds</div>
        </div>
      </div>
      
      <div className="text-center mt-6">
        <a href="#" className="inline-block text-rcb-red hover:text-rcb-red/80 font-medium">
          View All Fixtures →
        </a>
      </div>
    </div>
  );
};

export default MatchCountdown;
