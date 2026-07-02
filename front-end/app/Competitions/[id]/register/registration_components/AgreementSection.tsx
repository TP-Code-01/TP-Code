import Link from "next/link";

export default function AgreementSection() {
  return (
    <section className="flex flex-col gap-sm">
      <label className="flex items-start gap-sm cursor-pointer group">
        <div className="relative flex items-center justify-center mt-1">
          <input
            className="peer appearance-none w-5 h-5 border-2 border-outline rounded-sm bg-surface checked:bg-secondary checked:border-secondary transition-colors focus:ring-2 focus:ring-secondary-container focus:outline-none"
            type="checkbox"
          />
          <span className="material-symbols-outlined absolute text-on-secondary text-[16px] opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity">check</span>
        </div>
        <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface transition-colors">
          I agree to the Hackathon <Link className="text-secondary hover:underline" href="/terms">Terms and Conditions</Link> and the Code of Conduct.<br />
          <span className="font-arabic-body text-[14px]" dir="rtl">أوافق على شروط وأحكام الهاكاثون ومدونة السلوك.</span>
        </span>
      </label>
    </section>
  );
}
