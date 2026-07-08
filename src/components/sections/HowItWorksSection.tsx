import { motion, useScroll, useTransform } from "framer-motion";
import { useContent } from "@/contexts/ContentContext";

export const HowItWorksSection = () => {
  const { content } = useContent();
  const data = content.howItWorks;
  const { scrollYProgress } = useScroll();

  return (
    <section className="py-40 relative bg-transparent">
      <div className="container-premium relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-plasma" />
            <span className="text-xs font-mono tracking-widest text-white/80 uppercase">
              {data.badge}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl text-white font-bold tracking-tighter mb-6">
            {data.title}
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </motion.div>

        {/* The Circuit Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Glowing Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-1/2" />
          
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-plasma via-fusion to-reactor md:-translate-x-1/2" 
            style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
          />

          {data.steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex items-center mb-24 md:mb-32 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Connector Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-obsidian-900 border-2 border-plasma md:-translate-x-1/2 shadow-[0_0_20px_rgba(0,229,255,0.8)] z-10" />

                {/* Content Card */}
                <div className={`w-full ml-20 md:ml-0 md:w-1/2 ${isEven ? "md:pr-20 text-left md:text-right" : "md:pl-20 text-left"}`}>
                  <div className="group relative p-8 rounded-3xl bg-[#050505]/50 border border-white/5 backdrop-blur-md transition-all duration-500 hover:bg-[#0A0A0C] hover:border-plasma/30 hover:shadow-[0_0_40px_rgba(0,229,255,0.05)]">
                    <div className="text-plasma font-mono text-sm tracking-widest mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                      PHASE {step.number}
                    </div>
                    <h3 className="text-3xl font-bold text-white tracking-tight mb-4">
                      {step.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
