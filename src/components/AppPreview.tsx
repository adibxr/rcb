
import React, { useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const AppPreview = () => {
  const appFeatures = [
    {
      title: "Live Match Updates",
      description: "Get ball-by-ball updates, live scores, and match alerts.",
      icon: "🏏"
    },
    {
      title: "Exclusive Content",
      description: "Watch behind-the-scenes videos, player interviews, and training sessions.",
      icon: "🎬"
    },
    {
      title: "Fan Rewards",
      description: "Earn points, unlock exclusive offers, and win match tickets.",
      icon: "🎁"
    },
    {
      title: "AR Player Experience",
      description: "Take selfies with virtual RCB players using augmented reality.",
      icon: "📱"
    },
    {
      title: "Fan Zone Access",
      description: "Share your thoughts, photos and connect with other RCB fans.",
      icon: "📢"
    }
  ];

  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!phoneRef.current) return;
      
      const phoneRect = phoneRef.current.getBoundingClientRect();
      const phoneTop = phoneRect.top;
      const phoneHeight = phoneRect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate visibility percentage
      const visibleHeight = Math.min(windowHeight, phoneTop + phoneHeight) - Math.max(0, phoneTop);
      const visiblePercentage = visibleHeight / phoneHeight;
      
      if (visiblePercentage > 0) {
        // Apply rotation based on scroll position
        const rotationY = 20 - (visiblePercentage * 20); // rotate from 20deg to 0deg
        phoneRef.current.style.transform = `perspective(1000px) rotateY(${rotationY}deg)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="app" className="py-24 bg-gradient-to-b from-rcb-black/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-rcb-red uppercase tracking-wider mb-2 opacity-0 animate-fade-in">Mobile Experience</p>
          <h2 className="section-heading opacity-0 animate-fade-in-delay-1">RCB Mobile App</h2>
          <p className="section-subheading opacity-0 animate-fade-in-delay-2">Stay connected with your favorite team through our official mobile app.</p>
        </div>
        
        <div className="lg:grid grid-cols-2 gap-12 items-center">
          {/* App features */}
          <div className="order-2 lg:order-1 space-y-6 mb-12 lg:mb-0">
            {appFeatures.map((feature, index) => (
              <div 
                key={feature.title}
                className={`bg-white dark:bg-rcb-darkgray rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 opacity-0 animate-fade-in-left`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-rcb-red/10 rounded-full text-2xl">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-10 opacity-0 animate-fade-in-delay-4">
              <Button 
                className="bg-rcb-red hover:bg-rcb-red/90 text-white rounded-full py-6 px-6 space-x-2 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </Button>
              
              <Button 
                className="bg-rcb-red hover:bg-rcb-red/90 text-white rounded-full py-6 px-6 space-x-2 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-apple">
                  <path d="M12 20.94c1.5 0 2.75-.75 4.5-.75 1.5 0 2.5.75 4 .75 1 0 1.5-.25 2-.75-2.5-.5-3-2.5-3-4.5 0-1.5.5-3 1.5-4-1.5-1.5-3-2-4.5-2-1.5 0-2.5.75-4 .75-1.75 0-2.75-.75-4.25-.75-2 0-4.5 1.75-4.5 6.25 0 4 2.75 8 5 8 1.25 0 2-.75 3.75-.75 1.75 0 2.25.75 3.5.75Z" />
                  <path d="M12 8c.5-2.5 2.5-4 5-4" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Button>
            </div>
          </div>
          
          {/* App screenshot */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div 
              ref={phoneRef}
              className="relative w-64 h-[500px] border-8 border-gray-800 rounded-[40px] overflow-hidden shadow-2xl transform perspective-1000 rotateY(20deg) transition-transform opacity-0 animate-fade-in-delay-2"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Phone details */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 flex justify-center items-center">
                <div className="w-20 h-4 bg-gray-900 rounded-b-lg"></div>
              </div>
              
              {/* App screenshot */}
              <div className="w-full h-full bg-rcb-black overflow-y-auto">
                {/* App header */}
                <div className="bg-rcb-red px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-white font-bold text-sm mr-1">RCB</span>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="#ED1C24"/>
                      <path d="M7 10C8.10457 10 9 9.10457 9 8C9 6.89543 8.10457 6 7 6C5.89543 6 5 6.89543 5 8C5 9.10457 5.89543 10 7 10Z" fill="#FFD700"/>
                      <path d="M14.5 13.5C15.8807 13.5 17 12.3807 17 11C17 9.61929 15.8807 8.5 14.5 8.5C13.1193 8.5 12 9.61929 12 11C12 12.3807 13.1193 13.5 14.5 13.5Z" fill="#FFD700"/>
                    </svg>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-white/80"></div>
                    <div className="w-3 h-3 rounded-full bg-white/80"></div>
                  </div>
                </div>
                
                {/* App content */}
                <div className="py-4 px-3">
                  {/* Hero banner */}
                  <div className="relative rounded-lg overflow-hidden mb-4 shadow-md">
                    <img 
                      src="https://assets.bcci.tv/bcci/photos/699/a7c4d9ab-e761-4e52-b81c-61b19e4a748d.jpg" 
                      alt="RCB Team" 
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                      <div className="text-xs">Next Match: vs CSK</div>
                      <div className="text-xs font-bold mt-1">May 17, 7:30 PM</div>
                    </div>
                  </div>
                  
                  {/* Menu items */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {["Matches", "News", "Videos", "Tickets", "Shop", "Fan Zone"].map((item) => (
                      <div key={item} className="bg-rcb-darkgray rounded-lg p-2 text-center">
                        <div className="w-8 h-8 mx-auto bg-rcb-red/20 rounded-full mb-1"></div>
                        <div className="text-white text-xs">{item}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Match section */}
                  <div className="bg-rcb-darkgray rounded-lg p-3 mb-4">
                    <div className="text-white text-xs font-bold mb-2">LATEST MATCH</div>
                    <div className="flex items-center justify-between">
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto bg-white/10 rounded-full p-1 mb-1">
                          <div className="w-full h-full bg-rcb-red rounded-full"></div>
                        </div>
                        <div className="text-white text-xs">RCB</div>
                      </div>
                      
                      <div className="text-white text-xs font-bold">
                        186/5
                        <span className="mx-1">vs</span>
                        172/8
                      </div>
                      
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto bg-white/10 rounded-full p-1 mb-1">
                          <div className="w-full h-full bg-blue-500 rounded-full"></div>
                        </div>
                        <div className="text-white text-xs">MI</div>
                      </div>
                    </div>
                    
                    <div className="mt-2 text-center">
                      <div className="text-green-500 text-xs font-bold">RCB WON BY 14 RUNS</div>
                    </div>
                  </div>
                  
                  {/* Fan Zone section */}
                  <div className="bg-rcb-darkgray rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-white text-xs font-bold">FAN ZONE</div>
                      <div className="text-rcb-red text-xs">View All</div>
                    </div>
                    
                    <div className="space-y-3">
                      {[1, 2].map((item) => (
                        <div key={item} className="bg-black/20 rounded-lg p-2">
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-rcb-red/20 rounded-full flex-shrink-0"></div>
                            <div className="ml-2 flex-1">
                              <div className="flex justify-between items-start">
                                <div className="text-white text-xs font-medium">RCB Fan {item}</div>
                                <div className="text-gray-400 text-xs">1h ago</div>
                              </div>
                              <div className="text-white text-xs mt-1">Go RCB! Let's win this season! 🏆</div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center mt-2">
                            <div className="flex space-x-3">
                              <div className="text-gray-400 text-xs flex items-center">
                                <div className="w-3 h-3 mr-1">❤️</div> 24
                              </div>
                              <div className="text-gray-400 text-xs flex items-center">
                                <div className="w-3 h-3 mr-1">💬</div> 5
                              </div>
                            </div>
                            <div className="text-rcb-red text-xs">Reply</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-3 flex">
                      <div className="w-8 h-8 bg-rcb-red/20 rounded-full flex-shrink-0"></div>
                      <div className="ml-2 flex-1">
                        <div className="bg-black/30 rounded-full px-3 py-1.5 text-white text-xs">
                          Share your thoughts...
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* News section */}
                  <div className="bg-rcb-darkgray rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-white text-xs font-bold">VIDEOS</div>
                      <div className="text-rcb-red text-xs flex items-center">
                        More <ChevronRight className="w-3 h-3" />
                      </div>
                    </div>
                    
                    <div className="relative rounded overflow-hidden">
                      <div className="aspect-video bg-gray-800"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 bg-rcb-red rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 5v14l11-7l-11-7z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent">
                        <div className="text-white text-xs font-medium">Match Highlights: RCB vs MI</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Phone button */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                <div className="w-16 h-4 bg-gray-700 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
