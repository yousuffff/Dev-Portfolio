import {motion} from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="footer-logo">
        yousuf<span>.</span>dev
      </div>
      <div className="footer-right">© 2026 · React & Framer Motion</div>
    </motion.footer>
  );
};

export default Footer;
