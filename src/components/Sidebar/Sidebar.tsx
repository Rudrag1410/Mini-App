import { Link, useLocation } from "react-router";
import { useProjects } from "hooks/useProjects";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const location = useLocation();
  const { data: projects } = useProjects();

  const activeCount =
    projects?.filter((p) => p.status === "active").length || 0;
  const totalCount = projects?.length || 0;

  const navItems = [
    { path: "/", label: "All Projects", icon: "📊" },
    { path: "/active", label: "Active", icon: "✓" },
    { path: "/pending", label: "Pending", icon: "⏳" },
    { path: "/archived", label: "Archived", icon: "📦" },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <h2 className={styles.logo}>ProjectHub</h2>
        <p className={styles.tagline}>Manage your projects</p>
      </div>

      <nav className={styles.nav}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`${styles.navItem} ${
              location.pathname === item.path ? styles.active : ""
            }`}
          >
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.label}>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className={styles.footer}>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{totalCount}</span>
            <span className={styles.statLabel}>Total Projects</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{activeCount}</span>
            <span className={styles.statLabel}>Active</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
