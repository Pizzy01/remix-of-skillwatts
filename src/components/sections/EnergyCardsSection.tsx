import { motion } from "framer-motion";
import { Atom, Cable, Droplets, Sun, Construction, Leaf, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import nuclearImage from "@/assets/nuclear.jpg";

const expertiseCards = [
  {
    icon: Atom,
    title: "Nuclear",
    description: "Small Modular Reactors (SMR), advanced technologies, safety and decommissioning.",
    image: nuclearImage,
  },
  {
    icon: Cable,
    title: "Power & Gas Networks",
    description: "Grid integration, power quality, energy transport and gas infrastructure.",
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80",
  },
  {
    icon: Droplets,
    title: "Water & Hydraulics",
    description: "Dams, reservoirs, drinking water supply, solar pumping and pumped-storage.",
    image: "https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?w=800&q=80",
  },
  {
    icon: Sun,
    title: "Renewables & Storage",
    description: "Solar PV, wind, hybrid systems and battery storage (BESS).",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
  },
  {
    icon: Construction,
    title: "Infrastructure",
    description: "Roads, railways, bridges, civil works and waterways.",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80",
  },
  {
    icon: Leaf,
    title: "Environment",
    description: "Water resource management, climate resilience and environmental impact studies.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
  },
  {
    icon: Building2,
    title: "Buildings",
    description: "Industrial buildings, smart buildings and energy efficiency.",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
  },
];

export const EnergyCardsSection = () => {
  const isMobile = useIsMobile();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Card component for reuse
  const ExpertiseCard = ({ card, index }: { card: typeof expertiseCards[0]; index: number }) => (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="card-premium group h-full"
    >
      {/* Image container with overlay */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent" />
        
        {/* Icon badge */}
        <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
          <card.icon className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-base font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
          {card.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {card.description}
        </p>
      </div>
    </motion.article>
  );

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-premium">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
        >
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Domaines d'Intervention
            </span>
            <h2 className="mb-3">
              Notre <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Des compétences multidisciplinaires pour accompagner vos projets 
              énergétiques et d'infrastructures en Afrique.
            </p>
          </div>
          
          {/* Carousel controls - only on desktop */}
          {!isMobile && (
            <div className="flex items-center gap-2">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-50"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={scrollNext}
                className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-50"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          )}
        </motion.div>
      </div>

      {/* Mobile: Vertical grid */}
      {isMobile ? (
        <div className="container-premium">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {expertiseCards.map((card, index) => (
              <ExpertiseCard key={card.title} card={card} index={index} />
            ))}
          </div>
        </div>
      ) : (
        /* Desktop: Horizontal carousel */
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 pl-6 md:pl-[calc((100vw-1280px)/2+2rem)] lg:pl-[calc((100vw-1280px)/2+4rem)]">
            {expertiseCards.map((card, index) => (
              <div key={card.title} className="flex-shrink-0 w-[300px] md:w-[350px] lg:w-[380px]">
                <ExpertiseCard card={card} index={index} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
