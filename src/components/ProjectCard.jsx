import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "../animations/variants";

function ProjectCard({ p, i }) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <motion.article
      ref={ref}
      className="proj-card"
      variants={fadeUp}
      custom={i * 0.12}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      whileHover={{ y: -6 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
    >
      <div className="proj-row">
        <div className="proj-left">
          <div className="proj-meta">
            <span className="proj-num">{p.num}</span>
            <span className="proj-date">{p.date}</span>
          </div>

          <h3 className="proj-title">{p.title}</h3>

          <p className="proj-desc">{p.desc}</p>

          <div className="proj-tags">
            {p.tags.map((tag) => (
              <span key={tag} className="proj-tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="proj-links">
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-link"
                aria-label={`${p.title} GitHub Repository`}
              >
                GitHub
              </a>
            )}

            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-link"
                aria-label={`${p.title} Live Demo`}
              >
                Live Demo
              </a>
            )}
          </div>
        </div>

        <div className="proj-right">
          <motion.div
            className="proj-arrow"
            whileHover={{ x: 4, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            ↗
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
