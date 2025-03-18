export const SIZE = {
  MIN_MOBILE: '370px',
  MOBILE: '420px',
  MAX_MOBILE: '480px',
  TABLET: '768px',
  DESKTOP: '1024px',
  MAX_DESKTOP: '1440px',
};

export const DEVICE = {
  MIN_MOBILE: `screen and (max-width: ${SIZE.MIN_MOBILE})`,
  MOBILE: `screen and (max-width: ${SIZE.MOBILE})`,
  MAX_MOBILE: `screen and (max-width: ${SIZE.MAX_MOBILE})`,
  TABLET: `screen and (max-width: ${SIZE.TABLET})`,
  DESKTOP: `screen and (max-width: ${SIZE.DESKTOP})`,
};
