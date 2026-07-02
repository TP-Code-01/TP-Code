"use client";
import { useState } from "react";

const modules = [
  {
    tag: "W01",
    title: "Advanced Hooks & Context",
    lessons: ["Deep dive into useEffect dependencies.", "Building complex Custom Hooks.", "Context API for scalable state distribution."],
    isFinal: false
  },
  {
    tag: "W02",
    title: "Component Patterns",
    lessons: ["Compound Components.", "Control Props pattern.", "Custom hook state reducers."],
    isFinal: false
  },
  {
    tag: "W03-08",
    title: "Performance, Testing & Final Project",
    desc: "Comprehensive coverage of rendering optimization, concurrent features, and end-to-end testing.",
    isFinal: true
  }
];

export default function CourseCurriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section>
      <h2 className="font-headline-lg text-headline-lg text-primary mb-md flex items-center gap-sm">
        <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>view_list</span>
        Curriculum
      </h2>
      <div className="border border-outline-variant/50 rounded-xl bg-surface-container-lowest overflow-hidden shadow-sm">
        {modules.map((mod, idx) => (
          <div key={idx} className="accordion-item border-b border-outline-variant/30 last:border-0">
            <button
              className="w-full px-lg py-md flex justify-between items-center bg-surface-container-lowest hover:bg-surface/50 transition-colors text-left group"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <div className="flex items-center gap-md">
                <span className={`font-label-sm text-label-sm px-sm py-xs rounded-md w-12 text-center transition-colors ${mod.isFinal ? 'text-outline bg-surface-variant w-16' : 'text-primary bg-primary/10 group-hover:bg-primary group-hover:text-on-primary'}`}>
                  {mod.tag}
                </span>
                <span className={`font-headline-md text-body-lg font-bold transition-colors ${mod.isFinal ? 'text-outline-variant group-hover:text-on-background' : 'text-on-background group-hover:text-primary'}`}>
                  {mod.title}
                </span>
              </div>
              <span
                className="material-symbols-outlined text-outline chevron group-hover:text-primary transition-transform"
                style={{ transform: openIndex === idx ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                expand_more
              </span>
            </button>
            {openIndex === idx && (
              <div className={`px-lg ${mod.isFinal ? 'ml-[88px]' : 'ml-[72px]'} text-on-surface-variant font-body-md text-body-md bg-surface-container-lowest pb-md`}>
                {mod.isFinal ? (
                  <p>{mod.desc}</p>
                ) : (
                  <ul className="list-disc pl-md space-y-sm pt-sm">
                    {mod.lessons?.map((lesson, i) => <li key={i}>{lesson}</li>)}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
