import { motion } from "framer-motion";
import { Zap, Shield, Sun, BarChart3, Users, Wrench } from "lucide-react";
import { useContent } from "@/contexts/ContentContext";

const CHALLENGE_ICONS = [Zap, Shield, BarChart3, Wrench, Users, Sun];

export const WhyAfricaSection = () => {
  const { content } = useContent();
  const data = content.whyAfrica;

  return (
    <section className="py-32 relative overflow-hidden flex flex-col justify-center bg-transparent">
      
      {/* 3D-like Global Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.2) 1px, transparent 1px), radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.2) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        backgroundPosition: "0 0, 20px 20px",
        perspective: "1000px",
        transform: "rotateX(60deg) scale(2.5) translateY(-20%)",
        transformOrigin: "top center"
      }} />

      {/* Massive Glow for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[300px] bg-fusion/10 blur-[150px] pointer-events-none rounded-[100%]" />

      <div className="container-premium relative z-10">
        
        {/* Minimalist Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-fusion animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-white/80 uppercase">
              {data.badge}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white font-bold tracking-tighter mb-6 max-w-4xl mx-auto leading-tight">
            {data.title}
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>

        {/* Floating Cards (Glassmorphism) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {data.challenges.map((challenge, index) => {
            const Icon = CHALLENGE_ICONS[index % CHALLENGE_ICONS.length];
            return (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl group hover:bg-white/[0.04] transition-all duration-500"
              >
                {/* 3D-like pseudo lighting from top */}
                <div className="absolute inset-0 rounded-3xl border-t border-white/10 pointer-events-none" />
                
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,179,0,0.1)] group-hover:border-fusion/30 group-hover:text-fusion text-white/70 transition-all duration-500">
                  <Icon className="w-5 h-5" />
                </div>
                
                <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                  {challenge.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {challenge.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement as a technical log */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="inline-block px-8 py-4 rounded-xl bg-white/[0.02] border border-white/[0.05] font-mono text-xs md:text-sm text-white/60 tracking-wider">
             <span className="text-fusion mr-2">{">"}</span> {data.bottomText}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
