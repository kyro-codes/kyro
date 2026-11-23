import { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';

function PageLayout({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-canvas text-ink md:flex">
      {isNavOpen && <button className="fixed inset-0 z-30 bg-black/40 md:hidden" aria-label="Close navigation" onClick={() => setIsNavOpen(false)} />}
      <aside className={`fixed inset-y-0 left-0 z-40 w-72 shrink-0 border-r border-line bg-canvas transition-transform md:sticky md:top-0 md:h-screen md:translate-x-0 ${isNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Nav closeNav={() => setIsNavOpen(false)} />
      </aside>
      <main className="min-w-0 flex-1">
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-line bg-canvas/95 p-3 backdrop-blur md:hidden">
          <button className="rounded-md border border-line px-3 py-2 text-sm font-semibold" type="button" onClick={() => setIsNavOpen(true)} aria-expanded={isNavOpen} aria-label="Open navigation">Menu</button>
          <span className="font-mono text-xs text-muted">KYRO PORTFOLIO</span>
        </div>
        <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-10">{children}</div>
        <Footer />
      </main>
    </div>
  );
}

export default PageLayout;
