"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Do I need to be a professional developer?",
    a: "No! We welcome students of all skill levels. This is a learning experience as much as it is a competition. Mentors will be available to help beginners.",
  },
  {
    q: "Is the event in-person or online?",
    a: "This year's hackathon is a hybrid event. You can join us at our main campus hub or participate fully online via our Discord community.",
  },
  {
    q: "What if I don't have a team?",
    a: "Don't worry! We will host a team-building session on the first day to help solo participants find teammates with complementary skills.",
  },
];

export default function CompetitionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-container-max mx-auto px-gutter py-xl">
      <div className="text-center mb-lg">
        <h2 className="font-display-lg text-display-lg text-primary">Frequently Asked Questions</h2>
      </div>
      <div className="max-w-3xl mx-auto space-y-sm">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-surface-variant rounded-lg bg-surface">
            <button
              className="w-full flex justify-between items-center p-md focus:outline-none"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="font-headline-md text-headline-md text-primary text-left">{faq.q}</span>
              <span
                className="material-symbols-outlined text-on-surface-variant transition-transform duration-200"
                style={{ transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                expand_more
              </span>
            </button>
            {openIndex === i && (
              <div className="p-md pt-0 text-on-surface-variant font-body-md text-body-md border-t border-surface-variant">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
