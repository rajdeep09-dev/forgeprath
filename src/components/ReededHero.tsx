import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const breathe = {
  animate: {
    scale: [1, 1.02, 1],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const ReededHero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[hsl(0_0%_2%)]">
    {/* ——— NOISE TEXTURE ——— */}
    <div className="noise-bg fixed inset-0 z-[1] pointer-events-none" />

    {/* ——— LASER LINE (vertical centre) ——— */}
    <div className="absolute inset-0 flex justify-center z-[2] pointer-events-none">
      <div className="w-px h-full bg-gradient-to-b from-transparent via-[hsl(0_0%_100%/0.08)] to-transparent" />
    </div>

    {/* ——— RIM LIGHT (behind subject) ——— */}
    <div className="absolute inset-0 flex items-end justify-center z-[3] pointer-events-none">
      <div
        className="w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
          transform: "translateY(10%)",
        }}
      />
    </div>

    {/* ——— TRAINER IMAGE with Phantom Fade ——— */}
    <div className="absolute inset-0 flex items-end justify-center z-[5]">
      <img
        src={heroBg}
        alt="Trainer"
        className="h-[90vh] w-auto max-w-none object-cover object-top img-grayscale"
        loading="eager"
        style={{
          maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
        }}
      />
    </div>

    {/* ——— BACKGROUND TEXT: "DEFINE" (hollow, behind image) ——— */}
    <motion.div
      {...breathe}
      className="absolute z-[4] top-[8%] left-1/2 -translate-x-1/2 pointer-events-none select-none"
    >
      <h1
        className="font-heading text-[clamp(6rem,18vw,16rem)] font-black uppercase leading-none tracking-tight"
        style={{
          WebkitTextStroke: "1.5px hsl(0 0% 100% / 0.4)",
          WebkitTextFillColor: "transparent",
        }}
      >
        DEFINE
      </h1>
    </motion.div>

    {/* ——— FOREGROUND TEXT: "REALITY" (solid, in front) ——— */}
    <motion.div
      {...breathe}
      className="absolute z-[10] bottom-[12%] left-1/2 -translate-x-1/2 pointer-events-none select-none"
    >
      <h1
        className="font-heading text-[clamp(6rem,18vw,16rem)] font-black uppercase leading-none tracking-tight text-[hsl(0_0%_100%)] drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
      >
        REALITY
      </h1>
    </motion.div>

    {/* ——— SUBTITLE + CTA ——— */}
    <div className="absolute z-[11] bottom-[28%] left-1/2 -translate-x-1/2 text-center">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-sm md:text-base text-[hsl(0_0%_100%/0.5)] tracking-widest uppercase mb-6"
      >
        Online Fitness Coaching
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, type: "spring", stiffness: 100, damping: 20 }}
        className="flex items-center justify-center gap-5"
      >
        <Link to="/programs" className="btn-invert" data-magnetic>
          View Plans
        </Link>
        <Link
          to="/results"
          className="text-xs uppercase tracking-widest text-[hsl(0_0%_100%/0.4)] hover:text-[hsl(0_0%_100%)] transition-colors underline underline-offset-4 decoration-[hsl(0_0%_100%/0.15)]"
        >
          Results
        </Link>
      </motion.div>
    </div>

    {/* ——— REEDED GLASS SIDEBAR (right) ——— */}
    <div
      className="absolute right-0 top-0 h-full w-[15%] min-w-[60px] max-w-[140px] z-[12] hidden md:flex flex-col items-center justify-center gap-8 border-l border-[hsl(0_0%_100%/0.08)]"
      style={{
        background: "hsl(0 0% 100% / 0.03)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        boxShadow: "-1px 0 20px hsl(0 0% 100% / 0.04)",
      }}
    >
      {["Home", "Plans", "Results", "Contact"].map((label, i) => (
        <motion.span
          key={label}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 + i * 0.1 }}
          className="mono-label [writing-mode:vertical-rl] rotate-180 cursor-pointer hover:text-[hsl(0_0%_100%)] transition-colors"
        >
          {label}
        </motion.span>
      ))}
    </div>

    {/* ——— SCROLL MOUSE INDICATOR ——— */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[11] flex flex-col items-center gap-2"
    >
      <div className="w-5 h-8 rounded-full border border-[hsl(0_0%_100%/0.25)] flex items-start justify-center p-1.5">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 h-1.5 rounded-full bg-[hsl(0_0%_100%/0.5)]"
        />
      </div>
      <span className="mono-label text-[0.55rem]">Scroll</span>
    </motion.div>
  </section>
);

export default ReededHero;
