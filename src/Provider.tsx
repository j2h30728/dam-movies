import { Outlet } from "react-router-dom";

import ErrorBoundary from "./error/ErrorBoundary";
import FallbackComponent from "./error/FallbackComponent";
import ErrorResetBoundaryWrapper from "./error/ErrorResetBoundaryWrapper";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./utils/queryClient";
import Layout from "./components/Layout";

function Provider() {
  return (
    <ErrorBoundary fallback={FallbackComponent}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <ErrorResetBoundaryWrapper>
            <Outlet />
          </ErrorResetBoundaryWrapper>
        </Layout>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default Provider;
