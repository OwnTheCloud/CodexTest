'use client';

import * as React from 'react';
import { cn } from './ui';

export interface User {
  name: string;
  email: string;
  avatar: string;
}

export function NavUser({ user, className }: { user: User; className?: string }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <img src={user.avatar} alt="avatar" className="h-8 w-8 rounded-full" />
      <div className="text-sm">
        <p className="font-medium leading-none">{user.name}</p>
        <p className="text-xs text-gray-500">{user.email}</p>
      </div>
    </div>
  );
}
