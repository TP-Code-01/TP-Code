export default function TechnicalBackgroundSection() {
  const inputClass =
    "px-md py-sm rounded-lg border border-outline-variant bg-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent font-body-md text-body-md transition-shadow w-full";

  return (
    <section className="flex flex-col gap-md border-b border-surface-variant pb-xl">
      <div className="flex items-center gap-sm text-primary mb-xs">
        <span className="material-symbols-outlined text-[28px]">code_blocks</span>
        <h3 className="font-headline-md text-headline-md">
          4. Technical Background <span className="font-arabic-body text-[20px] text-on-surface-variant ml-xs">الخلفية التقنية</span>
        </h3>
      </div>
      <div className="flex flex-col gap-md">
        <div className="flex flex-col gap-xs">
          <label className="font-label-sm text-label-sm text-on-surface-variant flex justify-between">
            <span>Why do you want to join?</span>
            <span className="font-arabic-body text-[12px]" dir="rtl">لماذا تريد الانضمام؟</span>
          </label>
          <textarea className={`${inputClass} resize-none`} rows={3}></textarea>
        </div>
        <div className="flex flex-col gap-xs">
          <label className="font-label-sm text-label-sm text-on-surface-variant flex justify-between">
            <span>Previous Experience (GitHub, Portfolio, etc.)</span>
            <span className="font-arabic-body text-[12px]" dir="rtl">الخبرة السابقة</span>
          </label>
          <textarea className={`${inputClass} resize-none`} rows={2}></textarea>
        </div>
      </div>
    </section>
  );
}
