import { offlineGallery } from '../content';
export function PhotoGallery() {
  return <div className="photo-gallery">{offlineGallery.map((photo, index) => <figure key={photo.id} className="gallery-photo">
    {photo.imageUrl ? <img src={photo.imageUrl} alt={photo.alt} loading="lazy"/> : <div className="gallery-placeholder"><span aria-hidden="true">{['♡','★','＋'][index % 3]}</span><p>Photograph to come</p></div>}
    <figcaption><span className="eyebrow">{String(index + 1).padStart(2, '0')}</span>{photo.caption}</figcaption>
  </figure>)}</div>;
}
