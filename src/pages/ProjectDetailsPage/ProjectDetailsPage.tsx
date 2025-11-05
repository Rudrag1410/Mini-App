import { useParams, Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import type { Project } from "types/project.types";
import styles from "./ProjectDetailsPage.module.css";
import { QUERY_KEYS } from "constants/project.constants";
import { getProjectById } from "services/getProjectById";

const ProjectDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: project,
    isLoading,
    error,
  } = useQuery<Project | undefined>({
    queryKey: QUERY_KEYS.PROJECT_BY_ID(id!),
    queryFn: () => getProjectById(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <p>Loading project...</p>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className={styles.container}>
        <Link to="/" className={styles.backLink}>
          ← Back to Projects
        </Link>
        <p className={styles.error}>Project not found</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backLink}>
        ← Back to Projects
      </Link>

      <div className={styles.card}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>{project.name}</h1>
          <span className={styles.statusBadge}>{project.status}</span>
        </div>

        <div className={styles.descriptionSection}>
          <h2 className={styles.descriptionTitle}>Description</h2>
          <p className={styles.descriptionText}>{project.description}</p>
        </div>

        <div className={styles.footer}>
          <p className={styles.projectId}>
            <strong>Project ID:</strong> {project.id}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
