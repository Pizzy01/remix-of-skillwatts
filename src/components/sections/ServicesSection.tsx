import { motion, AnimatePresence } from "framer-motion";
import { FileSearch, Eye, Lightbulb, GraduationCap, Handshake, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback } from "react";

const phases = [
  {
    number: 1,
    icon: FileSearch,
    name: "ÉTUDES",
    title: "Études & Ingénierie",
    subtitle: "Conception & Modélisation",
    description: "Études de faisabilité, APS/APD, modélisation et conception détaillée des infrastructures énergétiques.",
    features: [
      "Études de faisabilité",
      "APS / APD",
      "Modélisation énergétique",
      "Conception détaillée"
    ]
  },
  {
    number: 2,
    icon: Eye,
    name: "SUPERVISION",
    title: "Supervision & Contrôle",
    subtitle: "QA/QC & Suivi Technique",
    description: "Assurance qualité (QA/QC), contrôle technique et supervision rigoureuse des chantiers pendant l'exécution des projets.",
    features: [
      "Assurance Qualité (QA/QC)",
      "Contrôle Technique",
      "Supervision de Chantier",
      "Mise en Service"
    ]
  },
  {
    number: 3,
    icon: Lightbulb,
    name: "CONSEIL",
    title: "Conseil & Innovation",
    subtitle: "Stratégie & R&D",
    description: "Stratégie énergétique, partenariats R&D et optimisation des systèmes pour les projets énergétiques en Afrique.",
    features: [
      "Stratégie Énergétique",
      "Partenariats R&D",
      "Optimisation des Systèmes",
      "Innovation Technologique"
    ]
  },
  {
    number: 4,
    icon: GraduationCap,
    name: "FORMATION",
    title: "Formation & Capacités",
    subtitle: "Renforcement des Compétences",
    description: "Renforcement des capacités, formations techniques et programmes de certification pour développer l'expertise locale.",
    features: [
      "Renforcement des Capacités",
      "Formations Techniques",
      "Programmes de Certification",
      "Expertise Locale"
    ]
  },
  {
    number: 5,
    icon: Handshake,
    name: "PARTENARIATS",
    title: "Partenariats Stratégiques",
    subtitle: "Co-développement International",
    description: "Co-développement de grands projets énergétiques avec des partenaires internationaux majeurs.",
    features: [
      "Co-développement de Projets",
      "Partenariats Internationaux",
      "Projets de Grande Envergure",
      "Alliances Stratégiques"
    ]
  },
  {
    number: 6,
    icon: Zap,
    name: "AUDIT",
    title: "Audit Énergétique",
    subtitle: "Diagnostic & Optimisation",
    description: "Audit complet des installations énergétiques existantes pour identifier les pertes, optimiser les consommations et proposer des solutions d'amélioration.",
    features: [
      "Diagnostic Énergétique",
      "Analyse des Consommations",
      "Identification des Pertes",
      "Plan d'Optimisation"
    ]
  },
];

export const ServicesSection = () => {
  const [activePhase, setActivePhase] = useState(0);
  
  const scrollPrev = useCallback(() => {
    setActivePhase((prev) => (prev === 0 ? phases.length - 1 : prev - 1));
  }, []);

  const scrollNext = useCallback(() => {
    setActivePhase((prev) => (prev === phases.length - 1 ? 0 : prev + 1));
  }, []);

  const currentPhase = phases[activePhase];

  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden bg-slate-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 via-slate-900 to-slate-900" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
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
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-6 border border-primary/30">
            <Lightbulb className="w-4 h-4" />
            NOS SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-emerald-400 to-yellow-400 bg-clip-text text-transparent">
              Nos
            </span>{" "}
            <span className="text-white">Services</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            SkillWatts accompagne vos projets énergétiques en Afrique à chaque étape, de la conception à l'exploitation.
          </p>
        </motion.div>

        {/* Carousel layout */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Circular dial */}
          <div className="relative flex-shrink-0">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              {/* Progress ring */}
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="hsl(var(--muted))"
                  strokeWidth="2"
                  opacity="0.2"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={`${((activePhase + 1) / phases.length) * 289} 289`}
                  initial={false}
                  animate={{ strokeDasharray: `${((activePhase + 1) / phases.length) * 289} 289` }}
                  transition={{ duration: 0.5 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="#facc15" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Center content */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePhase}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center mb-2 shadow-lg">
                      <currentPhase.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-slate-800 mb-1">
                      {currentPhase.number}
                    </span>
                    <span className="text-xs font-bold text-primary tracking-wider">
                      {currentPhase.name}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={scrollPrev}
                className="w-11 h-11 rounded-full border-2 border-slate-500/50 bg-transparent flex items-center justify-center hover:bg-slate-700/50 transition-colors"
                aria-label="Previous phase"
              >
                <ChevronLeft className="w-5 h-5 text-slate-300" />
              </button>
              <button
                onClick={scrollNext}
                className="w-11 h-11 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg"
                aria-label="Next phase"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Phase card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="flex-1 w-full max-w-lg"
            >
              <div className="rounded-3xl bg-gradient-to-br from-primary/90 via-emerald-600/90 to-emerald-700/90 p-8 shadow-2xl border border-white/10">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
                  <currentPhase.icon className="w-4 h-4" />
                  PHASE {currentPhase.number}
                </span>
                
                <h3 className="text-3xl font-bold text-white mb-2">
                  {currentPhase.title}
                </h3>
                <p className="text-lg text-emerald-100 font-medium mb-3">
                  {currentPhase.subtitle}
                </p>
                <p className="text-emerald-100/80 mb-6">
                  {currentPhase.description}
                </p>

                <ul className="space-y-2">
                  {currentPhase.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      className="flex items-center gap-3 text-white"
                    >
                      <span className="w-2 h-2 rounded-full bg-yellow-400" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Dots */}
                <div className="flex items-center gap-2 mt-6">
                  {phases.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActivePhase(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === activePhase 
                          ? "w-8 bg-yellow-400" 
                          : "w-4 bg-white/30 hover:bg-white/50"
                      }`}
                      aria-label={`Go to phase ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};