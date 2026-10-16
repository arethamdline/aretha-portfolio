import { useId } from 'react';
import artwork from '../assets/offline/scrapbook.png';
import portrait from '../assets/offline/portrait.jpg';
import movieNight from '../assets/offline/movie-night.png';
import './Offline.css';

// Crop the supplied sheet to the illustrations only, excluding its captions.
const scraps = [
  { name: 'food', crop: '50 150 440 295', label: 'Indonesian noodles and Chinese dumplings.',
    outline: '240,150 490,150 490,327 380,327 380,380 290,380 290,445 50,445 50,350 80,350 80,255 180,245 180,240 240,240' },
  { name: 'cafe', crop: '215 400 320 280', label: 'An iced latte, strawberry cake and a madeleine.',
    outline: '215,400 350,400 350,445 505,445 535,545 535,600 460,600 460,680 215,680' },
  { name: 'walks', crop: '1004 117 493 407', label: 'A tree-lined waterfront promenade.',
    outline: '1004,300 1030,270 1060,243 1090,230 1110,240 1140,221 1170,222 1200,215 1225,218 1240,207 1252,185 1260,190 1270,162 1290,145 1300,117 1497,117 1497,524 1260,524 1260,500 1004,500' },
];

export default function Offline() {
  const id = useId();
  return (
    <div className="shell offline-scrapbook">
      <p className="scrapbook-margin" aria-hidden="true">/ offline</p>
      <section className="scrapbook-board" aria-labelledby="offline-title">
        <header className="scrapbook-heading">
          <h1 id="offline-title">When I’m <em>offline.</em></h1>
        </header>
        <figure className="scrapbook-polaroid">
          <img src={portrait} width="665" height="1182" alt="Aretha smiling on the steps of a yellow house." fetchPriority="high" />
        </figure>
        {scraps.map(({ name, crop, label, outline }) => (
          <svg key={name} className={`scrapbook-piece scrapbook-${name}`} viewBox={crop} role="img" aria-label={label}>
            <defs><clipPath id={`${id}-${name}`}><polygon points={outline} /></clipPath></defs>
            <image href={artwork} width="1536" height="1024" clipPath={`url(#${id}-${name})`} />
          </svg>
        ))}
        <img className="scrapbook-piece scrapbook-movies" src={movieNight} width="1536" height="1024" alt="A laptop playing a movie on a cozy bed." />
      </section>
    </div>
  );
}
