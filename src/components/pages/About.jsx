import React from "react";
import { motion } from "motion/react";

const glow = "#00ff88";

const About = () => {
  return (
    <section className="relative w-full py-28 px-6 md:px-16 overflow-hidden bg-black" >

      {/* Floating Glow Blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#00ff88]/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-[#00ff88]/10 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Left – Animated Story Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-10 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
        >
          <span className="absolute -top-4 left-8 px-4 py-1 text-sm rounded-full bg-[#00ff88] text-black font-semibold shadow-md">
            About Me
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
            Building ideas into{" "}
            <span className="text-[#00ff88]">real-world products</span>
          </h2>

          <p className="mt-6 text-white/80 text-lg leading-relaxed">
            I’m a final-year <span className="text-[#00ff88] font-medium">Computer Engineering</span> student
            and a <span className="font-medium">MERN stack developer</span> with
            hands-on industry experience through my internship at
            <span className="text-[#00ff88] font-medium"> Trevita Infotech</span>.
          </p>

          <p className="mt-4 text-white/75 leading-relaxed">
            I specialize in crafting responsive React interfaces, designing clean
            REST APIs, and building full-stack applications using modern
            JavaScript practices.
          </p>

          <p className="mt-4 text-white/75 leading-relaxed">
            I enjoy turning real business requirements into scalable, maintainable
            solutions — and I’m actively preparing for junior frontend / MERN
            developer roles.
          </p>
        </motion.div>

        {/* Right – Animated Personality Panel */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative flex flex-col gap-6"
        >
          {[
            "Industry-driven mindset",
            "Clean, scalable code",
            "Frontend-focused full-stack",
            "Strong React & API skills"
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, x: 6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group flex items-center gap-5 p-6 rounded-2xl
                         bg-gradient-to-r from-white/5 to-white/0
                         border border-white/10 hover:border-[#00ff88]/60
                         cursor-default"
            >
              <div className="w-3 h-3 rounded-full bg-[#00ff88] shadow-[0_0_12px_#00ff88]" />
              <p className="text-white/90 text-lg group-hover:text-white">
                {item}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;
