import { useEffect, useId, useRef, useState } from 'react';
import artwork from '../assets/offline/scrapbook.png';
import portrait from '../assets/offline/portrait.jpg';
import movieNight from '../assets/offline/movie-night.png';
import music from '../assets/offline/music.png';
import './Offline.css';

// Crop the supplied sheet to the illustrations only, excluding its captions.
const scraps = [
  { name: 'food', crop: '50 150 440 295', label: 'Indonesian noodles and Chinese dumplings.', note: 'always a foodie! indo & chinese food for life.',
    outline: '240,150 490,150 490,327 380,327 380,380 290,380 290,445 50,445 50,350 80,350 80,255 180,245 180,240 240,240' },
  { name: 'cafe', crop: '215 400 320 280', label: 'An iced latte, strawberry cake and a madeleine.', note: 'i love café hopping and desserts <3',
    outline: '215,400 350,400 350,445 505,445 535,545 535,600 460,600 460,680 215,680' },
  { name: 'walks', crop: '1004 117 493 407', label: 'A tree-lined waterfront promenade.', note: 'walking is my favorite exercise. i love looking at pretty sceneries~',
    outline: '1004,300 1030,270 1060,243 1090,230 1110,240 1140,221 1170,222 1200,215 1225,218 1240,207 1252,185 1260,190 1270,162 1290,145 1300,117 1497,117 1497,524 1260,524 1260,500 1004,500' },
];

export default function Offline() {
  const id = useId();
  const [active, setActive] = useState<string | null>(null);
  const board = useRef<HTMLElement>(null);
  useEffect(() => {
    const dismissOutside = (event: PointerEvent) => {
      if (!(event.target instanceof Element) || !board.current?.querySelector(`[data-note="${active}"]`)?.contains(event.target)) setActive(null);
    };
    const dismissEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null);
    };
    if (!active) return;
    document.addEventListener('pointerdown', dismissOutside);
    document.addEventListener('keydown', dismissEscape);
    return () => {
      document.removeEventListener('pointerdown', dismissOutside);
      document.removeEventListener('keydown', dismissEscape);
    };
  }, [active]);
  const toggle = (name: string) => setActive(current => current === name ? null : name);
  return (
    <div className="shell offline-scrapbook">
      <p className="scrapbook-margin" aria-hidden="true">/ offline</p>
      <section ref={board} className="scrapbook-board" aria-labelledby="offline-title">
        <header className="scrapbook-heading">
          <h1 id="offline-title">little details about me.</h1>
        </header>
        <figure className="scrapbook-polaroid">
          <img src={portrait} width="665" height="1182" alt="Aretha smiling on the steps of a yellow house." fetchPriority="high" />
        </figure>
        {scraps.map(({ name, crop, label, outline, note }) => (
          <div key={name} data-note={name} className={`scrapbook-piece scrapbook-${name}`}>
          <button type="button" className={`scrapbook-trigger${active === name ? ' is-active' : ''}`} aria-label={`Show note: ${label}`} aria-expanded={active === name} aria-controls={`${id}-${name}-note`} onClick={() => toggle(name)}>
          <svg className="scrapbook-art" viewBox={crop} aria-hidden="true">
            <defs><clipPath id={`${id}-${name}`}><polygon points={outline} /></clipPath></defs>
            <image href={artwork} width="1536" height="1024" clipPath={`url(#${id}-${name})`} />
          </svg>
          </button>
          <span id={`${id}-${name}-note`} className="scrapbook-note" hidden={active !== name}>{note}</span>
          </div>
        ))}
        <div data-note="music" className="scrapbook-piece scrapbook-music">
          <button type="button" className={`scrapbook-trigger${active === 'music' ? ' is-active' : ''}`} aria-label="Show note: A wooden piano and vintage microphone." aria-expanded={active === 'music'} aria-controls={`${id}-music-note`} onClick={() => toggle('music')}>
            <svg className="scrapbook-art" viewBox="250 150 1000 720" aria-hidden="true">
              <image href={music} width="1536" height="1024" />
            </svg>
          </button>
          <span id={`${id}-music-note`} className="scrapbook-note" hidden={active !== 'music'}>I love music sooo much! I sing and play the piano ^^</span>
        </div>
        <div data-note="movies" className="scrapbook-piece scrapbook-movies">
          <button type="button" className={`scrapbook-trigger${active === 'movies' ? ' is-active' : ''}`} aria-label="Show note: A laptop playing a movie on a cozy bed." aria-expanded={active === 'movies'} aria-controls={`${id}-movies-note`} onClick={() => toggle('movies')}>
            <img className="scrapbook-art" src={movieNight} width="1536" height="1024" alt="" />
          </button>
          <span id={`${id}-movies-note`} className="scrapbook-note" hidden={active !== 'movies'}>can't reach me? probably watching movies in bed...</span>
        </div>
      </section>
      <p className="scrapbook-hint">click around, there are little notes! ♡</p>
    </div>
  );
}
