import {motion, useInView} from 'framer-motion'
import {useRef} from 'react'
import {fadeUp} from '../animations/variants'

function ProjectCard({ p, i }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      className="proj-card"
      variants={fadeUp}
      custom={i * 0.11}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
    >
      <div className="proj-row">
        <div className="proj-left">
          <div className="proj-meta">
            <span className="proj-num">{p.num}</span>
            <span className="proj-date">{p.date}</span>
          </div>
          <div className="proj-title">{p.title}</div>
          <div className="proj-desc">{p.desc}</div>
          <div className="proj-tags">
            {p.tags.map((t) => (
              <span key={t} className="proj-tag">
                {t}
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
              >
                ⌥ GitHub
              </a>
            )}
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-link"
              >
                ↗ Live Demo
              </a>
            )}
          </div>
        </div>
        <div className="proj-right">
          <div className="proj-arrow">↗</div>
        </div>
      </div>
    </motion.div>
  );
}
export default ProjectCard;
