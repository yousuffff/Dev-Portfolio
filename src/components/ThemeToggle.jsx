import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

function ThemeToggle({ dark, onToggle }) {
  return (
    <motion.button
      className="theme-toggle"
      onClick={onToggle}
      whileTap={{ scale: 0.95 }}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-label="Toggle theme"
    >
      <motion.div
        className="toggle-thumb"
        animate={{
          x: dark ? 26 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {dark ? <FiMoon /> : <FiSun />}
      </motion.div>
    </motion.button>
  );
}

export default ThemeToggle;
