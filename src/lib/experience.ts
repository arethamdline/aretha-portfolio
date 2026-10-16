import { experiences } from '../content';
import type { Experience } from '../content';
export const isDraftExperience = (entry: Experience) => /to confirm/i.test(JSON.stringify(entry));
export const visibleExperiences = experiences.filter(entry => import.meta.env.DEV || !isDraftExperience(entry));
