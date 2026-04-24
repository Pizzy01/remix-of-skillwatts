import { useState, useEffect, FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useContent } from "@/contexts/ContentContext";
import { ContentKey, SiteContent } from "@/data/defaultContent";
import { Session } from "@supabase/supabase-js";

// ─── Auth guard ──────────────────────────────────────────────────────────────

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-white mb-2">Admin SkillWatts</h1>
        <p className="text-slate-400 text-sm mb-8">Connecte-toi pour modifier le site.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-slate-300 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              placeholder="admin@skillwatts.com"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-white font-semibold rounded-xl transition-colors"
          >
            {loading ? "Connexion…" : "Se connecter"}
          </button>
        </form>
      </div>
    </div>
  );
};

// ─── Reusable field components ────────────────────────────────────────────────

const Field = ({
  label,
  value,
  onChange,
  multiline = false,
  placeholder = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  placeholder?: string;
}) => {
  const base =
    "w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors";
  return (
    <div>
      <label className="block text-xs font-medium text-slate-400 mb-1">{label}</label>
      {multiline ? (
        <textarea
          rows={3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`${base} resize-y`}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={base}
        />
      )}
    </div>
  );
};

const ImageField = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) => (
  <div>
    <label className="block text-xs font-medium text-slate-400 mb-1">{label}</label>
    <input
      type="url"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="https://..."
      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
    />
    {value && (
      <img
        src={value}
        alt="preview"
        className="mt-2 h-32 w-full object-cover rounded-lg border border-slate-700"
      />
    )}
  </div>
);

// ─── Section editors ──────────────────────────────────────────────────────────

const HeroEditor = ({ onSave }: { onSave: (k: ContentKey, v: SiteContent[ContentKey]) => Promise<void> }) => {
  const { content } = useContent();
  const [data, setData] = useState(content.hero);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => { setData(content.hero); }, [content.hero]);

  const set = (field: keyof typeof data, val: unknown) =>
    setData((p) => ({ ...p, [field]: val }));

  const setStat = (i: number, field: "value" | "label", val: string) =>
    setData((p) => {
      const stats = [...p.stats];
      stats[i] = { ...stats[i], [field]: val };
      return { ...p, stats };
    });

  const save = async () => {
    setSaving(true);
    await onSave("hero", data);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-4">
      <Field label="Badge (petite étiquette)" value={data.badge} onChange={(v) => set("badge", v)} />
      <Field label="Titre principal" value={data.title} onChange={(v) => set("title", v)} />
      <Field label="Titre en vert (highlight)" value={data.titleHighlight} onChange={(v) => set("titleHighlight", v)} />
      <Field label="Sous-titre" value={data.subtitle} onChange={(v) => set("subtitle", v)} multiline />
      <Field label="Bouton principal" value={data.ctaPrimary} onChange={(v) => set("ctaPrimary", v)} />
      <Field label="Bouton secondaire" value={data.ctaSecondary} onChange={(v) => set("ctaSecondary", v)} />
      <ImageField label="Image de fond (URL)" value={data.bgImage} onChange={(v) => set("bgImage", v)} />

      <div className="border-t border-slate-700 pt-4">
        <p className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">Statistiques</p>
        {data.stats.map((stat, i) => (
          <div key={i} className="grid grid-cols-2 gap-3 mb-3">
            <Field label={`Stat ${i + 1} — Valeur`} value={stat.value} onChange={(v) => setStat(i, "value", v)} />
            <Field label={`Stat ${i + 1} — Label`} value={stat.label} onChange={(v) => setStat(i, "label", v)} />
          </div>
        ))}
      </div>

      <SaveButton saving={saving} saved={saved} onClick={save} />
    </div>
  );
};

const SolutionsEditor = ({ onSave }: { onSave: (k: ContentKey, v: SiteContent[ContentKey]) => Promise<void> }) => {
  const { content } = useContent();
  const [data, setData] = useState(content.solutions);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => { setData(content.solutions); }, [content.solutions]);

  const setItem = (i: number, field: "title" | "description" | "image", val: string) =>
    setData((p) => {
      const items = [...p.items];
      items[i] = { ...items[i], [field]: val };
      return { ...p, items };
    });

  const save = async () => {
    setSaving(true);
    await onSave("solutions", data);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-4">
      <Field label="Badge" value={data.badge} onChange={(v) => setData((p) => ({ ...p, badge: v }))} />
      <Field label="Titre de section" value={data.title} onChange={(v) => setData((p) => ({ ...p, title: v }))} />
      <Field label="Sous-titre" value={data.subtitle} onChange={(v) => setData((p) => ({ ...p, subtitle: v }))} multiline />
      <Field label="Label du bouton" value={data.ctaLabel} onChange={(v) => setData((p) => ({ ...p, ctaLabel: v }))} />

      <div className="border-t border-slate-700 pt-4 space-y-6">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Cartes solutions</p>
        {data.items.map((item, i) => (
          <div key={i} className="bg-slate-800/50 rounded-xl p-4 space-y-3">
            <p className="text-xs font-bold text-emerald-400">Solution {i + 1}</p>
            <Field label="Titre" value={item.title} onChange={(v) => setItem(i, "title", v)} />
            <Field label="Description" value={item.description} onChange={(v) => setItem(i, "description", v)} multiline />
            <ImageField label="Image (URL)" value={item.image} onChange={(v) => setItem(i, "image", v)} />
          </div>
        ))}
      </div>

      <SaveButton saving={saving} saved={saved} onClick={save} />
    </div>
  );
};

const WhyAfricaEditor = ({ onSave }: { onSave: (k: ContentKey, v: SiteContent[ContentKey]) => Promise<void> }) => {
  const { content } = useContent();
  const [data, setData] = useState(content.whyAfrica);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => { setData(content.whyAfrica); }, [content.whyAfrica]);

  const setChallenge = (i: number, field: "title" | "description", val: string) =>
    setData((p) => {
      const challenges = [...p.challenges];
      challenges[i] = { ...challenges[i], [field]: val };
      return { ...p, challenges };
    });

  const save = async () => {
    setSaving(true);
    await onSave("whyAfrica", data);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-4">
      <Field label="Badge" value={data.badge} onChange={(v) => setData((p) => ({ ...p, badge: v }))} />
      <Field label="Titre" value={data.title} onChange={(v) => setData((p) => ({ ...p, title: v }))} />
      <Field label="Sous-titre" value={data.subtitle} onChange={(v) => setData((p) => ({ ...p, subtitle: v }))} multiline />
      <Field label="Texte bas de section" value={data.bottomText} onChange={(v) => setData((p) => ({ ...p, bottomText: v }))} multiline />

      <div className="border-t border-slate-700 pt-4 space-y-4">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Défis</p>
        {data.challenges.map((c, i) => (
          <div key={i} className="bg-slate-800/50 rounded-xl p-4 space-y-3">
            <p className="text-xs font-bold text-emerald-400">Défi {i + 1}</p>
            <Field label="Titre" value={c.title} onChange={(v) => setChallenge(i, "title", v)} />
            <Field label="Description" value={c.description} onChange={(v) => setChallenge(i, "description", v)} multiline />
          </div>
        ))}
      </div>

      <SaveButton saving={saving} saved={saved} onClick={save} />
    </div>
  );
};

const HowItWorksEditor = ({ onSave }: { onSave: (k: ContentKey, v: SiteContent[ContentKey]) => Promise<void> }) => {
  const { content } = useContent();
  const [data, setData] = useState(content.howItWorks);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => { setData(content.howItWorks); }, [content.howItWorks]);

  const setStep = (i: number, field: "title" | "description", val: string) =>
    setData((p) => {
      const steps = [...p.steps];
      steps[i] = { ...steps[i], [field]: val };
      return { ...p, steps };
    });

  const save = async () => {
    setSaving(true);
    await onSave("howItWorks", data);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-4">
      <Field label="Badge" value={data.badge} onChange={(v) => setData((p) => ({ ...p, badge: v }))} />
      <Field label="Titre" value={data.title} onChange={(v) => setData((p) => ({ ...p, title: v }))} />
      <Field label="Sous-titre" value={data.subtitle} onChange={(v) => setData((p) => ({ ...p, subtitle: v }))} multiline />

      <div className="border-t border-slate-700 pt-4 space-y-4">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Étapes</p>
        {data.steps.map((step, i) => (
          <div key={i} className="bg-slate-800/50 rounded-xl p-4 space-y-3">
            <p className="text-xs font-bold text-emerald-400">Étape {step.number}</p>
            <Field label="Titre" value={step.title} onChange={(v) => setStep(i, "title", v)} />
            <Field label="Description" value={step.description} onChange={(v) => setStep(i, "description", v)} multiline />
          </div>
        ))}
      </div>

      <SaveButton saving={saving} saved={saved} onClick={save} />
    </div>
  );
};

const CTAEditor = ({ onSave }: { onSave: (k: ContentKey, v: SiteContent[ContentKey]) => Promise<void> }) => {
  const { content } = useContent();
  const [data, setData] = useState(content.cta);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => { setData(content.cta); }, [content.cta]);

  const set = (field: keyof typeof data, val: string) =>
    setData((p) => ({ ...p, [field]: val }));

  const save = async () => {
    setSaving(true);
    await onSave("cta", data);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-4">
      <Field label="Titre" value={data.title} onChange={(v) => set("title", v)} />
      <Field label="Sous-titre" value={data.subtitle} onChange={(v) => set("subtitle", v)} multiline />
      <Field label="Bouton principal" value={data.ctaPrimary} onChange={(v) => set("ctaPrimary", v)} />
      <Field label="Bouton secondaire" value={data.ctaSecondary} onChange={(v) => set("ctaSecondary", v)} />
      <SaveButton saving={saving} saved={saved} onClick={save} />
    </div>
  );
};

// ─── Save button ──────────────────────────────────────────────────────────────

const SaveButton = ({
  saving,
  saved,
  onClick,
}: {
  saving: boolean;
  saved: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    disabled={saving}
    className={`w-full py-3 font-semibold rounded-xl transition-colors text-white ${
      saved
        ? "bg-green-600"
        : "bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50"
    }`}
  >
    {saving ? "Sauvegarde…" : saved ? "Sauvegardé ✓" : "Sauvegarder"}
  </button>
);

// ─── Tabs ─────────────────────────────────────────────────────────────────────

const TABS = [
  { id: "hero", label: "Hero" },
  { id: "solutions", label: "Solutions" },
  { id: "why", label: "Pourquoi Afrique" },
  { id: "how", label: "Comment ça marche" },
  { id: "cta", label: "Bouton d'action" },
] as const;

type TabId = (typeof TABS)[number]["id"];

// ─── Main admin page ──────────────────────────────────────────────────────────

const AdminDashboard = ({ onLogout }: { onLogout: () => void }) => {
  const { updateSection } = useContent();
  const [activeTab, setActiveTab] = useState<TabId>("hero");
  const [error, setError] = useState("");

  const save = async (key: ContentKey, value: SiteContent[ContentKey]) => {
    try {
      await updateSection(key, value);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Erreur lors de la sauvegarde");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-sm">SkillWatts — Admin</span>
        </div>
        <button
          onClick={onLogout}
          className="text-xs text-slate-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-slate-800"
        >
          Déconnexion
        </button>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        <p className="text-slate-400 text-sm mb-6">
          Modifie le contenu du site. Les changements sont visibles immédiatement après sauvegarde.
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-950 border border-red-800 rounded-xl text-red-300 text-sm">
            {error}
            <button onClick={() => setError("")} className="ml-2 underline">Fermer</button>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-1 mb-6 overflow-x-auto pb-1">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? "bg-emerald-500 text-white"
                  : "bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          {activeTab === "hero" && <HeroEditor onSave={save} />}
          {activeTab === "solutions" && <SolutionsEditor onSave={save} />}
          {activeTab === "why" && <WhyAfricaEditor onSave={save} />}
          {activeTab === "how" && <HowItWorksEditor onSave={save} />}
          {activeTab === "cta" && <CTAEditor onSave={save} />}
        </div>

        <p className="text-center text-xs text-slate-600 mt-6">
          Les modifications sont sauvegardées dans la base de données et visibles sur le site public.
        </p>
      </div>
    </div>
  );
};

// ─── Page root ────────────────────────────────────────────────────────────────

const Admin = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setChecking(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (checking) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return session ? (
    <AdminDashboard onLogout={handleLogout} />
  ) : (
    <LoginForm />
  );
};

export default Admin;
