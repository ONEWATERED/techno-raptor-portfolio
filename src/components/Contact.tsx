
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Mail, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };
  
  const socialLinks = [
    { 
      icon: <Mail className="w-5 h-5" />, 
      label: "Email",
      value: "contact@dhrumanraptor.com",
      href: "mailto:contact@dhrumanraptor.com"
    },
    { 
      icon: <Github className="w-5 h-5" />, 
      label: "Github",
      value: "github.com/dhrumanraptor",
      href: "https://github.com/"
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      label: "LinkedIn",
      value: "linkedin.com/in/dhrumanraptor",
      href: "https://linkedin.com/"
    },
    { 
      icon: <Twitter className="w-5 h-5" />, 
      label: "Twitter",
      value: "@dhrumanraptor",
      href: "https://twitter.com/"
    },
    { 
      icon: <MapPin className="w-5 h-5" />, 
      label: "Location",
      value: "Silicon Valley, CA",
      href: "#"
    }
  ];
  
  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 mb-2 rounded-full bg-accent/10">
            <p className="text-sm font-medium text-accent">Contact</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-foreground/70">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <div className="lg:col-span-2">
            <div className="glass rounded-xl p-6 h-full">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    target={link.label !== "Location" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-2 rounded-lg bg-accent/10 text-accent mt-0.5">
                      {link.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{link.label}</p>
                      <p className="text-foreground/70 group-hover:text-accent transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="text-sm font-medium mb-3">Follow Me</h4>
                <div className="flex gap-3">
                  {socialLinks.slice(1, 4).map((link, i) => (
                    <a 
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-white shadow-sm text-foreground/80 hover:text-accent transition-colors"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input 
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-accent/20 focus:border-accent/50 transition-all outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-accent/20 focus:border-accent/50 transition-all outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input 
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-accent/20 focus:border-accent/50 transition-all outline-none"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-accent/20 focus:border-accent/50 transition-all outline-none resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                
                <div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium transition-all",
                      isSubmitting 
                        ? "bg-accent/70 text-white cursor-not-allowed" 
                        : "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20"
                    )}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send size={16} className={isSubmitting ? "animate-pulse" : ""} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
