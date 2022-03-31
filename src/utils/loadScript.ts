import load from 'load-script';

const PROTOCOL = window.location.protocol === 'http:' ? 'http:' : 'https:';

function loadIFrameApi(): any {
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
