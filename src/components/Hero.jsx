
import { motion } from "framer-motion";
import StatCounter from "./StatCounter";
import { slideIn, fadeUp } from "../animations/variants";

const Hero = () => {
  return (
    <section className="hero">
      <motion.div
        className="hero-eyebrow"
        variants={slideIn}
        custom={0.1}
        initial="hidden"
        animate="show"
      >
        <motion.span
          className="hero-dot"
          animate={{ opacity: [1, 0.2, 1], scale: [1, 0.55, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        Open to opportunities
      </motion.div>

      <h1 className="hero-h1">
        {[
          ["Building", "plain"],
          ["things for", "plain"],
          ["the", "plain"],
          ["web.", "grad"],
          ["seriously.", "ghost"],
        ].map(([line, type], i) => (
          <div key={line} style={{ overflow: "hidden" }}>
            <motion.span
              className={
                type === "grad"
                  ? "h1-grad"
                  : type === "ghost"
                    ? "h1-ghost"
                    : "h1-plain"
              }
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{
                delay: 0.22 + i * 0.1,
                duration: 0.68,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ display: "block" }}
            >
              {line}
            </motion.span>
          </div>
        ))}
      </h1>

      <motion.p
        className="hero-sub"
        variants={fadeUp}
        custom={0.78}
        initial="hidden"
        animate="show"
      >
        Fresher frontend developer focused on <strong>React</strong> and{" "}
        <strong>Tailwind CSS</strong>. I build responsive, accessible interfaces
        that are clean on the outside and solid on the inside.
      </motion.p>

      <motion.div
        className="hero-ctas"
        variants={fadeUp}
        custom={0.92}
        initial="hidden"
        animate="show"
      >
        <motion.button
          className="btn-primary"
          onClick={() => scrollTo("contact")}
          whileTap={{ scale: 0.97 }}
        >
          Get in touch →
        </motion.button>
        <motion.button
          className="btn-ghost"
          onClick={() => scrollTo("work")}
          whileTap={{ scale: 0.97 }}
        >
          View my work
        </motion.button>
      </motion.div>

      <motion.div
        className="hero-stats"
        variants={fadeUp}
        custom={1.08}
        initial="hidden"
        animate="show"
      >
        {[
          { num: 5, suf: "+", label: "Projects shipped" },
          { num: 8, suf: "+", label: "Skills in stack" },
          { num: 1, suf: "yr", label: "Of self-learning" },
        ].map((s) => (
          <div key={s.label}>
            <div className="stat-num">
              <StatCounter target={s.num} suffix={s.suf} />
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
