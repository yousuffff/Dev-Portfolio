import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ dark, setDark, activeNav, scrollTo }) => {
  return (
    <motion.nav
      className="nav"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nav-left">
        <div className="nav-logo">
          yousuf<span>.</span>dev
        </div>
        <ThemeToggle dark={dark} onToggle={() => setDark((d) => !d)} />
      </div>
      <div className="nav-links">
        {["work", "skills", "about" , "github", "contact"].map((id) => (
          <motion.button
            key={id}
            className={`nav-link${activeNav === id ? " active" : ""}`}
            onClick={() => scrollTo(id)}
            whileTap={{ scale: 0.93 }}
          >
            {id}
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
