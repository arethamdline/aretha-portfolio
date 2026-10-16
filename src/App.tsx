import { useEffect, useRef, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router';
import { motion, useReducedMotion } from 'motion/react';
import { draftSettings, pageContent, profile } from './content';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import Experience from './pages/Experience';
import Offline from './pages/Offline';

export default function App() {
  const [wireframe, setWireframe] = useState(false);
  const location = useLocation();
  const reduced = useReducedMotion();
  const previousPath = useRef(location.pathname);
  useEffect(() => {
    const page = location.pathname === '/' ? pageContent.home : pageContent[location.pathname.slice(1) as keyof typeof pageContent];
    document.title = `${profile.name} — ${page?.title ?? 'Page not found'}`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', page?.description ?? 'This page could not be found.');
    const frame = requestAnimationFrame(() => {
      if (location.hash) {
        document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
        if (previousPath.current !== location.pathname) document.getElementById('main')?.focus({ preventScroll: true });
      }
      previousPath.current = location.pathname;
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash, reduced]);
  return <div className={wireframe ? 'site wireframe' : 'site'}>
    <a className="skip-link" href="#main" onClick={event => { event.preventDefault(); document.getElementById('main')?.focus(); }}>Skip to content</a>
    {draftSettings.showToolbar && <div className="draft-toolbar"><span>A LITTLE CORNER OF THE INTERNET <span className="toolbar-divider">/</span> DRAFT</span><button aria-pressed={wireframe} onClick={() => setWireframe(!wireframe)}>{wireframe ? 'Show styled draft' : 'Show wireframe'}</button></div>}
    <Navbar/>
    <motion.main id="main" tabIndex={-1} key={location.pathname} initial={reduced ? false : { opacity: 0.9 }} animate={{ opacity: 1 }} transition={{ duration: reduced ? 0 : 0.18 }}>
      <Routes><Route path="/" element={<Home/>}/><Route path="/work" element={<Work/>}/><Route path="/experience" element={<Experience/>}/><Route path="/offline" element={<Offline/>}/><Route path="*" element={<section className="shell page-heading"><p className="eyebrow">404 / A LITTLE LOST</p><h1>This page took a detour.</h1><Link className="text-link" to="/">Back to my little corner</Link></section>}/></Routes>
    </motion.main><Footer/>
  </div>;
}
