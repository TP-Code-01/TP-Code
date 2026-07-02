export default function CoursesFilters() {
  return (
    <section className="py-lg px-gutter max-w-container-max mx-auto border-b border-outline-variant/30">
      <div className="flex flex-col md:flex-row gap-md items-center justify-between">
        {/* Search Bar */}
        <div className="relative w-full md:w-96">
          <span className="absolute top-1/2 -translate-y-1/2 ltr:left-4 rtl:right-4 text-on-surface-variant">
            <span className="material-symbols-outlined">search</span>
          </span>
          <input 
            className="w-full bg-surface border border-outline-variant rounded-full py-3 ltr:pl-12 rtl:pr-12 ltr:pr-4 rtl:pl-4 focus:ring-2 focus:ring-secondary focus:border-secondary transition-shadow outline-none font-body-md text-on-surface" 
            placeholder="Search courses..." 
            type="text" 
          />
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-sm justify-center md:justify-end">
          <button className="px-4 py-2 rounded-full bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-wider transition-all">
            <span className="lang-en">All</span><span className="lang-ar">الكل</span>
          </button>
          <button className="px-4 py-2 rounded-full bg-surface border border-outline-variant text-on-surface hover:border-secondary transition-all font-label-sm text-label-sm uppercase tracking-wider">
            Web
          </button>
          <button className="px-4 py-2 rounded-full bg-surface border border-outline-variant text-on-surface hover:border-secondary transition-all font-label-sm text-label-sm uppercase tracking-wider">
            Mobile
          </button>
          <button className="px-4 py-2 rounded-full bg-surface border border-outline-variant text-on-surface hover:border-secondary transition-all font-label-sm text-label-sm uppercase tracking-wider">
            UI/UX
          </button>
          <button className="px-4 py-2 rounded-full bg-surface border border-outline-variant text-on-surface hover:border-secondary transition-all font-label-sm text-label-sm uppercase tracking-wider">
            <span className="lang-en">Problem Solving</span><span className="lang-ar">حل المشكلات</span>
          </button>
          <button className="px-4 py-2 rounded-full bg-surface border border-outline-variant text-on-surface hover:border-secondary transition-all font-label-sm text-label-sm uppercase tracking-wider">
            <span className="lang-en">Basics</span><span className="lang-ar">أساسيات</span>
          </button>
        </div>
      </div>
    </section>
  );
}
