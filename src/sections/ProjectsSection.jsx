import { AnimatePresence, motion } from "framer-motion";
import { webProjects, games } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const ProjectsSection = ({ activeTab, setActiveTab }) => {
  return (
    <section className="section" id="work">
      <div className="sec-header">
        <div>
          <div className="sec-tag">Selected work</div>
          <div className="sec-title">Projects</div>
        </div>
        <span className="sec-count">
          {webProjects.length + games.length} total
        </span>
      </div>
      <div className="tabs">
        <button
          className={`tab-btn${activeTab === "web" ? " tab-active" : ""}`}
          onClick={() => setActiveTab("web")}
        >
          🌐 Web Apps <span className="tab-pill">{webProjects.length}</span>
        </button>
        <button
          className={`tab-btn${activeTab === "games" ? " tab-active" : ""}`}
          onClick={() => setActiveTab("games")}
        >
          🎮 Games <span className="tab-pill">{games.length}</span>
        </button>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="projects"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          {(activeTab === "web" ? webProjects : games).map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
