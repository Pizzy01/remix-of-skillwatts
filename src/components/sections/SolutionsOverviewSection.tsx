import { motion } from "framer-motion";
import { Sun, Thermometer, Droplets, Leaf, GlassWater, Factory, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    icon: Sun,
    title: "Solar Mini-Grids",
    description: "Electrification of rural and peri-urban areas through containerized or hybrid solar power plants.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
  },
  {
    icon: Thermometer,
    title: "Cold Storage & Cold Chain",
    description: "Solar-powered cold rooms and refrigerated containers for agriculture, fisheries and food markets.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  },
  {
    icon: Droplets,
    title: "Solar Water Pumping & Irrigation",
    description: "Solar pumping systems for farms, villages and agro-industrial sites.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
  },
  {
    icon: Leaf,
    title: "Agro Processing & Solar Drying",
    description: "Solar dryers and agro-processing units to reduce post-harvest losses and increase farmer income.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80",
  },
  {
    icon: GlassWater,
    title: "Clean Water Stations",
    description: "Solar-powered water purification and distribution stations for villages, health centers and cities.",
    image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=600&q=80",
  },
  {
    icon: Factory,
    title: "Industrial & Commercial Solar",
    description: "Hybrid solar + battery systems for hotels, factories, mines, hospitals and commercial buildings.",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80",
  },
];

export const SolutionsOverviewSection = () => {
  return (
    <section id="solutions" className="section-padding bg-background">
      <div className="container-premium">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-4">
            What We Build
          </span>
          <h2 className="text-foreground mb-4">
            Integrated Infrastructure Systems
          </h2>
          <p className="text-lead max-w-2xl mx-auto">
            SkillWatts delivers infrastructure solutions in 6 critical sectors essential for Africa's development.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card-premium group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/90 flex items-center justify-center">
                    <solution.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
          >
            Request a Technical Proposal
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
