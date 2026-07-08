import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useContent } from "@/contexts/ContentContext";

export const HomeCTASection = () => {
  const { content } = useContent();
  const data = content.cta;

  return (
    <section className="py-40 bg-transparent relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-plasma/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container-premium relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl text-white font-bold tracking-tighter mb-8">{data.title}</h2>
          <p className="text-xl text-white/70 mb-14 max-w-2xl mx-auto leading-relaxed">{data.subtitle}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform"
            >
              {data.ctaPrimary}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white/[0.03] text-white font-medium rounded-full border border-white/10 backdrop-blur-xl hover:bg-white/[0.08] transition-all"
            >
              <Phone className="w-5 h-5 text-plasma" />
              {data.ctaSecondary}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
