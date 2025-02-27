
import { Code, Brain, Cpu, Lightbulb } from "lucide-react";

const About = () => {
  const skills = [
    { 
      icon: <Brain className="w-8 h-8 text-accent" />, 
      title: "Artificial Intelligence",
      description: "Developing cutting-edge AI models and solutions that solve complex problems."
    },
    { 
      icon: <Code className="w-8 h-8 text-accent" />, 
      title: "Software Development",
      description: "Building robust, scalable applications with modern technologies and best practices."
    },
    { 
      icon: <Cpu className="w-8 h-8 text-accent" />, 
      title: "Vector Shift Development",
      description: "Creating advanced digital persona systems using Vector Shift technology."
    },
    { 
      icon: <Lightbulb className="w-8 h-8 text-accent" />, 
      title: "Innovation",
      description: "Pioneering new approaches at the intersection of technology and creativity."
    }
  ];
  
  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-full h-[480px] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200" 
                  alt="Dhruman Rathod" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass rounded-xl p-4 shadow-xl">
                <p className="text-sm font-mono">
                  <span className="text-accent">const</span> passion = <span className="text-accent">'AI + Innovation';</span>
                </p>
              </div>
              <div className="absolute -top-6 -left-6 glass rounded-xl p-4 shadow-xl">
                <p className="font-mono text-sm opacity-80">
                  <span className="text-accent">5+</span> years of experience
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-6">
            <div>
              <div className="inline-block px-3 py-1 mb-2 rounded-full bg-accent/10">
                <p className="text-sm font-medium text-accent">About Me</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Techno Craftsman & <span className="text-gradient">AI Engineer</span>
              </h2>
            </div>
            
            <p className="text-foreground/80 leading-relaxed">
              I'm Dhruman Rathod, a passionate technologist specializing in artificial intelligence and digital innovation. With a background in both theoretical AI research and practical implementation, I create solutions that push the boundaries of what's possible.
            </p>
            
            <p className="text-foreground/80 leading-relaxed">
              My expertise lies in developing intelligent systems that learn, adapt, and enhance human capabilities. I'm particularly focused on Vector Shift technology, where I've pioneered methods to create realistic digital personas that can interact naturally with users.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="glass p-5 rounded-xl transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
                >
                  <div className="mb-3">{skill.icon}</div>
                  <h3 className="font-semibold mb-2">{skill.title}</h3>
                  <p className="text-sm text-foreground/70">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
