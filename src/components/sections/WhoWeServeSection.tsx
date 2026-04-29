import { motion } from "framer-motion";
import { Building2, Heart, Wheat, Store, Factory, Users, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const clientTypes = [
  {
    icon: Building2,
    title: "Governments & Public Utilities",
    description: "Rural electrification, water supply, public lighting, hospitals, schools.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Heart,
    title: "NGOs & Development Partners",
    description: "Humanitarian, food security, water, climate and rural development projects.",
    color: "bg-rose-500/10 text-rose-500",
  },
  {
    icon: Wheat,
    title: "Agribusinesses & Cooperatives",
    description: "Cold storage, irrigation, agro-processing, solar drying for agriculture.",
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    icon: Store,
    title: "SMEs & Commercial Sites",
    description: "Hotels, supermarkets, workshops, clinics, offices requiring reliable power.",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: Factory,
    title: "Industries & Mines",
    description: "Hybrid solar + battery systems for cost reduction and reliability.",
    color: "bg-slate-500/10 text-slate-500",
  },
  {
    icon: Users,
    title: "Communities & Villages",
    description: "Electricity, water and productive energy for rural areas.",
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    icon: GraduationCap,
    title: "Universities",
    description: "Energy infrastructure and solar systems for university campuses and academic institutions.",
    color: "bg-indigo-500/10 text-indigo-500",
  },
];

export const WhoWeServeSection = () => {
  return (
    <section id="clients" className="section-padding bg-slate-50 dark:bg-slate-900/50">
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
            Our Clients
          </span>
          <h2 className="text-foreground mb-4">
            Who We Serve
          </h2>
          <p className="text-lead max-w-2xl mx-auto">
            SkillWatts designs different technical and financial models for each type of client.
          </p>
        </motion.div>

        {/* Client Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientTypes.map((client, index) => (
            <motion.div
              key={client.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl ${client.color} flex items-center justify-center mb-4`}>
                <client.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {client.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {client.description}
              </p>
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
            to="/who-we-serve"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Learn more about how we work with each sector
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
