import { useState, useEffect } from "react";
import "./IntroSection.css";

const IntroSection = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    const lineObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    });

    const headers = document.querySelectorAll(".headerSpan");
    headers.forEach((header) => lineObserver.observe(header));

    return () => {
      headers.forEach((header) => lineObserver.unobserve(header));
      lineObserver.disconnect();
    };
  }, []);

  return (
    <section id="s1" className="sec1 min-h-screen">
      <div className="section intro__section">
        <div className="p-6">
          <h2 className="hero-h2 flex flex-col justify-center items-end mb-6">
            <div className="">Hi, I&apos;m Subhajit</div>
            <div
              className="disable imgShow z-20"
              onMouseEnter={() => setIsImageVisible(true)}
              onMouseLeave={() => setIsImageVisible(false)}
            >
              A CS Undergraduate @BESU
            </div>
          </h2>

          <div className="intro__content md:font-[content] uppercase max-w-[100ch] pl-2 md:pl-10">
            <p className="hero-p introduction">
              Made it to my Fifth Semester at{" "}
              <a
                className="college_url"
                href="https://www.iiests.ac.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                BESU
              </a>
              . I love building stuff, strongly interested in Full Stack Web
              Development and Decentralised Technologies.
              <span
                id="profileImg"
                className={`block  rotate-[7deg] ${
                  isImageVisible ? "opacity-100 scale-y-100" : "opacity-0"
                }`}
              >
                <img
                  src="/images/me.jpeg"
                  alt="Profile Picture"
                  className="ta-ta size-full"
                />
              </span>
            </p>
            <p className="hero-p is-xs">
              Thanks for visiting. Don&apos;t forget to explore my projects.
              I&apos;m eager to EAGER TO CONNECT &amp; COLLABORATE.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
