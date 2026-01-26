import Cards from "../../utils/TimeLine";
import { experienceData } from "./expData";
import Comp from "@/components/ui/hero-dithering-card.tsx";

const ExperienceSection = () => {
  return (
    <section className="experience-section relative w-full h-fit pt-[0vh] md:pt-[7.5vh] lg:pt-[15vh] pb-[25vh] md:pb-[32vh] lg:pb-[40vh]">
      <Comp>
        <h4 id="EX" className="text-center mb-8">
          <span className="exps underline-sp headerSpan header__texts experience--heading">
            Experience
          </span>
        </h4>
        <div className="work-container relative w-full h-fit text-xl md:text-2xl">
          <Cards data={experienceData} />
        </div>
      </Comp>
    </section>
  );
};

export default ExperienceSection;
