import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import uniandesLogo from "@/assets/uniandes-logo.png";
import gnaLogo from "@/assets/gna-logo.png";
import {
  GraduationCap, Briefcase, Award, ExternalLink,
  FlaskConical, BookOpenCheck, ClipboardList, ChevronRight,
} from "lucide-react";

type TimelineItem =
  | string
  | { text: string; link?: { label: string; url: string } };

interface TimelineEventSection {
  title: string;
  icon: "GraduationCap" | "FlaskConical" | "BookOpenCheck" | "ClipboardList";
  items: TimelineItem[];
  links?: { label: string; url: string }[];
}

interface FeaturedStat {
  value: string;
  label: string;
  tags: string[];
  stats?: { value: string; label: string }[];
}

interface TimelineEvent {
  id: string;
  startDate: string;
  endDate: string;
  type: "education" | "work";
  title: string;
  institution: string;
  location: string;
  shortDescription: string;
  featuredStat: FeaturedStat;
  fullDescription: string[];
  achievements?: string[];
  links?: { label: string; url: string }[];
  logo?: string;
  ranking?: string;
  highlights?: string[];
  sections?: TimelineEventSection[];
}

const SectionIconMap = {
  GraduationCap, FlaskConical, BookOpenCheck, ClipboardList,
} as const;

const events: TimelineEvent[] = [
  {
    id: "professor",
    startDate: "Apr 2025",
    endDate: "Present",
    type: "work",
    title: "Instructor Professor",
    institution: "Universidad de los Andes",
    location: "Department of Biomedical Engineering",
    shortDescription: "Teaching evaluation 4.9/5.0 — among the highest in the Faculty of Engineering. Teaching 5 courses across Artificial Intelligence, Biostatistics, Bionanotechnology, Bioprinting, and Biomaterials. 9 journal publications and 3 book chapters.",
    featuredStat: {
      value: "4.9 / 5.0",
      label: "teaching evaluation — Faculty of Engineering",
      tags: ["Biostatistics", "Modeling", "Artificial Intelligence", "Bionanotechnology"],
      stats: [
        { value: "4.9 / 5.0", label: "Teaching Evaluation" },
        { value: "9", label: "Paper Publications" },
        { value: "3", label: "Book Chapters" },
      ],
    },
    fullDescription: [],
    sections: [
      {
        title: "Courses & Teaching",
        icon: "GraduationCap",
        items: [
          "Design of Experiments & Biostatistics — probability, statistical inference, experimental design; data-driven modeling and machine learning.",
          "Nanoengineering — computational and experimental approaches for nanomaterial synthesis and microfluidic device design (COMSOL + lab validation).",
          "Biomaterials — polymer synthesis, surface functionalization, 3D printing, and simulation of material–tissue interactions.",
          "3D Bioprinting — bioink formulation, extrusion/inkjet/laser printing, CAD, rheological characterization, and multiphysics modeling.",
          "Nanobiotechnology — quantum dots, metallic nanoparticles, liposomes, MOFs; GROMACS molecular dynamics for nanomaterial–biomolecule interactions.",
        ],
      },
      {
        title: "Research Focus",
        icon: "FlaskConical",
        items: [
          "AI & Computational Modeling — Neural network for lipid–protein interaction prediction and early neurodegenerative disease diagnostics.",
          "Nanomaterial Synthesis & Characterization — Iron oxide nanoparticles, MOFs, polymeric nanocarriers, carbon quantum dots; TEM, FTIR, XRD, DLS, magnetometry.",
          "Microfluidic & Multiphysics Simulation — COMSOL-designed lab-on-a-chip devices for particle separation and magnetic nanoparticle manipulation.",
        ],
      },
      {
        title: "Publications & Book Chapters",
        icon: "BookOpenCheck",
        items: [
          {
            text: "Scientific Reports (2025) – Phase-field model for superparamagnetic nanoparticle-accelerated spheroid fusion.",
            link: { label: "View Paper", url: "https://www.nature.com/articles/s41598-025-04495-2" },
          },
          {
            text: "Expert Opinion on Drug Delivery (2025) – Magnetoliposomes for nanomedicine.",
            link: { label: "View Paper", url: "https://doi.org/10.1080/17425247.2025.2506829" },
          },
          {
            text: "RSC Drug Delivery & Biomolecular Technologies (2025) – Nanocarrier design for targeted drug delivery.",
            link: { label: "View Paper", url: "https://doi.org/10.1039/D4BM01361A" },
          },
          {
            text: "Book Chapter (Taylor & Francis, 2025) – Carbon-Based Nanocarriers.",
            link: {
              label: "View Chapter",
              url: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003473183-6/carbon-based-nanocarriers-cristian-rodr%C3%ADguez-paula-guzm%C3%A1n-sastoque-coryna-rodriguez-bazurto-juan-rojas-hern%C3%A1ndez-luis-reyes-juan-cruz",
            },
          },
          {
            text: "Book Chapter (Taylor & Francis, 2025) – Delivery of Nucleic Acids Using Nanocarriers.",
            link: {
              label: "View Chapter",
              url: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003473183-11/delivery-nucleic-acids-using-nanocarriers-paula-guzm%C3%A1n-sastoque-mar%C3%ADa-camila-monsalve-cristian-rodr%C3%ADguez-stiven-castellanos-juan-cruz-luis-reyes",
            },
          },
          {
            text: "Book Chapter (Elsevier, 2025) – Classical and emerging approximations for antimicrobial peptide library screening.",
            link: { label: "View Chapter", url: "https://www.sciencedirect.com/science/article/abs/pii/B9780443153938000099" },
          },
        ],
      },
      {
        title: "Teaching Excellence & Mentoring",
        icon: "ClipboardList",
        items: [
          "Average teaching evaluation: 4.9/5.0, among the highest in the Faculty of Engineering.",
          "Only Instructor Professor in the Biomedical Engineering Department; mentor for undergraduate and master's theses.",
          "Leads interdisciplinary projects combining AI, materials science, microfabrication, and simulation.",
        ],
      },
    ],
    achievements: [
      "Teaching evaluation 4.9/5.0 — among highest in Faculty of Engineering",
      "5 courses taught across AI, biostatistics, nanobiomaterials, bioprinting, and biomaterials",
      "3 book chapters + 3 journal publications in 2025 alone",
    ],
    highlights: [
      "AI-Driven Statistical & Machine Learning",
      "Advanced Nanomaterials & Microfluidics",
      "Multiphysics Modeling & In-Silico Simulation",
    ],
    logo: uniandesLogo,
  },
  {
    id: "gna",
    startDate: "Dec 2023",
    endDate: "Apr 2025",
    type: "work",
    title: "Research Assistant",
    institution: "Grupo de Neurociencias de Antioquia",
    location: "Universidad de Antioquia",
    shortDescription: "Built a neural network predicting lipid–protein interactions for Alzheimer's early diagnosis. 4 peer-reviewed publications in 2024. Synthesized iron oxides, MOFs, and carbon quantum dots.",
    featuredStat: {
      value: "4",
      label: "peer-reviewed publications in 2024",
      tags: ["AI & Deep Learning", "Nanomaterial Synthesis", "COMSOL Simulations"],
    },
    fullDescription: [],
    sections: [
      {
        title: "Overview",
        icon: "GraduationCap",
        items: [
          "Interdisciplinary research at the intersection of nanotechnology, molecular neurobiology, and artificial intelligence.",
          "AI-driven molecular prediction models, nanobiosensor design, nanomaterial synthesis, and computational modeling of nanoscale biomedical systems.",
        ],
      },
      {
        title: "Key Research Focus",
        icon: "FlaskConical",
        items: [
          "AI & Computational Modeling: Designed, trained, and validated a neural network predicting lipid–protein interactions for early diagnosis of neurodegenerative diseases. Integrated in-silico modeling with wet-lab data for explainable AI workflows.",
          "Nanomaterial Synthesis: Synthesized iron oxide nanoparticles (magnetite & maghemite), MOFs, polymeric nanoparticles, and carbon quantum dots (CQDs). TEM, FTIR, XRD, DLS, zeta potential, and VSM magnetometry characterization.",
          "Microfluidic & Multiphysics Simulation: Lab-on-a-chip platforms optimized through COMSOL Multiphysics (laminar flow, diffusion, electromagnetic fields).",
        ],
      },
      {
        title: "Publications",
        icon: "BookOpenCheck",
        items: [
          {
            text: "Frontiers in Bioengineering & Biotechnology (2024) — Redefining vascular repair: PEUU–gelatin electrospun vascular grafts",
            link: { label: "View Paper", url: "https://doi.org/10.3389/fbioe.2024.1369550" },
          },
          {
            text: "Micromachines (2024) — Zweifach–Fung microfluidic device for efficient microparticle separation",
            link: { label: "View Paper", url: "https://doi.org/10.3390/mi15091121" },
          },
          {
            text: "Micromachines (2024) — Magnetic-field-enhanced microfluidic separation for biosensing",
            link: { label: "View Paper", url: "https://doi.org/10.3390/mi15111299" },
          },
          {
            text: "ACS Omega (2024) — Textile systems and coatings for sports use in biomedical devices",
            link: { label: "View Paper", url: "https://doi.org/10.1021/acsomega.4c07266" },
          },
        ],
      },
      {
        title: "Conference Presentations",
        icon: "ClipboardList",
        items: [
          "PPS 2024 (39th International Conference) — Accelerating Tissue Maturation through Magnetized Cell Spheroids (Oral)",
          "Colegio Colombiano de Neurociencias (COLNE) 2025 — Fluorescent Nanoparticles on a Chip for Alzheimer's Early Diagnosis (Oral)",
        ],
      },
    ],
    achievements: [
      "Built neural network predicting lipid–protein interactions for Alzheimer's early diagnosis",
      "4 peer-reviewed publications + 2 international oral presentations",
      "Synthesized & characterized iron oxides, MOFs, carbon quantum dots",
    ],
    highlights: [
      "Artificial Intelligence & Data-Driven Research",
      "Nanomaterial Design & Characterization",
      "CFD & Molecular Dynamics Simulations",
    ],
    links: [{ label: "Visit GNA", url: "https://gna.org.co/neurobiologia-celular-y-molecular/" }],
    logo: gnaLogo,
  },
  {
    id: "master",
    startDate: "2022",
    endDate: "2023",
    type: "education",
    title: "Master's in Biomedical Engineering",
    institution: "Universidad de los Andes",
    location: "Bogotá, Colombia",
    shortDescription: "Graduated with the second-highest GPA in the cohort (4.8/5.0). Thesis published in Scientific Reports — state-of-the-art multiphysics model for cellular spheroid fusion in bioprinting. 4 peer-reviewed publications and 3 international oral presentations at ACS.",
    featuredStat: {
      value: "4.8 / 5.0",
      label: "GPA — 2nd highest in cohort",
      tags: ["Scientific Reports", "4 Publications", "ACS Oral Presentations"],
    },
    fullDescription: [],
    sections: [
      {
        title: "Overview",
        icon: "GraduationCap",
        items: [
          "Graduated with the second-highest GPA of the master's cohort (4.8/5.0), conducting research at the interface of nanomaterials, microfluidics, and artificial intelligence.",
          "Integrated experimental and computational methods to accelerate the development of 3D bioprinted tissue models and low-cost biomedical devices.",
        ],
      },
      {
        title: "Thesis – Multiphysics Modeling of Magnetically Assisted Spheroid Fusion",
        icon: "FlaskConical",
        items: [
          {
            text: "A mathematical phase-field model predicts superparamagnetic nanoparticle-accelerated fusion of HeLa spheroids for field-guided biofabrication (Scientific Reports, 2025)",
            link: { label: "View Paper", url: "https://www.nature.com/articles/s41598-025-04495-2" },
          },
          "Developed a state-of-the-art multiphysics model coupling magnetostatics, fluid dynamics, and cell mechanics (COMSOL Multiphysics) — the first mathematical framework to capture magnetically assisted spheroid fusion for bioprinting. Magnetic actuation reduced fusion time from ~7 days to ~48 h.",
          "Experimental validation via FTIR, zeta potential, TGA, TEM and confocal imaging; Python-based quantitative analysis.",
        ],
      },
      {
        title: "Publications",
        icon: "BookOpenCheck",
        items: [
          {
            text: "Molecules (2022): Study of Spheroids Fusion via Multiphysics Simulations",
            link: { label: "View Paper", url: "https://doi.org/10.3390/molecules27196198" },
          },
          {
            text: "Polymers (2023): Low-Cost Microfluidic Devices for Biomedical Applications",
            link: { label: "View Paper", url: "https://doi.org/10.3390/polym15071742" },
          },
          {
            text: "Frontiers in Bioengineering & Biotechnology (2023): Breaking the Clean Room Barrier",
            link: { label: "View Paper", url: "https://doi.org/10.3389/fbioe.2023.1176557" },
          },
          {
            text: "Education for Chemical Engineers (2022): Critique: Simulation Apps",
            link: { label: "View Paper", url: "https://doi.org/10.1016/j.ece.2022.11.001" },
          },
        ],
      },
      {
        title: "Conferences & Oral Presentations",
        icon: "ClipboardList",
        items: [
          "ACS Fall 2023, Oral Presentation — Low-cost microfluidic device for efficient assembly of cell spheroids.",
          "ACS Fall 2022, Oral Presentation — Design, simulation, and testing of a pinched-flow microfluidic geometry.",
          "2nd International Electronic Conference on Biomolecules (2022) — Poster Presentation.",
        ],
      },
    ],
    achievements: [
      "Thesis published in Scientific Reports (Nature Portfolio) — state-of-the-art model validated against experimental data",
      "Second-highest GPA in cohort — 4.8/5.0",
      "4 peer-reviewed publications + 3 international conference presentations",
    ],
    logo: uniandesLogo,
    ranking: "QS #212",
  },
  {
    id: "admin",
    startDate: "2022",
    endDate: "2023",
    type: "work",
    title: "Administrative Assistant",
    institution: "Universidad de los Andes",
    location: "Faculty of Engineering",
    shortDescription: "Led coordination of Innovation Week — 30+ academic activities, 1,000+ participants. Managed multi-stakeholder communications with companies, high schools, and juries.",
    featuredStat: {
      value: "1,000+",
      label: "participants across Innovation Week",
      tags: ["30+ Activities", "Event Management", "Industry Partnerships"],
    },
    fullDescription: [],
    sections: [
      {
        title: "Administrative & Event Support",
        icon: "ClipboardList",
        items: [
          "Led the full administrative and logistical coordination of the Innovation Week, a multidisciplinary academic event organized by the Faculty of Engineering.",
          "Oversaw the scheduling and organization of more than 30 academic, entrepreneurial, and networking activities, bringing together over 1,000 participants across engineering, design, and business programs.",
          "Managed all logistics, including venue setup, supplier coordination, and event timelines.",
          "Directed communications with companies, high schools, and juries participating in activities such as the Business Breakfast, Directors' Breakfast, and the Shark Tank Uniandino competition.",
        ],
      },
    ],
    achievements: [
      "Led coordination of Innovation Week — 30+ activities, 1,000+ participants",
      "Directed multi-stakeholder communications (companies, high schools, juries)",
      "Managed full event logistics: venue, suppliers, timelines",
    ],
    logo: uniandesLogo,
  },
  {
    id: "bachelor",
    startDate: "2018",
    endDate: "2021",
    type: "education",
    title: "Bachelor of Biomedical Engineering",
    institution: "Universidad de los Andes",
    location: "Bogotá, Colombia",
    shortDescription: "National Government Scholarship (full tuition) for top national university entrance exam performers. Undergraduate research on mathematical modeling of spheroid fusion — published at IEEE. Teaching Assistant for Nanobiotechnology.",
    featuredStat: {
      value: "National Government Scholarship",
      label: "Full-tuition merit scholarship \u00B7 top national university entrance exam scorer",
      tags: ["Full Tuition", "IEEE Publication", "Teaching Assistant"],
    },
    fullDescription: [],
    sections: [
      {
        title: "Admissions & Scholarship",
        icon: "GraduationCap",
        items: [
          "Awarded the \u201CSer Pilo Paga\u201D National Government Scholarship — full-tuition award granted to Colombia\u2019s top-performing students on the national standardized university entrance examinations (2018).",
          "Full-ride funding that enabled completion of the undergraduate program at Universidad de los Andes.",
        ],
      },
      {
        title: "Undergraduate Research",
        icon: "FlaskConical",
        items: [
          {
            text: "Conducted undergraduate research under the supervision of Prof. Juan Carlos Cruz and Prof. Carolina Muñoz on the development of a mathematical model describing cellular spheroid fusion using a viscoelastic framework. Published in IEEE Proceedings (DOI: 10.1109/ICEHTMC52121.2021.9626089).",
            link: { label: "View Paper", url: "https://ieeexplore.ieee.org/abstract/document/9626089" },
          },
        ],
      },
      {
        title: "Teaching Assistance (TA)",
        icon: "BookOpenCheck",
        items: [
          "Teaching Assistant for the course \"Nanobiotechnology in Medical Sciences\" (with Prof. Juan Carlos Cruz).",
          "Prepared lecture materials and problem sets; developed quizzes; graded assignments and exams; held office hours and student support sessions.",
        ],
      },
      {
        title: "Administrative & Event Support",
        icon: "ClipboardList",
        items: [
          "Served as an Administrative and Logistics Assistant for the 2nd International Congress on Biomedical Engineering and Bioengineering (CI-IB&BI 2021).",
          "Coordinated the event program, organized speaker sessions, managed session chairs, and supported logistics and communications.",
        ],
        links: [
          {
            label: "View Conference Proceedings",
            url: "https://ingbiomedica.uniandes.edu.co/sites/default/files/investigacion/Memorias%20CI-IB%26BI%202021.pdf?_t=1707244492",
          },
        ],
      },
    ],
    achievements: [
      "National Government Scholarship — Ser Pilo Paga (2018–2021)",
      "Undergraduate research published at IEEE",
      "Teaching Assistant for Nanobiotechnology in Medical Sciences",
    ],
    highlights: ["Teaching Assistant", "Scholarship Recipient"],
    logo: uniandesLogo,
    ranking: "QS #212",
  },
];

export const AcademicTimeline = () => {
  const [selected, setSelected] = useState<TimelineEvent>(events[0]);
  const [modalOpen, setModalOpen] = useState(false);

  const isEdu = (e: TimelineEvent) => e.type === "education";

  return (
    <section
      id="timeline"
      className="bg-gradient-to-br from-white via-blue-50/30 to-white px-4 sm:px-6 py-12 sm:py-16 relative font-[Roboto,sans-serif] overflow-hidden isolate"
    >
      {/* Background motifs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            opacity: 0.25,
          }}
        />
        <svg className="absolute top-8 right-8 w-72 h-72 opacity-[0.04]" viewBox="0 0 200 200">
          {[40, 100, 160].map((x, i) =>
            [40, 100, 160].map((y, j) => <circle key={`${i}-${j}`} cx={x} cy={y} r="5" fill="#1d4ed8" />)
          )}
          {[40, 100, 160].map((x, i) =>
            [40, 100, 160].map((y, j) => j < 2 && (
              <line key={`l-${i}-${j}`} x1={x} y1={y} x2={x} y2={y + 60} stroke="#1d4ed8" strokeWidth="1" />
            ))
          )}
          {[40, 100].map((x, i) =>
            [40, 100, 160].map((y, j) => (
              <line key={`h-${i}-${j}`} x1={x} y1={y} x2={x + 60} y2={y} stroke="#0891b2" strokeWidth="1" />
            ))
          )}
        </svg>
        <svg className="absolute bottom-12 left-8 w-48 h-48 opacity-[0.04]" viewBox="0 0 120 80">
          {[10, 22, 38, 54, 65, 72].map((h, i) => (
            <rect key={i} x={i * 18 + 4} y={80 - h} width="12" height={h} fill="#1d4ed8" rx="2" />
          ))}
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="inline-block h-1 w-10 rounded-full" style={{ background: "linear-gradient(to right, #1d4ed8, #0891b2)" }} />
            <span className="text-[11px] font-bold text-blue-700 uppercase tracking-widest">Career</span>
            <span className="inline-block h-1 w-10 rounded-full" style={{ background: "linear-gradient(to left, #1d4ed8, #0891b2)" }} />
          </div>
          <h2
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
            className="font-black text-slate-900 tracking-tight leading-tight mb-3"
          >
            The journey behind the data
          </h2>
          <p className="text-[15px] text-slate-500 max-w-2xl mx-auto">
            From scholarship to research to the classroom — building the skills to turn data into patterns, insight, and better decisions.
          </p>
        </div>

        {/* Split panel */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">

          {/* ── Left: navigation list ── */}
          <div className="lg:w-72 xl:w-80 flex-shrink-0 flex flex-col gap-2">
            {events.map((event) => {
              const active = selected.id === event.id;
              const edu = isEdu(event);
              return (
                <button
                  key={event.id}
                  onClick={() => setSelected(event)}
                  className={`w-full flex items-start gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-200 group ${
                    active
                      ? "bg-slate-800 shadow-md"
                      : "bg-white border border-slate-100 hover:border-slate-200 hover:shadow-sm"
                  }`}
                  aria-label={`Select ${event.title}`}
                >
                  {/* dot / icon */}
                  <div
                    className={`mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      active
                        ? edu
                          ? "bg-blue-500/20"
                          : "bg-amber-400/20"
                        : edu
                        ? "bg-blue-50"
                        : "bg-amber-50"
                    }`}
                  >
                    {edu
                      ? <GraduationCap className={`w-4 h-4 ${active ? "text-blue-300" : "text-blue-500"}`} />
                      : <Briefcase className={`w-4 h-4 ${active ? "text-amber-300" : "text-amber-500"}`} />
                    }
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className={`text-[11px] font-semibold mb-0.5 ${active ? "text-slate-400" : "text-slate-400"}`}>
                      {event.startDate} – {event.endDate}
                      {event.ranking && (
                        <span className={`ml-1.5 ${active ? "text-amber-300" : "text-amber-500"}`}>· {event.ranking}</span>
                      )}
                    </p>
                    <p className={`text-sm font-bold leading-snug ${active ? "text-white" : "text-slate-800"}`}>
                      {event.title}
                    </p>
                    <p className={`text-xs truncate mt-0.5 ${active ? "text-slate-400" : "text-slate-500"}`}>
                      {event.institution}
                    </p>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 flex-shrink-0 mt-1 transition-opacity ${
                      active ? "text-slate-400 opacity-100" : "text-slate-300 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* ── Right: detail panel ── */}
          <div className="flex-1 bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
            {/* Top accent bar */}
            <div
              className={`h-1 w-full ${
                isEdu(selected)
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500"
                  : "bg-gradient-to-r from-amber-400 to-orange-400"
              }`}
            />

            <div className="p-6 sm:p-8">
              {/* Header row */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <Badge
                      className={`text-xs font-semibold px-3 py-1 ${
                        isEdu(selected)
                          ? "bg-slate-800 text-white"
                          : "bg-slate-800 text-white"
                      }`}
                    >
                      {selected.startDate} – {selected.endDate}
                    </Badge>
                    <Badge variant="outline" className="text-xs font-medium">
                      {isEdu(selected) ? "Education" : "Work"}
                    </Badge>
                    {selected.ranking && (
                      <Badge className="text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                        <Award className="w-2.5 h-2.5 mr-1 inline-block" />
                        {selected.ranking}
                      </Badge>
                    )}
                  </div>
                  <h3
                    className={`text-xl sm:text-2xl font-black leading-tight mb-1 ${
                      isEdu(selected) ? "text-blue-700" : "text-amber-600"
                    }`}
                  >
                    {selected.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium">{selected.institution}</p>
                  <p className="text-xs text-slate-400">{selected.location}</p>
                </div>
                {selected.logo && (
                  <img
                    src={selected.logo}
                    alt={`${selected.institution} logo`}
                    className="h-12 w-12 object-contain flex-shrink-0 opacity-85"
                  />
                )}
              </div>

              {/* Featured stat card */}
              <div className="bg-slate-50 rounded-xl p-5 mb-5">
                {selected.featuredStat.stats ? (
                  /* Multi-stat grid */
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {selected.featuredStat.stats.map((s, i) => (
                      <div key={i} className="text-center">
                        <p
                          className={`text-xl sm:text-2xl font-black leading-none mb-1 ${
                            isEdu(selected) ? "text-blue-700" : "text-amber-500"
                          }`}
                        >
                          {s.value}
                        </p>
                        <p className="text-[11px] text-slate-500 leading-tight">{s.label}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Single stat */
                  <>
                    <p
                      className={`text-3xl sm:text-4xl font-black leading-none mb-1 ${
                        isEdu(selected) ? "text-blue-700" : "text-amber-500"
                      }`}
                    >
                      {selected.featuredStat.value}
                    </p>
                    <p className="text-sm text-slate-500 mb-3">{selected.featuredStat.label}</p>
                  </>
                )}
                <div className="flex flex-wrap gap-2 mt-3">
                  {selected.featuredStat.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                        isEdu(selected)
                          ? "border-blue-200 text-blue-700 bg-blue-50"
                          : "border-amber-200 text-amber-700 bg-amber-50"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Short description */}
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {selected.shortDescription}
              </p>

              {/* Footer row */}
              <div className="flex items-center gap-3 flex-wrap">
                <Button
                  onClick={() => setModalOpen(true)}
                  variant="outline"
                  size="sm"
                  className="gap-2 h-9 text-sm font-medium border-slate-200 hover:border-slate-300"
                  aria-label={`View full details for ${selected.title}`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Full Details
                </Button>
                {selected.links?.map((lnk, i) => (
                  <a
                    key={i}
                    href={lnk.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:underline font-medium"
                  >
                    {lnk.label}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full detail modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-background/95 backdrop:bg-black/60">
          <DialogHeader>
            <div className="flex items-start gap-3 sm:gap-4 mb-3">
              {selected.logo && (
                <img
                  src={selected.logo}
                  alt={`${selected.institution} logo`}
                  className="h-12 w-12 sm:h-16 sm:w-16 object-contain flex-shrink-0"
                />
              )}
              <div className="flex-1 min-w-0">
                <Badge
                  className={`mb-2 text-xs sm:text-sm ${
                    isEdu(selected)
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                      : "bg-gradient-to-r from-amber-400 to-orange-400 text-white"
                  }`}
                >
                  {selected.startDate} – {selected.endDate}
                  {selected.ranking && (
                    <span className="ml-2 inline-flex items-center">
                      <Award className="w-3 h-3 mr-1" />
                      {selected.ranking}
                    </span>
                  )}
                </Badge>
                <DialogTitle className="text-xl sm:text-2xl font-bold text-slate-900 mb-1 leading-tight">
                  {selected.title}
                </DialogTitle>
                <p className="text-sm sm:text-base font-semibold text-slate-700">{selected.institution}</p>
                <p className="text-xs sm:text-sm text-slate-500">{selected.location}</p>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            {selected.sections?.map((sec, i) => {
              const IconCmp = SectionIconMap[sec.icon];
              return (
                <div key={i} className={i > 0 ? "border-t border-slate-100 pt-6" : ""}>
                  <h4 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-3">
                    <IconCmp className="w-4 h-4 text-blue-600" />
                    {sec.title}
                  </h4>
                  <ul className="space-y-2">
                    {sec.items.map((it, idx) => {
                      const isRich = typeof it !== "string";
                      const text = isRich ? it.text : it;
                      const link = isRich && it.link ? it.link : undefined;
                      return (
                        <li key={idx} className="flex items-start justify-between gap-3 text-sm text-slate-700">
                          <div className="flex items-start gap-2.5">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" aria-hidden="true" />
                            <span>{text}</span>
                          </div>
                          {link && (
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-blue-200 text-blue-600 hover:bg-blue-50 text-xs font-medium transition flex-shrink-0"
                            >
                              {link.label}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                  {sec.links?.length ? (
                    <div className="flex flex-wrap gap-3 mt-4">
                      {sec.links.map((lnk, j) => (
                        <a
                          key={j}
                          href={lnk.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline font-medium"
                        >
                          {lnk.label}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}

            {selected.highlights?.length ? (
              <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-6">
                {selected.highlights.map((h, i) => (
                  <Badge key={i} variant="secondary" className="text-sm py-1 px-3">{h}</Badge>
                ))}
              </div>
            ) : null}

            {selected.links?.length ? (
              <div className="flex flex-wrap gap-3 border-t border-slate-100 pt-6">
                {selected.links.map((lnk, i) => (
                  <a
                    key={i}
                    href={lnk.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline font-medium"
                  >
                    {lnk.label}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
