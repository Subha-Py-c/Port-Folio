import { useState, useRef } from "react";
import {
  motion,
  useSpring,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { X, ExternalLink, ArrowUpRight } from "lucide-react";
import "./newP.css";
import projects from "./projectsData";
import PropTypes from "prop-types";

// using 'aspect' and specific widths to vary the card shapes
const layoutConfig = [
  { top: "10%", left: "45%", width: "w-[280px]", height: "h-48" },
  { top: "45%", left: "10%", width: "w-56", height: "h-56" },
  { top: "45%", right: "10%", width: "w-48", height: "h-48" },
  { bottom: "10%", right: "45%", width: "w-40", height: "h-40" },

  { top: "17%", left: "17%", width: "w-[280px]", height: "h-48" },
  { top: "17%", right: "17%", width: "w-[280px]", height: "h-48" },
  { bottom: "17%", left: "17%", width: "w-40", height: "h-[280px]" },
  { bottom: "17%", right: "17%", width: "w-80", height: "h-48" },
];

const FloatingCard = ({
  project,
  index,
  mouseX,
  mouseY,
  setFocusedProject,
}) => {
  // Cycle safely through configs if more than len
  const config = layoutConfig[index % layoutConfig.length];

  // Varied depth for parallax effect (some move faster than others)
  const depth = (index % 3) + 1;
  const x = useTransform(mouseX, (val) => val / (depth * 20));
  const y = useTransform(mouseY, (val) => val / (depth * 20));

  const springConfig = { damping: 20, stiffness: 80, mass: 1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        top: config.top,
        left: config.left,
        right: config.right,
        bottom: config.bottom,
      }}
      className={`absolute cursor-pointer z-10 group ${config.width} ${config.height}`}
      onClick={() => setFocusedProject(project)}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.05, type: "spring" }}
    >
      <div className="project-card-image relative w-full h-full overflow-hidden bg-[#CEB4AD] border border-[#CEB4AD] transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:z-50">
        {/* Background Image */}
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-90 group-hover:scale-110 ta-ta"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/20 opacity-60" />

        {/* Content - Scaled down for smaller cards */}
        <div className="absolute inset-0 p-3 flex flex-col justify-between">
          <div className="flex justify-between items-start w-full">
            <h3 className="text-white font-bold text-sm md:text-base leading-tight drop-shadow-lg transform transition-transform group-hover:-translate-y-1 line-clamp-2">
              {project.title}
            </h3>

            <button className="glass-card p-1.5 rounded-full text-white/90 hover:bg-white hover:text-black transition-colors duration-300">
              <ArrowUpRight size={12} />
            </button>
          </div>

          <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
            {/* Hiding summary on very small cards to keep it clean */}
            <div className="flex flex-wrap gap-1 mt-1">
              {project.technologies.slice(0, 2).map((tech) => (
                <span
                  key={tech}
                  className="text-[9px] bg-white/20 backdrop-blur-md px-1.5 py-0.5 rounded text-white border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
FloatingCard.propTypes = {
  project: PropTypes.object,
  index: PropTypes.number,
  mouseX: PropTypes.object,
  mouseY: PropTypes.object,
  setFocusedProject: PropTypes.func,
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 xcon"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="glass-card bg-[#1a1a1a] w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-3xl shadow-2xl flex flex-col md:flex-row relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/40 text-white rounded-full p-2 hover:bg-white hover:text-black transition-colors"
        >
          <X size={20} />
        </button>

        <div className="w-full md:w-5/12 h-64 md:h-auto relative">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover ta-ta"
          />
        </div>

        <div className="p-8 w-full md:w-7/12 flex flex-col overflow-y-auto no-scrollbar">
          <h2 className="text-3xl font-bold text-white mb-2">
            {project.title}
          </h2>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm mb-6"
          >
            Visit Project <ExternalLink size={14} />
          </a>

          <div className="space-y-6">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">
                About
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm">
                {project.description}
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">
                Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
ProjectModal.propTypes = {
  project: PropTypes.object,
  onClose: PropTypes.func,
};

export const ProjectsSection = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [focusedProject, setFocusedProject] = useState(null);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    mouseX.set(e.clientX - innerWidth / 2);
    mouseY.set(e.clientY - innerHeight / 2);
  };

  return (
    <div
      ref={containerRef}
      className="project-container mb-40"
      onMouseMove={handleMouseMove}
    >
      <div className="projects-wrapper">
        <motion.h1
          id="div3"
          className="exp headerSpan header__texts pointer-events-none z-0 text-center text-6xl md:text-8xl font-serif text-[#1a1a1a] dark:text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h1>
      </div>

      {projects.slice(0, 8).map((project, index) => (
        <FloatingCard
          key={index}
          index={index}
          project={project}
          mouseX={mouseX}
          mouseY={mouseY}
          setFocusedProject={setFocusedProject}
        />
      ))}

      <AnimatePresence>
        {focusedProject && (
          <ProjectModal
            project={focusedProject}
            onClose={() => setFocusedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
