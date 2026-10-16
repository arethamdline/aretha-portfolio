import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { navigation } from '../content';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => { setOpen(false); }, [pathname, hash]);
  return <header className="site-header shell" onKeyDown={event => {
    if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); }
  }}>
    <Link to="/" className="wordmark" aria-label="Aretha, home">aretha<span>.</span></Link>
    <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'} <span aria-hidden="true">{open ? '−' : '+'}</span></button>
    <nav id="main-navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
      {navigation.map(item => <NavLink key={item.to} to={item.to} end onClick={() => setOpen(false)}>{item.label}</NavLink>)}
      <Link to="/#contact" className="nav-contact" onClick={() => setOpen(false)}>Say Hello <span aria-hidden="true">♡</span></Link>
    </nav>
  </header>;
}
