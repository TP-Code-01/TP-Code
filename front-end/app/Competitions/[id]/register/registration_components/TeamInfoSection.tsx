export default function TeamInfoSection() {
  const inputClass =
    "px-md py-sm rounded-lg border border-outline-variant bg-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent font-body-md text-body-md transition-shadow w-full";

  return (
    <section className="flex flex-col gap-md border-b border-surface-variant pb-xl">
      <div className="flex items-center gap-sm text-primary mb-xs">
        <span className="material-symbols-outlined text-[28px]">groups</span>
        <h3 className="font-headline-md text-headline-md">
          1. Team Information <span className="font-arabic-body text-[20px] text-on-surface-variant ml-xs">معلومات الفريق</span>
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        <div className="flex flex-col gap-xs">
          <label className="font-label-sm text-label-sm text-on-surface-variant flex justify-between">
            <span>Team Name</span>
            <span className="font-arabic-body text-[12px]" dir="rtl">اسم الفريق</span>
          </label>
          <input className={inputClass} placeholder="e.g. Binary Bandits" type="text" />
        </div>
        <div className="flex flex-col gap-xs">
          <label className="font-label-sm text-label-sm text-on-surface-variant flex justify-between">
            <span>University / Institution</span>
            <span className="font-arabic-body text-[12px]" dir="rtl">الجامعة / المؤسسة</span>
          </label>
          <input className={inputClass} type="text" />
        </div>
        <div className="flex flex-col gap-xs md:col-span-2">
          <label className="font-label-sm text-label-sm text-on-surface-variant flex justify-between">
            <span>Team Level</span>
            <span className="font-arabic-body text-[12px]" dir="rtl">مستوى الفريق</span>
          </label>
          <select className={`${inputClass} appearance-none text-on-surface`}>
            <option value="">Select Level...</option>
            <option value="beginner">Beginner (1st - 2nd Year)</option>
            <option value="intermediate">Intermediate (3rd - 4th Year)</option>
            <option value="advanced">Advanced (Postgrad / Professional)</option>
          </select>
        </div>
      </div>
    </section>
  );
}
