
import { ClientLogo } from '@/types/client';
import { extractBgColor } from '@/data/clients';

interface FlippableClientCardProps {
  client: ClientLogo;
}

const FlippableClientCard = ({ client }: FlippableClientCardProps) => (
  <div className="flip-card h-40 rounded-xl shadow-sm border border-gray-100 hover:shadow-md">
    <div className="flip-card-inner">
      {/* Front of card */}
      <div className={`flip-card-front flex items-center justify-center ${client.className || 'bg-white'}`}>
        <div className="absolute inset-0" style={{ 
          backgroundColor: extractBgColor(client.className)
        }}></div>
        <img 
          src={client.src} 
          alt={client.alt}
          className={`relative z-10 max-w-full object-contain p-3 h-32 ${client.imgClass || ''}`}
        />
      </div>
      
      {/* Back of card */}
      <div className="flip-card-back bg-white">
        <img 
          src={client.flipImage} 
          alt={`${client.alt} in action`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
);

export default FlippableClientCard;
