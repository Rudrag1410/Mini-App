import { projects } from "constants/data";
import type { Project } from "../types/project.types";

export const getProjectById = async (
  id: string
): Promise<Project | undefined> => {
  await new Promise((r) => setTimeout(r, 200));
  return projects.find((p) => p.id === id);
};
