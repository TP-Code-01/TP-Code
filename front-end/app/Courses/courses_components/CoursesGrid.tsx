import Link from "next/link";

export default function CoursesGrid() {
  return (
    <section className="py-xl px-gutter max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
        
        {/* Card 1: React */}
        <Link href="/Courses/react-advanced" className="block group">
          <article className="h-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl overflow-hidden hover:shadow-[0_10px_25px_rgba(13,0,77,0.05)] transition-all duration-300 flex flex-col">
            <div className="h-48 relative overflow-hidden bg-surface-variant">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt="React workspace" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3mpuUY-c8Pc2Cru8lawrjpNjuGpm_QzEIwbjMGDj6DwBBrkekLCttcNfFf6roxb-hFRuMIYJ3_y0kLF7qeMs0wRvQnWHGpqn9Ur9n5dvsmxeVRQhpDgJc6mpGRFIpb1SS0Gh082oepo8Z7pKhL-6u940_nldnTE4q1xAIWAJgb81XKO880NqjcJNjCh2yXnmT2icwmZBESPdDso_cMBwipOVyqWFv5NPZvwV1SgGQ8KMU3a29ZUB4vOH8apdVRpjNV3DJJT8QEiKf" 
              />
              <div className="absolute top-4 ltr:right-4 rtl:left-4 bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-full font-label-sm text-label-sm text-primary uppercase">
                <span className="lang-en">Intermediate</span><span className="lang-ar">متوسط</span>
              </div>
            </div>
            <div className="p-md flex flex-col flex-grow">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-xs bilingual-heading group-hover:text-primary transition-colors">
                <span className="lang-en">Advanced React Patterns</span>
                <span className="lang-ar">أنماط React المتقدمة</span>
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow bilingual-body">
                <span className="lang-en">Master state management, custom hooks, and performance optimization in modern React applications.</span>
                <span className="lang-ar">أتقن إدارة الحالة والخطافات المخصصة وتحسين الأداء في تطبيقات React الحديثة.</span>
              </p>
              <div className="flex items-center gap-sm text-on-surface-variant mb-md font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                <span className="lang-en">8 Weeks</span><span className="lang-ar">8 أسابيع</span>
              </div>
              <button className="w-full py-3 bg-secondary/10 text-secondary border border-secondary rounded-DEFAULT transition-colors font-body-md text-body-md font-semibold mt-auto group-hover:bg-secondary group-hover:text-on-secondary">
                <span className="lang-en">View Details</span><span className="lang-ar">عرض التفاصيل</span>
              </button>
            </div>
          </article>
        </Link>

        {/* Card 2: Python */}
        <Link href="/Courses/python-basics" className="block group">
          <article className="h-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl overflow-hidden hover:shadow-[0_10px_25px_rgba(13,0,77,0.05)] transition-all duration-300 flex flex-col">
            <div className="h-48 relative overflow-hidden bg-surface-variant">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt="Data structures visualization" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdlJC5Qcqwy4vOKY31SV5ZpnTM7Wdu3MjrjTF7M2vK49KKtmrTy-61hKMeh3IkiENTM8aveYt_eXej-3ig1sQbWDEG0iYejvy9p_LOFdRLFo2oHYMsLsICmb8JpPI5IISbOR-1wSQQBAt3JmBslP_9-l05sHfgYlbOrV8uiqlGEcyn0sn70ymTh05q1zUl8CgyfgtxUkE7MeG0Zu-gwA6pVkv-NermpC-mFkTv_yXMtWi46qn4ohjmgpQpR-k3-Sk0N6kal0NDs-9k" 
              />
              <div className="absolute top-4 ltr:right-4 rtl:left-4 bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-full font-label-sm text-label-sm text-secondary uppercase">
                <span className="lang-en">Beginner</span><span className="lang-ar">مبتدئ</span>
              </div>
            </div>
            <div className="p-md flex flex-col flex-grow">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-xs bilingual-heading group-hover:text-primary transition-colors">
                <span className="lang-en">Python for Problem Solving</span>
                <span className="lang-ar">بايثون لحل المشكلات</span>
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow bilingual-body">
                <span className="lang-en">Build a strong foundation in logic and algorithms using Python. Essential for competitive programming.</span>
                <span className="lang-ar">قم ببناء أساس قوي في المنطق والخوارزميات باستخدام بايثون. ضروري للبرمجة التنافسية.</span>
              </p>
              <div className="flex items-center gap-sm text-on-surface-variant mb-md font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                <span className="lang-en">10 Weeks</span><span className="lang-ar">10 أسابيع</span>
              </div>
              <button className="w-full py-3 bg-secondary/10 text-secondary border border-secondary rounded-DEFAULT transition-colors font-body-md text-body-md font-semibold mt-auto group-hover:bg-secondary group-hover:text-on-secondary">
                <span className="lang-en">View Details</span><span className="lang-ar">عرض التفاصيل</span>
              </button>
            </div>
          </article>
        </Link>

        {/* Card 3: Flutter */}
        <Link href="/Courses/flutter-mobile" className="block group">
          <article className="h-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl overflow-hidden hover:shadow-[0_10px_25px_rgba(13,0,77,0.05)] transition-all duration-300 flex flex-col">
            <div className="h-48 relative overflow-hidden bg-surface-variant">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt="Mobile application design" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0Dz6dXVYuqAt17dXMS5r2xzEvi86Nze8MYut_W-0FoljbXX2Waoeo1pSw7Q33iz9gFzNCZNN42SILfk3G7-GWNN5YNm3Q_68nfRjBJk3cGbLs5OX4GdRkbHLsbo9BFt60HwNYFM1IBbHehMRYLBsmXoVAAAeNt5CtxdkZ1EoHfrL9PSI8ozQpY2ypoKZt3EOAUHyJBmv5oSGlDjCOdilgkp_pvdtqOnH8GgBZWw7Mo90Nrvwmlc25OjARpACH5KydjiTw7O988g8i" 
              />
              <div className="absolute top-4 ltr:right-4 rtl:left-4 bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-full font-label-sm text-label-sm text-primary uppercase">
                <span className="lang-en">Intermediate</span><span className="lang-ar">متوسط</span>
              </div>
            </div>
            <div className="p-md flex flex-col flex-grow">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-xs bilingual-heading group-hover:text-primary transition-colors">
                <span className="lang-en">Cross-Platform with Flutter</span>
                <span className="lang-ar">تطبيقات متعددة المنصات مع فلاتر</span>
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow bilingual-body">
                <span className="lang-en">Design and deploy high-performance mobile applications for iOS and Android from a single codebase.</span>
                <span className="lang-ar">تصميم ونشر تطبيقات الهاتف المحمول عالية الأداء لنظامي التشغيل iOS و Android من قاعدة بيانات واحدة.</span>
              </p>
              <div className="flex items-center gap-sm text-on-surface-variant mb-md font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                <span className="lang-en">12 Weeks</span><span className="lang-ar">12 أسبوع</span>
              </div>
              <button className="w-full py-3 bg-secondary/10 text-secondary border border-secondary rounded-DEFAULT transition-colors font-body-md text-body-md font-semibold mt-auto group-hover:bg-secondary group-hover:text-on-secondary">
                <span className="lang-en">View Details</span><span className="lang-ar">عرض التفاصيل</span>
              </button>
            </div>
          </article>
        </Link>
      </div>
    </section>
  );
}
