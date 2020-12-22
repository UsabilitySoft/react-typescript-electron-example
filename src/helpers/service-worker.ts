
import * as googleAnalytics from 'workbox-google-analytics';

export function registerServiceWorker() {

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('sw.js', {
          scope: '/'
        })
        .then(registration => {
          console.log('SW registered: ', registration);
          // googleAnalytics.initialize();
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
};