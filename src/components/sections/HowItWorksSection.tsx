import { motion } from "framer-motion";
import { Search, PenTool, Wallet, Hammer, Settings } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Project Assessment",
    description: "Site analysis, energy/water needs, feasibility study and demand mapping.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "System Design",
    description: "Solar, storage, water and processing systems tailored to each project's specific requirements.",
  },
  {
    icon: Wallet,
    number: "03",
    title: "Financing & Structuring",
    description: "Pay-as-you-go, donor funding, public-private partnerships, or commercial models.",
  },
  {
    icon: Hammer,
    number: "04",
    title: "Deployment",
    description: "Local assembly, installation, and commissioning with African workforce.",
  },
  {
    icon: Settings,
    number: "05",
    title: "Operation & Maintenance",
    description: "Monitoring, servicing and performance guarantees for long-term success.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-background">
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
            Our Process
          </span>
          <h2 className="text-foreground mb-4">
            How SkillWatts Works
          </h2>
          <p className="text-lead max-w-2xl mx-auto">
            We manage the full project lifecycle from assessment to long-term operations.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className={`lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center ${
                  index % 2 === 0 ? "" : "lg:direction-rtl"
                }`}
              >
                <div
                  className={`p-6 rounded-2xl bg-card border border-border shadow-sm ${
                    index % 2 === 0 ? "lg:text-right" : "lg:order-1"
                  }`}
                >
                  <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? "lg:justify-end lg:flex-row-reverse" : ""}`}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Center dot for desktop */}
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/30" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
