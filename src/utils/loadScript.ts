import load from 'load-script';

const PROTOCOL = window.location.protocol === 'http:' ? 'http:' : 'https:';

export type IframeApiType = {
  Player: (...args: any[]) => void;
};

function loadIFrameApi(): Promise<typeof YT> {
  return new Promise((resolve, reject) => {
    if (typeof window.YT === 'object') {
      resolve(window.YT);
      return;
    }

    load(`${PROTOCOL}///www.youtube.com/iframe_api`, (err) => {
      if (err) reject(err);
    });

    (window as any).onYouTubeIframeAPIReady = function () {
      resolve(window.YT);
    };
  });
}

export { loadIFrameApi };
