import React from "react";
import { motion } from "motion/react";
import AnimatedSection from "../common/AnimatedSection";

const glow = "#00ff88";

const frontendSkills = [
  "React.js",
  "Tailwind CSS",
  "JavaScript (ES6+)",
  "HTML5 / CSS3",
  "Responsive Design",
];

const backendSkills = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "JWT Authentication",
];

const SkillOrb = ({ skill, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.12 }}
    transition={{
      duration: 0.6,
      delay,
      type: "spring",
      stiffness: 200,
    }}
    className="relative group cursor-default"
  >
    <div className="absolute inset-0 rounded-full bg-[#00ff88]/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative px-6 py-3 rounded-full border border-[#00ff88]/40 
                    bg-black/60 backdrop-blur-md text-white text-sm sm:text-base
                    shadow-lg shadow-[#00ff88]/20">
      {skill}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <AnimatedSection className="relative w-full py-28 px-6 md:px-16 bg-black overflow-hidden">

      {/* Ambient Glow */}
      <motion.div
        className="absolute -top-40 -right-40 w-[28rem] h-[28rem] rounded-full 
                   bg-[#00ff88]/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-[22rem] h-[22rem] rounded-full 
                   bg-[#00ff88]/10 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-[#00ff88]">Skillset</span>
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Tools and technologies I use to transform ideas into scalable,
            production-ready applications.
          </p>
        </motion.div>

        {/* Skill Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative p-10 rounded-3xl border border-white/10
                       bg-gradient-to-br from-white/5 to-white/0
                       backdrop-blur-xl shadow-2xl"
          >
            <span className="absolute -top-4 left-10 px-4 py-1 text-sm 
                             bg-[#00ff88] text-black rounded-full font-semibold">
              Frontend
            </span>

            <div className="flex flex-wrap gap-5 mt-6">
              {frontendSkills.map((skill, i) => (
                <SkillOrb key={skill} skill={skill} delay={i * 0.05} />
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative p-10 rounded-3xl border border-white/10
                       bg-gradient-to-br from-white/5 to-white/0
                       backdrop-blur-xl shadow-2xl"
          >
            <span className="absolute -top-4 left-10 px-4 py-1 text-sm 
                             bg-[#00ff88] text-black rounded-full font-semibold">
              Backend
            </span>

            <div className="flex flex-wrap gap-5 mt-6">
              {backendSkills.map((skill, i) => (
                <SkillOrb key={skill} skill={skill} delay={i * 0.05} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
