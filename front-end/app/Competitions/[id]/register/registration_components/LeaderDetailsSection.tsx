export default function LeaderDetailsSection() {
  const inputClass =
    "px-md py-sm rounded-lg border border-outline-variant bg-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent font-body-md text-body-md transition-shadow w-full";

  return (
    <section className="flex flex-col gap-md border-b border-surface-variant pb-xl">
      <div className="flex items-center gap-sm text-primary mb-xs">
        <span className="material-symbols-outlined text-[28px]">person_check</span>
        <h3 className="font-headline-md text-headline-md">
          2. Leader Details <span className="font-arabic-body text-[20px] text-on-surface-variant ml-xs">بيانات القائد</span>
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        {[
          { label: "Full Name", ar: "الاسم الكامل", type: "text" },
          { label: "Email Address", ar: "البريد الإلكتروني", type: "email" },
          { label: "Phone Number", ar: "رقم الهاتف", type: "tel" },
          { label: "National ID / Student ID", ar: "الرقم الوطني / الجامعي", type: "text" },
        ].map((field) => (
          <div key={field.label} className="flex flex-col gap-xs">
            <label className="font-label-sm text-label-sm text-on-surface-variant flex justify-between">
              <span>{field.label}</span>
              <span className="font-arabic-body text-[12px]" dir="rtl">{field.ar}</span>
            </label>
            <input className={inputClass} type={field.type} />
          </div>
        ))}
      </div>
    </section>
  );
}
