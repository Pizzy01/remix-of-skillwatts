import { Mail, MapPin, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  solutions: [
    { label: "Mini-réseaux solaires", href: "/solutions#mini-grids" },
    { label: "Chaîne du froid", href: "/solutions#cold-chain" },
    { label: "Pompage solaire", href: "/solutions#water-pumping" },
    { label: "Eau potable", href: "/solutions#clean-water" },
    { label: "Solaire commercial", href: "/solutions#commercial-solar" },
  ],
  clients: [
    { label: "Gouvernements", href: "/who-we-serve#governments" },
    { label: "ONG & Bailleurs", href: "/who-we-serve#ngos" },
    { label: "Agro-industries", href: "/who-we-serve#agribusiness" },
    { label: "Industries & Mines", href: "/who-we-serve#industrial" },
    { label: "Communautés", href: "/who-we-serve#communities" },
  ],
  company: [
    { label: "À propos", href: "/#about" },
    { label: "Contact", href: "/contact" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-transparent border-t border-white/5 relative z-10">
      <div className="container-premium py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="font-bold text-black text-xl tracking-tighter leading-none">S</span>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">SkillWatts.</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              Nous concevons et exploitons des systèmes d'énergie solaire, d'eau potable, de chaîne du froid et d'énergie industrielle adaptés aux réalités africaines.
            </p>
            <div className="space-y-3">
              <a href="mailto:projects@skillwatts.com" className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors">
                <Mail className="w-4 h-4" />projects@skillwatts.com
              </a>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4" />Niamey, Niger — Quartier Tchangarey
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono text-white/50 uppercase tracking-widest mb-6">Expertises</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}><Link to={link.href} className="text-white/60 hover:text-white text-sm transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono text-white/50 uppercase tracking-widest mb-6">Clients</h4>
            <ul className="space-y-3">
              {footerLinks.clients.map((link) => (
                <li key={link.label}><Link to={link.href} className="text-white/60 hover:text-white text-sm transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono text-white/50 uppercase tracking-widest mb-6">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}><Link to={link.href} className="text-white/60 hover:text-white text-sm transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm font-mono">© {new Date().getFullYear()} SkillWatts. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 text-white/50 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="p-2 text-white/50 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
