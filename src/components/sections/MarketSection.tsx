import { motion } from "framer-motion";
import { Zap, Factory, Building, Ship, ArrowRight } from "lucide-react";

const marketSectors = [
  {
    icon: Zap,
    title: "Power & Gas Networks",
    description: "Transmission, distribution and gas infrastructure across the continent.",
  },
  {
    icon: Factory,
    title: "Industrial Energy",
    description: "Power solutions for manufacturing, mining and heavy industries.",
  },
  {
    icon: Building,
    title: "Commercial & Residential",
    description: "Sustainable energy for buildings, malls and housing developments.",
  },
  {
    icon: Ship,
    title: "Maritime & Ports",
    description: "Shore power and clean energy for port operations.",
  },
];

export const MarketSection = () => {
  return (
    <section id="market" className="relative py-20 md:py-28 overflow-hidden bg-slate-950">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/30"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 4) * 18}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative container-premium">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-700/50 text-slate-300 text-sm font-semibold mb-6 border border-slate-600/50">
            ENERGY SOLUTIONS FOR AFRICA
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Our Market</span>{" "}
            <span className="bg-gradient-to-r from-primary via-emerald-400 to-yellow-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            Comprehensive energy solutions across critical infrastructure sectors.
          </p>
        </motion.div>

        {/* Market cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {marketSectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="relative rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 hover:border-primary/30 transition-all duration-300">
                {/* Glow on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
                
                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center shadow-lg">
                    <sector.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-primary transition-colors">
                      {sector.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {sector.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-emerald-600 text-white font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
          >
            Get Market Insights
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};