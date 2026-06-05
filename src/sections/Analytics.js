import ReactGA from 'react-ga4';
const tracking_id=import.meta.env.VITE_TRACKING_ID;

export const initGA=()=>{
    ReactGA.initialize(tracking_id);
}
export const trackingPageView=()=>{
    ReactGA.send({
        hitType:"pageview",
        page:'https://modern-saas-landing-gamma.vercel.app/',
    })
}
export const trackEvent = (category, action) => {
  ReactGA.event({
    category,
    action,
  });
};