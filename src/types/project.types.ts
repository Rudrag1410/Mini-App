export type ProjectStatus = "active" | "pending" | "archived";

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
}
