import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Define routes that should scroll to top (not home sections)
    const isRouteChange = pathname !== '/' || 
                         pathname === '/contact' || 
                         pathname === '/articles' || 
                         pathname.startsWith('/articles/');

    if (isRouteChange) {
      console.log('ScrollToTop: Forcing scroll to top for route:', pathname);
      
      // Temporarily disable smooth scrolling
      const htmlElement = document.documentElement;
      const originalScrollBehavior = htmlElement.style.scrollBehavior;
      htmlElement.style.scrollBehavior = 'auto';
      
      // Multiple aggressive scroll attempts
      const scrollToTop = () => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        // Also try on the root element since you have overflow on #root
        const rootElement = document.getElementById('root');
        if (rootElement) {
          rootElement.scrollTop = 0;
        }
      };

      // Immediate scroll
      scrollToTop();

      // Multiple timed attempts to override other effects
      const timeouts = [10, 50, 100, 200].map(delay => 
        setTimeout(scrollToTop, delay)
      );

      // Restore smooth scrolling after a delay
      const restoreTimeout = setTimeout(() => {
        htmlElement.style.scrollBehavior = originalScrollBehavior;
      }, 300);

      return () => {
        timeouts.forEach(clearTimeout);
        clearTimeout(restoreTimeout);
        htmlElement.style.scrollBehavior = originalScrollBehavior;
      };
    }
  }, [pathname]);

  return null;
}