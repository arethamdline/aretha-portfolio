import { Link } from 'react-router';
import type { Project } from '../content';

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return <article className={`project-card ${compact ? 'compact' : ''}`} id={compact ? undefined : project.id}>
    <div
      className={`project-visual ${project.concept}`}
      role="img"
      aria-label={project.id === 'ai-companion' ? 'A smiling face changes to a sad face.' : project.id === 'ai-automation' ? 'A connected sequence from discovery to AI generation to social publishing.' : project.id === 'michelin' ? '85.3 percent of Michelin-star restaurants kept the same rating the next year.' : 'An animated progress bar for a project in development.'}
    >
      {project.id === 'ai-companion' && <div className="emotion-scene">
        <span className="emotion-spark emotion-spark-left">♡</span>
        <span className="emotion-face"><span>😀</span><span>😢</span></span>
        <span className="emotion-spark emotion-spark-right">★</span>
      </div>}
      {project.id === 'ai-automation' && <div className="workflow-scene">
        <span className="workflow-node">⌕</span><span className="workflow-connector" />
        <span className="workflow-node">AI</span><span className="workflow-connector" />
        <span className="workflow-node">↗</span>
      </div>}
      {project.id === 'michelin' && <div className="rating-chart">
        <span className="rating-stat">85.3%</span>
        <span className="rating-description">SAME RATING NEXT YEAR</span>
        <span className="rating-track rating-track-featured"><i style={{ width: '85.3%' }} /></span>
      </div>}
      {project.teaser && <div className="build-progress">
        <span className="build-progress-label">On Progress</span>
        <div className="build-progress-line"><div className="build-progress-track"><span /></div><span className="build-progress-spark">★</span></div>
      </div>}
    </div>
    <div className="project-meta"><p className="eyebrow">{project.category}</p><span className="project-status">{project.status}</span></div>
    <h3>{project.title}</h3><p className="project-summary">{project.summary}</p>
    {!compact && <ul className="tags" aria-label="Technologies">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>}
    {compact ? <Link className="text-link" to={`/work#${project.id}`}>Explore this project</Link> : <details className="project-details">
      <summary>Behind the project <span aria-hidden="true">+</span></summary>
      <div className="detail-content"><h4>Context</h4><p>{project.context}</p><h4>My contribution</h4><p>{project.role}</p><h4>Outcome & learning</h4><p>{project.outcome}</p>
        {!project.teaser && (project.demoUrl || project.sourceUrl) && <div className="project-links">{project.demoUrl && <a href={project.demoUrl}>Live project</a>}{project.sourceUrl && <a href={project.sourceUrl}>Source code</a>}</div>}
      </div>
    </details>}
  </article>;
}
