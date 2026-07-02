export default function TeamHero() {
  return (
    <section className="max-w-container-max mx-auto px-gutter py-xl text-center">
      <div className="inline-flex items-center justify-center space-x-2 bg-surface-container px-4 py-2 rounded-full mb-md shadow-sm">
        <span className="material-symbols-outlined text-primary-container text-sm">group</span>
        <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-wider">The Community</span>
      </div>
      <h1 className="font-display-lg text-display-lg text-primary mb-sm">
        Our Team <span className="font-arabic-headline text-arabic-headline text-primary-container">| فريقنا</span>
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
        Meet the passionate minds driving technical excellence. A collective of forward-thinking students building the future of code, design, and innovation.
      </p>
      <p className="font-arabic-body text-arabic-body text-on-surface-variant max-w-2xl mx-auto mt-2" dir="rtl">
        تعرف على العقول الشغوفة التي تقود التميز التقني. مجموعة من الطلاب ذوي التفكير المستقبلي يبنون مستقبل البرمجة والتصميم والابتكار.
      </p>
    </section>
  );
}
