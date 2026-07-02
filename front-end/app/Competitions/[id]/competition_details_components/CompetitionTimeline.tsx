const timeline = [
  {
    date: "Oct 15 - Kickoff",
    dotColor: "bg-secondary",
    events: [
      { time: "09:00 AM", label: "Opening Ceremony" },
      { time: "10:00 AM", label: "Hacking Begins" },
    ],
  },
  {
    date: "Oct 16 - Deep Dive",
    dotColor: "bg-secondary-container",
    events: [
      { time: "02:00 PM", label: "Mid-point Check-in & Mentorship" },
    ],
  },
  {
    date: "Oct 17 - Submission",
    dotColor: "bg-error",
    events: [
      { time: "10:00 AM", label: "Hacking Ends / Submissions Due" },
      { time: "04:00 PM", label: "Closing Ceremony & Awards" },
    ],
  },
];

export default function CompetitionTimeline() {
  return (
    <section className="max-w-container-max mx-auto px-gutter py-xl">
      <h2 className="font-display-lg text-display-lg text-center text-primary mb-xl">Event Timeline</h2>
      <div className="relative border-l-2 border-outline-variant ml-4 space-y-lg">
        {timeline.map((day) => (
          <div key={day.date} className="relative pl-md">
            <div className={`absolute w-4 h-4 ${day.dotColor} rounded-full -left-[9px] top-1 border-4 border-surface`}></div>
            <h3 className="font-headline-md text-headline-md text-primary">{day.date}</h3>
            <div className="bg-surface-container-low p-md rounded-lg mt-sm border border-surface-variant space-y-xs">
              {day.events.map((ev) => (
                <div key={ev.time} className="flex justify-between items-center">
                  <span className="font-label-sm text-label-sm font-bold text-secondary">{ev.time}</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{ev.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
