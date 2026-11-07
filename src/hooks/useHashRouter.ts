import { useState, useEffect, useCallback } from 'react';
import { scrollToFooterContact } from '../utils/scrollToFooterContact';

export type RouteKey = 'home' | 'about' | 'our-focus' | 'partners';

export function parseHashRoute(hashString: string): { route: RouteKey; scrollToContact: boolean } {
  const cleanHash = (hashString || '').replace(/^#\/?/, '').trim().toLowerCase();

  if (cleanHash === 'contact' || cleanHash === 'footer-contact') {
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

function getSectionId(route: RouteKey, scrollToContact: boolean): string {
  if (scrollToContact) return document.getElementById('footer-contact') ? 'footer-contact' : 'contact';

  switch (route) {
    case 'about':
      return 'about-us';
    case 'our-focus':
      return 'our-focus';
    case 'partners':
      return 'partners';
    case 'home':
    default:
      return 'home';
  }
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
    if (target === '#footer-contact' || target === '#/contact') {
      scrollToFooterContact({ updateHash: true });
      return;
    }
    const formatted = target.startsWith('#') ? target : `#/${target.replace(/^\//, '')}`;
    if (window.location.hash === formatted) {
      const parsed = parseHashRoute(formatted);
      if (parsed.scrollToContact) {
        scrollToFooterContact({ updateHash: true });
      } else {
        const section = document.getElementById(getSectionId(parsed.route, parsed.scrollToContact));
        section?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.hash = formatted;
    }
  }, []);

  useEffect(() => {
    const scrollToCurrentSection = (behavior: ScrollBehavior = 'smooth') => {
      const parsed = parseHashRoute(window.location.hash);
      if (parsed.scrollToContact) {
        scrollToFooterContact();
        return;
      }
      const section = document.getElementById(getSectionId(parsed.route, parsed.scrollToContact));
      section?.scrollIntoView({ behavior });
    };

    const handleHashChange = () => {
      const parsed = parseHashRoute(window.location.hash);
      setRouteState(parsed);

      requestAnimationFrame(() => scrollToCurrentSection());
    };

    window.addEventListener('hashchange', handleHashChange);
    const initialScroll = window.setTimeout(() => scrollToCurrentSection('instant'), 0);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.clearTimeout(initialScroll);
    };
  }, []);

  return {
    currentRoute: routeState.route,
    scrollToContact: routeState.scrollToContact,
    navigate,
  };
}

export default useHashRouter;

