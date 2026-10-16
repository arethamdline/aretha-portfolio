import type { Experience } from '../content';
import { isDraftExperience } from '../lib/experience';

export function ExperienceCard({ experience }: { experience: Experience }) {
  return <article className="experience-card">
    <div className="experience-date"><p>{experience.period}</p>{experience.location && <p className="location">{experience.location}</p>}{isDraftExperience(experience) && <span className="draft-label">Draft · details to confirm</span>}</div>
    <div className="experience-body"><p className="eyebrow">{experience.organization}</p><h3>{experience.role}</h3><p>{experience.description}</p>
      {!!experience.highlights.length && <details className="project-details"><summary>A few things I did <span aria-hidden="true">+</span></summary><ul className="highlight-list">{experience.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul></details>}
    </div>
  </article>;
}
