import { useState, useEffect, useCallback } from 'react';

export type RouteKey = 'home' | 'about' | 'our-focus' | 'partners';

export function parseHashRoute(hashString: string): { route: RouteKey; scrollToContact: boolean } {
  const cleanHash = (hashString || '').replace(/^#\/?/, '').trim().toLowerCase();

  if (cleanHash === 'contact') {
    return { route: 'home', scrollToContact: true };
  }

  if (cleanHash === 'about' || cleanHash === 'about-us') {
    return { route: 'about', scrollToContact: false };
  }

  if (cleanHash === 'our-focus' || cleanHash === 'focus') {
    return { route: 'our-focus', scrollToContact: false };
  }

  if (cleanHash === 'partners') {
    return { route: 'partners', scrollToContact: false };
  }

  // Default to home
  return { route: 'home', scrollToContact: false };
}

export function useHashRouter() {
  const [routeState, setRouteState] = useState<{ route: RouteKey; scrollToContact: boolean }>(() => {
    if (typeof window !== 'undefined') {
      return parseHashRoute(window.location.hash);
    }
    return { route: 'home', scrollToContact: false };
  });

  const navigate = useCallback((target: string) => {
    if (typeof window === 'undefined') return;
    const formatted = target.startsWith('#') ? target : `#/${target.replace(/^\//, '')}`;
    if (window.location.hash === formatted) {
      // Re-trigger scroll if already on the same route
      const parsed = parseHashRoute(formatted);
      if (parsed.scrollToContact) {
        const contactEl = document.getElementById('contact');
        if (contactEl) {
          contactEl.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    } else {
      window.location.hash = formatted;
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const parsed = parseHashRoute(window.location.hash);
      setRouteState(parsed);

      if (parsed.scrollToContact) {
        setTimeout(() => {
          const contactEl = document.getElementById('contact');
          if (contactEl) {
            contactEl.scrollIntoView({ behavior: 'smooth' });
          }
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Check on initial mount if contact needs scrolling
    if (routeState.scrollToContact) {
      setTimeout(() => {
        const contactEl = document.getElementById('contact');
        if (contactEl) {
          contactEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [routeState.scrollToContact]);

  return {
    currentRoute: routeState.route,
    scrollToContact: routeState.scrollToContact,
    navigate,
  };
}

export default useHashRouter;

