import { motion } from "framer-motion";
import { Building2, Heart, Wheat, Store, Factory, Users, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const clientTypes = [
  { icon: Building2, title: "Gouvernements & Services publics", description: "Électrification rurale, adduction d'eau potable, éclairage public, centres de santé, écoles." },
  { icon: Heart, title: "ONG & Partenaires de développement", description: "Projets humanitaires, de sécurité alimentaire, d'accès à l'eau potable et de développement durable." },
  { icon: Wheat, title: "Coopératives & Agro-industries", description: "Stockage frigorifique, irrigation solaire, agro-transformation et séchage de produits agricoles." },
  { icon: Factory, title: "Industries & Exploitations minières", description: "Systèmes solaires hybrides et stockage d'énergie pour réduire les coûts d'exploitation et fiabiliser la production." },
  { icon: Store, title: "Sites commerciaux & PME", description: "Hôtels, supermarchés, cliniques et ateliers nécessitant une énergie fiable et compétitive." },
  { icon: Users, title: "Communautés & Municipalités", description: "Accès à l'électricité, à l'eau potable et énergie productive pour le développement local." },
];

export const WhoWeServeSection = () => {
  return (
    <section id="clients" className="py-32 relative border-t border-white/5 bg-transparent">
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
            <h2 className="text-4xl md:text-5xl text-white font-bold tracking-tighter mb-6">
              L'ingénierie pour les <br />
              <span className="text-white/60">secteurs critiques.</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              SkillWatts conçoit des architectures techniques et financières sur mesure, adaptées à la réalité opérationnelle de chaque secteur.
            </p>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to="/who-we-serve"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium group transition-colors"
            >
              Découvrir nos cas d'études
              <ArrowRight className="w-4 h-4 text-plasma transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Minimalist Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/5 rounded-3xl overflow-hidden border border-white/5">
          {clientTypes.map((client, index) => (
            <motion.div
              key={client.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-obsidian-900 p-10 relative group hover:bg-[#0c0c0f] transition-colors duration-500"
            >
              {/* Scanline hover effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-plasma/5 to-transparent h-[200%] -translate-y-[100%] group-hover:translate-y-[50%] transition-transform duration-1000 ease-in-out pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 mb-8 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/70 group-hover:text-plasma group-hover:border-plasma/30 group-hover:bg-plasma/5 transition-all duration-300">
                  <client.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-white tracking-tight mb-3">
                  {client.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {client.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
