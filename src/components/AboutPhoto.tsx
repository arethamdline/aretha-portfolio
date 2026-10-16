import { portrait } from '../content';
import { TerminalLauncher } from './TerminalLauncher';

export default function AboutPhoto() {
  return (
    <figure className="about-photo-wrapper">
      <div className="portrait-stage">
      <div className="portrait-frame">
        <div className="about-photo-crop">
          <img
            src={portrait.imageUrl}
            alt={portrait.alt}
            className="about-photo"
            width="768"
            height="1024"
            fetchPriority="high"
          />
        </div>
      </div>
      <TerminalLauncher />
      </div>

      <figcaption className="photo-caption">
        <span>{portrait.caption}</span>
        <span aria-hidden="true">♡</span>
      </figcaption>
    </figure>
  );
}
