
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'dev'>('all');
  
  const projects = [
    {
      title: "Vector Shift AI Clone",
      description: "A revolutionary digital clone system built with Vector Shift technology, capable of natural interactions and continuous learning.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      tags: ["AI", "Machine Learning", "Vector Shift"],
      link: "#",
      github: "#",
      category: "ai"
    },
    {
      title: "Neural Interface Platform",
      description: "Advanced platform for interpreting neural signals and translating them into digital commands with high accuracy.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      tags: ["AI", "Neural Networks", "Interface Design"],
      link: "#",
      github: "#",
      category: "ai"
    },
    {
      title: "Autonomous Data Pipeline",
      description: "Intelligent data processing system that automatically cleans, transforms, and prepares data for AI model training.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      tags: ["Data Engineering", "Automation", "API"],
      link: "#",
      github: "#",
      category: "dev"
    },
    {
      title: "Reactive Learning System",
      description: "Framework for creating AI models that adapt in real-time to changing data patterns and user behaviors.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      tags: ["React", "AI", "Adaptive Learning"],
      link: "#",
      github: "#",
      category: "dev"
    }
  ];
  
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);
  
  return (
    <section id="projects" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 mb-2 rounded-full bg-accent/10">
            <p className="text-sm font-medium text-accent">Projects</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-foreground/70">
            A showcase of my latest projects in AI, software development, and technology innovation.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white/50 rounded-lg p-1 shadow-sm">
            {['all', 'ai', 'dev'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as 'all' | 'ai' | 'dev')}
                className={cn(
                  "px-5 py-2 text-sm font-medium rounded-md transition-all",
                  activeTab === tab 
                    ? "bg-white shadow-sm" 
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {tab === 'all' ? 'All Projects' : tab === 'ai' ? 'AI Projects' : 'Development'}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="glass group rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/90 text-primary shadow-md hover:bg-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/90 text-primary shadow-md hover:bg-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-accent/10 text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
