import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DashboardRoutes from "./DashboardRoutes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

export default function DashboardApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <DashboardRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
