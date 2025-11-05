import { useQuery } from "@tanstack/react-query";
import type { Project } from "../types/project.types";
import { QUERY_KEYS } from "../constants/project.constants";
import { getProjects } from "services/getProjects";

export const useProjects = () => {
  return useQuery<Project[]>({
    queryKey: QUERY_KEYS.PROJECTS,
    queryFn: getProjects,
  });
};
