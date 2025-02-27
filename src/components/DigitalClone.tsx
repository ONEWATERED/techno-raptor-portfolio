
import { useState, useEffect, useRef } from "react";
import { RefreshCw, Play, Pause, Volume2, VolumeX } from "lucide-react";

const DigitalClone = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simulate loading the Vector Shift clone
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    console.log("Digital clone playback toggled");
  };
  
  const handleMute = () => {
    setIsMuted(!isMuted);
    console.log("Digital clone audio toggled");
  };
  
  const handleRegenerate = () => {
    setIsLoading(true);
    console.log("Regenerating digital clone response");
    
    // Simulate regeneration
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };
  
  return (
    <section id="digital-clone" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 mb-2 rounded-full bg-accent/10">
            <p className="text-sm font-medium text-accent">Digital Clone</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet My <span className="text-gradient">Digital Twin</span>
          </h2>
          <p className="text-foreground/70">
            Interact with my AI-powered digital clone, built with Vector Shift technology and trained on my knowledge and personality.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl overflow-hidden shadow-xl">
            <div className="relative aspect-video bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center" ref={containerRef}>
              {isLoading ? (
                <div className="flex flex-col items-center gap-3">
                  <RefreshCw size={36} className="text-primary/70 animate-spin" />
                  <p className="text-sm text-primary/70">Loading digital clone...</p>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  {/* This is where the Vector Shift clone would be embedded */}
                  <div className="relative w-full h-full">
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200" 
                      alt="Digital Clone Placeholder"
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-primary/40">
                      <p className="text-white text-lg font-medium">
                        Vector Shift Clone Embed Area
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <div className="glass rounded-full py-2 px-3 flex items-center gap-3">
                  <button 
                    onClick={handlePlay}
                    className="p-2 rounded-full bg-accent text-white hover:bg-accent/90 transition-colors"
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  </button>
                  
                  <button 
                    onClick={handleMute}
                    className="p-2 rounded-full bg-white/80 text-primary hover:bg-white transition-colors"
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                  
                  <button 
                    onClick={handleRegenerate}
                    className="p-2 rounded-full bg-white/80 text-primary hover:bg-white transition-colors"
                  >
                    <RefreshCw size={18} />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <h3 className="font-medium text-lg mb-1">About This Digital Clone</h3>
                <p className="text-foreground/70 text-sm">
                  This is an interactive AI replica of me, created using Vector Shift technology and trained on my knowledge, speaking style, and expertise. It can answer questions about my work, experience, and technology insights.
                </p>
              </div>
              
              <div className="bg-secondary/70 rounded-lg p-4">
                <h4 className="font-medium mb-2 text-sm">Suggested Interactions:</h4>
                <ul className="space-y-1 text-sm text-foreground/70">
                  <li>"Tell me about your AI expertise"</li>
                  <li>"What projects are you currently working on?"</li>
                  <li>"How do you approach problem-solving in technology?"</li>
                  <li>"Share your thoughts on the future of AI"</li>
                </ul>
              </div>
              
              <div className="text-sm text-foreground/60 italic">
                Note: This is a technological demonstration. While advanced, this digital clone represents my knowledge up to its last training date.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalClone;
