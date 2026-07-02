export default function CoursesHero() {
  return (
    <section className="bg-surface-container-low py-xl px-gutter relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>
      
      <div className="max-w-container-max mx-auto text-center relative z-10">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-md bilingual-heading">
          <span className="lang-en">Master the Skills of Tomorrow</span>
          <span className="lang-ar">أتقن مهارات المستقبل</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[600px] mx-auto mb-lg bilingual-body">
          <span className="lang-en">Elevate your technical proficiency with our precision-engineered curriculum. Dive deep into modern frameworks and problem-solving methodologies.</span>
          <span className="lang-ar">ارتقِ بكفاءتك التقنية من خلال مناهجنا المصممة بدقة. تعمق في أطر العمل الحديثة ومنهجيات حل المشكلات.</span>
        </p>
      </div>
    </section>
  );
}
