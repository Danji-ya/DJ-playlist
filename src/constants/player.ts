const PLAYER_STATE = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5,
};

const PLAYER_DEFAULT_OPTS = {
  playsinline: 1,
  disablekb: 1,
  fs: 0,
  controls: 0,
  iv_load_policy: 3,
};

const NOT_INCLUDE_DJPLAYLIST = -1;

export { PLAYER_STATE, PLAYER_DEFAULT_OPTS, NOT_INCLUDE_DJPLAYLIST };
