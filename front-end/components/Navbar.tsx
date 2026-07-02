"use client";

import Link from 'next/link';
import { useActivePath } from '../Hooks/useActivePath';

export default function Navbar() {
  const { isActive } = useActivePath();

  const getLinkClass = (path: string) => {
    const activeClass = "text-primary dark:text-primary-fixed font-bold border-b-2 border-primary dark:border-primary-fixed pb-1 active:scale-95 transition-transform hover:opacity-80 duration-200";
    const inactiveClass = "text-on-surface-variant dark:text-outline-variant hover:opacity-80 transition-all duration-200";
    return isActive(path) ? activeClass : inactiveClass;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md shadow-sm border-b-0 border-t-0">
      <div className="flex justify-between items-center px-gutter py-sm max-w-container-max mx-auto">
        <div className="flex items-center gap-sm">
          <img
            alt="TP Code Logo"
            className="h-10 w-10 rounded-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMx2LysCP-jjfhCLGov3_2wspz2dFtBhihy9t2JT8jELFONpRseJB00aDx-1KPj0TZxxMX-biNMiawdUXItrdnR5AyuWwIvP7MjD7YT7n_Q9NeKG94jlIXnw90CJ_pZg_GQF6o9J75-MvXL07ryNa1toLGje2IKlNT2ytlbL7JOs-Aqh9PmskrmCRf9ngr76JKNvAdiAo7hABBnYyyhvZ_ezjltpE9S3ele3rYHdRHDmkDdkeibRNgiJLk-Vn3y1b4UMDJjJFbuIt6"
          />
          <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">TP Code</span>
        </div>
        <div className="hidden md:flex gap-md font-body-md text-body-md">
          <Link href="/" className={getLinkClass('/')}>Home</Link>
          <Link href="/Courses" className={getLinkClass('/Courses')}>Courses</Link>
          <Link href="/Competitions" className={getLinkClass('/Competitions')}>Competitions</Link>
          <Link href="/Team" className={getLinkClass('/Team')}>Team</Link>
          <Link href="/contact" className={getLinkClass('/contact')}>Contact</Link>
        </div>
        <div className="flex items-center gap-sm">
          <button className="text-primary dark:text-primary-fixed font-body-md text-body-md hover:opacity-80 transition-all duration-200 active:scale-95 hidden sm:block">العربية</button>
          <button className="bg-[#0D004D] text-white px-md py-sm rounded font-label-sm text-label-sm hover:opacity-80 transition-all duration-200 active:scale-95">Join Us</button>
        </div>
      </div>
    </nav>
  );
}
