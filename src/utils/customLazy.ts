import { ComponentType, lazy } from 'react';
import { getItem, setItem } from '@utils/localstorage';

const KEY = 'PAGE_RELOAD';

type ComponentPromise<T = any> = Promise<{ default: ComponentType<T> }>;

const checkReload = async (fn: () => ComponentPromise) => {
  const isReloaded = JSON.parse(getItem(KEY) || 'false');

  try {
    const component = await fn();
    setItem(KEY, 'false');

    return component;
  } catch (error) {
    if (!isReloaded) {
      setItem(KEY, 'true');

      window.location.reload();
    }

    throw error;
  }
};

function customLazy(
  component: () => ComponentPromise,
): React.LazyExoticComponent<React.ComponentType<any>> {
  return lazy(() => checkReload(component));
}

export default customLazy;
