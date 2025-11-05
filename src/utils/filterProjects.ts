import type { Project } from "../types/project.types";

export const filterProjects = (
  projects: Project[],
  searchQuery: string
): Project[] => {
  if (!searchQuery.trim()) {
    return projects;
  }

  const query = searchQuery.toLowerCase();
  return projects.filter(
    (project) =>
      project.name.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.status.toLowerCase().includes(query)
  );
};
