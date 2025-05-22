'use client';

import Link from 'next/link';
import * as React from 'react';
import { cn } from './ui';

export interface DocumentItem {
  name: string;
  url: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export function NavDocuments({ items, className }: { items: DocumentItem[]; className?: string }) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <p className="px-3 text-xs font-semibold uppercase text-gray-500">Documents</p>
      {items.map((item) => (
        <Link key={item.name} href={item.url} className="flex items-center gap-2 rounded px-3 py-2 hover:bg-muted">
          {item.icon && <item.icon className="h-4 w-4" />}
          <span>{item.name}</span>
        </Link>
      ))}
    </div>
  );
}
