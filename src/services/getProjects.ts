import { projects } from "constants/data";
import { Project } from "types/project.types";

export const getProjects = async (): Promise<Project[]> => {
  await new Promise((r) => setTimeout(r, 200));
  return projects;
};
