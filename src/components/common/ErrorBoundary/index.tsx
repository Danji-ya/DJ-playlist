/* eslint-disable class-methods-use-this */
/* eslint-disable react/state-in-constructor */
import React, { Component, ErrorInfo, ReactElement, ReactNode } from 'react';
import CustomError from '@utils/customError';

interface Props {
  children: ReactNode;
  fallback: ReactElement;
  isReload?: boolean;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (error instanceof CustomError) error.activateHandler();
  }

  resetBoundary = () => {
    this.setState({ hasError: false });
  };

  reloadBoundary = () => window.location.reload();

  render() {
    const { hasError } = this.state;
    const { children, fallback, isReload } = this.props;

    if (hasError)
      return React.cloneElement(fallback, {
        refresh: isReload ? this.reloadBoundary : this.resetBoundary,
      });

    return children;
  }
}

export default ErrorBoundary;
