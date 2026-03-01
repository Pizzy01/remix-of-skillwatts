import { motion } from "framer-motion";
import { Sun, Thermometer, Droplets, Leaf, GlassWater, Factory, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const solutions = [
  {
    id: "mini-grids",
    icon: Sun,
    title: "Solar Mini-Grids",
    subtitle: "Village & Industrial Electrification",
    description: "Solar and hybrid power plants for villages, towns and industrial zones. Used for electrification, businesses, health centers and public services.",
    features: [
      "Containerized solar + battery systems",
      "Hybrid solar-diesel configurations",
      "Smart metering and pay-as-you-go",
      "Grid-forming inverter technology",
    ],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
  },
  {
    id: "cold-chain",
    icon: Thermometer,
    title: "Cold Storage & Cold Chain",
    subtitle: "Agricultural & Medical Cold Chain",
    description: "Solar-powered cold rooms and refrigerated containers for fruits, vegetables, meat, fish and vaccines. Essential for reducing post-harvest losses.",
    features: [
      "Solar cold rooms (5-100 tons)",
      "Refrigerated containers",
      "Walk-in freezers for fish & meat",
      "Vaccine storage for health centers",
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    id: "water-pumping",
    icon: Droplets,
    title: "Solar Water Pumping & Irrigation",
    subtitle: "Agriculture & Drinking Water",
    description: "Solar pumps for farms, drinking water, livestock and irrigation. Reliable water access without diesel dependency.",
    features: [
      "Submersible and surface pumps",
      "Drip and sprinkler irrigation",
      "Livestock watering systems",
      "Village water supply",
    ],
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  },
  {
    id: "agro-processing",
    icon: Leaf,
    title: "Agro Processing & Solar Drying",
    subtitle: "Value Addition & Preservation",
    description: "Solar dryers and processing units to transform crops into high-value products and reduce post-harvest losses.",
    features: [
      "Solar tunnel dryers",
      "Hybrid drying systems",
      "Milling and processing units",
      "Packaging facilities",
    ],
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  },
  {
    id: "clean-water",
    icon: GlassWater,
    title: "Clean Water Stations",
    subtitle: "Water Purification & Distribution",
    description: "Solar-powered filtration systems including UV, membrane, and reverse osmosis technology for safe drinking water.",
    features: [
      "UV disinfection systems",
      "Reverse osmosis plants",
      "Water kiosks with metering",
      "Containerized water stations",
    ],
    image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=800&q=80",
  },
  {
    id: "commercial-solar",
    icon: Factory,
    title: "Industrial & Commercial Solar",
    subtitle: "Business & Industrial Power",
    description: "Hybrid solar + battery + grid or diesel systems for factories, hotels, clinics and mines seeking cost reduction and reliability.",
    features: [
      "Rooftop and ground-mount systems",
      "Battery storage integration",
      "Grid-tied with backup",
      "Peak shaving solutions",
    ],
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80",
  },
];

const Solutions = () => {
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
                Our Solutions
              </span>
              <h1 className="text-white mb-6">
                Infrastructure Systems for Africa
              </h1>
              <p className="text-slate-400 text-lg">
                From solar power to clean water, we deliver integrated solutions that address Africa's most critical infrastructure needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions List */}
        <section className="section-padding">
          <div className="container-premium">
            <div className="space-y-24">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  id={solution.id}
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
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <solution.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                      {solution.subtitle}
                    </span>
                    <h2 className="text-foreground mt-2 mb-4">{solution.title}</h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      {solution.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-foreground">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors"
                    >
                      Get a Project Quote
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
              <h2 className="text-white mb-4">Need a Custom Solution?</h2>
              <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                Every project is unique. Contact us to discuss your specific requirements and we'll design a tailored solution.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/25"
              >
                Request a Technical Proposal
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

export default Solutions;
