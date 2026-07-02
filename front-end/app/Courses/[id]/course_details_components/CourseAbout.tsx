export default function CourseAbout() {
  return (
    <section className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-lg shadow-sm hover:shadow-md transition-shadow">
      <h2 className="font-headline-lg text-headline-lg text-primary mb-md flex items-center gap-sm">
        <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
        About Course
      </h2>
      <div className="space-y-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
        <p>This deep dive into React architecture goes beyond the basics. We explore advanced state management paradigms, complex custom hook composition, and critical performance optimization strategies necessary for large-scale applications.</p>
        <p>You will transition from simply writing components to engineering robust, reusable, and highly performant front-end systems, preparing you for senior-level technical challenges in the industry.</p>
      </div>
    </section>
  );
}
