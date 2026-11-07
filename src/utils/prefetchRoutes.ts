/**
 * Intelligent Route Prefetching Utility
 * Opportunistically downloads dynamic page chunks into browser cache
 * to achieve instantaneous page transitions.
 */

export const prefetchRoute = (routeKeyOrHref: string): void => {
  const normalized = routeKeyOrHref.replace(/^#\/?/, '').toLowerCase();

  switch (normalized) {
    case 'about':
    case 'about-us':
      import('../pages/AboutPage');
      break;
    case 'our-focus':
    case 'focus':
      import('../pages/OurFocusPage');
      break;
    case 'partners':
      import('../pages/PartnersPage');
      break;
    case '':
    case 'home':
      import('../pages/HomePage');
      break;
    default:
      break;
  }
};

/**
 * Prefetches all primary routes during browser idle periods.
 */
export const prefetchAllRoutesIdle = (): void => {
  const prefetch = () => {
    import('../pages/AboutPage');
    import('../pages/OurFocusPage');
    import('../pages/PartnersPage');
  };

  if (typeof window !== 'undefined') {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(prefetch, { timeout: 3500 });
    } else {
      setTimeout(prefetch, 1800);
    }
  }
};

