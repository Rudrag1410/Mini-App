import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router";
import { describe, it, expect } from "vitest";
import ProjectListPage from "../pages/ProjectListPage/ProjectListPage";

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

const renderWithProviders = (component: React.ReactElement) => {
  const queryClient = createTestQueryClient();
  return render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{component}</BrowserRouter>
    </QueryClientProvider>
  );
};

describe("ProjectListPage", () => {
  it("renders project list", async () => {
    renderWithProviders(<ProjectListPage />);

    const projectList = await screen.findByLabelText("Project list");
    expect(projectList).toBeDefined();
  });

  it("renders page title", async () => {
    renderWithProviders(<ProjectListPage />);

    await waitFor(() => {
      expect(screen.getByText("Projects Dashboard")).toBeDefined();
    });
  });

  it("renders search input", async () => {
    renderWithProviders(<ProjectListPage />);

    const searchInput = await screen.findByLabelText("Search projects");
    expect(searchInput).toBeDefined();
    expect(searchInput.getAttribute("placeholder")).toBe("Search projects...");
  });
});
