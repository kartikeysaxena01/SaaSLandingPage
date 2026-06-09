import ReactGA from "react-ga4";

export const initGA = () => {
  const trackingId = import.meta.env.VITE_TRACKING_ID;


  if (!trackingId) {
    console.error("Missing GA Tracking ID");
    return;
  }

  ReactGA.initialize(trackingId);
};

export const trackingPageView = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
};

export const trackEvent = (category, action) => {
  ReactGA.event({
    category,
    action,
  });
};