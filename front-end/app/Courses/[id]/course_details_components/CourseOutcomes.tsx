const outcomes = [
  {
    icon: "architecture",
    title: "Component Design",
    desc: "Master compound components and render props patterns."
  },
  {
    icon: "speed",
    title: "Performance Tuning",
    desc: "Implement memoization and lazy loading effectively."
  },
  {
    icon: "account_tree",
    title: "State Management",
    desc: "Architect complex state using Context and Reducers."
  },
  {
    icon: "integration_instructions",
    title: "Custom Hooks",
    desc: "Extract and test reusable logic across applications."
  }
];

export default function CourseOutcomes() {
  return (
    <section>
      <h2 className="font-headline-lg text-headline-lg text-primary mb-md flex items-center gap-sm">
        <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
        Learning Outcomes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        {outcomes.map((item) => (
          <div key={item.title} className="bg-surface-container-lowest rounded-xl p-md border border-outline-variant/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
              <span className="material-symbols-outlined text-primary group-hover:text-on-primary transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>{item.icon}</span>
            </div>
            <h3 className="font-headline-md text-body-lg font-bold text-on-background mb-xs group-hover:text-primary transition-colors">{item.title}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
