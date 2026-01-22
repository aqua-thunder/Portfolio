import React from "react";
import AnimatedSection from "../common/AnimatedSection";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20 overflow-hidden">
        <div
          initial="hidden"
          animate="show"
          className="max-w-6xl w-full"
        >
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              About <span className="text-[#00ff88]">Me</span>
            </h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Developer by craft. Creator by mindset. Building digital experiences with purpose.
            </p>
          </AnimatedSection>

          {/* Interactive Cards */}
          <AnimatedSection
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {/* Card 1 */}
            <div className="group relative bg-[#0b0b0b] border border-white/10 rounded-2xl p-8 transition-all duration-300 
                       hover:border-[#00ff88]/40 hover:shadow-[0_0_25px_rgba(0,255,136,0.15)]"
            >
              <h3 className="text-xl font-semibold mb-4 group-hover:text-[#00ff88] transition-colors duration-300">
                Who I Am
              </h3>
              <p className="text-white/60 group-hover:text-white leading-relaxed transition-colors duration-500">
                Final-year Computer Engineering student and passionate MERN stack developer,
                currently gaining hands-on industry experience at Trevita Infotech.
              </p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00ff88]/10 to-transparent opacity-0 
                            group-hover:opacity-100 transition"></div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-[#0b0b0b] border border-white/10 rounded-2xl p-8 transition-all duration-300 
                       hover:border-[#00ff88]/40 hover:shadow-[0_0_25px_rgba(0,255,136,0.15)]"
            >
              <h3 className="text-xl font-semibold mb-4 group-hover:text-[#00ff88] transition-colors duration-300">
                What I Do
              </h3>
              <p className="text-white/60 group-hover:text-white leading-relaxed transition-colors duration-500">
                I design sleek React interfaces, build clean REST APIs, and bring full-stack
                applications to life using modern JavaScript.
              </p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00ff88]/10 to-transparent opacity-0 
                            group-hover:opacity-100 transition"></div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-[#0b0b0b] border border-white/10 rounded-2xl p-8 transition-all duration-300 
                       hover:border-[#00ff88]/40 hover:shadow-[0_0_25px_rgba(0,255,136,0.15)]"
            >
              <h3 className="text-xl font-semibold mb-4 group-hover:text-[#00ff88] transition-colors duration-300">
                What Drives Me
              </h3>
              <p className="text-white/60 group-hover:text-white leading-relaxed transition-colors duration-500">
                Turning real-world problems into scalable solutions. Always curious, always
                learning, always building something meaningful.
              </p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00ff88]/10 to-transparent opacity-0 
                            group-hover:opacity-100 transition"></div>
            </div>
          </AnimatedSection>

          {/* Footer Line */}
          <AnimatedSection  className="mt-20 text-center">
            <p className="text-white/40 italic text-sm hover:text-white transition-colors duration-500">
              “Creativity in design. Precision in code. Impact in every build.”
            </p>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
};

export default About;
