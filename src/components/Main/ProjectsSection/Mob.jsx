import { ChevronRight } from "lucide-react";
import "./newP.css";
import projects from "./projectsData";

export const ProjectsSection = () => {
  return (
    <section
      id="s3-projects"
      className="sec3 pb-[25vh] md:pb-[32vh] lg:pb-[40vh] relative"
    >
      {/* anchor div */}
      <div id="div3" style={{ width: 0, height: 0, opacity: 0 }}></div>

      <h4 id="EN" className="project-heading-container">
        <span
          id="project-heading"
          className="exp underline-sp headerSpan header__texts !text-6xl"
          style={{ display: "inline" }}
        >
          Selected Projects
        </span>
      </h4>

      <div className="projects-wrapper full px-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative border-dashed border-b border-slate-700/30 pt-8 pb-16 px-4 md:px-8 cursor-default overflow-hidden hover:bg-[#F2E5BF]/20"
          >
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center gap-8">
              {/* Left : content */}
              <div className="space-y-6">
                <div className="flex items-center justify-between md:justify-start gap-0 md:gap-16">
                  <h2 className="text-4xl md:text-5xl font-[400] font-[title] group-hover:bg-clip-text transition-all duration-500">
                    {project.title}
                  </h2>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-0
                      opacity-100 md:opacity-0 group-hover:opacity-100
                      transition-all duration-500 transform
                      flexed f-gap-1 rounded-full
                      box-content px-3 py-1
                      border border-black/80 bg-black/80 text-sky-100"
                  >
                    visit <ChevronRight size={16} />
                  </a>
                </div>

                <p className="text-xl text-black/60 font-medium max-w-md">
                  {project.summary}
                </p>

                <div className="space-y-6 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <p className="text-md lg:text-sm text-black/80 max-w-[65ch]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 md:gap-3">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="ta-ta px-4 py-2 text-sm border border-[#B2CD9C] bg-[#B2CD9C] rounded-full hover:bg-[#00ac94]/100 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right : image */}
              <div className="relative mt-6 h-64 aspect-video overflow-hidden ta-ta bg-[#dcc2bb] rounded-lg opacity-100 lg:opacity-0 transform transition-all duration-700 group-hover:opacity-100">
                <div className="absolute flex items-center justify-center inset-0 transform transition-all duration-700 overflow-hidden">
                  <img
                    src={project.image}
                    className="parallaxImgs rounded-lg object-contain size-full transform transition-transform duration-700 scale-105"
                    alt={project.title + " project image"}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
