import type { ArchiveItem } from '../content';

export function ArchiveCard({ item }: { item: ArchiveItem; index?: number }) {
  return <article className="archive-card">
    <div className="archive-meta"><p className="eyebrow">{item.year}</p><p>{item.category}</p></div>
    <div className="archive-copy"><h3>{item.title}</h3><p>{item.summary}</p></div>
    {item.externalUrl && <a className="archive-link" href={item.externalUrl}>Explore entry <span aria-hidden="true">-&gt;</span></a>}
  </article>;
}
