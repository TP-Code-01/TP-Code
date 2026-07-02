import { usePathname } from 'next/navigation';

export function useActivePath() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    // For other paths, check if the current pathname starts with the target path
    return pathname.startsWith(path);
  };
  
  return { pathname, isActive };
}
