import { useState, useCallback, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import book1Image from "@/assets/book-1.png";
import book2Image from "@/assets/book-2.png";
import book3Image from "@/assets/book-3.png";

interface BookChapter {
  id: string;
  title: string;
  authors: string;
  book: string;
  publisher: string;
  year: number;
  type: "Book Chapter";
  summary: string;
  image: string;
  link: string;
}

const bookChaptersData: BookChapter[] = [
  {
    id: "chapter-1",
    title: "Classical and Emerging Approximations for the Screening of Antimicrobial Peptide Libraries",
    authors: "Rodríguez, Cristian F.; Quezada, Valentina; Andrade-Pérez, Valentina; et al.",
    book: "Antimicrobial Peptides",
    publisher: "Elsevier · pp. 195–232",
    year: 2025,
    type: "Book Chapter",
    summary:
      "This chapter explores classical and emerging methodologies for screening peptide libraries, a pivotal process in pharmaceutical research for identifying therapeutic peptides. Classical techniques like phage, ribosome, and cell surface display have been foundational, yet they face limitations such as being labor-intensive and requiring large material amounts. Emerging alternatives, notably microfluidic systems, and nanotechnology-based platforms, offer significant advancements by enabling high throughput, cost efficiency, and minimal sample volumes, thereby addressing classical methods' constraints. The chapter also discusses the integration of machine learning algorithms to enhance screening accuracy and efficiency. Despite progress, challenges remain in optimizing specificity, and sensitivity, and integrating diverse technologies. Future perspectives highlight the potential for further advancements in screening specificity, efficiency, and throughput, underscoring the critical role of innovation in leveraging peptide libraries for drug discovery.",
    image: book1Image,
    link: "https://www.sciencedirect.com/science/article/abs/pii/B9780443153938000099",
  },
  {
    id: "chapter-2",
    title:
      "Delivery of Nucleic Acids Using Nanocarriers: siRNA and miRNA Delivery, mRNA and DNA Delivery, CRISPR-Cas Systems",
    authors: "Guzmán-Sastoque, Paula; Monsalve, María Camila; Rodríguez, Cristian F.; et al.",
    book: "Nanocarriers for Nucleic Acids and Proteins",
    publisher: "CRC Press · pp. 248–291",
    year: 2025,
    type: "Book Chapter",
    summary:
      "The delivery of nucleic acids using nanocarriers represents a transformative approach in nanomedicine, offering improved stability, targeted delivery, and enhanced therapeutic efficacy. This chapter explores the various strategies employed for the delivery of small interfering RNA (siRNA), microRNA (miRNA), messenger RNA (mRNA), DNA, and CRISPR-Cas systems, emphasizing the role of lipid-based, polymeric, and inorganic nanoparticles. These nanocarriers facilitate efficient cellular uptake, prevent nucleic acid degradation, and enhance gene silencing or expression for therapeutic applications. The chapter discusses the mechanisms of RNA interference, the role of nanocarriers in gene therapy, and recent advancements in CRISPR-Cas delivery for precise genome editing.",
    image: book2Image,
    link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003473183-11/delivery-nucleic-acids-using-nanocarriers-paula-guzm%C3%A1n-sastoque-mar%C3%ADa-camila-monsalve-cristian-rodr%C3%ADguez-stiven-castellanos-juan-cruz-luis-reyes",
  },
  {
    id: "chapter-3",
    title: "Carbon-Based Nanocarriers: Carbon Nanotubes, Graphene Oxide, Fullerenes, and Carbon Dots",
    authors: "Rodríguez, Cristian F.; Guzmán-Sastoque, Paula; Rodriguez-Bazurto, Coryna; et al.",
    book: "Nanocarriers for Nucleic Acids and Proteins",
    publisher: "CRC Press · pp. 141–188",
    year: 2025,
    type: "Book Chapter",
    summary:
      "Carbon-based nanocarriers—graphene, carbon nanotubes (CNTs), carbon dots (CDs), and fullerenes—represent transformative platforms at the nexus of nanotechnology and biomedicine. This chapter extensively reviews their historical evolution, groundbreaking discoveries, and sophisticated synthesis methodologies, detailing top-down approaches like mechanical exfoliation and bottom-up processes such as chemical vapor deposition. Emphasizing their unique physicochemical properties, including graphene's unparalleled mechanical strength and conductivity, CNTs' remarkable flexibility, CDs' sustainable production and tunable fluorescence, and fullerenes' versatile structural adaptability, the chapter underscores their revolutionary implications for medicine.",
    image: book3Image,
    link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003473183-6/carbon-based-nanocarriers-cristian-rodr%C3%ADguez-paula-guzm%C3%A1n-sastoque-coryna-rodriguez-bazurto-juan-rojas-hern%C3%A1ndez-luis-reyes-juan-cruz",
  },
];

export const BookChapters = () => {
  const [selectedChapter, setSelectedChapter] = useState<BookChapter | null>(null);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % bookChaptersData.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + bookChaptersData.length) % bookChaptersData.length);
  }, []);

  useEffect(() => {
    if (paused || bookChaptersData.length <= 1) return;
    intervalRef.current = setInterval(next, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next, paused]);

  const chapter = bookChaptersData[current];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-slate-50">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span
              className="inline-block h-1 w-10 rounded-full"
              style={{ background: "linear-gradient(to right, #7c3aed, #0891b2)" }}
            />
            <span className="text-[11px] font-bold text-violet-700 uppercase tracking-widest">
              Knowledge Transfer
            </span>
            <span
              className="inline-block h-1 w-10 rounded-full"
              style={{ background: "linear-gradient(to left, #7c3aed, #0891b2)" }}
            />
          </div>
          <h2
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
            className="font-black text-slate-900 tracking-tight leading-tight mb-3"
          >
            <BookOpen className="inline-block w-8 h-8 mr-2 text-violet-700 align-middle" aria-hidden="true" />
            Book Chapters
          </h2>
          <p className="text-[15px] text-slate-500 max-w-2xl mx-auto">
            3 contributions published in 2025 — Elsevier and CRC Press volumes on nanomedicine,
            drug delivery, and AI-driven screening.
          </p>
        </div>

        {/* Hero Slider */}
        {chapter && (
          <>
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer select-none"
              style={{ minHeight: "480px" }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onClick={() => setSelectedChapter(chapter)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelectedChapter(chapter)}
              aria-label={`View details for ${chapter.title}`}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                {chapter.image ? (
                  <img
                    src={chapter.image}
                    alt=""
                    className="w-full h-full object-cover transition-opacity duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-violet-900 to-slate-900 flex items-center justify-center">
                    <BookOpen className="w-24 h-24 text-white/20" />
                  </div>
                )}
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
              </div>

              {/* Year + type badges top-left */}
              <div className="absolute top-5 left-5 flex gap-2 z-10">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold">
                  {chapter.year}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs">
                  {chapter.type}
                </span>
              </div>

              {/* Counter top-right */}
              <div className="absolute top-5 right-5 z-10 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold">
                {current + 1} / {bookChaptersData.length}
              </div>

              {/* Content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10 z-10">
                <p className="text-white/60 italic text-sm mb-2 line-clamp-1">
                  {chapter.book} — {chapter.publisher}
                </p>
                <h3
                  className="text-white font-black leading-tight mb-4 max-w-3xl"
                  style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.6rem)" }}
                >
                  {chapter.title}
                </h3>
                <Button
                  asChild
                  className="bg-white text-slate-900 hover:bg-white/90 font-bold shadow-lg"
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    href={chapter.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View chapter: ${chapter.title}`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />
                    View Chapter
                  </a>
                </Button>
              </div>

              {/* Left arrow */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Previous chapter"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Right arrow */}
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Next chapter"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-1.5 mt-4" role="tablist" aria-label="Chapter indicators">
              {bookChaptersData.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to chapter ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-slate-800" : "w-1.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Modal Dialog */}
        <Dialog open={!!selectedChapter} onOpenChange={() => setSelectedChapter(null)}>
          <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-background/95 backdrop:bg-black/60">
            {selectedChapter && (
              <>
                <DialogHeader>
                  <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <Badge variant="secondary" className="shrink-0 text-xs sm:text-sm">
                      {selectedChapter.year}
                    </Badge>
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      {selectedChapter.type}
                    </Badge>
                  </div>
                  <DialogTitle className="text-xl sm:text-2xl leading-tight pr-8">
                    {selectedChapter.title}
                  </DialogTitle>
                  <DialogDescription className="italic text-sm sm:text-base mt-2">
                    {selectedChapter.book} — {selectedChapter.publisher}
                  </DialogDescription>
                  <p className="text-sm text-slate-600 mt-1">{selectedChapter.authors}</p>
                </DialogHeader>

                {selectedChapter.image && (
                  <img
                    src={selectedChapter.image}
                    alt={`${selectedChapter.title} - cover`}
                    loading="lazy"
                    className="w-full h-48 sm:h-64 object-cover rounded-lg my-4"
                  />
                )}

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg mb-2">Summary</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {selectedChapter.summary}
                    </p>
                  </div>

                  <Button asChild className="w-full sm:w-auto min-h-[44px]">
                    <a
                      href={selectedChapter.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                      aria-label={`View full chapter: ${selectedChapter.title}`}
                    >
                      View Chapter
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

      </div>
    </section>
  );
};
