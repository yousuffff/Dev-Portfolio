import { motion } from "framer-motion";

function ThemeToggle({ dark, onToggle }) {
  return (
    <motion.button
      className="theme-toggle"
      onClick={onToggle}
      whileTap={{ scale: 0.92 }}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-label="Toggle theme"
    >
      <motion.div
        className={`toggle-thumb ${dark ? "dark" : "light"}`}
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {dark ? "🌙" : "☀️"}
      </motion.div>
    </motion.button>
  );
}

export default ThemeToggle;
