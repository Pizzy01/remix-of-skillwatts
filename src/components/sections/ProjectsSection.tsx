import { motion } from "framer-motion";
import { MapPin, Zap, Calendar } from "lucide-react";

// NOTE : section non affichée pour l'instant — à activer quand SkillWatts aura
// des références projets réelles à présenter. Ne jamais publier de projets fictifs.
const projects: {
  title: string;
  location: string;
  capacity: string;
  year: string;
  type: string;
  image: string;
  description: string;
}[] = [];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-background">
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
            Our Projects
          </span>
          <h2 className="mb-6">
            Delivering <span className="text-primary">Impact</span> Across Africa
          </h2>
          <p className="text-lead max-w-2xl mx-auto">
            Explore our portfolio of successful renewable energy projects 
            spanning multiple countries and technologies.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card-premium group overflow-hidden"
            >
              {/* Image with overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
                
                {/* Type badge */}
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold bg-white/90 text-slate-900 rounded-full">
                  {project.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Meta info */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-primary" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-primary" />
                    {project.capacity}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-primary" />
                    {project.year}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
