
import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import DigitalClone from "@/components/DigitalClone";
import Contact from "@/components/Contact";
import RoleBasedLayout from "@/components/RoleBasedLayout";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const { user } = useAuth();
  
  useEffect(() => {
    // Add smooth scroll behavior for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const href = target.getAttribute('href');
        if (!href) return;
        
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Return different content based on user role
  const renderContent = () => {
    if (!user) {
      // Guest view - simplified content
      return (
        <>
          <Hero />
          <About />
          <Contact />
        </>
      );
    }

    switch (user.role) {
      case "admin":
        // Admin gets full access
        return (
          <>
            <Hero />
            <About />
            <Projects />
            <DigitalClone />
            <Contact />
          </>
        );
      case "vendor":
        // Vendor gets everything except Digital Clone
        return (
          <>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </>
        );
      case "user":
        // Regular user gets basic content
        return (
          <>
            <Hero />
            <About />
            <Contact />
          </>
        );
      default:
        return (
          <>
            <Hero />
            <About />
            <Contact />
          </>
        );
    }
  };

  return (
    <RoleBasedLayout>
      {renderContent()}
    </RoleBasedLayout>
  );
};

export default Index;
