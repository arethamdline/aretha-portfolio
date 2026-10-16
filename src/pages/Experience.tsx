import { experienceGroups, pageContent } from '../content';
import { visibleExperiences } from '../lib/experience';
import { ExperienceCard } from '../components/ExperienceCard';
import { Reveal } from '../components/Reveal';
import { Achievements } from '../components/Achievements';
export default function Experience() {
  return <div className="shell page-content"><Reveal className="page-heading"><p className="eyebrow">02 / THE JOURNEY SO FAR</p><h1>{pageContent.experience.heading}</h1><p>{pageContent.experience.description}</p></Reveal>
    {experienceGroups.map(group => { const entries = visibleExperiences.filter(entry => entry.group === group.id); return entries.length ? <section key={group.id} className="experience-group"><h2>{group.label}</h2><div className="timeline">{entries.map(entry => <Reveal key={entry.id}><ExperienceCard experience={entry}/></Reveal>)}</div></section> : null; })}
    <Achievements />
  </div>;
}
