import './globals.css';
import type { ReactNode } from 'react';
import { SideNav } from '../components/SideNav';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        <SideNav />
        <main className="flex-1 p-4 overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
