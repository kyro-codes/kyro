import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const accents = ['#c5f36a', '#8dd3c7', '#f4a261', '#d8a7f0', '#f28482'];

function ThemeToggler() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || document.documentElement.dataset.theme || 'light');
  const [isOpen, setIsOpen] = useState(false);

  const selectTheme = (nextTheme) => {
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  };

  const selectAccent = (accent) => {
    document.documentElement.style.setProperty('--color-accent', accent);
    localStorage.setItem('customColor', accent);
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <button className="grid size-10 place-items-center rounded-md border border-line text-muted hover:text-ink" type="button" onClick={() => selectTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
          <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
        </button>
        <button className="rounded-md border border-line px-3 py-2 text-xs font-semibold text-muted hover:text-ink" type="button" aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>Accent color</button>
      </div>
      {isOpen && <div className="absolute bottom-12 left-0 z-50 flex gap-2 rounded-lg border border-line bg-canvas p-3 shadow-lg" aria-label="Accent colors">
        {accents.map((accent) => <button key={accent} className="size-7 rounded-full border border-ink/15" style={{ backgroundColor: accent }} type="button" onClick={() => selectAccent(accent)} aria-label={`Select accent color ${accent}`} />)}
      </div>}
    </div>
  );
}

export default ThemeToggler;
