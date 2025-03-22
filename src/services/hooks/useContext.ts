import {
  useContext as useReactContext,
  createContext as createReactContext,
} from 'react';

type ContextOptions<T> = {
  name?: string;
  errorMessage?: string;
  hookName?: string;
  providerName?: string;
  defaultValue?: T;
};

const getErrorMessage = (hook: string, provider: string): string =>
  `${hook} must be used within a ${provider}`;

const createContext = <T>(options: ContextOptions<T> = {}) => {
  const {
    name,
    errorMessage,
    hookName = 'useContext',
    providerName = 'Provider',
    defaultValue,
  } = options;

  const Context = createReactContext<T | undefined>(defaultValue);

  function useContext(): T {
    const context = useReactContext(Context);

    if (context === undefined) {
      throw new Error(errorMessage ?? getErrorMessage(hookName, providerName));
    }

    return context;
  }

  Context.displayName = name;

  return [Context.Provider, useContext, Context] as const;
};

export default createContext;
