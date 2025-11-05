export const PROJECT_STATUS = {
  ACTIVE: "active",
  PENDING: "pending",
  ARCHIVED: "archived",
} as const;

export const QUERY_KEYS = {
  PROJECTS: ["projects"],
  PROJECT_BY_ID: (id: string) => ["projects", id],
} as const;
