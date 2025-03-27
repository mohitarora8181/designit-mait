
import { Code, Palette, Users, Zap, Eye, BarChart3 } from 'lucide-react';
import TeamMember from './TeamMember';
import MyCard from '@/@/components/MyCard';
import Mohit from "../../../public/mohit.jpg"
import Vinit from "../../../public/vinit.jpg"

const Features = () => {
  const teamMembers = [
    { 
      name: "Mohit Arora", 
      role: "Developer", 
      image: Mohit, 
      delay: 100,
      skills: ["React", "Node.js", "UI/UX", "TypeScript"]
    },
    { 
      name: "Vinit Singh", 
      role: "Developer", 
      image: Vinit, 
      delay: 200,
      skills: ["React", "Node.js", "UI/UX", "TypeScript"]
    },
  ];

  return (
    <section id="features" className="section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center animate-fade-up animate-once animate-fill-both">Our Team</h2>
          <p className="section-subtitle animate-fade-up animate-delay-100 animate-once animate-fill-both">
            Meet the talented individuals behind our work and discover the skills that make us exceptional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMember delay={10} key={index} name={member.name} role={member.role} image={member.image} skills={member.skills} />
          ))}
        </div>
        
        <div className="my-24">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center animate-fade-up animate-once animate-fill-both">
            Our Core Capabilities
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-6 animate-fade-up animate-once animate-fill-both animate-delay-100">
              <div className="rounded-full bg-black/5 w-12 h-12 flex items-center justify-center mb-4">
                <Palette className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold mb-2">Design</h4>
              <p className="text-muted-foreground">Creating beautiful, intuitive interfaces with a focus on usability and accessibility.</p>
            </div>
            
            <div className="glass-card p-6 animate-fade-up animate-once animate-fill-both animate-delay-200">
              <div className="rounded-full bg-black/5 w-12 h-12 flex items-center justify-center mb-4">
                <Code className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold mb-2">Development</h4>
              <p className="text-muted-foreground">Building robust, scalable applications using modern technologies and best practices.</p>
            </div>
            
            <div className="glass-card p-6 animate-fade-up animate-once animate-fill-both animate-delay-300">
              <div className="rounded-full bg-black/5 w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold mb-2">Collaboration</h4>
              <p className="text-muted-foreground">Working closely with clients to understand their needs and deliver exceptional results.</p>
            </div>
            
            <div className="glass-card p-6 animate-fade-up animate-once animate-fill-both animate-delay-400">
              <div className="rounded-full bg-black/5 w-12 h-12 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold mb-2">Performance</h4>
              <p className="text-muted-foreground">Optimizing for speed, efficiency, and a seamless user experience across all devices.</p>
            </div>
            
            <div className="glass-card p-6 animate-fade-up animate-once animate-fill-both animate-delay-500">
              <div className="rounded-full bg-black/5 w-12 h-12 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold mb-2">Vision</h4>
              <p className="text-muted-foreground">Bringing fresh perspectives and innovative ideas to every project we undertake.</p>
            </div>
            
            <div className="glass-card p-6 animate-fade-up animate-once animate-fill-both animate-delay-600">
              <div className="rounded-full bg-black/5 w-12 h-12 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold mb-2">Analytics</h4>
              <p className="text-muted-foreground">Using data-driven insights to inform design and development decisions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;