import { motion } from 'framer-motion';

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 85 },
  { name: "Git", level: 85 }
];

export default function Skills() {
  return (
    <section className="py-32 bg-light-gray text-dark-void relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16">
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-4">
            TECHNICAL<br/>
            <span className="italic text-transparent stroke-text-dark">ARSENAL</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="group">
              <div className="flex justify-between items-end mb-2">
                <span className="font-display text-2xl font-bold">{skill.name}</span>
                <span className="font-mono text-sm opacity-50">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-dark-void/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1, ease: "circOut" }}
                  className="h-full bg-dark-void group-hover:bg-lime-neon transition-colors duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stroke-text-dark {
          -webkit-text-stroke: 1px #101400;
        }
      `}</style>
    </section>
  );
}
