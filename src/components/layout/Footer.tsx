import { Mail, MapPin, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logoSkillwatts from "@/assets/logo_skillwatts.png";

const footerLinks = {
  solutions: [
    { label: "Solar Mini-Grids", href: "/solutions#mini-grids" },
    { label: "Cold Storage", href: "/solutions#cold-chain" },
    { label: "Water Pumping", href: "/solutions#water-pumping" },
    { label: "Clean Water", href: "/solutions#clean-water" },
    { label: "Commercial Solar", href: "/solutions#commercial-solar" },
  ],
  clients: [
    { label: "Governments", href: "/who-we-serve#governments" },
    { label: "NGOs", href: "/who-we-serve#ngos" },
    { label: "Agribusinesses", href: "/who-we-serve#agribusiness" },
    { label: "Industries", href: "/who-we-serve#industrial" },
    { label: "Communities", href: "/who-we-serve#communities" },
  ],
  company: [
    { label: "About Us", href: "/#about" },
    { label: "Contact", href: "/contact" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      <div className="container-premium py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src={logoSkillwatts} alt="SkillWatts" className="h-9 w-9 rounded-lg object-contain" />
              <span className="text-lg font-bold text-white">
                Skill<span className="text-emerald-400">Watts</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              We build and operate solar, water, cold chain and industrial energy systems adapted to African realities.
            </p>
            <div className="space-y-3">
              <a href="mailto:projects@skillwatts.com" className="flex items-center gap-3 text-slate-400 hover:text-white text-sm transition-colors">
                <Mail className="w-4 h-4" />
                projects@skillwatts.com
              </a>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4" />
                Niamey, Niger
              </div>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Clients</h4>
            <ul className="space-y-3">
              {footerLinks.clients.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} SkillWatts. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 text-slate-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 text-slate-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
