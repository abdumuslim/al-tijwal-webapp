
import { ClientLogo } from '@/types/client';
import { extractBgColor } from '@/data/clients';

interface ClientCardProps {
  client: ClientLogo;
}

const ClientCard = ({ client }: ClientCardProps) => (
  <div 
    key={client.name}
    className={`relative flex items-center justify-center h-40 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 overflow-hidden ${client.className || 'bg-white'}`}
  >
    <div className="absolute inset-0" style={{ 
      backgroundColor: extractBgColor(client.className)
    }}></div>
    <img 
      src={client.src} 
      alt={client.alt}
      className={`relative z-10 max-w-full object-contain transition-all duration-300 p-3 h-32 ${client.imgClass || ''}`}
    />
  </div>
);

export default ClientCard;
