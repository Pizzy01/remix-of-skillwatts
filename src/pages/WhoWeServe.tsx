import { motion } from "framer-motion";
import { Building2, Heart, Wheat, Store, Factory, Users, GraduationCap, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const clientTypes = [
  { id: "governments", icon: Building2, title: "Gouvernements & Services publics", description: "Nous collaborons avec les gouvernements nationaux et locaux pour déployer des infrastructures publiques qui améliorent concrètement la qualité de vie des populations.", applications: ["Programmes d'électrification rurale", "Réseaux d'adduction d'eau potable", "Alimentation des hôpitaux et centres de santé", "Électrification des écoles", "Éclairage public solaire", "Périmètres irrigués villageois"], models: ["Marchés publics (Appels d'offres)", "Partenariats Public-Privé (PPP)", "Financements concessionnels"] },
  { id: "ngos", icon: Heart, title: "ONG & Partenaires de développement", description: "Nous travaillons avec les organisations humanitaires et de développement pour sécuriser et fiabiliser les infrastructures énergétiques de leurs projets sur le terrain.", applications: ["Électrification de camps de réfugiés", "Chaînes du froid pour la sécurité alimentaire", "Stations d'eau potable et assainissement", "Programmes de résilience climatique", "Initiatives de développement rural", "Énergie d'urgence pour cliniques mobiles"], models: ["Projets financés par subventions", "Co-financements de bailleurs de fonds", "Projets d'impact social direct"] },
  { id: "agribusiness", icon: Wheat, title: "Coopératives & Agro-industries", description: "Nous aidons les coopératives et les entreprises agricoles à réduire leurs pertes post-récolte, accroître leur productivité et accéder à de nouveaux marchés de valeur.", applications: ["Chambres froides pour produits frais", "Systèmes d'irrigation solaire", "Unités d'agro-transformation connectées", "Séchoirs solaires à grande échelle", "Alimentation électrique de coopératives", "Électrification de domaines agricoles"], models: ["Financement d'actifs (Crédit-bail)", "Location-vente (Lease-to-own)", "Paiement à l'usage (Pay-as-you-go)"] },
  { id: "commercial", icon: Store, title: "Sites commerciaux & PME", description: "Nous fournissons une énergie stable et compétitive aux entreprises pour s'affranchir de la dépendance aux générateurs diesel et des coupures de réseau.", applications: ["Systèmes solaires pour hôtels", "Réfrigération de supermarchés", "Chaîne du froid pour la restauration", "Alimentation de bâtiments tertiaires", "Secours d'énergie pour cliniques privées", "Alimentation d'ateliers et petites usines"], models: ["Financement commercial standard", "Contrats d'achat d'électricité (PPA)", "Achat direct avec garantie de performance"] },
  { id: "industrial", icon: Factory, title: "Industries & Exploitations minières", description: "Nous déployons des solutions solaires hybrides de grande envergure pour les sites industriels et miniers cherchant à réduire leurs OPEX et sécuriser leur approvisionnement.", applications: ["Opérations minières hors réseau", "Usines de fabrication et de transformation", "Plateformes logistiques et entrepôts", "Cimenteries et briqueteries", "Antennes télécoms et pylônes", "Centres de données (Data centers)"], models: ["Construction-Exploitation-Transfert (BOOT)", "Contrats EPC clés en main", "Financements hybrides structurés"] },
  { id: "communities", icon: Users, title: "Communautés & Municipalités", description: "Nous apportons l'électricité, l'eau potable et des solutions énergétiques productives au cœur des communautés rurales pour catalyser le développement économique.", applications: ["Mini-réseaux électriques villageois", "Stations d'eau communautaires", "Stockage frigorifique de marché", "Équipements pour artisans et moulins", "Électrification de foyers et places publiques", "Foyers améliorés et solutions de cuisson"], models: ["Gestion et propriété communautaire", "Abonnement Pay-as-you-go", "Modèles de coopératives locales"] },
  { id: "universities", icon: GraduationCap, title: "Universités & Centres de recherche", description: "Nous concevons des infrastructures énergétiques et des réseaux intelligents pour les campus universitaires et les institutions académiques en Afrique.", applications: ["Centrales solaires de campus", "Backup d'énergie pour laboratoires", "Électrification de résidences étudiantes", "Systèmes de chauffage d'eau solaire", "Systèmes de gestion d'énergie (EMS)", "Centres de recherche de pointe"], models: ["Marchés publics de développement", "Partenariats Public-Privé (PPP)", "Financements par subventions de recherche"] },
];

const WhoWeServe = () => {
  return (
    <>
      <Header />
      <main className="relative z-10">
        <section className="pt-40 pb-20 relative overflow-hidden bg-transparent">
          <div className="container-premium relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-fusion animate-pulse" />
                <span className="text-xs font-mono tracking-widest text-white/80 uppercase">Expertise sectorielle</span>
              </div>
              <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-6 leading-[1.05]">Conçu pour <br /><span className="text-white/50">chaque secteur.</span></h1>
              <p className="text-xl text-white/70 max-w-2xl leading-relaxed">SkillWatts conçoit des modèles techniques et financiers spécifiques pour chaque type de client, garantissant des solutions parfaitement adaptées à vos besoins.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-transparent">
          <div className="container-premium">
            <div className="space-y-32">
              {clientTypes.map((client, index) => (
                <motion.div key={client.id} id={client.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="grid lg:grid-cols-2 gap-16 items-start">
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <h2 className="text-3xl md:text-4xl text-white font-bold tracking-tighter mb-4">{client.title}</h2>
                    <p className="text-white/70 text-lg mb-8 leading-relaxed">{client.description}</p>
                    <div className="mb-8">
                      <h4 className="text-xs font-mono text-white/50 uppercase tracking-widest mb-4">Applications</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {client.applications.map((app) => (
                          <div key={app} className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="w-4 h-4 text-plasma shrink-0" />{app}</div>
                        ))}
                      </div>
                    </div>
                    <div className="mb-10">
                      <h4 className="text-xs font-mono text-white/50 uppercase tracking-widest mb-4">Modèles financiers</h4>
                      <div className="flex flex-wrap gap-2">
                        {client.models.map((model) => (
                          <span key={model} className="px-4 py-1.5 text-xs bg-white/[0.03] text-white/70 rounded-full border border-white/10 backdrop-blur-md">{model}</span>
                        ))}
                      </div>
                    </div>
                    <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform">Discuter de votre projet<ArrowRight className="w-4 h-4" /></Link>
                  </div>
                  <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="w-20 h-20 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex items-center justify-center">
                      <client.icon className="w-9 h-9 text-fusion" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-transparent relative">
          <div className="absolute inset-0 bg-fusion/5 blur-[120px] pointer-events-none" />
          <div className="container-premium text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-4xl md:text-6xl text-white font-bold tracking-tighter mb-6">Un besoin spécifique ?</h2>
              <p className="text-white/70 text-xl mb-12 max-w-2xl mx-auto">Chaque projet est unique. Contactez-nous pour que nous concevions la solution et le modèle de financement adaptés à vos besoins.</p>
              <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform">Lancer la discussion<ArrowRight className="w-5 h-5" /></Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default WhoWeServe;
