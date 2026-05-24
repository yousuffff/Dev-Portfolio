import { motion } from "framer-motion";
import Reveal from "./Reveal"
import {contacts} from '../data/contacts'

const ContactCard = () => {
  return (
    <section className="section" id="contact">
      <div className="sec-header">
        <div>
          <div className="sec-tag">Let's talk</div>
          <div className="sec-title">Get in Touch</div>
        </div>
      </div>
      <div className="contact-grid">
        {contacts.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.07}>
            <motion.a
              href={c.href}
              className="contact-card"
              target={c.href.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              download={c.download || undefined}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div>
                <div className="contact-label">{c.label}</div>
                <div className="contact-val">{c.val}</div>
              </div>
              <div className="contact-icon">↗</div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default ContactCard;
