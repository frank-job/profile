import raw from './myData.json';

/**
 * Every image in src/images is available automatically, so adding a project to
 * myData.json only requires dropping its image in that folder — no code changes.
 */
const imageModules = import.meta.glob('../images/**/*.{jpg,jpeg,png,webp,avif,svg,gif}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const imageMap = Object.fromEntries(
  Object.entries(imageModules).map(([path, url]) => [path.split('/').pop().toLowerCase(), url])
);

const toList = (value) => {
  if (!value) return [];
  if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean);
  return String(value)
    .split(/[,\s]+/)
    .map((item) => item.trim())
    .filter(Boolean);
};

const projects = raw.map((project, index) => ({
  id: `${project.name}-${index}`,
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