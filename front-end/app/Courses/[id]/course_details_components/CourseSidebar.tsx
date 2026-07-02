import Link from "next/link";

export default function CourseSidebar({ id }: { id: string }) {
  return (
    <div className="sticky top-[100px] flex flex-col gap-lg mt-[-80px] lg:mt-0 z-30">
      {/* Registration CTA Card */}
      <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-2xl p-lg shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary-container"></div>
        <div className="text-center mb-md mt-sm">
          <span className="font-display-lg text-[56px] leading-none text-primary font-bold block mb-xs">Free</span>
          <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest block font-bold">For TP Code Students</span>
        </div>
        <Link
          href={`/Courses/${id}/play`}
          className="block text-center w-full bg-primary text-on-primary font-headline-md text-body-lg font-bold py-md rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all mb-md"
        >
          Join Next Cohort
        </Link>
        <ul className="space-y-md font-body-md text-body-md text-on-surface-variant border-t border-outline-variant/30 pt-md">
          <li className="flex items-center gap-md">
            <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[18px]">calendar_today</span>
            </div>
            <span className="font-medium text-on-background">Starts: Oct 15, 2024</span>
          </li>
          <li className="flex items-center gap-md">
            <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[18px]">groups</span>
            </div>
            <span className="font-medium text-on-background">Limited to 25 Seats</span>
          </li>
          <li className="flex items-center gap-md">
            <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[18px]">laptop_mac</span>
            </div>
            <span className="font-medium text-on-background">Hybrid Format</span>
          </li>
        </ul>
      </div>

      {/* Instructor Profile */}
      <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-md flex items-center gap-md shadow-sm hover:shadow-md transition-shadow">
        <img
          className="w-[72px] h-[72px] rounded-full object-cover border-4 border-surface"
          alt="Instructor"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe6PxKcnRIeu0n6KBjL4d8gdsWzvBzMrc7kmr3i766rJdg0_G7gn9zqzp9jfQymSs98tbDP_dFMRr0w6sebW0dfVHuNfKV_jm8ThrtBoqHUGtFGYVvwtTEHSCstHPy2yfVVChIaEoQX7j_hkGfh-NTK-QIJdM-5K8Bar2fRl30Dgi-vUlp0qzTuZvQwnZxkilgPz_0509TS-z5AxotYKaH01p3WXPpngE9JlzEHxy9-czmYMi5avdbItZNzGqGwk8prBy0PPY8lbp-"
        />
        <div>
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider block mb-xs font-bold">Lead Instructor</span>
          <h4 className="font-headline-md text-body-lg font-bold text-on-background">Alex Mercer</h4>
          <p className="font-body-md text-body-md text-on-surface-variant text-sm">Senior Dev Team Lead</p>
        </div>
      </div>

      {/* Requirements */}
      <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-md shadow-sm">
        <h4 className="font-headline-md text-body-lg font-bold text-on-background mb-sm flex items-center gap-sm">
          <span className="material-symbols-outlined text-[20px] text-secondary-container">warning</span> Requirements
        </h4>
        <ul className="list-disc pl-md space-y-sm font-body-md text-body-md text-on-surface-variant text-sm">
          <li>Solid understanding of JavaScript ES6+.</li>
          <li>Basic React knowledge (State, Props, simple Hooks).</li>
          <li>Commitment of ~4 hours per week.</li>
        </ul>
      </div>
    </div>
  );
}
