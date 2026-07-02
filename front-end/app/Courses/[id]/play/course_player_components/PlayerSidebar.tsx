"use client";
import { useState } from "react";

export default function PlayerSidebar() {
  const [openModule, setOpenModule] = useState<number | null>(2);
  const [activeVideo, setActiveVideo] = useState<string>("2-1");

  return (
    <aside className="w-full lg:w-1/3 flex flex-col gap-6">
      {/* Progress Card */}
      <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_10px_25px_rgba(13,0,77,0.05)] border border-surface-variant">
        <h3 className="font-headline-md text-headline-md mb-4 text-on-background">Course Progress</h3>
        <div className="flex items-center justify-between mb-2">
          <span className="font-label-sm text-label-sm text-on-surface-variant">45% Completed</span>
          <span className="font-label-sm text-label-sm font-bold text-secondary-container">5/12 Lessons</span>
        </div>
        {/* Progress Bar */}
        <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
          <div className="h-full bg-[#0D004D] rounded-full transition-all duration-500" style={{ width: "45%" }}></div>
        </div>
      </div>

      {/* Curriculum List */}
      <div className="bg-surface-container-lowest rounded-xl shadow-[0px_10px_25px_rgba(13,0,77,0.05)] border border-surface-variant flex-grow flex flex-col overflow-hidden max-h-[800px]">
        <div className="p-4 border-b border-surface-variant bg-surface-container-low/50">
          <h3 className="font-headline-md text-headline-md text-on-background">Curriculum</h3>
        </div>
        <div className="overflow-y-auto flex-grow p-2">
          {/* Section 1 (Completed) */}
          <div className="mb-2">
            <button
              onClick={() => setOpenModule(openModule === 1 ? null : 1)}
              className="w-full flex items-center justify-between p-3 bg-surface hover:bg-surface-container-low transition-colors rounded-lg font-label-sm text-label-sm font-bold text-on-background"
            >
              <span>Module 1: React Fundamentals</span>
              <span className="material-symbols-outlined text-sm">{openModule === 1 ? "expand_less" : "expand_more"}</span>
            </button>
            {openModule === 1 && (
              <div className="pl-2 pr-2 mt-1 space-y-1">
                <button onClick={() => setActiveVideo("1-1")} className={`w-full text-left flex items-start gap-3 p-3 rounded-lg transition-colors group ${activeVideo === "1-1" ? "bg-secondary-fixed/50 border-l-4 border-secondary-container" : "hover:bg-surface-container-low"}`}>
                  <span className={`material-symbols-outlined mt-0.5 ${activeVideo === "1-1" ? "text-secondary-container" : "text-[#0D004D]"}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                    {activeVideo === "1-1" ? "play_circle" : "check_circle"}
                  </span>
                  <div className="flex-grow">
                    <h4 className={`font-body-md text-sm transition-colors ${activeVideo === "1-1" ? "font-bold text-on-primary-fixed" : "text-on-background group-hover:text-primary"}`}>1. The Virtual DOM Explained</h4>
                    <span className="text-xs text-on-surface-variant">10:24</span>
                  </div>
                </button>
                <button onClick={() => setActiveVideo("1-2")} className={`w-full text-left flex items-start gap-3 p-3 rounded-lg transition-colors group ${activeVideo === "1-2" ? "bg-secondary-fixed/50 border-l-4 border-secondary-container" : "hover:bg-surface-container-low"}`}>
                  <span className={`material-symbols-outlined mt-0.5 ${activeVideo === "1-2" ? "text-secondary-container" : "text-[#0D004D]"}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                    {activeVideo === "1-2" ? "play_circle" : "check_circle"}
                  </span>
                  <div className="flex-grow">
                    <h4 className={`font-body-md text-sm transition-colors ${activeVideo === "1-2" ? "font-bold text-on-primary-fixed" : "text-on-background group-hover:text-primary"}`}>2. Component Lifecycle</h4>
                    <span className="text-xs text-on-surface-variant">12:45</span>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Section 2 (Active) */}
          <div className="mb-2">
            <button
              onClick={() => setOpenModule(openModule === 2 ? null : 2)}
              className="w-full flex items-center justify-between p-3 bg-surface hover:bg-surface-container-low transition-colors rounded-lg font-label-sm text-label-sm font-bold text-on-background"
            >
              <span>Module 2: Advanced Patterns</span>
              <span className="material-symbols-outlined text-sm">{openModule === 2 ? "expand_less" : "expand_more"}</span>
            </button>
            {openModule === 2 && (
              <div className="pl-2 pr-2 mt-1 space-y-1">
                <button onClick={() => setActiveVideo("2-1")} className={`w-full text-left flex items-start gap-3 p-3 rounded-lg transition-colors group ${activeVideo === "2-1" ? "bg-secondary-fixed/50 border-l-4 border-secondary-container" : "hover:bg-surface-container-low"}`}>
                  <span className={`material-symbols-outlined mt-0.5 ${activeVideo === "2-1" ? "text-secondary-container" : "text-outline"}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                    {activeVideo === "2-1" ? "play_circle" : "play_circle"}
                  </span>
                  <div className="flex-grow">
                    <h4 className={`font-body-md text-sm transition-colors ${activeVideo === "2-1" ? "font-bold text-on-primary-fixed" : "text-on-background group-hover:text-primary"}`}>1. Introduction to Advanced Hooks</h4>
                    {activeVideo === "2-1" ? (
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-on-primary-fixed-variant font-bold">Now Playing</span>
                        <span className="text-xs text-on-surface-variant">• 15:00</span>
                      </div>
                    ) : (
                      <span className="text-xs text-on-surface-variant">15:00</span>
                    )}
                  </div>
                </button>
                <button disabled className="w-full text-left flex items-start gap-3 p-3 rounded-lg transition-colors group opacity-60 cursor-not-allowed">
                  <span className="material-symbols-outlined text-outline mt-0.5">lock</span>
                  <div className="flex-grow">
                    <h4 className="font-body-md text-sm text-on-background">2. Context API at Scale</h4>
                    <span className="text-xs text-on-surface-variant">22:10</span>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Section 3 (Locked) */}
          <div className="mb-2">
            <button className="w-full flex items-center justify-between p-3 bg-surface hover:bg-surface-container-low transition-colors rounded-lg font-label-sm text-label-sm font-bold text-on-surface-variant opacity-70 cursor-not-allowed">
              <span>Module 3: Performance Optimization</span>
              <span className="material-symbols-outlined text-sm">lock</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
