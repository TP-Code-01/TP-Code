export default function ContactSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
      {/* Left Column: Form */}
      <div className="bg-surface-container-lowest border border-surface-variant rounded-xl p-lg shadow-sm hover:shadow-[0_10px_25px_rgba(13,0,77,0.05)] transition-shadow duration-300">
        <form className="space-y-md">
          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs" htmlFor="name">Name</label>
            <input className="w-full bg-surface border border-outline-variant rounded-lg px-sm py-sm text-body-md focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition-all" id="name" name="name" placeholder="John Doe" type="text" />
          </div>
          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs" htmlFor="email">Email</label>
            <input className="w-full bg-surface border border-outline-variant rounded-lg px-sm py-sm text-body-md focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition-all" id="email" name="email" placeholder="john@example.com" type="email" />
          </div>
          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs" htmlFor="subject">Subject</label>
            <input className="w-full bg-surface border border-outline-variant rounded-lg px-sm py-sm text-body-md focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition-all" id="subject" name="subject" placeholder="How can we help?" type="text" />
          </div>
          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs" htmlFor="message">Message</label>
            <textarea className="w-full bg-surface border border-outline-variant rounded-lg px-sm py-sm text-body-md focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition-all" id="message" name="message" placeholder="Your message here..." rows={5}></textarea>
          </div>
          <button className="w-full bg-[#0d004d] text-on-primary font-headline-md text-headline-md py-sm rounded-lg hover:opacity-80 active:scale-95 transition-all duration-200 shadow-[0_10px_25px_rgba(13,0,77,0.05)]" type="submit">
            Send Message
          </button>
        </form>
      </div>

      {/* Right Column: Contact Info */}
      <div className="flex flex-col gap-lg justify-center">
        <div className="bg-surface-container-low border border-surface-variant rounded-xl p-md shadow-sm">
          <h3 className="font-headline-lg text-headline-lg text-[#0d004d] mb-sm">Direct Contact</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-md">Reach out to us directly via email for any formal inquiries.</p>
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-[#0d004d] text-[32px]">mail</span>
            <a className="font-headline-md text-headline-md text-on-background hover:text-[#0d004d] transition-colors" href="mailto:hello@tpcode.edu">hello@tpcode.edu</a>
          </div>
        </div>
        <div className="bg-surface-container-low border border-surface-variant rounded-xl p-md shadow-sm">
          <h3 className="font-headline-lg text-headline-lg text-[#0d004d] mb-sm">Community Hub</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-md">Join our active channels to connect with peers, get help, and stay updated.</p>
          <div className="grid grid-cols-2 gap-md">
            <a target="_blank" className="flex items-center gap-sm text-on-surface-variant hover:text-[#0d004d] transition-colors group" href="https://discord.com">
              <span className="material-symbols-outlined text-[28px] group-hover:scale-110 transition-transform">forum</span>
              <span className="font-body-md text-body-md font-bold">Discord</span>
            </a>
            <a target="_blank" className="flex items-center gap-sm text-on-surface-variant hover:text-[#0d004d] transition-colors group" href="https://telegram.org">
              <span className="material-symbols-outlined text-[28px] group-hover:scale-110 transition-transform">chat</span>
              <span className="font-body-md text-body-md font-bold">Telegram</span>
            </a>
            <a target="_blank" className="flex items-center gap-sm text-on-surface-variant hover:text-[#0d004d] transition-colors group" href="https://facebook.com">
              <span className="material-symbols-outlined text-[28px] group-hover:scale-110 transition-transform">groups</span>
              <span className="font-body-md text-body-md font-bold">Facebook</span>
            </a>
            <a target="_blank" className="flex items-center gap-sm text-on-surface-variant hover:text-[#0d004d] transition-colors group" href="https://linkedin.com">
              <span className="material-symbols-outlined text-[28px] group-hover:scale-110 transition-transform">work</span>
              <span className="font-body-md text-body-md font-bold">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
