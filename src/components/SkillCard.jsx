import { motion, useInView } from "framer-motion";
function SkillCard({ s, i }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      className="skill-card"
      variants={fadeUp}
      custom={i * 0.055}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      whileHover={{ scale: 1.012 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="skill-row">
        <span className="skill-name">{s.name}</span>
        <span className="skill-level">{s.level}</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${s.pct}%` } : {}}
          transition={{
            duration: 1.1,
            delay: 0.1 + i * 0.065,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </div>
    </motion.div>
  );
}

export default SkillCard;
