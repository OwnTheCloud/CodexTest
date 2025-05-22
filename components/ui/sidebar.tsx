'use client';

import * as React from 'react';
import { cn } from '../ui';

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  collapsible?: string;
}

export function Sidebar({ className, ...props }: SidebarProps) {
  return (
    <aside
      className={cn('flex h-screen w-64 flex-col border-r bg-white', className)}
      {...props}
    />
  );
}

export function SidebarHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('border-b p-4', className)} {...props} />;
}

export function SidebarContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-1 flex-col gap-4 overflow-y-auto p-4', className)} {...props} />;
}

export function SidebarFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mt-auto border-t p-4', className)} {...props} />;
}

export function SidebarMenu({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return <ul className={cn('flex flex-col gap-2', className)} {...props} />;
}

export function SidebarMenuItem({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) {
  return <li className={className} {...props} />;
}

export const SidebarMenuButton = React.forwardRef<HTMLAnchorElement, React.HTMLAttributes<HTMLAnchorElement>>(function SidebarMenuButton({ className, ...props }, ref) {
  return (
    <a
      ref={ref}
      className={cn('flex items-center gap-2 rounded px-2 py-1 hover:bg-muted', className)}
      {...props}
    />
  );
});
