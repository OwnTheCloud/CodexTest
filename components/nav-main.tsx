'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { cn } from './ui';

export interface NavItem {
  title: string;
  url: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export function NavMain({ items, className }: { items: NavItem[]; className?: string }) {
  const pathname = usePathname();
  return (
    <nav className={cn('flex flex-col gap-1', className)}>
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.url}
          className={cn(
            'flex items-center gap-2 rounded px-3 py-2 hover:bg-muted',
            pathname === item.url && 'bg-muted font-medium'
          )}
        >
          {item.icon && <item.icon className="h-4 w-4" />}
          <span>{item.title}</span>
        </Link>
      ))}
    </nav>
  );
}
