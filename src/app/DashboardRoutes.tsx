import { Routes, Route } from "react-router";
import Layout from "components/Layout";
import ProjectListPage from "../pages/ProjectListPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";

export default function DashboardRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ProjectListPage />} />
        <Route path="/active" element={<ProjectListPage filter="active" />} />
        <Route path="/pending" element={<ProjectListPage filter="pending" />} />
        <Route
          path="/archived"
          element={<ProjectListPage filter="archived" />}
        />
        <Route path="/projects/:id" element={<ProjectDetailsPage />} />
      </Routes>
    </Layout>
  );
}
