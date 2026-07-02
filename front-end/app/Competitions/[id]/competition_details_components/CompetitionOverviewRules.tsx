export default function CompetitionOverviewRules() {
  return (
    <section className="max-w-container-max mx-auto px-gutter py-xl bg-surface-container-low rounded-3xl my-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {/* Overview */}
        <div className="md:col-span-2 bg-surface p-lg rounded-xl border border-surface-variant shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-sm mb-md">
            <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary flex items-center justify-center">
              <span className="material-symbols-outlined">lightbulb</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary">Overview</h2>
          </div>
          <h3 className="font-headline-md text-headline-md text-secondary mb-sm">Theme: Building for the Future</h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This year's hackathon focuses on sustainable technology, AI-driven solutions, and accessible educational tools. We are looking for projects that not only demonstrate technical excellence but also solve real-world problems. Whether you are building a smart-city dashboard or an inclusive learning platform, your code should aim to make a positive impact.
          </p>
        </div>
        {/* Rules */}
        <div className="bg-surface p-lg rounded-xl border border-surface-variant shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-sm mb-md">
            <div className="w-10 h-10 rounded-full bg-error-container text-on-error-container flex items-center justify-center">
              <span className="material-symbols-outlined">gavel</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary">Rules</h2>
          </div>
          <ul className="space-y-sm">
            {[
              "Teams must consist of 2-4 members.",
              "All code must be written during the 48-hour event window.",
              "Use of open-source libraries is permitted (and encouraged).",
              "Final submissions must include a working demo and source code repository.",
            ].map((rule) => (
              <li key={rule} className="flex items-start gap-xs">
                <span className="material-symbols-outlined text-secondary text-sm mt-1">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface-variant">{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
