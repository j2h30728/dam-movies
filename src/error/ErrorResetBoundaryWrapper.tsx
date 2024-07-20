import { ReactNode } from "react";
import { QueryErrorResetBoundary } from "@tanstack/react-query";

import ApiErrorBoundary from "./ApiErrorBoundary";
import FallbackComponent from "./FallbackComponent";

const ErrorResetBoundaryWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ApiErrorBoundary fallback={FallbackComponent} onReset={reset}>
          {children}
        </ApiErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default ErrorResetBoundaryWrapper;
