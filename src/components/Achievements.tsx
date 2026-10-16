import { achievements, pageContent, type Achievement } from '../content';
import { Reveal } from './Reveal';
import './Achievements.css';

function validWebUrl(value?: string): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return ['https:', 'http:'].includes(url.protocol) ? url.href : undefined;
  } catch {
    return undefined;
  }
}

function AchievementRow({ achievement }: { achievement: Achievement }) {
  const url = validWebUrl(achievement.url);
  return (
    <article className={`achievement-row${achievement.featured ? ' achievement-featured' : ''}`}>
      <time className="achievement-year" dateTime={achievement.year}>{achievement.year}</time>
      <div className="achievement-details">
        <h3>{url ? <a href={url}>{achievement.competition}<span aria-hidden="true"> ↗</span></a> : achievement.competition}</h3>
        {achievement.description && <p>{achievement.description}</p>}
      </div>
      <p className="achievement-award">{achievement.award}</p>
    </article>
  );
}

export function Achievements() {
  const copy = pageContent.experience.milestones;
  return (
    <section className="achievements-section" aria-labelledby="milestones-heading">
      <Reveal className="achievements-heading">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 id="milestones-heading">{copy.heading}</h2>
      </Reveal>
      <ol className="achievements-list" role="list">
        {achievements.map(achievement => (
          <li key={achievement.id}>
            <Reveal><AchievementRow achievement={achievement} /></Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
