import { motion } from "framer-motion";
import { Atom, Zap, Building2, TrainFront, Wind, Leaf, Droplets, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const marketSectors = [
  {
    icon: Zap,
    title: "Réseaux électricité & gaz",
    description: "Intégration réseau et conformité, qualité des systèmes électriques, transport et réseaux de gaz.",

  },
  {
    icon: Wind,
    title: "Renouvelables, flexibilité & stockage",
    description: "Éolien et solaire, systèmes de stockage par batteries (BESS) et solutions de flexibilité du réseau.",

  },
  {
    icon: Droplets,
    title: "Eau & hydroélectricité",
    description: "Hydroélectricité, barrages et réservoirs, stations de transfert d'énergie par pompage (STEP).",

  },
  {
    icon: Atom,
    title: "Nucléaire",
    description: "Petits réacteurs modulaires (SMR), technologies nucléaires, démantèlement et gestion des déchets radioactifs.",

  },
  {
    icon: Building2,
    title: "Bâtiments",
    description: "Bâtiments industriels, efficacité énergétique et bâtiments intelligents.",

  },
  {
    icon: TrainFront,
    title: "Infrastructures de transport",
    description: "Infrastructures routières et ferroviaires, ponts et voies navigables.",

  },
  {
    icon: Leaf,
    title: "Environnement & résilience climatique",
    description: "Gestion des ressources en eau et atténuation du changement climatique.",

  },
];

export const MarketSection = () => {
  return (
    <section id="market" className="py-32 relative border-t border-white/5 bg-transparent">
      <div className="container-premium relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-plasma" />
              <span className="text-xs font-mono tracking-widest text-white/80 uppercase">Nos domaines d'expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-white font-bold tracking-tighter mb-6">
              Une expertise couvrant <br />
              <span className="text-white/60">toute la chaîne de valeur.</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Des études de faisabilité à l'exécution, SkillWatts intervient sur les grands secteurs techniques de l'énergie et des infrastructures.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium group transition-colors"
            >
              Demander une proposition technique
              <ArrowRight className="w-4 h-4 text-plasma transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Sectors grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[1px] bg-white/5 rounded-3xl overflow-hidden border border-white/5">
          {marketSectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.8 }}
              className={`bg-obsidian-900 p-8 relative group hover:bg-[#0c0c0f] transition-colors duration-500 ${
                index === 0 ? "sm:col-span-2 xl:col-span-2" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-plasma/5 to-transparent h-[200%] -translate-y-[100%] group-hover:translate-y-[50%] transition-transform duration-1000 ease-in-out pointer-events-none" />

              <div className="relative z-10">
                <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/70 group-hover:text-plasma group-hover:border-plasma/30 group-hover:bg-plasma/5 transition-all duration-300">
                  <sector.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white tracking-tight mb-3">
                  {sector.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {sector.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
