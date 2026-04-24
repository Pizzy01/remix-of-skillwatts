import { motion } from "framer-motion";
import { Search, PenTool, Wallet, Hammer, Settings } from "lucide-react";
import { useContent } from "@/contexts/ContentContext";

const STEP_ICONS = [Search, PenTool, Wallet, Hammer, Settings];

export const HowItWorksSection = () => {
  const { content } = useContent();
  const data = content.howItWorks;

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
            {data.badge}
          </span>
          <h2 className="text-foreground mb-4">{data.title}</h2>
          <p className="text-lead max-w-2xl mx-auto">{data.subtitle}</p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />

          <div className="space-y-8 lg:space-y-0">
            {data.steps.map((step, index) => {
              const Icon = STEP_ICONS[index % STEP_ICONS.length];
              return (
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
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>

                  {/* Center dot for desktop */}
                  <div className="hidden lg:flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/30" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
