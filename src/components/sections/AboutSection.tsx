import { motion } from "framer-motion";
import { Target, Eye, Award, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To accelerate Africa's energy transition through expert consulting, innovative solutions, and sustainable capacity building.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "A continent powered by clean, reliable, and affordable energy, driving sustainable economic growth for all.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We deliver world-class solutions tailored to Africa's unique context, setting new standards in energy consulting.",
  },
  {
    icon: Users,
    title: "Local Impact",
    description: "We prioritize local expertise development, ensuring lasting positive impact in the communities we serve.",
  },
];

const team = [
  { name: "Dr. Amadou Diop", role: "Founder & CEO", expertise: "20+ years in African energy" },
  { name: "Fatima Al-Hassan", role: "Technical Director", expertise: "Renewable systems expert" },
  { name: "Pierre Ndayisaba", role: "Head of Projects", expertise: "Large-scale project delivery" },
  { name: "Sarah Okonkwo", role: "Market Lead", expertise: "Energy policy & regulation" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-slate-50">
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
            About SkillWatts
          </span>
          <h2 className="mb-6">
            Powering Africa's <span className="text-primary">Future</span>
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            Founded in Niamey, SkillWatts brings together Africa's brightest energy
            experts with a shared mission: making clean energy accessible,
            affordable, and sustainable across the continent.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Team section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-2">
            Leadership Team
          </h3>
          <p className="text-muted-foreground">
            Experienced professionals driving Africa's energy transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card-premium p-6 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h4 className="font-semibold text-foreground mb-1">
                {member.name}
              </h4>
              <p className="text-sm text-primary font-medium mb-2">
                {member.role}
              </p>
              <p className="text-xs text-muted-foreground">
                {member.expertise}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
