import { motion } from "framer-motion";

const partners = [
  { name: "World Bank", category: "Development Finance" },
  { name: "African Development Bank", category: "Development Finance" },
  { name: "USAID", category: "International Aid" },
  { name: "GIZ", category: "Technical Cooperation" },
  { name: "IRENA", category: "Renewable Energy" },
  { name: "IFC", category: "Private Sector" },
  { name: "European Union", category: "International Aid" },
  { name: "UNDP", category: "Development" },
];

const testimonials = [
  {
    quote: "SkillWatts' expertise was instrumental in bringing our 50MW solar project to financial close. Their deep understanding of African markets made all the difference.",
    author: "Jean-Pierre Mbeki",
    role: "CEO, SolarAfrica Ltd",
  },
  {
    quote: "The capacity building program developed by SkillWatts has trained over 200 local technicians, creating sustainable employment in our community.",
    author: "Amina Diallo",
    role: "Director, West Africa Energy Authority",
  },
];

export const PartnersSection = () => {
  return (
    <section id="partners" className="section-padding bg-slate-50">
      <div className="container-premium">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Our Partners
          </span>
          <h2 className="mb-6">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-lead max-w-2xl mx-auto">
            We collaborate with leading international organizations, 
            development finance institutions, and governments across Africa.
          </p>
        </motion.div>

        {/* Partners grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="card-premium p-6 text-center hover:border-primary/20"
            >
              <h4 className="font-semibold text-foreground text-sm mb-1">
                {partner.name}
              </h4>
              <p className="text-xs text-muted-foreground">
                {partner.category}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="card-premium p-8"
            >
              <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <footer className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <cite className="font-semibold text-foreground not-italic block">
                    {testimonial.author}
                  </cite>
                  <span className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
