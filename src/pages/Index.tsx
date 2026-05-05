import { Hero } from "@/components/Hero";
import { AcademicTimeline } from "@/components/AcademicTimeline";
import { ScholarMetrics } from "@/components/ScholarMetrics";
import { Publications } from "@/components/Publications";
import { BookChapters } from "@/components/BookChapters";
import { CoursesTeaching } from "@/components/CoursesTeaching";
import { Contact } from "@/components/Contact";
const Index = () => {
  return (
    <main className="min-h-screen" role="main">
      <Hero />
      <div id="timeline"><AcademicTimeline /></div>
      <div id="publications"><Publications /></div>
      <ScholarMetrics />
      <BookChapters />
      <CoursesTeaching />
      <div id="contact"><Contact /></div>
    </main>
  );
};
export default Index;