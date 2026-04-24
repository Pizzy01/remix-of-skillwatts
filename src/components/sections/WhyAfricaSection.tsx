import { motion } from "framer-motion";
import { Zap, Users, Sun, Apple, Droplet } from "lucide-react";
import { useContent } from "@/contexts/ContentContext";

const CHALLENGE_ICONS = [Zap, Users, Sun, Apple, Droplet];

export const WhyAfricaSection = () => {
  const { content } = useContent();
  const data = content.whyAfrica;

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
            {data.badge}
          </span>
          <h2 className="text-white mb-4">{data.title}</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{data.subtitle}</p>
        </motion.div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {data.challenges.map((challenge, index) => {
            const Icon = CHALLENGE_ICONS[index % CHALLENGE_ICONS.length];
            return (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm ${
                  index === data.challenges.length - 1 && data.challenges.length % 3 === 2
                    ? "lg:col-start-2"
                    : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {challenge.title}
                </h3>
                <p className="text-slate-400 text-sm">{challenge.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center text-lg text-slate-300 mt-12 max-w-3xl mx-auto"
        >
          {data.bottomText}
        </motion.p>
      </div>
    </section>
  );
};
