import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ThemeToggler from './ThemeToggler';

const links = [
  { to: '/', label: 'Home', icon: 'home' },
  { to: '/about', label: 'About', icon: 'user' },
  { to: '/services', label: 'Services', icon: 'list' },
  { to: '/portfolio', label: 'Portfolio', icon: 'briefcase' },
  { to: '/contact', label: 'Contact', icon: 'comments' },
];

function Nav({ closeNav }) {
  const { pathname } = useLocation();

  return (
    <nav className="flex h-full flex-col px-5 py-7" aria-label="Main navigation">
      <div className="flex items-center justify-between">
        <Link className="text-3xl font-extrabold tracking-tight no-underline" to="/" onClick={closeNav}>K<span className="text-[#789d35]">.</span>yro</Link>
        <button className="rounded-md border border-line px-2 py-1 text-sm md:hidden" type="button" onClick={closeNav} aria-label="Close navigation">Close</button>
      </div>
      <ul className="my-auto flex flex-col gap-2 py-10">
        {links.map(({ to, label, icon }) => {
          const isActive = pathname === to;
          return (
            <li key={to}>
              <Link className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-base no-underline transition-colors ${isActive ? 'bg-accent text-ink' : 'text-muted hover:bg-black/5 hover:text-ink dark:hover:bg-white/5'}`} to={to} onClick={closeNav} aria-current={isActive ? 'page' : undefined}>
                <FontAwesomeIcon icon={icon} className="w-5" /><span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <ThemeToggler />
    </nav>
  );
}

export default Nav;
