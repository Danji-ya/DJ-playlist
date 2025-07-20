const dataPrefix = 'data-testid';

export const testId = {
  player: {
    container: 'player',
    playButton: 'play-button',
    pauseButton: 'pause-button',
  },
  search: {
    input: 'search-input',
    result: 'search-result',
  },
};

export const toTestIdProps = (id: string) => ({
  [dataPrefix]: id,
});

export const toTestIdSelector = (id: string) => `[${dataPrefix}="${id}"]`;
