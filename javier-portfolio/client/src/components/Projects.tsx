import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    tech: ["React", "Next.js", "Node.js", "MongoDB"],
    description: "Modern e-commerce platform with complete features including payment system.",
    size: "large", // spans 2 cols
    color: "bg-[#1a1a1a]"
  },
  {
    id: 2,
    title: "AI Chatbot Assistant",
    category: "AI & ML",
    tech: ["Python", "TensorFlow", "NLP"],
    description: "AI-based chatbot that can answer questions using Natural Language Processing.",
    size: "small",
    color: "bg-[#252525]"
  },
  {
    id: 3,
    title: "Portfolio Builder",
    category: "Web App",
    tech: ["React", "TypeScript", "Firebase"],
    description: "Platform for creating portfolio websites with drag-and-drop editor.",
    size: "small",
    color: "bg-[#151515]"
  },
  {
    id: 4,
    title: "Task Management App",
    category: "Mobile Dev",
    tech: ["React Native", "Redux", "Socket.io"],
    description: "Intuitive task management application with team collaboration features.",
    size: "large",
    color: "bg-[#202020]"
  }
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-3xl p-8 ${project.color} ${
        project.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'
      } min-h-[400px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-500`}
    >
      {/* Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <span className="font-mono text-xs text-lime-neon border border-lime-neon/30 px-3 py-1 rounded-full">
            {project.category}
          </span>
          <ArrowUpRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-lime-neon transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 max-w-md">
          {project.description}
        </p>
      </div>

      <div className="relative z-10 mt-8">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t: string) => (
            <span key={t} className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Abstract Background Shape */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-lime-neon/5 rounded-full blur-3xl group-hover:bg-lime-neon/10 transition-colors duration-500"></div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-dark-void">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <h2 className="font-display text-6xl md:text-8xl font-bold text-white mb-4">
              SELECTED<br/>
              <span className="text-lime-neon italic">WORKS</span>
            </h2>
          </div>
          <div className="font-mono text-right hidden md:block">
            <p className="text-gray-400">FEATURED PROJECTS</p>
            <p className="text-lime-neon">2024 — 2025</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
