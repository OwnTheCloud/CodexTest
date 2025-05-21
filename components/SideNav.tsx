'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from './ui';

export function SideNav() {
  const pathname = usePathname();

  const links = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/data', label: 'Data' },
  ];

  return (
    <nav className="w-48 h-screen border-r p-4 flex flex-col space-y-2">
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'px-3 py-2 rounded-md hover:bg-muted',
            pathname === link.href && 'bg-muted font-medium'
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
