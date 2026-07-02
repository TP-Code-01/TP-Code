"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CompetitionDetailsHero() {
  const params = useParams();
  const id = params?.id as string;

  return (
    <section className="max-w-container-max mx-auto px-gutter py-xl mt-md">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg items-center">
        {/* Left: Info */}
        <div className="flex flex-col gap-md">
          <div className="inline-flex items-center gap-xs bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full w-fit">
            <span className="material-symbols-outlined text-sm">trophy</span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider">Major Event</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-primary">TP Code Hackathon 2024</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Join us for 48 hours of intense coding, innovation, and collaboration. Build solutions for the future and compete for incredible prizes.
          </p>
          {/* Meta badges */}
          <div className="flex flex-wrap gap-sm mt-sm">
            <div className="flex items-center gap-xs bg-surface-container px-4 py-2 rounded-lg border border-outline-variant">
              <span className="material-symbols-outlined text-secondary">calendar_today</span>
              <span className="font-label-sm text-label-sm">Oct 15 - Oct 17</span>
            </div>
            <div className="flex items-center gap-xs bg-surface-container px-4 py-2 rounded-lg border border-outline-variant">
              <span className="material-symbols-outlined text-error">local_fire_department</span>
              <span className="font-label-sm text-label-sm">Difficulty: Hard</span>
            </div>
            <div className="flex items-center gap-xs bg-surface-container px-4 py-2 rounded-lg border border-outline-variant">
              <span className="material-symbols-outlined text-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
              <span className="font-label-sm text-label-sm font-bold">$5,000 Prize Pool</span>
            </div>
          </div>
          <div className="mt-md">
            <Link
              href={`/Competitions/${id}/register`}
              className="bg-[#0D004D] text-on-primary px-8 py-4 rounded-lg font-headline-md text-headline-md shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-sm w-fit"
            >
              Register Team
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
        {/* Right: Image */}
        <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl border border-surface-variant">
          <div
            className="bg-cover bg-center w-full h-full"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBNs5R2r_9w6gHb2dBroIKtRZh1Gyaw2ULOVlpkA1OlJDGJtJliO98Np4tSyXqAStNHp-cJPPx98D5pxEy7LT2W0_oBrH1D4UubxQdkYvK-4t_Ltnde1BdC95jGlA1Z8ojcy4NTYEKIki5EfBDgDjd9x21VFsom8xeNQAz31WrN4xb-6bLPuM38rd1wVe0Wr4W6stP8mmPnE_dlW17CTUR923NAutxA0u8PEHIHz0JLflOx8SjB6y1nqcQ1Q4NhdB_dRyUhC_AB1kP4')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
