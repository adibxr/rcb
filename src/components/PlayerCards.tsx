
import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";

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
  }
];

const PlayerCard: React.FC<{ player: PlayerProps; index: number }> = ({ player, index }) => {
  return (
    <div className={`card-hover h-full`}>
      <div className="relative group overflow-hidden rounded-2xl bg-white dark:bg-rcb-darkgray shadow-lg transition-all duration-500 h-full">
        {/* Player number - only visible when not hovering */}
        <div className="absolute top-4 left-4 bg-rcb-red text-white text-xl font-bold h-12 w-12 flex items-center justify-center rounded-full z-10 group-hover:opacity-0 transition-opacity duration-300">
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

const MobilePlayerCarousel = () => {
  return (
    <div className="block lg:hidden w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {players.map((player, index) => (
            <CarouselItem key={player.name} className="md:basis-1/2 lg:basis-1/3 h-full">
              <PlayerCard player={player} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-4">
          <CarouselPrevious className="static mx-2 transform-none bg-rcb-red text-white hover:bg-rcb-red/90 border-none" />
          <CarouselNext className="static mx-2 transform-none bg-rcb-red text-white hover:bg-rcb-red/90 border-none" />
        </div>
      </Carousel>
    </div>
  );
};

const DesktopPlayerScroll = () => {
  return (
    <div className="hidden lg:block w-full">
      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <div className="flex space-x-6 pb-6">
          {players.map((player, index) => (
            <div key={player.name} className="w-72">
              <PlayerCard player={player} index={index} />
            </div>
          ))}
        </div>
      </ScrollArea>
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
      
      <MobilePlayerCarousel />
      <DesktopPlayerScroll />
      
      <div className="text-center mt-12">
        <a 
          href="#" 
          className="rcb-btn relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold rounded-full bg-rcb-red text-white hover:bg-rcb-red/90 transition-all shadow-lg opacity-0 animate-fade-in-delay-4"
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
