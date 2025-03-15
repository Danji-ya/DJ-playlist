import { ComponentType, lazy } from 'react';
import { getItem, setItem } from '@utils/localstorage';

const KEY = 'PAGE_RELOAD';

type ComponentPromise<Props = unknown> = Promise<{
  default: ComponentType<Props>;
}>;

const checkReload = async <Props = unknown>(
  fn: () => ComponentPromise<Props>,
): Promise<{ default: ComponentType<Props> }> => {
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

function customLazy<Props = unknown>(
  component: () => ComponentPromise<Props>,
): React.LazyExoticComponent<ComponentType<Props>> {
  return lazy(() => checkReload(component));
}

export default customLazy;
