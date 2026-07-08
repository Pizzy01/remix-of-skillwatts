import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap, Globe, Shield, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useContent } from "@/contexts/ContentContext";
import { useIsMobile } from "@/hooks/use-mobile";

const STATS_ICONS = [
  <Zap key="zap" className="w-4 h-4 text-plasma" />,
  <Sun key="sun" className="w-4 h-4 text-fusion" />,
  <Globe key="globe" className="w-4 h-4 text-reactor" />,
  <Shield key="shield" className="w-4 h-4 text-plasma" />,
];

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const { content } = useContent();
  const data = content.hero;
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden font-sans">
      
      {/* Cinematic Background — static image on mobile (perf), video on desktop */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-screen">
        {isMobile ? (
          <img
            src={data.bgImage}
            alt=""
            className="w-full h-full object-cover filter grayscale contrast-125"
          />
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={data.bgImage}
            className="w-full h-full object-cover filter grayscale contrast-125"
          >
            {/* Placeholder video. Replace src with your local African Engineer MP4 if needed */}
            <source src="https://videos.pexels.com/video-files/3201488/3201488-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
        )}
        {/* Fade the video to black at the bottom so it blends with the next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-transparent" />
      </div>

      <motion.div
        style={{ y: y1, opacity: heroOpacity }}
        className="container-premium relative z-10 pt-32 pb-20"
      >
        <div className="max-w-4xl">
          
          {/* Apple-style precise Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-plasma opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-plasma"></span>
              </span>
              <span className="text-xs font-mono tracking-widest text-white/80 uppercase">{data.badge}</span>
            </div>
          </motion.div>

          {/* Massive Display Typography (Apple/Stripe Style) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white mb-5 text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] md:leading-[1.05]"
          >
            {data.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60 font-bold">
              {data.titleHighlight}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mb-8 md:mb-12 font-medium tracking-tight leading-relaxed"
          >
            {data.subtitle}
          </motion.p>

          {/* High-end Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link to="/contact" className="relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-black transition-transform hover:scale-105 active:scale-95">
              <span>{data.ctaPrimary}</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link to="/solutions" className="relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white/5 border border-white/10 backdrop-blur-md px-8 font-medium text-white transition-all hover:bg-white/10 hover:border-white/20">
              <span>{data.ctaSecondary}</span>
            </Link>
          </motion.div>
          
          {/* Glassmorphic Metrics Row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-12 md:mt-20"
          >
            {data.stats.map((stat, i) => (
              <div key={i} className="group relative p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl transition-colors hover:bg-white/[0.04]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center border border-white/[0.05]">
                    {STATS_ICONS[i % STATS_ICONS.length]}
                  </div>
                  <div className="text-[10px] font-mono text-white/60 uppercase tracking-wider line-clamp-1">{stat.label}</div>
                </div>
                <div className="text-xl md:text-2xl font-semibold tracking-tight text-white/90">{stat.value}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* Decorative vertical line (Apple style) */}
      <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
    </section>
  );
};
