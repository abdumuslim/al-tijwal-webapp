import ReactGA from 'react-ga4';

const MEASUREMENT_ID = 'G-90DMMHP3XN';

export const initGA = () => {
  if (typeof window !== 'undefined') {
    ReactGA.initialize(MEASUREMENT_ID);
  }
};

export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};

export const logEvent = (category: string, action: string, label?: string, value?: number) => {
  ReactGA.event({
    category,
    action,
    label,
    value
  });
};