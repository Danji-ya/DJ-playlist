import load from 'load-script';

function loadIframeApi(): any {
  return new Promise((resolve, reject) => {
    if (typeof window.YT === 'object') {
      resolve(window.YT);
      return;
    }

    const protocol = window.location.protocol === 'http:' ? 'http:' : 'https:';

    load(`${protocol}///www.youtube.com/iframe_api`, (err) => {
      if (err) reject(err);
    });

    (window as any).onYouTubeIframeAPIReady = function () {
      resolve(window.YT);
    };
  });
}

export default loadIframeApi;
