/* eslint-disable react/state-in-constructor */
import { Component, ErrorInfo, ReactNode } from 'react';
import CustomError from '../../utils/customError';
import Error from './Error';

interface Props {
  children: ReactNode;
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

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Error
          refresh={() => {
            this.setState({ hasError: false });
          }}
        />
      );
    }

    return children;
  }
}

export default ErrorBoundary;
