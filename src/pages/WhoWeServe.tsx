import { motion } from "framer-motion";
import { Building2, Heart, Wheat, Store, Factory, Users, GraduationCap, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const clientTypes = [
  {
    id: "governments",
    icon: Building2,
    title: "Governments & Public Utilities",
    description: "We partner with national and local governments to deliver public infrastructure that improves quality of life.",
    applications: [
      "Rural electrification programs",
      "Public water supply systems",
      "Hospital and health center power",
      "School electrification",
      "Street lighting",
      "Agricultural irrigation schemes",
    ],
    models: ["Public procurement", "PPP models", "Concessional financing"],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
  },
  {
    id: "ngos",
    icon: Heart,
    title: "NGOs & Development Partners",
    description: "We work with humanitarian and development organizations to deliver infrastructure for their projects.",
    applications: [
      "Refugee camp electrification",
      "Food security cold chains",
      "Water and sanitation projects",
      "Climate resilience programs",
      "Rural development initiatives",
      "Disaster response power",
    ],
    models: ["Grant-funded projects", "Donor co-financing", "Impact-focused delivery"],
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
  },
  {
    id: "agribusiness",
    icon: Wheat,
    title: "Agribusinesses & Cooperatives",
    description: "We help agricultural enterprises reduce costs, increase productivity, and access new markets.",
    applications: [
      "Cold storage for produce",
      "Solar irrigation systems",
      "Agro-processing facilities",
      "Solar drying systems",
      "Cooperative power supply",
      "Farm electrification",
    ],
    models: ["Asset financing", "Lease-to-own", "Pay-as-you-go"],
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80",
  },
  {
    id: "commercial",
    icon: Store,
    title: "SMEs & Commercial Sites",
    description: "We provide reliable, cost-effective power for businesses tired of diesel dependency and grid outages.",
    applications: [
      "Hotel solar systems",
      "Supermarket refrigeration",
      "Restaurant cold chain",
      "Office building power",
      "Clinic backup systems",
      "Workshop electrification",
    ],
    models: ["Commercial financing", "Power purchase agreements", "Outright purchase"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: "industrial",
    icon: Factory,
    title: "Industries & Mines",
    description: "We deliver large-scale hybrid power systems for industrial operations seeking cost reduction and reliability.",
    applications: [
      "Mining operations",
      "Manufacturing facilities",
      "Processing plants",
      "Warehousing complexes",
      "Cement factories",
      "Telecom towers",
    ],
    models: ["Build-own-operate", "EPC contracts", "Hybrid financing"],
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80",
  },
  {
    id: "communities",
    icon: Users,
    title: "Communities & Villages",
    description: "We bring electricity, water and productive energy to rural communities, enabling economic opportunity.",
    applications: [
      "Village mini-grids",
      "Community water stations",
      "Market cold storage",
      "Productive use appliances",
      "Community centers",
      "Religious institutions",
    ],
    models: ["Community ownership", "Pay-as-you-go", "Cooperative models"],
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
  },
  {
    id: "universities",
    icon: GraduationCap,
    title: "Universities",
    description: "We provide energy infrastructure solutions for university campuses and academic institutions across Africa.",
    applications: [
      "Campus solar systems",
      "Backup power for labs",
      "Student housing electrification",
      "Solar water heating",
      "Energy management systems",
      "Research facility power",
    ],
    models: ["Public procurement", "PPP models", "Grant financing"],
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
  },
];

const WhoWeServe = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-slate-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 via-slate-950 to-slate-950" />
          <div className="container-premium relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-emerald-400 bg-emerald-400/10 rounded-full mb-4">
                Our Clients
              </span>
              <h1 className="text-white mb-6">
                Who We Serve
              </h1>
              <p className="text-slate-400 text-lg">
                SkillWatts designs different technical and financial models for each type of client, ensuring solutions that match your specific needs and capabilities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Client Types */}
        <section className="section-padding">
          <div className="container-premium">
            <div className="space-y-20">
              {clientTypes.map((client, index) => (
                <motion.div
                  key={client.id}
                  id={client.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={client.image}
                        alt={client.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <client.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <h2 className="text-foreground mb-4">{client.title}</h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      {client.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                        Applications
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {client.applications.map((app) => (
                          <div key={app} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                            {app}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                        Financial Models
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {client.models.map((model) => (
                          <span
                            key={model}
                            className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                          >
                            {model}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors"
                    >
                      Discuss Your Project
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-slate-950">
          <div className="container-premium text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-white mb-4">Not Sure Where You Fit?</h2>
              <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                Every project is unique. Contact us and we'll help you find the right solution and financing model for your needs.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/25"
              >
                Start a Conversation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhoWeServe;
