import { archive, otherSkills, projects, pageContent } from '../content';
import { ProjectCard } from '../components/ProjectCard';
import { ArchiveCard } from '../components/ArchiveCard';
import { Reveal } from '../components/Reveal';
export default function Work() {
  return <div className="shell page-content">
    <Reveal className="page-heading">
      <p className="eyebrow">01 / WORK & EXPLORATIONS</p>
      <h1>{pageContent.work.heading}</h1>
      <p>{pageContent.work.description}</p>
    </Reveal>
    <h2 className="sr-only">Selected work</h2>
    <div className="projects-grid work-grid">{projects.map(project => <Reveal key={project.id}><ProjectCard project={project}/></Reveal>)}</div>
    <section className="toolkit-section">
      <h2>Other things in my toolkit.</h2>
      <ul className="toolkit-tags" aria-label="Other skills">{otherSkills.map(skill => <li key={skill}>{skill}</li>)}</ul>
    </section>
    <section className="archive-section">
      <details className="archive-disclosure">
        <summary>
          <div className="section-heading archive-disclosure-heading">
            <div><p className="eyebrow">A FEW EARLIER CHAPTERS</p><h2>The little <em>archive.</em></h2></div>
            <span className="archive-disclosure-action"><span className="sr-only">View archive</span><span className="archive-disclosure-arrow" aria-hidden="true">→</span></span>
          </div>
        </summary>
        <div className="archive-grid">{archive.map((item, index) => <ArchiveCard key={item.id} item={item} index={index}/>)}</div>
      </details>
    </section>
  </div>;
}
