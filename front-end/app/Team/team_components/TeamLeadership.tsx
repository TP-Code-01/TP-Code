const directors = [
  {
    name: "Ahmed Yasin",
    role: "Founder & President",
    dept: "Computer Science, Senior",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIzzYc2u65HMRLgSAi3Nu0eT5bJ28DMBsvmquvjQ5Ka2Ep5xO4m4d6YsEB8YhzD1iYnxlu1MMd_exAkg4DSK-hwpTonluqBMLLesanKNIr2fv3POaWv-CDtgWBMWIEClKBgOpE1cVscvgl6ZN0FSGRCbGbY6JK5uA-1YDXmzflns6Mlt8-olQ-Dc0rrTxytsdLmXdWCV-g5jqy1vP28pEs4HNT2FmGDpdAAT-hfYCd2sERfxjL2_e_eQxnCzkZrW-fYNOO61g2229J",
  },
  {
    name: "Sarah Khalid",
    role: "Vice President",
    dept: "Software Engineering, Junior",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtQrtO9LCqbZbUj0U4VkzZRTX9G0vW2h0cBjmTTe-tK9pzXcvyXHKy5XZdsRr-5iRwDj8-yXN0gPMwlus59Wgbzw6GwU7w4UnvWusw2qw4DsTjo_1I6wAeh9-I_8rw3Ky7_0WvqyFgM4OIDu4p9A2s5SuKeDP4_T9sAt-E9V85R-QuL0e00wy19BnzERqdexEC68xNI0IejUIWgc31dKVczqSiVjzPH25wXfR1r0PbPDHotZ5grdC2iqkZhRpLj4wML7Tu02-BV2uw",
  },
];

export default function TeamDirectors() {
  return (
    <section className="max-w-container-max mx-auto px-gutter mb-xl">
      <div className="flex items-center space-x-sm mb-lg">
        <h2 className="font-headline-lg text-headline-lg text-primary border-l-4 border-secondary-container pl-sm">Board of Directors</h2>
        <span className="font-arabic-headline text-arabic-headline text-on-surface-variant">مجلس الإدارة</span>
      </div>
      <div className="grid grid-cols-12 gap-md">
        {directors.map((d) => (
          <div
            key={d.name}
            className="col-span-12 md:col-span-6 rounded-xl p-md flex flex-col md:flex-row items-center gap-md transition-shadow duration-300"
            style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.3)", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" }}
          >
            <img className="w-32 h-32 rounded-full object-cover border-4 border-surface-bright shadow-md" alt={d.name} src={d.img} />
            <div className="text-center md:text-left flex-1">
              <h3 className="font-headline-md text-headline-md text-primary">{d.name}</h3>
              <p className="font-body-md text-body-md text-secondary mb-sm font-semibold">{d.role}</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant mb-md uppercase tracking-wider">{d.dept}</p>
              <div className="flex items-center justify-center md:justify-start space-x-sm">
                <a target="_blank" className="p-2 bg-surface-container rounded-full hover:bg-surface-variant transition-colors text-primary" href="https://linkedin.com">
                  <span className="material-symbols-outlined">link</span>
                </a>
                <a className="p-2 bg-surface-container rounded-full hover:bg-surface-variant transition-colors text-primary" href="mailto:hello@tpcode.edu">
                  <span className="material-symbols-outlined">mail</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
