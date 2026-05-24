import { motion } from "framer-motion";
import { about } from "../data/about";
import Reveal from "./Reveal"

const AboutCard = () => {
  return (
    <section className="section" id="about">
      <div className="sec-header">
        <div>
          <div className="sec-tag">Who's behind this</div>
          <div className="sec-title">About Me</div>
        </div>
      </div>
      <div className="about-grid">
        {about.map((a, i) => (
          <Reveal key={a.heading} delay={i * 0.08}>
            <motion.div
              className="about-card"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="about-icon">{a.emoji}</div>
              <div className="about-heading">{a.heading}</div>
              <div className="about-text">{a.text}</div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default AboutCard;
