
import { useState, lazy, Suspense } from 'react';
import ChatButton from './ChatButton';
// Dynamically import ChatWindow
const LazyChatWindow = lazy(() => import('./ChatWindow'));
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
      {/* Use Suspense to handle loading state */}
      <Suspense fallback={null}>
        {isChatOpen && <LazyChatWindow isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />}
      </Suspense>
    </>
  );
};

export default CustomerSupport;
