import { motion } from "framer-motion";
import { Zap, Users, Sun, Apple, Droplet } from "lucide-react";

const challenges = [
  {
    icon: Zap,
    title: "Low electricity access",
    description: "600+ million Africans lack reliable power in rural areas",
  },
  {
    icon: Users,
    title: "Population growth",
    description: "Africa's population will double by 2050, demanding massive infrastructure",
  },
  {
    icon: Sun,
    title: "Huge solar potential",
    description: "Africa receives more sunlight than any other continent",
  },
  {
    icon: Apple,
    title: "Post-harvest losses",
    description: "40% of food is lost due to lack of cold chain infrastructure",
  },
  {
    icon: Droplet,
    title: "Water scarcity",
    description: "400+ million people lack access to safe drinking water",
  },
];

export const WhyAfricaSection = () => {
  return (
    <section className="section-padding bg-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 via-transparent to-slate-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-3xl rounded-full" />

      <div className="container-premium relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-emerald-400 bg-emerald-400/10 rounded-full mb-4">
            The Challenge
          </span>
          <h2 className="text-white mb-4">
            Why Africa Needs SkillWatts
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Africa faces a massive infrastructure gap. We build solutions that directly address these challenges.
          </p>
        </motion.div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm ${
                index === 4 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                <challenge.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {challenge.title}
              </h3>
              <p className="text-slate-400 text-sm">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center text-lg text-slate-300 mt-12 max-w-3xl mx-auto"
        >
          SkillWatts builds infrastructure that directly addresses these challenges with{" "}
          <span className="text-emerald-400 font-semibold">scalable, bankable solutions</span>.
        </motion.p>
      </div>
    </section>
  );
};
