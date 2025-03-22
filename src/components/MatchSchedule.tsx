
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from 'lucide-react';

interface MatchProps {
  id: number;
  opponent: string;
  opponentLogo: string;
  date: string;
  time: string;
  venue: string;
  isHome: boolean;
  result?: {
    rcbScore: string;
    opponentScore: string;
    status: 'won' | 'lost' | 'draw';
  };
}

const matches: MatchProps[] = [
  {
    id: 1,
    opponent: "Mumbai Indians",
    opponentLogo: "https://www.espncricinfo.com/db/PICTURES/CMS/313400/313419.logo.png",
    date: "2023-04-02",
    time: "7:30 PM",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    isHome: true,
    result: {
      rcbScore: "186/5",
      opponentScore: "172/8",
      status: 'won'
    }
  },
  {
    id: 2,
    opponent: "Delhi Capitals",
    opponentLogo: "https://www.espncricinfo.com/db/PICTURES/CMS/313400/313414.logo.png",
    date: "2023-04-15",
    time: "3:30 PM",
    venue: "Arun Jaitley Stadium, Delhi",
    isHome: false,
    result: {
      rcbScore: "174/6",
      opponentScore: "173/7",
      status: 'won'
    }
  },
  {
    id: 3,
    opponent: "Chennai Super Kings",
    opponentLogo: "https://www.espncricinfo.com/db/PICTURES/CMS/313400/313423.logo.png",
    date: "2023-05-17",
    time: "7:30 PM",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    isHome: true
  },
  {
    id: 4,
    opponent: "Rajasthan Royals",
    opponentLogo: "https://www.espncricinfo.com/db/PICTURES/CMS/313400/313422.logo.png",
    date: "2023-05-28",
    time: "7:30 PM",
    venue: "Sawai Mansingh Stadium, Jaipur",
    isHome: false
  }
];

const MatchSchedule = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'completed'>('upcoming');
  
  const upcomingMatches = matches.filter(match => !match.result);
  const completedMatches = matches.filter(match => match.result);
  
  const displayMatches = activeTab === 'upcoming' ? upcomingMatches : completedMatches;
  
  return (
    <section id="matches" className="section-container">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold text-rcb-red uppercase tracking-wider mb-2 opacity-0 animate-fade-in">Fixtures & Results</p>
        <h2 className="section-heading opacity-0 animate-fade-in-delay-1">Match Schedule</h2>
        <p className="section-subheading opacity-0 animate-fade-in-delay-2">Follow RCB's journey throughout the IPL season.</p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        {/* Tab buttons */}
        <div className="flex justify-center mb-8 opacity-0 animate-fade-in-delay-2">
          <div className="inline-flex rounded-lg p-1 bg-gray-100 dark:bg-rcb-darkgray">
            <Button
              variant={activeTab === 'upcoming' ? 'default' : 'ghost'}
              className={activeTab === 'upcoming' ? 'bg-rcb-red text-white' : 'text-gray-600 dark:text-gray-300'}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming
            </Button>
            <Button
              variant={activeTab === 'completed' ? 'default' : 'ghost'}
              className={activeTab === 'completed' ? 'bg-rcb-red text-white' : 'text-gray-600 dark:text-gray-300'}
              onClick={() => setActiveTab('completed')}
            >
              Completed
            </Button>
          </div>
        </div>
        
        {/* Match list */}
        <div className="space-y-6 opacity-0 animate-fade-in-delay-3">
          {displayMatches.map((match, index) => (
            <div 
              key={match.id} 
              className="bg-white dark:bg-rcb-darkgray rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl relative group card-hover"
            >
              {match.isHome && (
                <div className="absolute top-4 right-4 bg-rcb-gold/90 text-white text-xs font-semibold px-2 py-1 rounded z-10">
                  HOME
                </div>
              )}
              
              <div className="p-6 md:flex items-center">
                {/* Date and venue */}
                <div className="md:w-1/4 mb-4 md:mb-0 md:border-r dark:border-gray-700 pr-4">
                  <div className="flex items-center mb-1 text-gray-600 dark:text-gray-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(match.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center mb-1 text-gray-600 dark:text-gray-300">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{match.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{match.venue}</span>
                  </div>
                </div>
                
                {/* Team matchup */}
                <div className="md:w-2/4 flex items-center justify-center md:px-4">
                  <div className="flex items-center justify-between w-full">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto bg-rcb-red/10 rounded-full p-2">
                        <img 
                          src="https://www.espncricinfo.com/db/PICTURES/CMS/313400/313421.logo.png" 
                          alt="RCB Logo" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="mt-2 font-medium">RCB</div>
                      {match.result && (
                        <div className="text-sm text-gray-600 dark:text-gray-400">{match.result.rcbScore}</div>
                      )}
                    </div>
                    
                    <div className="mx-4">
                      {match.result ? (
                        <div className={`font-bold text-lg ${
                          match.result.status === 'won' ? 'text-green-600' : 
                          match.result.status === 'lost' ? 'text-red-600' : 'text-gray-600'
                        }`}>
                          {match.result.status === 'won' ? 'WON' : 
                           match.result.status === 'lost' ? 'LOST' : 'DRAW'}
                        </div>
                      ) : (
                        <div className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">VS</div>
                      )}
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto bg-gray-100 dark:bg-gray-800 rounded-full p-2">
                        <img 
                          src={match.opponentLogo} 
                          alt={`${match.opponent} Logo`} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="mt-2 font-medium">{match.opponent}</div>
                      {match.result && (
                        <div className="text-sm text-gray-600 dark:text-gray-400">{match.result.opponentScore}</div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Action button */}
                <div className="md:w-1/4 mt-4 md:mt-0 md:pl-4 md:border-l dark:border-gray-700 text-center">
                  <Button 
                    className={`${match.result ? 'bg-rcb-gold' : 'bg-rcb-red'} hover:bg-opacity-90 w-full text-white`}
                  >
                    {match.result ? 'View Highlights' : 'Buy Tickets'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
          
          {displayMatches.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-600 dark:text-gray-400">No {activeTab} matches found.</p>
            </div>
          )}
        </div>
        
        <div className="text-center mt-10 opacity-0 animate-fade-in-delay-4">
          <Button className="rcb-btn-outline">
            View Full Schedule
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MatchSchedule;
