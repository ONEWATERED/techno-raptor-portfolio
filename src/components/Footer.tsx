
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 px-6 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <a href="#" className="text-xl font-semibold tracking-tight">
                Dhruman<span className="text-accent">Raptor</span>
              </a>
            </div>
            <p className="text-sm text-foreground/60 mt-2">
              Crafting the future with AI and technology
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex items-center gap-6">
              <a href="#about" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                About
              </a>
              <a href="#projects" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#digital-clone" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                Digital Clone
              </a>
              <a href="#contact" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white shadow-md hover:bg-secondary transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">
            © {currentYear} Dhruman Raptor. All rights reserved.
          </p>
          
          <p className="text-sm text-foreground/60 mt-2 md:mt-0">
            Built with precision and care
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
