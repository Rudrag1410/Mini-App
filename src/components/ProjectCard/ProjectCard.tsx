import { Link } from "react-router";
import type { Project } from "types/project.types";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link to={`/projects/${project.id}`} className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{project.name}</h3>
        <span className={`${styles.status} ${styles[project.status]}`}>
          {project.status}
        </span>
      </div>
      <p className={styles.description}>{project.description}</p>
    </Link>
  );
};

export default ProjectCard;
