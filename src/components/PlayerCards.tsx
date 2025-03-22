
import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

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
  }
];

const PlayerCard: React.FC<{ player: PlayerProps; index: number }> = ({ player, index }) => {
  return (
    <div className={`card-hover opacity-0 ${index === 0 ? 'animate-fade-in' : index === 1 ? 'animate-fade-in-delay-1' : index === 2 ? 'animate-fade-in-delay-2' : 'animate-fade-in-delay-3'}`}>
      <div className="relative group overflow-hidden rounded-2xl bg-white dark:bg-rcb-darkgray shadow-lg transition-all duration-500">
        {/* Player number */}
        <div className="absolute top-4 left-4 bg-rcb-red text-white text-xl font-bold h-12 w-12 flex items-center justify-center rounded-full z-10">
          {player.number}
        </div>
        
        {/* Card content */}
        <div className="h-full flex flex-col">
          {/* Image container */}
          <div className="relative overflow-hidden h-80">
            <img 
              src={player.image} 
              alt={player.name} 
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>
            
            {/* Player info on the image */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold">{player.name}</h3>
              <p className="text-white/80">{player.role}</p>
            </div>
          </div>
          
          {/* Stats section - hidden by default, shown on hover */}
          <div className="absolute inset-0 bg-rcb-red/95 dark:bg-rcb-black/95 flex flex-col justify-center p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
            <h3 className="text-2xl font-bold text-white mb-2">{player.name}</h3>
            <p className="text-white/80 mb-4">{player.role}</p>
            
            <div className="space-y-2 text-white mb-6">
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
              
              {player.stats.economy && (
                <div className="flex justify-between">
                  <span>Economy</span>
                  <span className="font-semibold">{player.stats.economy}</span>
                </div>
              )}
            </div>
            
            {/* Social media links */}
            <div className="flex space-x-4 justify-center mt-auto">
              {player.social.instagram && (
                <a 
                  href={player.social.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              )}
              
              {player.social.twitter && (
                <a 
                  href={player.social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
              )}
              
              {player.social.facebook && (
                <a 
                  href={player.social.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PlayerCards = () => {
  return (
    <section id="players" className="section-container">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold text-rcb-red uppercase tracking-wider mb-2 opacity-0 animate-fade-in">Meet The Team</p>
        <h2 className="section-heading opacity-0 animate-fade-in-delay-1">Our Star Players</h2>
        <p className="section-subheading opacity-0 animate-fade-in-delay-2">The perfect blend of experience, talent and passion.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {players.map((player, index) => (
          <PlayerCard key={player.name} player={player} index={index} />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <a 
          href="#" 
          className="rcb-btn-primary inline-flex items-center opacity-0 animate-fade-in-delay-4"
        >
          View All Players
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default PlayerCards;
