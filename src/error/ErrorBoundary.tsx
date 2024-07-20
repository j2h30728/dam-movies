import { Component, ComponentType, createElement, ErrorInfo, ReactNode } from "react";

export type FallbackProps = {
  error: Error | null;
  resetErrorBoundary: () => void;
};

type ErrorBoundaryProps = {
  children: ReactNode;
  fallback: ComponentType<FallbackProps>;
  onReset?: () => void;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

const initialState: ErrorBoundaryState = {
  hasError: false,
  error: null,
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
    this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true, error });
    console.error(error, errorInfo);
  }

  resetErrorBoundary() {
    const { error } = this.state;

    if (error !== null) {
      this.props.onReset?.();

      this.setState(initialState);
    }
  }

  render() {
    const { state, props, resetErrorBoundary } = this;
    const { hasError, error } = state;
    const { fallback, children } = props;

    if (hasError) {
      const fallbackProps: FallbackProps = {
        error,
        resetErrorBoundary,
      };
      return createElement(fallback, fallbackProps);
    }

    return children;
  }
}

export default ErrorBoundary;
