import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, CheckCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useToast } from "@/hooks/use-toast";
import { usePageMeta } from "@/hooks/use-page-meta";

const projectTypes = ["Études & ingénierie","Supervision & contrôle de chantier","Conseil & innovation","Formation & renforcement de capacités","Mini-réseau solaire","Pompage / traitement de l'eau","Agro-transformation","Autre"];

const Contact = () => {
  usePageMeta(
    "Contact — Lancez votre projet | SkillWatts",
    "Décrivez votre projet d'énergie ou d'infrastructure : SkillWatts analyse vos besoins et propose la solution technique et le modèle de financement adaptés. Réponse sous 48 h."
  );

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ organization: "", country: "", projectType: "", size: "", budget: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = `Demande de projet — ${formData.projectType || "Général"} (${formData.organization})`;
    const body = [
      `Organisation : ${formData.organization}`,
      `Pays : ${formData.country}`,
      `Type de projet : ${formData.projectType}`,
      formData.size && `Taille du projet : ${formData.size}`,
      formData.budget && `Budget estimé : ${formData.budget}`,
      `Email de contact : ${formData.email}`,
      "",
      "Description :",
      formData.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:projects@skillwatts.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    toast({ title: "Votre messagerie va s'ouvrir", description: "Vérifiez le contenu puis envoyez l'email — nous vous répondons sous 48 heures." });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass = "w-full px-5 py-4 rounded-2xl border border-white/10 bg-white/[0.03] text-white backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-plasma/50 focus:border-plasma/30 transition-all placeholder:text-white/30";

  return (
    <>
      <Header />
      <main className="relative z-10">
        <section className="pt-40 pb-20 relative overflow-hidden bg-transparent">
          <div className="container-premium relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-reactor animate-pulse" />
                <span className="text-xs font-mono tracking-widest text-white/80 uppercase">Deploy</span>
              </div>
              <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-6 leading-[1.05]">Lancez votre <br /><span className="text-white/30">projet.</span></h1>
              <p className="text-xl text-white/70 max-w-2xl leading-relaxed">Décrivez-nous vos besoins en infrastructure. Nous analysons votre projet et proposons la solution technique et le modèle de financement adaptés.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-transparent">
          <div className="container-premium">
            <div className="grid lg:grid-cols-5 gap-16">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-3">
                <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl">
                  <h2 className="text-2xl font-bold text-white tracking-tight mb-8">Soumettre votre projet</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-3">Organisation *</label>
                        <input type="text" name="organization" value={formData.organization} onChange={handleChange} required className={inputClass} placeholder="Votre organisation" />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-3">Pays *</label>
                        <input type="text" name="country" value={formData.country} onChange={handleChange} required className={inputClass} placeholder="Pays du projet" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-3">Type de projet *</label>
                      <select name="projectType" value={formData.projectType} onChange={handleChange} required className={inputClass}>
                        <option value="">Sélectionnez un type de projet</option>
                        {projectTypes.map((type) => (<option key={type} value={type}>{type}</option>))}
                      </select>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-3">Taille du projet</label>
                        <input type="text" name="size" value={formData.size} onChange={handleChange} className={inputClass} placeholder="ex. : 50 kW, 1 000 ménages" />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-3">Budget estimé</label>
                        <input type="text" name="budget" value={formData.budget} onChange={handleChange} className={inputClass} placeholder="ex. : 50 – 300 millions FCFA" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-3">Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="votre@email.com" />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-white/60 uppercase tracking-widest mb-3">Description du projet</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className={`${inputClass} resize-none`} placeholder="Décrivez vos besoins..." />
                    </div>
                    <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 px-8 py-5 bg-white text-black font-semibold rounded-full hover:scale-[1.02] transition-transform disabled:opacity-50">
                      {isSubmitting ? "Envoi en cours..." : (<>Envoyer votre projet<ArrowRight className="w-4 h-4" /></>)}
                    </button>
                  </form>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="lg:col-span-2">
                <div className="space-y-10">
                  <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl">
                    <h3 className="text-lg font-bold text-white tracking-tight mb-6">Et ensuite ?</h3>
                    <ul className="space-y-5">
                      {["Examen de votre projet sous 48 heures","Premier échange pour comprendre vos besoins","Visite de site et étude de faisabilité","Proposition technique et financière détaillée"].map((step, index) => (
                        <li key={step} className="flex items-start gap-3">
                          <div className="w-7 h-7 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-mono text-plasma">{index + 1}</span>
                          </div>
                          <span className="text-white/70 text-sm">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl">
                    <h3 className="text-lg font-bold text-white tracking-tight mb-6">Contact direct</h3>
                    <div className="space-y-4">
                      <a href="mailto:projects@skillwatts.com" className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors"><div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center"><Mail className="w-4 h-4 text-plasma" /></div>projects@skillwatts.com</a>
                      <div className="flex items-center gap-3 text-white/70 text-sm"><div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center"><MapPin className="w-4 h-4 text-fusion" /></div>Niamey, Niger</div>
                    </div>
                  </div>

                  <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl">
                    <h3 className="text-lg font-bold text-white tracking-tight mb-6">Pourquoi SkillWatts ?</h3>
                    <ul className="space-y-3">
                      {["Expertise d'ingénierie locale et internationale","Gestion complète du cycle de vie des projets","Montages financiers flexibles","Accompagnement et maintenance à long terme"].map((b) => (
                        <li key={b} className="flex items-center gap-2 text-white/70 text-sm"><CheckCircle className="w-4 h-4 text-reactor shrink-0" />{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
