export default function VideoPlayerSection() {
  return (
    <section className="bg-surface-container-lowest rounded-xl p-4 shadow-[0px_10px_25px_rgba(13,0,77,0.05)] border border-surface-variant">
      {/* Course Breadcrumb & Title */}
      <div className="mb-4 flex flex-col gap-1">
        <div className="flex items-center text-sm text-on-surface-variant font-label-sm gap-2">
          <span>Advanced React Patterns</span>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-primary font-bold">Module 2</span>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-on-background">Introduction to Advanced Hooks</h1>
      </div>
      {/* The Video Player */}
      <div className="relative pb-[56.25%] h-0 overflow-hidden bg-black rounded-xl mb-4 shadow-lg group">
        {/* Placeholder Video Image */}
        <div
          className="bg-cover bg-center w-full h-full absolute inset-0 cursor-pointer"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDF2sfWOQpQnWPMIXws1G5z8VcpWW2gzlXJ0143EnyMfEZAcDXgJVvVhuIPZMpwlK-2zY4CKGRZm6R8pIdecYDI7Pap_TaNngLfDrChYk0yJjH3uEcRUtJsDOjH9lb1chxcx-Gr_jh4V0u-_sX7Q0ZS3C52HtT4z6pGq9nPPECB5aWiM-mq040aoxreyx9loHpHetIPNsWw62jYLkAe7J8dSf0GQ6rtyb043ntPwNj8TQSwnwsRD8AHSqVYI5_IC52yg17iFMZOPUm_')",
          }}
        >
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                play_arrow
              </span>
            </div>
          </div>
          {/* Minimal Controls Overlay (Bottom) */}
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-4 text-white">
              <span className="material-symbols-outlined cursor-pointer hover:text-tertiary-fixed">pause</span>
              <span className="material-symbols-outlined cursor-pointer hover:text-tertiary-fixed">volume_up</span>
              <span className="text-sm font-label-sm">05:23 / 15:00</span>
            </div>
            <div className="flex items-center gap-4 text-white">
              <span className="material-symbols-outlined cursor-pointer hover:text-tertiary-fixed">closed_caption</span>
              <span className="material-symbols-outlined cursor-pointer hover:text-tertiary-fixed">settings</span>
              <span className="material-symbols-outlined cursor-pointer hover:text-tertiary-fixed">fullscreen</span>
            </div>
          </div>
        </div>
      </div>
      {/* Video Controls / Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-2 pt-4 border-t border-surface-variant">
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm">
            <span className="material-symbols-outlined">skip_previous</span>
            Previous Lesson
          </button>
          <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm">
            Next Lesson
            <span className="material-symbols-outlined">skip_next</span>
          </button>
        </div>
        <button className="w-full sm:w-auto bg-[#0D004D] text-white px-6 py-3 rounded-lg font-label-sm text-label-sm font-bold hover:bg-primary-container transition-colors shadow-sm flex items-center justify-center gap-2">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            check_circle
          </span>
          Mark as Complete
        </button>
      </div>
    </section>
  );
}
