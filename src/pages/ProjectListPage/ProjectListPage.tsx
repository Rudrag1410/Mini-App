import { useForm } from "react-hook-form";
import { useProjects } from "hooks/useProjects";
import { filterProjects } from "utils/filterProjects";
import type { Project } from "types/project.types";
import ProjectCard from "components/ProjectCard";
import SearchInput from "components/SearchInput";
import styles from "./ProjectListPage.module.css";

interface SearchForm {
  search: string;
}

interface ProjectListPageProps {
  filter?: "active" | "pending" | "archived";
}

const ProjectListPage = ({ filter }: ProjectListPageProps) => {
  const { data: projects, isLoading, error } = useProjects();
  const { register, watch } = useForm<SearchForm>({
    defaultValues: { search: "" },
  });

  const searchQuery = watch("search");

  let filteredProjects: Project[] = [];
  if (projects) {
    // First filter by search query
    filteredProjects = filterProjects(projects, searchQuery);

    // Then filter by status if a filter is provided
    if (filter) {
      filteredProjects = filteredProjects.filter((p) => p.status === filter);
    }
  }

  const getPageTitle = () => {
    if (filter) {
      return `${filter.charAt(0).toUpperCase() + filter.slice(1)} Projects`;
    }
    return "All Projects";
  };

  const projectCount = filteredProjects.length;

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <p>Loading projects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p>Error loading projects: {String(error)}</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.stickyHeader}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>{getPageTitle()}</h1>
            <p className={styles.subtitle}>
              {projectCount} {projectCount === 1 ? "project" : "projects"} found
            </p>
          </div>
        </div>

        <SearchInput register={register} />
      </div>

      <div aria-label="Project list" className={styles.listContainer}>
        {filteredProjects.length === 0 ? (
          <p className={styles.empty}>No projects found</p>
        ) : (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProjectListPage;
