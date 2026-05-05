import { Mail, Linkedin, GraduationCap } from "lucide-react";

const ContactCard = ({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
}) => (
  <a
    href={href}
    target={href.startsWith("mailto") ? undefined : "_blank"}
    rel="noopener noreferrer"
    className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
    aria-label={label}
  >
    <div
      className="w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
      style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #0891b2 100%)" }}
    >
      <Icon className="w-5 h-5 text-white" />
    </div>
    <div className="text-center">
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{label}</p>
      <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700 transition-colors break-all">
        {value}
      </p>
    </div>
  </a>
);

export const Contact = () => {
  return (
    <section className="bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 py-16 sm:py-20">

        {/* ── Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span
              className="inline-block h-1 w-10 rounded-full"
              style={{ background: "linear-gradient(to right, #1d4ed8, #0891b2)" }}
            />
            <span className="text-[11px] font-bold text-blue-700 uppercase tracking-widest">
              Let's Connect
            </span>
            <span
              className="inline-block h-1 w-10 rounded-full"
              style={{ background: "linear-gradient(to left, #1d4ed8, #0891b2)" }}
            />
          </div>
          <h2
            className="font-black text-slate-900 tracking-tight leading-tight mb-4"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
          >
            Shape the future together
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-xl mx-auto">
            If you're working on data-driven biomedical solutions, AI for healthcare,
            or computational modeling — I'd love to collaborate, discuss, or contribute.
            The best insights emerge from conversation.
          </p>
        </div>

        {/* ── Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
          <ContactCard
            icon={Mail}
            label="Email"
            value="cf.rodriguez@uniandes.edu.co"
            href="mailto:cf.rodriguez@uniandes.edu.co"
          />
          <ContactCard
            icon={Linkedin}
            label="LinkedIn"
            value="cristian-felipe-rodriguez"
            href="https://www.linkedin.com/in/cristian-felipe-rodriguez-ospino/"
          />
          <ContactCard
            icon={GraduationCap}
            label="Google Scholar"
            value="scholar.google.com"
            href="https://scholar.google.com/citations?user=ZtjgHeMAAAAJ&hl=en"
          />
        </div>

        {/* ── Footer */}
        <div className="border-t border-slate-100 pt-8 text-center">
          <p className="text-xs text-slate-400">
            © 2025 Cristian F. Rodríguez · Instructor Professor in Biomedical Engineering ·
            Universidad de los Andes
          </p>
        </div>

      </div>
    </section>
  );
};
