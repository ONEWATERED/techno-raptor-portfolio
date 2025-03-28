
import { useState, useEffect } from "react";
import { Bot, X } from "lucide-react";
import { cn } from "@/lib/utils";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide button when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-accent shadow-lg transition-all duration-300 hover:scale-110",
          "before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-accent/30 before:animate-ping before:animation-delay-300 before:opacity-75",
          "after:content-[''] after:absolute after:inset-[-8px] after:rounded-full after:bg-accent/20 after:animate-pulse after:animation-delay-700",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        )}
        aria-label="Open Chat"
      >
        <Bot className="w-7 h-7 text-white animate-float" />
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
          
          <div className="relative z-10 w-full max-w-4xl h-[80vh] bg-white rounded-xl shadow-2xl overflow-hidden animate-fade-in">
            <div className="absolute top-4 right-4 z-20">
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full bg-white/90 hover:bg-white shadow-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <iframe 
              src="https://app.vectorshift.ai/portals/deployed/67d03fd69c39fddf18ecf811?isEmbed=true" 
              width="100%" 
              height="100%" 
              className="border-0"
              allow="clipboard-read; clipboard-write; microphone"
              title="Dhruman Rathod AI Assistant"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatButton;
