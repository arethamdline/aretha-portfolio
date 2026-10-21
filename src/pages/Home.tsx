import { Link } from 'react-router';
import { homeSelections, profile, projects, siteCopy } from '../content';
import { visibleExperiences, isDraftExperience } from '../lib/experience';
import AboutPhoto from '../components/AboutPhoto';
import { ProjectCard } from '../components/ProjectCard';
import { Reveal } from '../components/Reveal';

export default function Home() {
  const featured = homeSelections.projectIds.flatMap(id => projects.filter(project => project.id === id)).slice(0, 2);
  const journey = homeSelections.experienceIds.flatMap(id => visibleExperiences.filter(entry => entry.id === id && !isDraftExperience(entry))).slice(0, 2);
  return <>
    <section className="hero shell">
      <Reveal className="hero-copy"><p className="eyebrow hero-eyebrow">HELLO, WORLD <span aria-hidden="true">♡</span></p><h1>{profile.headline[0]}<br/><em>{profile.headline[1]}</em></h1><p className="hero-intro">{profile.intro}</p><div className="hero-actions"><Link to="/work" className="button-primary">Explore my work</Link><Link to="/#about" className="text-link">A little more about me</Link></div><div className="hero-extras"><p className="hero-caption">{profile.origin} <span aria-hidden="true">/</span> {profile.location}</p></div></Reveal>
      <Reveal className="hero-portrait"><div className="portrait-note"><span className="eyebrow">A LITTLE CORNER OF MY WORLD</span><span aria-hidden="true">★</span></div><AboutPhoto/></Reveal>
    </section>
    <section id="about" className="home-about shell"><Reveal className="about-heading"><p className="eyebrow">01 / A LITTLE MORE ABOUT ME</p><h2>{siteCopy.aboutHeading[0]}<br/><em>{siteCopy.aboutHeading[1]}</em></h2></Reveal><Reveal className="about-copy"><p>{profile.about}</p><p>{profile.personal}</p><Link to="/offline" className="text-link">Meet me outside the screen</Link></Reveal></section>
    <div className="philosophy shell"><span aria-hidden="true">♡</span><p>{profile.philosophy}</p></div>
    <section className="home-work shell"><div className="section-heading"><div><p className="eyebrow">02 / SELECTED WORK</p><h2>A few things <em>I’ve made.</em></h2></div><Link to="/work" className="text-link">All work & the little archive</Link></div><div className="projects-grid">{featured.map(project => <Reveal key={project.id}><ProjectCard project={project} compact/></Reveal>)}</div></section>
    <section className="home-journey shell"><div className="section-heading"><div><p className="eyebrow">03 / MY JOURNEY</p><h2>Learning <em>along the way.</em></h2></div><Link to="/experience" className="text-link">The full journey</Link></div><div className="journey-preview">{journey.map(entry => <Link to="/experience" key={entry.id}><span className="eyebrow">{entry.period}</span><div><h3>{entry.organization}</h3><p>{entry.role}</p></div><span aria-hidden="true">＋</span></Link>)}</div></section>
    <section id="contact" className="contact-section shell"><p className="eyebrow">04 / SAY HELLO</p><div className="contact-row"><h2>{siteCopy.contactHeading[0]}<br/><em>{siteCopy.contactHeading[1]}</em></h2><div><p>{siteCopy.contactIntro}</p>{profile.email ? <a className="text-link contact-email" href={`mailto:${profile.email}`}>{profile.email}</a> : <p>Contact details coming soon.</p>}</div></div></section>
  </>;
}
