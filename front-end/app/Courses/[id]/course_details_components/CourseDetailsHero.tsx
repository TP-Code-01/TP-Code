export default function CourseDetailsHero() {
  return (
    <header className="relative overflow-hidden pt-xl pb-[120px] px-gutter bg-primary text-on-primary">
      {/* Abstract Tech Background */}
      <div
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDKnsRlYI9Fo7ucqGFgNKuahXLpy6xkjf53kAeonytTZJI6e3kRszcgahfrRdcvX8ax401S1MMe7yRJxrFnf8-Tv910h2fjQDYPrFGW_NgJwtsPuPVZyOzcPoD9dGHqJn0CdK4RILkZLLPi6jaaogX2OATHBE1cvfv3P-84--IWBjsyavz5DheyJQYs1Mr1aWvCGacmOSWzJd0lpDkBSN37vWx9M1TvBjcXA3Px2hH66Tp_7UDY_oU4uMdEy-Nm82g47arcrhe_UIcU')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "luminosity",
        }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary via-primary/90 to-transparent"></div>
      <div className="max-w-container-max mx-auto relative z-10">
        <div className="flex flex-col gap-md max-w-3xl">
          <div className="flex gap-sm items-center flex-wrap mb-sm">
            <span className="bg-primary-fixed text-primary font-label-sm text-label-sm px-sm py-xs rounded-full uppercase tracking-wider font-bold shadow-sm">
              Intermediate <span className="hidden rtl:inline-block font-arabic-body text-xs font-bold">[متوسط]</span>
            </span>
            <span className="bg-surface/20 text-on-primary font-label-sm text-label-sm px-sm py-xs rounded-full flex items-center gap-xs backdrop-blur-sm border border-surface/10">
              <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>schedule</span> 8 Weeks
            </span>
            <span className="bg-tertiary-fixed text-tertiary-container font-label-sm text-label-sm px-sm py-xs rounded-full flex items-center gap-xs shadow-sm font-bold">
              <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>check_circle</span> Enrollment Open
            </span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-primary">
            Advanced React Patterns
            <span className="block text-primary-fixed-dim font-arabic-headline text-arabic-headline mt-xs opacity-90 rtl:block">
              [أنماط رياكت المتقدمة]
            </span>
          </h1>
          <p className="font-body-lg text-body-lg text-surface-container-high max-w-2xl mt-sm leading-relaxed">
            Master modern state management, custom hooks, and performance optimization techniques to build scalable, enterprise-grade web applications.
            <span className="block mt-sm font-arabic-body text-arabic-body opacity-90 rtl:block">
              [أتقن إدارة الحالة الحديثة، والخطافات المخصصة، وتقنيات تحسين الأداء لبناء تطبيقات ويب قابلة للتطوير على مستوى المؤسسات.]
            </span>
          </p>
        </div>
      </div>
    </header>
  );
}
