import { ErrorInfo } from "react";

import ErrorBoundary from "./ErrorBoundary";
import { ApiError } from "../api/customError";

class ApiErrorBoundary extends ErrorBoundary {
  static getDerivedStateFromError(error: Error): {
    hasError: boolean;
    error: Error;
  } {
    if (error instanceof ApiError) {
      return { hasError: true, error };
    }
    throw error;
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    if (error instanceof ApiError) {
      this.setState({ hasError: true, error });
      console.error("API Error:", error.message, error.status, error.data, errorInfo);
    } else {
      throw error;
    }
  }
}

export default ApiErrorBoundary;
