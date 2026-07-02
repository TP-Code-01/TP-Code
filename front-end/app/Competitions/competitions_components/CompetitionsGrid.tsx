import Link from "next/link";

const competitions = [
  {
    id: "hackathon-2024",
    tag: "Hackathon",
    tagClass: "bg-tertiary-fixed text-on-tertiary-fixed",
    date: "Oct 15-17",
    title: "TP Code Hackathon 2024",
    description: "The flagship annual hackathon. Build innovative solutions over 48 hours.",
    prize: "$5,000",
    difficulty: "Hard",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-jW2cshRM6oSSB0opDOVx3GHaeL2mSvxFugG_CR-12x6xiP76bSG4-Hf1B7bHdY56G6bAAYnwN31HxLisV0L_mrpkrnGQppuU461UJ6J2dNLEaDNWeQ6nNcS_eyiDbs0iSJFxXWCg72uBCYKJgB6BwpJqdg8E2c-G9GiDnyKaeXaZqet19rqFoobQ7ChDTN8iz6FiRv_nX02qMK4y1JLtFZHQV0S-WEif7U6MnjOGgGnOi3eCEUMU6neA__WNvG_myANChnUXgQfR",
  },
  {
    id: "algorithm-master",
    tag: "Algorithms",
    tagClass: "bg-secondary-fixed text-on-secondary-fixed",
    date: "Nov 02",
    title: "Algorithm Master",
    description: "Test your logical thinking and algorithmic problem-solving skills in this intense sprint.",
    prize: "Swag Kit",
    difficulty: "Expert",
    image: null, // gradient + icon
  },
  {
    id: "ui-design-sprint",
    tag: "Design",
    tagClass: "bg-surface-container-highest text-on-surface",
    date: "Dec 10",
    title: "UI Design Sprint",
    description: "Craft stunning and intuitive user interfaces. Judged on creativity, usability, and execution.",
    prize: "Pro Licenses",
    difficulty: "Medium",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe1n76r0AaWQ6mNjcVKmbfZmM59Nh3misS_bJAqjn8WPdthLA2tdaEzGzUKcnp7CXQweg2vuIy4aQTgqrn0J6k6c0lH3lf0f0O4eGAueqlpGskc94uNc2TxMEcgTG7tCN_1v0_qG3HW67SL71MZKkGzr-ioIhblDrZaI8AsbJUStLFL1BIN1jdo_awZld3fsWHxALYYb2kW6UQfTb9xuXNjFz6ijxrQyiexnebe99vzcJiGJghTcPew-Xhn7eAVYOBF3EgzQ0Ifc2C",
  },
];

export default function CompetitionsGrid() {
  return (
    <section className="max-w-container-max mx-auto w-full px-gutter py-lg flex flex-col gap-lg">
      {/* Tabs */}
      <div className="flex gap-md border-b border-surface-variant mb-md w-full overflow-x-auto">
        <button className="pb-sm border-b-2 border-primary text-primary font-bold px-sm whitespace-nowrap">
          Upcoming
        </button>
        <button className="pb-sm text-on-surface-variant hover:text-primary transition-colors px-sm whitespace-nowrap">
          Active
        </button>
        <button className="pb-sm text-on-surface-variant hover:text-primary transition-colors px-sm whitespace-nowrap">
          Previous
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
        {competitions.map((comp) => (
          <Link
            key={comp.title}
            href={`/Competitions/${comp.id}`}
            className="bg-surface-container-lowest border border-surface-variant rounded-xl overflow-hidden hover:shadow-[0px_10px_25px_rgba(13,0,77,0.05)] transition-all duration-300 flex flex-col group cursor-pointer"
          >
            {/* Card Image */}
            <div className="h-48 w-full bg-surface-container overflow-hidden relative">
              {comp.image ? (
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={comp.title}
                  src={comp.image}
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-container to-secondary-container opacity-90"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-[64px]" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                  </div>
                </>
              )}
            </div>

            {/* Card Body */}
            <div className="p-md flex flex-col flex-grow gap-sm">
              <div className="flex justify-between items-start">
                <span className={`${comp.tagClass} px-sm py-xs rounded-full font-label-sm text-label-sm`}>
                  {comp.tag}
                </span>
                <span className="text-on-surface-variant font-label-sm text-label-sm flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                  {comp.date}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mt-sm">{comp.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow line-clamp-2">{comp.description}</p>
              <div className="flex justify-between items-center mt-auto pt-sm border-t border-surface-variant">
                <div className="flex items-center gap-xs text-secondary-container">
                  <span className="material-symbols-outlined text-[20px]">emoji_events</span>
                  <span className="font-bold text-body-md">{comp.prize}</span>
                </div>
                <span className="text-on-surface-variant font-label-sm text-label-sm">Difficulty: {comp.difficulty}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
