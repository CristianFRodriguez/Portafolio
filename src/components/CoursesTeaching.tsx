import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import courseBiomaterials from "@/assets/course-biomaterials.png";
import courseBioprinting from "@/assets/course-bioprinting.png";
import courseNanobiotech from "@/assets/course-nanobiotech.png";
import courseBiostatistics from "@/assets/course-biostatistics.png";
import courseNanoengineering from "@/assets/course-nanoengineering.png";

type CourseAccent = "blue" | "violet" | "teal" | "amber" | "rose";

type CourseCard = {
  title: string;
  year: string;
  image: string;
  alt: string;
  description: string;
  tags: string[];
  accent: CourseAccent;
  icon: string;
};

const accentMap: Record<CourseAccent, { border: string; badge: string; tag: string }> = {
  blue:   { border: "border-t-blue-500",   badge: "bg-blue-600",   tag: "bg-blue-50 border-blue-200 text-blue-700" },
  violet: { border: "border-t-violet-500", badge: "bg-violet-600", tag: "bg-violet-50 border-violet-200 text-violet-700" },
  teal:   { border: "border-t-teal-500",   badge: "bg-teal-600",   tag: "bg-teal-50 border-teal-200 text-teal-700" },
  amber:  { border: "border-t-amber-500",  badge: "bg-amber-600",  tag: "bg-amber-50 border-amber-200 text-amber-700" },
  rose:   { border: "border-t-rose-500",   badge: "bg-rose-600",   tag: "bg-rose-50 border-rose-200 text-rose-700" },
};

const courses: CourseCard[] = [
  {
    title: "Biostatistics & Design of Experiments",
    year: "2025",
    image: courseBiostatistics,
    alt: "Biostatistics course - machine learning clustering",
    description: "Probability, statistical inference, and experimental design; data-driven modeling and introductory machine learning applied to biomedical datasets using Python.",
    tags: ["Statistics", "Machine Learning", "Python", "Experimental Design"],
    accent: "blue",
    icon: "📊",
  },
  {
    title: "Biomaterials",
    year: "2025",
    image: courseBiomaterials,
    alt: "Biomaterials course - nanoparticle synthesis and characterization",
    description: "Physical, chemical, and biocompatibility requirements of synthetic and natural biomaterials; polymers, surface functionalization, 3D printing, and simulation of material–tissue interactions.",
    tags: ["Polymers", "3D Printing", "Simulation", "Materials Science"],
    accent: "teal",
    icon: "🧪",
  },
  {
    title: "3D Bioprinting",
    year: "2025",
    image: courseBioprinting,
    alt: "3D Bioprinting course - computational modeling",
    description: "Bioink formulation and printing (extrusion, inkjet, laser) with CAD, rheology, and multiphysics modeling; tissue engineering and in-silico optimization.",
    tags: ["Bioinks", "Rheology", "Tissue Engineering", "Multiphysics"],
    accent: "rose",
    icon: "🖨️",
  },
  {
    title: "Nanobiotechnology",
    year: "2025",
    image: courseNanobiotech,
    alt: "Nanobiotechnology course - paclitaxel nanobioconjugates",
    description: "Quantum dots, metallic nanoparticles, liposomes, polymeric and MOF nanomaterials; GROMACS molecular dynamics to predict nanomaterial–biomolecule interactions with AI-assisted analysis.",
    tags: ["Nanoparticles", "GROMACS", "Molecular Dynamics", "AI"],
    accent: "violet",
    icon: "🔬",
  },
  {
    title: "Nanoengineering",
    year: "2025",
    image: courseNanoengineering,
    alt: "Nanoengineering course - graph neural networks",
    description: "In-silico and experimental approaches for nanomaterial synthesis and microfluidic device design; COMSOL multiphysics modeling with lab validation for biomedical solutions.",
    tags: ["COMSOL", "Microfluidics", "In Silico", "Nanomaterials"],
    accent: "amber",
    icon: "⚙️",
  },
];

export const CoursesTeaching = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-slate-50/60 to-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span
              className="inline-block h-1 w-10 rounded-full"
              style={{ background: "linear-gradient(to right, #1d4ed8, #0891b2)" }}
            />
            <span className="text-[11px] font-bold text-blue-700 uppercase tracking-widest">
              Teaching
            </span>
            <span
              className="inline-block h-1 w-10 rounded-full"
              style={{ background: "linear-gradient(to left, #1d4ed8, #0891b2)" }}
            />
          </div>
          <h2
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
            className="font-black text-slate-900 tracking-tight leading-tight mb-3"
          >
            Training tomorrow's<br className="hidden sm:block" /> data-driven scientists
          </h2>
          <p className="text-[15px] text-slate-500 max-w-2xl mx-auto mb-6">
            Courses built around computational modeling, AI, and experimental validation —
            bridging data science with biomedical innovation at Universidad de los Andes.
          </p>
          {/* Prominent rating */}
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-5 py-3 shadow-sm">
            <div className="text-center">
              <p
                className="font-black leading-none"
                style={{
                  fontSize: "1.8rem",
                  background: "linear-gradient(135deg, #1d4ed8 0%, #0891b2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                4.9
              </p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">out of 5.0</p>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="text-left">
              <p className="text-sm font-semibold text-slate-700">Teaching Evaluation</p>
              <p className="text-xs text-slate-400">Top quartile · Faculty of Engineering</p>
            </div>
          </div>
        </div>

        {/* Courses Carousel */}
        <Carousel
          opts={{
            align: "center",
            loop: true,
            containScroll: "trimSnaps",
            dragFree: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-3 md:-ml-4">
            {courses.map((course, index) => (
              <CarouselItem key={course.title} className="pl-3 md:pl-4 basis-[90%] sm:basis-[80%] md:basis-1/2 lg:basis-1/3 snap-center">
                <Card
                  className={`group overflow-hidden border-slate-200 border-t-4 ${accentMap[course.accent].border} bg-white hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex flex-col h-full rounded-2xl shadow-sm`}
                >
                  {/* Course Image */}
                  <div className="relative w-full aspect-video overflow-hidden bg-slate-100">
                    <img
                      src={course.image}
                      alt={course.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <CardHeader className="pb-2 pt-4">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-base font-bold leading-tight text-slate-900 flex-1">
                        {course.title}
                      </CardTitle>
                      <Badge variant="secondary" className="shrink-0 text-xs">
                        {course.year}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col justify-between space-y-3 pt-0">
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {course.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium border ${accentMap[course.accent].tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* University Badge */}
                    <div className="flex items-center gap-2 pt-1 border-t border-slate-100">
                      <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">QS #212</span>
                      <span className="text-[10px] text-slate-400">Universidad de los Andes</span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" aria-label="Previous course" />
          <CarouselNext className="hidden md:flex -right-12" aria-label="Next course" />
        </Carousel>
      </div>
    </section>
  );
};
