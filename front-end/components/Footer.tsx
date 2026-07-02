import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-inverse-surface dark:bg-surface-container-lowest text-on-primary dark:text-on-surface font-body-md text-body-md">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-md px-gutter py-xl max-w-container-max mx-auto flat no shadows">
        <div className="col-span-1 md:col-span-2 space-y-sm">
          <div className="font-headline-md text-headline-md font-bold text-surface-bright">TP Code</div>
          <p className="text-surface-variant/70 max-w-[600px]">Empowering students through technology, community, and continuous learning.</p>
          <div className="pt-sm">© 2026 TP Code. All rights reserved.</div>
        </div>
        <div>
          <h4 className="font-label-sm text-surface-bright font-bold mb-md">Platform</h4>
          <ul className="flex flex-col gap-sm font-body-md text-body-md">
            <li><Link className="text-surface-variant/70 hover:text-surface-bright transition-colors hover:text-tertiary-fixed" href="/">Home</Link></li>
            <li><Link className="text-surface-variant/70 hover:text-surface-bright transition-colors hover:text-tertiary-fixed" href="/Courses">Courses</Link></li>
            <li><Link className="text-surface-variant/70 hover:text-surface-bright transition-colors hover:text-tertiary-fixed" href="/Competitions">Competitions</Link></li>
            <li><Link className="text-surface-variant/70 hover:text-surface-bright transition-colors hover:text-tertiary-fixed" href="/Team">Team</Link></li>
            <li><Link className="text-surface-variant/70 hover:text-surface-bright transition-colors hover:text-tertiary-fixed" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline-md text-headline-md font-bold text-surface-bright mb-sm">Socials</h4>
          <ul className="space-y-xs flex flex-col">
            <li><a target="_blank" className="text-surface-variant/70 hover:text-surface-bright transition-colors hover:text-tertiary-fixed" href="https://facebook.com">Facebook</a></li>
            <li><a target="_blank" className="text-surface-variant/70 hover:text-surface-bright transition-colors hover:text-tertiary-fixed" href="https://discord.com">Discord</a></li>
            <li><a target="_blank" className="text-surface-variant/70 hover:text-surface-bright transition-colors hover:text-tertiary-fixed" href="https://telegram.org">Telegram</a></li>
            <li><a target="_blank" className="text-surface-variant/70 hover:text-surface-bright transition-colors hover:text-tertiary-fixed" href="https://linkedin.com">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
