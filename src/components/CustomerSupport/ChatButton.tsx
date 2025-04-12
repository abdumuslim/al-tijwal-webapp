
import { useState } from 'react';
import { Bot } from 'lucide-react';
import { cn } from "@/lib/utils";

interface ChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const ChatButton = ({ onClick, isOpen }: ChatButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "fixed bottom-6 left-6 z-50 rounded-full bg-tijwal-orange p-3 shadow-lg hover:bg-tijwal-orange/90 transition-all duration-300 text-white",
        isOpen && "rotate-45 transform"
      )}
      aria-label="فتح نافذة المحادثة"
    >
      <Bot className="h-7 w-7" />
    </button>
  );
};

export default ChatButton;
