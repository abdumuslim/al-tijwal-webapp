
import { useState } from 'react';
import ChatButton from './ChatButton';
import ChatWindow from './ChatWindow';
import { logEvent } from '@/lib/analytics';

const CustomerSupport = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    const newState = !isChatOpen;
    setIsChatOpen(newState);
    
    // Log the event
    logEvent(
      'customer_support', 
      newState ? 'open_chat' : 'close_chat'
    );
  };

  return (
    <>
      <ChatButton onClick={toggleChat} isOpen={isChatOpen} />
      <ChatWindow isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default CustomerSupport;
