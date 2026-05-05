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
              A Student and Learner.
            </div>
          </h2>

          <div className="intro__content md:font-[content] max-w-[100ch] pl-2 md:pl-10 mt-12">
            <p className="hero-p introduction">
              About Me: Trying to understand systems, design them, and in search
              of their limits. Can they adapt? I love Research, exploring
              algorithms and sometimes competitive programming.
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
              Thanks for visiting. Be sure to check out my projects, they are
              full of fun!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
