import { motion } from "framer-motion";
import { Target, Eye, MapPin, GraduationCap, Zap, HardHat, Droplets, Leaf, ClipboardCheck, BookOpen } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "Accélérer la transformation énergétique de l'Afrique par l'ingénierie, le conseil et le renforcement des compétences locales.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "Un continent alimenté par une énergie fiable, durable et maîtrisée localement, moteur d'une croissance partagée.",
  },
  {
    icon: MapPin,
    title: "Ancrage local",
    description:
      "Une connaissance fine du contexte et des réglementations du Niger, avec la précision technique des standards internationaux.",
  },
  {
    icon: GraduationCap,
    title: "Transfert de compétences",
    description:
      "Former et responsabiliser les professionnels locaux pour garantir la durabilité de chaque projet.",
  },
];

const expertises = [
  { icon: Zap, label: "Énergie & renouvelables" },
  { icon: HardHat, label: "Génie civil & infrastructures" },
  { icon: Droplets, label: "Hydraulique & AEP" },
  { icon: Leaf, label: "Environnement & climat" },
  { icon: ClipboardCheck, label: "Gestion & supervision de projets" },
  { icon: BookOpen, label: "Formation & capacity building" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative border-t border-white/5 bg-transparent">
      <div className="container-premium relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-fusion" />
            <span className="text-xs font-mono tracking-widest text-white/80 uppercase">À propos de SkillWatts</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white font-bold tracking-tighter mb-6">
            Turning Skills <span className="text-white/60">into Power.</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            Fondée à Niamey, SkillWatts SARL est une société d'ingénierie et de conseil qui réunit des ingénieurs nigériens
            du pays et de la diaspora autour d'une même mission : concevoir, superviser et pérenniser les infrastructures
            énergétiques dont l'Afrique a besoin.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/5 rounded-3xl overflow-hidden border border-white/5 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-obsidian-900 p-8 relative group hover:bg-[#0c0c0f] transition-colors duration-500"
            >
              <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/70 group-hover:text-plasma group-hover:border-plasma/30 group-hover:bg-plasma/5 transition-all duration-300">
                <value.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white tracking-tight mb-3">{value.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Expertises de l'équipe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl text-white font-bold tracking-tighter">
            Nos compétences
          </h3>
          <p className="text-white/70 mt-3 max-w-2xl">
            Une équipe d'ingénieurs multidisciplinaire couvrant l'ensemble du cycle de vie des projets.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {expertises.map((expertise, index) => (
            <motion.div
              key={expertise.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 text-center hover:border-plasma/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-plasma/10 border border-plasma/20 flex items-center justify-center text-plasma">
                <expertise.icon className="w-5 h-5" />
              </div>
              <p className="text-white font-medium text-sm leading-snug">{expertise.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
