import { Link } from 'react-router';
import { profile, siteCopy } from '../content';

export function Footer() {
  return <footer className="site-footer shell">
    <div><Link to="/" className="wordmark">aretha<span>.</span></Link><p>{siteCopy.footer}</p></div>
    <div className="footer-right"><p>{profile.name}</p><div className="social-links">
      {profile.email && <a href={`mailto:${profile.email}`}>Email</a>}
      {profile.linkedinUrl && <a href={profile.linkedinUrl}>LinkedIn</a>}
      {profile.githubUrl && <a href={profile.githubUrl}>GitHub</a>}
      {profile.instagramUrl && <a href={profile.instagramUrl}>Instagram</a>}
    </div></div>
  </footer>;
}
