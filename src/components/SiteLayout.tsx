import type { ReactNode } from 'react';
import TopNavbar from './TopNavbar';
import Footer from './Footer';
import CursorEffect from './CursorEffect';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="tevexxo-grid-bg min-h-screen text-white">
      <TopNavbar />
      <main>{children}</main>
      <Footer />
      <CursorEffect />
    </div>
  );
}