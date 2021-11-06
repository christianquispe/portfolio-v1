// Se resolvio este error siguiendo una respuesta de stackoverflow https://stackoverflow.com/a/56458070
declare global {
  interface Window {
    gtag: any;
  }
}

// log the pageview with their URL
export const pageview = (url) => {
  window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag("event", action, params);
};
