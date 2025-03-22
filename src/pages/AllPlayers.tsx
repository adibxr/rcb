
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface PlayerProps {
  name: string;
  role: string;
  number: number;
  image: string;
  stats: {
    matches: number;
    runs?: number;
    wickets?: number;
    average?: number;
    strikeRate?: number;
    economy?: number;
  };
  social: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
  };
}

const players: PlayerProps[] = [
  {
    name: "Virat Kohli",
    role: "Batsman",
    number: 18,
    image: "https://assets.bcci.tv/bcci/photos/7626/d0fef35a-d4b5-400d-b583-5eccfb136dce.jpg",
    stats: {
      matches: 235,
      runs: 6624,
      average: 36.2,
      strikeRate: 129.95
    },
    social: {
      instagram: "https://www.instagram.com/virat.kohli",
      twitter: "https://twitter.com/imVkohli",
      facebook: "https://www.facebook.com/virat.kohli"
    }
  },
  {
    name: "Faf du Plessis",
    role: "Batsman & Captain",
    number: 13,
    image: "https://assets.bcci.tv/bcci/photos/831/35eff973-a248-4e75-b68f-2ebd7601fc23.jpg",
    stats: {
      matches: 130,
      runs: 3825,
      average: 33.2,
      strikeRate: 131.5
    },
    social: {
      instagram: "https://www.instagram.com/fafdup",
      twitter: "https://twitter.com/faf1307"
    }
  },
  {
    name: "Glenn Maxwell",
    role: "All-Rounder",
    number: 32,
    image: "https://assets.bcci.tv/bcci/photos/832/af7ae224-8bb1-453d-8738-da36077d68d0.jpg",
    stats: {
      matches: 115,
      runs: 2719,
      wickets: 30,
      average: 27.7,
      strikeRate: 158.2,
      economy: 8.33
    },
    social: {
      instagram: "https://www.instagram.com/gmaxi_32",
      twitter: "https://twitter.com/Gmaxi_32"
    }
  },
  {
    name: "Mohammed Siraj",
    role: "Bowler",
    number: 73,
    image: "https://assets.bcci.tv/bcci/photos/1000/39a56cde-7a71-4187-9a95-9a3d4d495727.jpg",
    stats: {
      matches: 93,
      wickets: 96,
      economy: 8.58,
      strikeRate: 17.7
    },
    social: {
      instagram: "https://www.instagram.com/mohammedsirajofficial"
    }
  },
  {
    name: "Dinesh Karthik",
    role: "Wicket-Keeper",
    number: 21,
    image: "https://assets.bcci.tv/bcci/photos/92/9a49d214-97ab-4c3d-ac33-bd0d24a76f02.jpg",
    stats: {
      matches: 188,
      runs: 4376,
      average: 25.3,
      strikeRate: 133.1
    },
    social: {
      instagram: "https://www.instagram.com/dk00019",
      twitter: "https://twitter.com/DineshKarthik"
    }
  },
  {
    name: "Rajat Patidar",
    role: "Batsman",
    number: 16,
    image: "https://assets.bcci.tv/bcci/photos/1205/0719b463-9ed5-4a2a-bd9f-3a31dcc1fdf4.jpg",
    stats: {
      matches: 8,
      runs: 224,
      average: 32.0,
      strikeRate: 156.6
    },
    social: {
      instagram: "https://www.instagram.com/rajat.patidar"
    }
  },
  {
    name: "Wanindu Hasaranga",
    role: "All-Rounder",
    number: 49,
    image: "https://assets.bcci.tv/bcci/photos/1007/f47cef60-2bce-471c-9e36-d497cef7beca.jpg",
    stats: {
      matches: 21,
      wickets: 29,
      runs: 122,
      economy: 7.94,
      strikeRate: 151.2
    },
    social: {
      instagram: "https://www.instagram.com/wanindu_hasaranga",
      twitter: "https://twitter.com/Wanindu49"
    }
  },
  {
    name: "Harshal Patel",
    role: "Bowler",
    number: 36,
    image: "https://assets.bcci.tv/bcci/photos/943/aa09f398-7390-4b8e-af24-41aa6c8cb3a0.jpg",
    stats: {
      matches: 80,
      wickets: 97,
      economy: 8.79,
      strikeRate: 16.6
    },
    social: {
      instagram: "https://www.instagram.com/harshalvp23",
      twitter: "https://twitter.com/HarshalPatel23"
    }
  },
  {
    name: "Anuj Rawat",
    role: "Wicket-Keeper",
    number: 8,
    image: "https://assets.bcci.tv/bcci/photos/1077/e7c0c574-2e0d-487f-b951-80493bcb3698.jpg",
    stats: {
      matches: 14,
      runs: 129,
      average: 12.9,
      strikeRate: 108.4
    },
    social: {
      instagram: "https://www.instagram.com/anujrawat_1452"
    }
  },
  {
    name: "Akash Deep",
    role: "Bowler",
    number: 15,
    image: "https://assets.bcci.tv/bcci/photos/1083/fbdf5d58-b9d9-4e20-92ac-a96bd933c361.jpg",
    stats: {
      matches: 7,
      wickets: 11,
      economy: 9.32,
      strikeRate: 14.5
    },
    social: {
      instagram: "https://www.instagram.com/akashdeep.official"
    }
  },
  {
    name: "Will Jacks",
    role: "All-Rounder",
    number: 22,
    image: "https://assets.bcci.tv/bcci/photos/1115/a6552d5c-c1ad-414c-8fe0-8be6fb0a872c.jpg",
    stats: {
      matches: 6,
      runs: 190,
      wickets: 2,
      average: 31.7,
      strikeRate: 175.9,
      economy: 8.8
    },
    social: {
      instagram: "https://www.instagram.com/willjacks1998",
      twitter: "https://twitter.com/Willjacks123"
    }
  },
  {
    name: "Vijaykumar Vyshak",
    role: "Bowler",
    number: 19,
    image: "https://assets.bcci.tv/bcci/photos/1115/eb14ec49-a65f-41da-91e5-c5f3991dbd37.jpg",
    stats: {
      matches: 9,
      wickets: 13,
      economy: 9.45,
      strikeRate: 15.1
    },
    social: {
      instagram: "https://www.instagram.com/vijaykumar_vyshak"
    }
  }
];

const AllPlayers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-rcb-red uppercase tracking-wider mb-2">Team RCB</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 dark:text-white">Our Players</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the talented cricketers who represent Royal Challengers Bangalore in the IPL.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {players.map((player) => (
            <div 
              key={player.name}
              className="bg-white dark:bg-rcb-darkgray rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl group"
            >
              <div className="relative overflow-hidden h-80">
                <img 
                  src={player.image} 
                  alt={player.name} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Player number */}
                <div className="absolute top-4 left-4 bg-rcb-red text-white text-xl font-bold h-12 w-12 flex items-center justify-center rounded-full z-10">
                  {player.number}
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>
                
                {/* Player info on the image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">{player.name}</h3>
                  <p className="text-white/80">{player.role}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-2 text-gray-700 dark:text-gray-200 mb-6">
                  <div className="flex justify-between">
                    <span>Matches</span>
                    <span className="font-semibold">{player.stats.matches}</span>
                  </div>
                  
                  {player.stats.runs && (
                    <div className="flex justify-between">
                      <span>Runs</span>
                      <span className="font-semibold">{player.stats.runs}</span>
                    </div>
                  )}
                  
                  {player.stats.wickets && (
                    <div className="flex justify-between">
                      <span>Wickets</span>
                      <span className="font-semibold">{player.stats.wickets}</span>
                    </div>
                  )}
                  
                  {player.stats.average && (
                    <div className="flex justify-between">
                      <span>Average</span>
                      <span className="font-semibold">{player.stats.average}</span>
                    </div>
                  )}
                  
                  {player.stats.strikeRate && (
                    <div className="flex justify-between">
                      <span>Strike Rate</span>
                      <span className="font-semibold">{player.stats.strikeRate}</span>
                    </div>
                  )}
                </div>
                
                {/* Social media links */}
                <div className="flex space-x-4 justify-center mt-4">
                  {player.social.instagram && (
                    <a 
                      href={player.social.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-rcb-red/10 p-2 rounded-full hover:bg-rcb-red/20 transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-rcb-red" />
                    </a>
                  )}
                  
                  {player.social.twitter && (
                    <a 
                      href={player.social.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-rcb-red/10 p-2 rounded-full hover:bg-rcb-red/20 transition-colors"
                    >
                      <Twitter className="w-5 h-5 text-rcb-red" />
                    </a>
                  )}
                  
                  {player.social.facebook && (
                    <a 
                      href={player.social.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-rcb-red/10 p-2 rounded-full hover:bg-rcb-red/20 transition-colors"
                    >
                      <Facebook className="w-5 h-5 text-rcb-red" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AllPlayers;
