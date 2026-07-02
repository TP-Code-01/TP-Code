import RegistrationForm from "./registration_components/RegistrationForm";

export default function RegisterPage() {
  return (
    <main className="pt-[100px] pb-xl px-gutter min-h-screen flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-lg max-w-3xl w-full">
        <h1 className="font-headline-lg text-headline-lg text-primary mb-sm">Register for Hackathon 2024</h1>
        <h2 className="font-arabic-headline text-arabic-headline text-on-surface-variant" dir="rtl">التسجيل في هاكاثون 2024</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-sm">
          Complete the form below to secure your team's spot in this year's premier coding competition.
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="w-full max-w-4xl mb-lg">
        <div className="flex justify-between items-center relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-surface-variant -z-10 rounded-full"></div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-1 bg-secondary-container -z-10 rounded-full transition-all duration-500"></div>
          {[
            { step: 1, label: "Team", active: true },
            { step: 2, label: "Leader", active: false },
            { step: 3, label: "Members", active: false },
          ].map(({ step, label, active }) => (
            <div key={step} className="flex flex-col items-center gap-xs">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md
                ${active
                  ? "bg-secondary-container text-on-secondary-container"
                  : "bg-surface text-on-surface-variant border-2 border-outline-variant bg-surface-container-lowest"
                }`}
              >
                {step}
              </div>
              <span className={`font-label-sm text-label-sm ${active ? "text-on-surface" : "text-outline"}`}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <RegistrationForm />
    </main>
  );
}
