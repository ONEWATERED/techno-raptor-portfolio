
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl animate-pulse-light"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl animate-pulse-light" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 rounded-full glass">
            <p className="text-sm font-medium">AI Engineer & Techno Craftsman</p>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-up">
            Building the Future with <span className="text-gradient">AI & Technology</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Crafting intelligent systems and transformative experiences that bridge the gap between human creativity and artificial intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20"
            >
              View My Work
            </a>
            <a 
              href="#digital-clone" 
              className="px-6 py-3 rounded-lg glass hover:bg-white/80 transition-colors"
            >
              Meet My Digital Clone
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm font-medium opacity-60 hover:opacity-100 transition-opacity animate-float"
      >
        <span className="mb-2">Scroll Down</span>
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default Hero;
