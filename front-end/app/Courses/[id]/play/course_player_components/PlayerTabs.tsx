export default function PlayerTabs() {
  return (
    <section className="bg-surface-container-lowest rounded-xl shadow-[0px_10px_25px_rgba(13,0,77,0.05)] border border-surface-variant overflow-hidden">
      {/* Tab Navigation */}
      <div className="flex border-b border-surface-variant overflow-x-auto hide-scrollbar">
        <button className="px-6 py-4 font-label-sm text-label-sm font-bold text-primary border-b-2 border-primary whitespace-nowrap">
          Overview
        </button>
        <button className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant hover:text-primary whitespace-nowrap">
          Resources (2)
        </button>
        <button className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant hover:text-primary whitespace-nowrap">
          Notes
        </button>
        <button className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant hover:text-primary whitespace-nowrap">
          Discussion
        </button>
      </div>
      {/* Tab Content: Overview */}
      <div className="p-6">
        <h3 className="font-headline-md text-headline-md mb-4">About this lesson</h3>
        <p className="text-on-surface-variant font-body-md mb-6 leading-relaxed">
          In this module, we dive deep into the mechanics of custom React Hooks. You will learn how to extract complex stateful logic into reusable functions, improving the architecture and readability of your React applications. We cover `useReducer` for complex state, and `useLayoutEffect` vs `useEffect`.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-low p-4 rounded-lg border border-surface-variant flex gap-3 items-start">
            <span className="material-symbols-outlined text-secondary-container mt-1">school</span>
            <div>
              <h4 className="font-label-sm text-label-sm font-bold mb-1">Learning Objectives</h4>
              <ul className="text-sm text-on-surface-variant space-y-1 list-disc pl-4">
                <li>Understand custom hook architecture</li>
                <li>Implement complex state management</li>
                <li>Optimize component re-renders</li>
              </ul>
            </div>
          </div>
          <div className="bg-surface-container-low p-4 rounded-lg border border-surface-variant flex gap-3 items-start">
            <span className="material-symbols-outlined text-secondary-container mt-1">code</span>
            <div>
              <h4 className="font-label-sm text-label-sm font-bold mb-1">Prerequisites</h4>
              <ul className="text-sm text-on-surface-variant space-y-1 list-disc pl-4">
                <li>Basic understanding of useState</li>
                <li>Familiarity with useEffect</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
