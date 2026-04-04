const ExperienceTimeline = ({ data: experiences = [] }) => {
  const renderBadge = (badge) => {
    const { type, text, icon, url } = badge;

    const baseClasses =
      "relative bg-transparent flex items-center justify-center px-3 py-1.5 rounded-full text-xs font-medium transition-colors overflow-hidden";
    const typeClasses = {
      plain:
        "relative text-black before:content-[''] before:absolute before:inset-0 before:bg-[repeating-linear-gradient(45deg,black_0,black_1px,transparent_1px,transparent_2px),repeating-linear-gradient(-45deg,black_0,black_1px,transparent_1px,transparent_2px)] before:opacity-20 before:rounded-full before:pointer-events-none",
      color: "bg-purple-900 text-white hover:bg-purple-800",
    };

    return (
      <a
        target={url ? "_blank" : "_self"}
        href={url || "#"}
        className={`${baseClasses} ${typeClasses[type] || typeClasses.github}`}
      >
        {icon && <span className="mr-1.5">{icon}</span>}
        {text}
      </a>
    );
  };

  return (
    <div className="relative">
      {/* Vertical dashed line */}
      <div className="absolute left-8 top-0 bottom-0 w-px border-l border-dashed border-[#dac0b9]"></div>

      {experiences.map((experience, index) => (
        <div
          key={`${experience.title?.charAt(0) || "e"}-${index}`}
          className={`relative flex items-start mb-8 last:mb-0
            ${index !== experiences.length - 1 ? "border-b border-dashed border-[#dac0b9]" : ""} pb-5`}
        >
          {/* Logo/Icon */}
          <div className={`flex-shrink-0 relative z-10`}>
            {experience.logo ? (
              <img
                src={experience.logo}
                alt={`${experience.title} logo`}
                className={`size-16 rounded-full ${experience.logoClr || "bg-[#ECD2CB]"} border border-[#dac0b9] object-contain p-3 ta-ta`}
              />
            ) : (
              <div className="size-16 rounded-full bg-[#ECD2CB] border border-[#dac0b9] flex items-center justify-center">
                <span className="text-2xl text-neutral-700">
                  {experience.organization?.charAt(0) ||
                    experience.title?.charAt(0) ||
                    "E"}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 ml-6 font-[poppins]">
            {/* Date */}
            <div className="text-base text-neutral-700 mb-1 font-[poppins]">
              {experience.date}
            </div>

            {/* Title */}
            <h3 className="text-xl text-neutral-950 mb-1 font-[content] uppercase max-w-[65ch]">
              {experience.title}
            </h3>

            {/* Status */}
            {experience.status && (
              <div className="text-base text-neutral-700 mb-3">
                {experience.status}
              </div>
            )}

            {/* Description */}
            <p
              className="text-neutral-600 text-base leading-relaxed mb-4 font-[poppins] max-w-[65ch] whitespace-normal"
              dangerouslySetInnerHTML={{ __html: experience.description }}
            />

            {/* Badges */}
            {experience.badges && experience.badges.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {experience.badges.map((badge, badgeIndex) => (
                  <div key={badgeIndex}>{renderBadge(badge)}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
