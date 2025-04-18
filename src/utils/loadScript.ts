const PROTOCOL = window.location.protocol === 'http:' ? 'http:' : 'https:';

const load = (src: string, cb: (err: Error) => void) => {
  const firstScript = document.getElementsByTagName('script')[0];
  const script = document.createElement('script');
  script.src = src;
  script.async = true;

  script.onerror = function () {
    this.onload = null;
    this.onerror = null;
    cb(new Error(`Failed to load ${this.src}`));
  };

  if (firstScript) firstScript.parentNode?.insertBefore(script, firstScript);
  else {
    document.head.appendChild(script);
  }
};

export const loadIFrameApi = (): Promise<typeof YT> => {
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
};
