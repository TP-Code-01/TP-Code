export default function StatsSection() {
  return (
    <section className="bg-[#0D004D] px-gutter py-xl">
      <div className="max-w-container-max mx-auto grid grid-cols-2 md:grid-cols-4 gap-md text-center">
        <div className="space-y-xs">
          <div className="font-display-lg text-display-lg text-[#00D1FF]">1000+</div>
          <div className="font-body-md text-body-md text-white/80 uppercase tracking-wider">Students</div>
        </div>
        <div className="space-y-xs">
          <div className="font-display-lg text-display-lg text-[#00D1FF]">20+</div>
          <div className="font-body-md text-body-md text-white/80 uppercase tracking-wider">Courses</div>
        </div>
        <div className="space-y-xs">
          <div className="font-display-lg text-display-lg text-[#00D1FF]">15+</div>
          <div className="font-body-md text-body-md text-white/80 uppercase tracking-wider">Competitions</div>
        </div>
        <div className="space-y-xs">
          <div className="font-display-lg text-display-lg text-[#00D1FF]">50+</div>
          <div className="font-body-md text-body-md text-white/80 uppercase tracking-wider">Events</div>
        </div>
      </div>
    </section>
  );
}
