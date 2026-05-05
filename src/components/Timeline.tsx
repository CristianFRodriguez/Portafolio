import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, BookOpen, FlaskConical } from "lucide-react";
interface Position {
  id: string;
  year: string;
  title: string;
  organization: string;
  department?: string;
  description: string[];
  skills: string[];
  icon: typeof Briefcase;
  color: string;
}
const positions: Position[] = [{
  id: "2024-present",
  year: "2024 – Presente",
  title: "Assistant Researcher",
  organization: "Universidad de los Andes",
  department: "Department of Biomedical Engineering",
  description: ["Diseño y simulación de dispositivos microfluídicos y nanomateriales usando COMSOL Multiphysics y GROMACS", "Integración de inteligencia artificial para optimizar síntesis de materiales"],
  skills: ["COMSOL", "CFD", "GROMACS", "Nanomateriales", "AI", "Machine Learning", "Python", "Investigación aplicada"],
  icon: FlaskConical,
  color: "from-secondary to-secondary/80"
}, {
  id: "2022-2023-admin",
  year: "2022 – 2023",
  title: "Administrative Graduate Assistant",
  organization: "Universidad de los Andes",
  department: "Faculty of Engineering",
  description: ["Coordinación de proyectos de innovación y comunicación científica", "Soporte académico y gestión en la Facultad de Ingeniería"],
  skills: ["Comunicación científica", "Gestión académica", "Coordinación de proyectos", "Docencia universitaria"],
  icon: Briefcase,
  color: "from-accent to-accent/80"
}, {
  id: "2022-2023-teaching",
  year: "2022 – 2023",
  title: "Teaching Assistant",
  organization: "Universidad de los Andes",
  description: ["Cursos: Nanobiotecnología, 3D Bioprinting, Biological Transport Phenomena", "Apoyo en diseño de contenidos y evaluación"],
  skills: ["Docencia", "Bioimpresión 3D", "Bioingeniería", "Mentoría", "Python para análisis de datos"],
  icon: GraduationCap,
  color: "from-primary to-primary/80"
}, {
  id: "2021-2024",
  year: "2021 – 2024",
  title: "Research Collaborator",
  organization: "Grupo Neurociencia de Antioquia (UdeA)",
  description: ["Evaluación de nanomateriales en neurobiología celular y molecular", "Integración de simulación con experimentación biológica"],
  skills: ["Nanotecnología", "Análisis de datos", "Modelado biológico", "Redacción científica"],
  icon: BookOpen,
  color: "from-secondary/80 to-accent"
}];
const allSkills = Array.from(new Set(positions.flatMap(p => p.skills))).sort();
export const Timeline = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [hoveredPosition, setHoveredPosition] = useState<string | null>(null);
  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]);
  };
  const isPositionHighlighted = (position: Position) => {
    if (selectedSkills.length === 0) return true;
    return selectedSkills.some(skill => position.skills.includes(skill));
  };
  return <section className="min-h-screen bg-gradient-to-b from-background to-accent/5 px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4 animate-fade-in">
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }} className="font-bold text-primary leading-tight">
            Professional Experience
          </h2>
        </div>

        {/* Skills Filter */}
        

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary via-accent to-secondary/20 hidden md:block z-0"></div>

          <div className="space-y-8 sm:space-y-12">
            {positions.map((position, index) => {
            const Icon = position.icon;
            const isHighlighted = isPositionHighlighted(position);
            const isHovered = hoveredPosition === position.id;
            return <div key={position.id} className={`relative transition-all duration-500 ${isHighlighted ? "opacity-100" : "opacity-30"}`} style={{
              animationDelay: `${index * 150}ms`
            }} onMouseEnter={() => setHoveredPosition(position.id)} onMouseLeave={() => setHoveredPosition(null)}>
                  {/* Timeline node */}
                  <div className="absolute left-8 -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-background rounded-full border-3 sm:border-4 border-secondary shadow-lg flex items-center justify-center z-10 hidden md:flex">
                    <Icon className={`w-6 h-6 sm:w-8 sm:h-8 text-secondary transition-transform duration-300 ${isHovered ? "scale-125" : ""}`} aria-hidden="true" />
                  </div>

                  {/* Card */}
                  <Card className={`ml-0 md:ml-32 transition-all duration-300 hover:shadow-2xl border-2 ${isHighlighted ? "border-secondary/20 hover:border-secondary" : "border-muted"} ${isHovered ? "md:scale-105" : ""} z-10 relative`}>
                    <CardHeader className="pb-3 sm:pb-6">
                      <div className="flex items-start justify-between gap-3 sm:gap-4 flex-wrap">
                        <div className="space-y-1.5 sm:space-y-2">
                          <CardTitle style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)' }} className="text-primary leading-tight">
                            {position.title}
                          </CardTitle>
                          <CardDescription className="text-sm sm:text-base">
                            <span className="font-semibold text-foreground">
                              {position.organization}
                            </span>
                            {position.department && <>
                                <br />
                                <span className="text-muted-foreground text-xs sm:text-sm">
                                  {position.department}
                                </span>
                              </>}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="text-xs sm:text-base px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-secondary to-accent text-white shrink-0">
                          {position.year}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3 sm:space-y-4">
                      <ul className="space-y-1.5 sm:space-y-2">
                        {position.description.map((desc, i) => <li key={i} className="flex items-start gap-2">
                            <span className="text-secondary mt-1 sm:mt-1.5 text-xs sm:text-base" aria-hidden="true">•</span>
                            <span className="text-muted-foreground text-xs sm:text-base">{desc}</span>
                          </li>)}
                      </ul>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                        {position.skills.map(skill => <Badge key={skill} variant="outline" className={`transition-all duration-300 text-xs ${selectedSkills.includes(skill) ? "bg-secondary/20 border-secondary text-secondary font-semibold" : "border-muted-foreground/30"}`}>
                            {skill}
                          </Badge>)}
                      </div>
                    </CardContent>
                  </Card>
                </div>;
          })}
          </div>
        </div>
      </div>
    </section>;
};