export default function OfferingsSection() {
  return (
    <section className="px-gutter py-xl max-w-container-max mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
        {/* Course Card */}
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl p-md flex flex-col items-center text-center card-hover">
          <span className="material-symbols-outlined text-[48px] text-[#0D004D] mb-sm" style={{ fontVariationSettings: "'FILL' 0" }}>school</span>
          <h3 className="font-headline-md text-headline-md text-primary mb-xs">Courses</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">Intensive programming bootcamps.</p>
        </div>

        {/* Competitions Card */}
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl p-md flex flex-col items-center text-center card-hover">
          <span className="material-symbols-outlined text-[48px] text-[#0D004D] mb-sm" style={{ fontVariationSettings: "'FILL' 0" }}>emoji_events</span>
          <h3 className="font-headline-md text-headline-md text-primary mb-xs">Competitions</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">Hackathons and algorithmic challenges.</p>
        </div>

        {/* Workshops Card */}
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl p-md flex flex-col items-center text-center card-hover">
          <span className="material-symbols-outlined text-[48px] text-[#0D004D] mb-sm" style={{ fontVariationSettings: "'FILL' 0" }}>co_present</span>
          <h3 className="font-headline-md text-headline-md text-primary mb-xs">Workshops</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">Hands-on sessions with industry pros.</p>
        </div>

        {/* Community Card */}
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl p-md flex flex-col items-center text-center card-hover">
          <span className="material-symbols-outlined text-[48px] text-[#0D004D] mb-sm" style={{ fontVariationSettings: "'FILL' 0" }}>groups</span>
          <h3 className="font-headline-md text-headline-md text-primary mb-xs">Community</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">A network of passionate tech enthusiasts.</p>
        </div>
      </div>
    </section>
  );
}
