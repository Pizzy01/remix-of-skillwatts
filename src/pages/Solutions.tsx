import { motion } from "framer-motion";
import { Sun, Thermometer, Droplets, Leaf, GlassWater, Factory, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { usePageMeta } from "@/hooks/use-page-meta";

const solutions = [
  {
    id: "mini-grids",
    icon: Sun,
    title: "Mini-réseaux solaires",
    subtitle: "Électrification rurale & industrielle",
    description: "Centrales solaires et hybrides pour villages, villes et zones industrielles. Conçues pour l'électrification générale, les entreprises, les centres de santé et les services publics.",
    features: [
      "Systèmes conteneurisés solaires + batteries",
      "Configurations hybrides solaire-diesel",
      "Comptage intelligent et paiement à l'usage",
      "Technologie d'onduleur formant le réseau",
    ],
    image: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?w=800&q=80",
  },
  {
    id: "cold-chain",
    icon: Thermometer,
    title: "Chaîne du froid & Stockage",
    subtitle: "Chaîne du froid agricole & médicale",
    description: "Chambres froides et conteneurs réfrigérés solaires pour fruits, légumes, viandes, poissons et vaccins. Essentiels pour éliminer les pertes post-récolte.",
    features: [
      "Chambres froides solaires (5 à 100 tonnes)",
      "Conteneurs frigorifiques mobiles",
      "Congélateurs pour viandes & poissons",
      "Stockage de vaccins pour dispensaires",
    ],
    image: "https://images.unsplash.com/photo-1595805244583-125dd1f211d0?w=800&q=80",
  },
  {
    id: "water-pumping",
    icon: Droplets,
    title: "Pompage solaire de l'eau",
    subtitle: "Agriculture & Eau potable",
    description: "Pompes solaires à haut rendement pour l'agriculture, l'abreuvement du bétail et l'eau potable des villages. Une alternative durable sans dépendance au diesel.",
    features: [
      "Pompes immergées et de surface",
      "Systèmes d'irrigation goutte-à-goutte et aspersion",
      "Abreuvoirs solaires automatisés",
      "Réseaux de distribution villageois",
    ],
    image: "https://images.unsplash.com/photo-1594818345462-1c6f47721869?w=800&q=80",
  },
  {
    id: "agro-processing",
    icon: Leaf,
    title: "Agro-transformation & Séchage",
    subtitle: "Valorisation & Préservation des récoltes",
    description: "Séchoirs solaires et unités de transformation pour valoriser les cultures localement, limiter les pertes et augmenter les revenus des producteurs.",
    features: [
      "Séchoirs solaires à tunnel",
      "Systèmes de séchage hybrides avancés",
      "Unités de broyage et de transformation",
      "Équipements de conditionnement",
    ],
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  },
  {
    id: "clean-water",
    icon: GlassWater,
    title: "Stations d'eau potable",
    subtitle: "Purification & Distribution d'eau",
    description: "Systèmes de filtration solaires intégrant des technologies UV, membranaires et d'osmose inverse pour garantir l'accès à une eau potable de qualité.",
    features: [
      "Systèmes de désinfection UV",
      "Unités d'osmose inverse conteneurisées",
      "Kiosques à eau avec paiement électronique",
      "Stations de traitement mobiles",
    ],
    image: "https://images.unsplash.com/photo-1518556855110-63ce643cefc1?w=800&q=80",
  },
  {
    id: "commercial-solar",
    icon: Factory,
    title: "Solaire industriel & commercial",
    subtitle: "Énergie pour entreprises & industries",
    description: "Systèmes hybrides solaires + batteries + réseau/générateur pour usines, hôtels, cliniques et mines visant la réduction des coûts et la continuité de service.",
    features: [
      "Installations en toiture et au sol",
      "Intégration de stockage par batterie stationnaire",
      "Systèmes connectés réseau avec secours (Backup)",
      "Optimisation de la pointe de consommation (Peak shaving)",
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
];

const Solutions = () => {
  usePageMeta(
    "Nos Solutions — Mini-réseaux solaires, Eau potable, Chaîne du froid | SkillWatts",
    "Mini-réseaux solaires, pompage de l'eau, stations d'eau potable, chaîne du froid, agro-transformation et solaire industriel : les solutions d'infrastructure SkillWatts pour l'Afrique."
  );

  return (
    <>
      <Header />
      <main className="relative z-10">
        {/* Hero */}
        <section className="pt-40 pb-20 relative overflow-hidden bg-transparent">
          <div className="container-premium relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-plasma animate-pulse" />
                <span className="text-xs font-mono tracking-widest text-white/80 uppercase">Spécifications techniques</span>
              </div>
              <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-6 leading-[1.05]">
                Systèmes <br />
                <span className="text-white/50">d'Infrastructure.</span>
              </h1>
              <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                De l'énergie solaire à l'eau potable, nous concevons des solutions intégrées répondant aux besoins d'infrastructures les plus critiques de l'Afrique.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions List */}
        <section className="py-20 bg-transparent">
          <div className="container-premium">
            <div className="space-y-32">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  id={solution.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`grid lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/5 bg-[#050505]">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-full object-cover opacity-90 filter saturate-75 hover:saturate-100 hover:opacity-100 transition-all duration-700"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex items-center justify-center">
                      <solution.icon className="w-8 h-8 text-plasma" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <span className="text-plasma font-mono text-sm uppercase tracking-widest">
                      {solution.subtitle}
                    </span>
                    <h2 className="text-4xl md:text-5xl text-white font-bold tracking-tighter mt-3 mb-6">{solution.title}</h2>
                    <p className="text-white/70 text-lg mb-8 leading-relaxed">
                      {solution.description}
                    </p>

                    <ul className="space-y-4 mb-10">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-white/70">
                          <CheckCircle className="w-5 h-5 text-plasma shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform"
                    >
                      Demander une étude
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-transparent relative">
          <div className="absolute inset-0 bg-plasma/5 blur-[120px] pointer-events-none" />
          <div className="container-premium text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl text-white font-bold tracking-tighter mb-6">Besoin d'une solution sur mesure ?</h2>
              <p className="text-white/70 text-xl mb-12 max-w-2xl mx-auto">
                Chaque projet est unique. Contactez-nous pour discuter de vos exigences spécifiques afin de concevoir votre solution sur mesure.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform"
              >
                Demander une proposition technique
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Solutions;
