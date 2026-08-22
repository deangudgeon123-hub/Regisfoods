'use client';

import { useEffect } from 'react';

export default function ScrollReset() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;

    if (!navigation || navigation.type === 'reload') {
      if (window.location.hash) {
        history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
      }

      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      });
    }
  }, []);

  return null;
}
