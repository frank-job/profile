import raw from './myData.json';

import backendImg from '../images/backend.jpg';
import csharpImg from '../images/C-sharp.jpg';
import dashoardImg from '../images/dashoard.jpg';
import ecoImg from '../images/eco.jpg';
import filmImg from '../images/film.jpg';
import quotesImg from '../images/qoutes.jpg';
import ratImg from '../images/rat.jpg';
import sleepImg from '../images/sleep.JPG';
import wwrImg from '../images/wwr.jpg';

const imageMap = {
  'backend.jpg': backendImg,
  'c-sharp.jpg': csharpImg,
  'dashoard.jpg': dashoardImg,
  'eco.jpg': ecoImg,
  'film.jpg': filmImg,
  'qoutes.jpg': quotesImg,
  'rat.jpg': ratImg,
  'sleep.jpg': sleepImg,
  'wwr.jpg': wwrImg,
};

const toList = (value) => {
  if (!value) return [];
  if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean);
  return String(value)
    .split(/[,\s]+/)
    .map((item) => item.trim())
    .filter(Boolean);
};

const projects = raw.map((project, index) => ({
  id: project.name,
  name: project.name,
  description: String(project.description || '').trim(),
  link: project.link || '#',
  image: imageMap[String(project.image || '').split('/').pop().toLowerCase()] || '',
  languages: toList(project.languages),
  rating: Number(project.Rating ?? project.rating) || 0,
  isSchoolProject: Boolean(project['School-Project']),
  order: index,
}));

export const featuredProjects = projects.filter((project) => project.rating >= 5).slice(0, 4);

export default projects;