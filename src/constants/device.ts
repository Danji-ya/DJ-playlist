const SIZE = {
  MOBILE: '420px',
  TABLET: '768px',
  DESKTOP: '1024px',
};

const DEVICE = {
  MOBILE: `screen and (max-width: ${SIZE.MOBILE})`,
  TABLET: `screen and (max-width: ${SIZE.TABLET})`,
  DESKTOP: `screen and (max-width: ${SIZE.DESKTOP})`,
};

export { SIZE, DEVICE };
