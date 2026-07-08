import { motion } from "framer-motion";
import { Sun, Thermometer, Droplets, Leaf, GlassWater, Factory, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useContent } from "@/contexts/ContentContext";

const ICONS = [Sun, Thermometer, Droplets, Leaf, GlassWater, Factory];

export const SolutionsOverviewSection = () => {
  const { content } = useContent();
  const data = content.solutions;

  return (
    <section id="solutions" className="py-32 relative border-t border-white/5 bg-transparent">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-plasma/5 blur-[120px] pointer-events-none" />

      <div className="container-premium relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-plasma" />
            <span className="text-xs font-mono tracking-widest text-white/80 uppercase">
              {data.badge}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl text-white font-bold tracking-tighter mb-6">
            {data.title}
          </h2>
          <p className="text-xl text-white/70 leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {data.items.map((solution, index) => {
            const Icon = ICONS[index % ICONS.length];
            
            // Bento logic: make the 1st and 6th item span 2 columns for asymmetry
            const isLarge = index === 0 || index === 5;

            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden rounded-[2rem] bg-[#0A0A0C] border border-white/5 transition-all duration-500 hover:border-white/10 ${
                  isLarge ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                {/* Image Background with Tech Filter */}
                <div className="absolute inset-0 z-0 h-full w-full">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover opacity-20 mix-blend-luminosity transition-transform duration-700 group-hover:scale-105 group-hover:opacity-30"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                  {/* Smooth gradient fade to black at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/80 to-transparent" />
                  
                  {/* Subtle hover glow tied to the brand colors */}
                  <div className="absolute inset-0 bg-plasma opacity-0 group-hover:opacity-10 transition-opacity duration-500 mix-blend-overlay" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end min-h-[350px]">
                  <div className="mb-auto">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md mb-6">
                      <Icon className="w-5 h-5 text-plasma" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className={`font-bold text-white tracking-tight mb-3 ${isLarge ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
                      {solution.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed text-sm md:text-base max-w-lg">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 flex justify-end"
        >
          <Link
            to="/solutions"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-medium text-white rounded-full overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md transition-all hover:bg-white/10"
          >
            <span>{data.ctaLabel || "Explore All Systems"}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-plasma" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
