export default function CompetitionPrizes() {
  return (
    <section className="bg-inverse-surface text-on-primary py-xl">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-xl">
          <h2 className="font-display-lg text-display-lg text-surface-bright">Prize Breakdown</h2>
          <p className="font-body-lg text-body-lg text-surface-variant/80 mt-sm">$5,000 Total Pool</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg items-end">
          {/* 2nd Place */}
          <div className="bg-surface-container-highest/10 border border-outline-variant/30 p-lg rounded-t-2xl text-center backdrop-blur-sm order-2 md:order-1 md:translate-y-8">
            <span className="material-symbols-outlined text-4xl text-outline-variant mb-sm block" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
            <h3 className="font-headline-lg text-headline-lg text-surface-bright mb-xs">2nd Place</h3>
            <p className="font-display-lg text-display-lg text-tertiary-fixed-dim">$1,500</p>
            <p className="font-body-md text-body-md text-surface-variant/70 mt-sm">Plus premium developer tools subscriptions.</p>
          </div>
          {/* 1st Place */}
          <div className="bg-surface-container-highest/20 border border-outline-variant/50 p-xl rounded-t-3xl text-center backdrop-blur-md shadow-[0_0_40px_rgba(183,234,255,0.1)] order-1 md:order-2 z-10 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-tertiary-fixed text-on-tertiary-fixed rounded-full flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-surface-bright mb-xs mt-sm">1st Place</h3>
            <p className="font-display-lg text-display-lg text-tertiary-fixed">$2,500</p>
            <p className="font-body-md text-body-md text-surface-variant/70 mt-sm">Plus exclusive mentorship sessions with industry leaders.</p>
          </div>
          {/* 3rd Place */}
          <div className="bg-surface-container-highest/10 border border-outline-variant/30 p-lg rounded-t-2xl text-center backdrop-blur-sm order-3 md:translate-y-12">
            <span className="material-symbols-outlined text-4xl text-[#CD7F32] mb-sm block" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
            <h3 className="font-headline-lg text-headline-lg text-surface-bright mb-xs">3rd Place</h3>
            <p className="font-display-lg text-display-lg text-tertiary-fixed-dim">$1,000</p>
            <p className="font-body-md text-body-md text-surface-variant/70 mt-sm">Plus TP Code exclusive swag bags.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
